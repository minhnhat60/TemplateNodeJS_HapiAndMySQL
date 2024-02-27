/* Copyright (c) 2022-2023 TORITECH LIMITED 2022 */

'use strict';
require('dotenv').config();

const Logger = require('../../../utils/logging');
const { DB, timestamps } = require('../../../config/database');
const Common = require('../../Common/resourceAccess/CommonResourceAccess');
const tableName = 'SystemHolidayCalendar';
const primaryKeyField = 'systemHolidayCalendarId';

async function createTable() {
  Logger.info('ResourceAccess', `createTable ${tableName}`);
  return new Promise(async (resolve, reject) => {
    DB.schema.dropTableIfExists(`${tableName}`).then(() => {
      DB.schema
        .createTable(`${tableName}`, function (table) {
          table.increments(primaryKeyField).primary();
          table.integer('scheduleDayOff');
          timestamps(table);
          table.index(primaryKeyField);
        })
        .then(async () => {
          Logger.info(`${tableName}`, `${tableName} table created done`);
          seeding().then(() => {
            resolve();
          });
        });
    });
  });
}

async function seeding() {
  let seedingData = [];
  let _dayOffList = [20240101, 20240209, 20240210, 20240211, 20240212, 20240213, 20240214, 20240430, 20240418, 20240902, 20241231, 20250101];
  for (let i = 0; i < _dayOffList.length; i++) {
    const _dayOff = _dayOffList[i];
    seedingData.push({
      scheduleDayOff: _dayOff,
    });
  }
  return new Promise(async (resolve, reject) => {
    DB(`${tableName}`)
      .insert(seedingData)
      .then(result => {
        Logger.info(`${tableName}`, `seeding ${tableName}` + result);
        resolve();
      });
  });
}

async function initDB() {
  await createTable();
}

async function insert(data) {
  return await Common.insert(tableName, data, primaryKeyField);
}

async function updateById(id, data) {
  let dataId = {};
  dataId[primaryKeyField] = id;
  return await Common.updateById(tableName, dataId, data);
}

async function findById(id) {
  return await Common.findById(tableName, primaryKeyField, id);
}

async function find(filter, skip, limit, order) {
  return await Common.find(tableName, filter, skip, limit, order);
}

async function deleteById(id) {
  let dataId = {};
  dataId[primaryKeyField] = id;
  return await Common.deleteById(tableName, dataId);
}

async function count(filter, order) {
  return await Common.count(tableName, primaryKeyField, filter, order);
}

function _makeQueryBuilderByFilter(filter, startDate, endDate) {
  let queryBuilder = DB(tableName);
  let filterData = filter ? JSON.parse(JSON.stringify(filter)) : {};

  if (startDate) {
    queryBuilder.where('scheduleDayOff', '>=', startDate);
  }

  if (endDate) {
    queryBuilder.where('scheduleDayOff', '<=', endDate);
  }

  queryBuilder.where(filterData);

  queryBuilder.where({ isDeleted: 0 });

  return queryBuilder;
}

async function customSearch(filter, startDate, endDate) {
  let query = _makeQueryBuilderByFilter(filter, startDate, endDate);
  return await query.select();
}
async function customCount(filter, startDate, endDate) {
  let query = _makeQueryBuilderByFilter(filter, startDate, endDate);
  return new Promise((resolve, reject) => {
    try {
      query.count(`${primaryKeyField} as count`).then(records => {
        resolve(records[0].count);
      });
    } catch (e) {
      Logger.error('ResourceAccess', `DB COUNT ERROR: ${tableName} : ${JSON.stringify(filter)}`);
      Logger.error('ResourceAccess', e);
      reject(undefined);
    }
  });
}

module.exports = {
  insert,
  find,
  findById,
  count,
  updateById,
  deleteById,
  initDB,
  customSearch,
  customCount,
};
