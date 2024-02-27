/* Copyright (c) 2021-2023 Reminano */

'use strict';
require('dotenv').config();

const Logger = require('../../../utils/logging');
const { DB, timestamps } = require('../../../config/database');
const Common = require('../../Common/resourceAccess/CommonResourceAccess');
const { STATUS } = require('../SystemConfigurationConstant');
const { SYSTEM_STATUS } = require('../../Maintain/MaintainConstant');

const tableName = 'SystemConfigurations';
const primaryKeyField = 'systemConfigurationsId';
async function createTable() {
  Logger.info('ResourceAccess', `createTable ${tableName}`);
  return new Promise(async (resolve, reject) => {
    DB.schema.dropTableIfExists(`${tableName}`).then(() => {
      DB.schema
        .createTable(`${tableName}`, function (table) {
          table.increments(`${primaryKeyField}`).primary();
          table.double('exchangeRateCoin'); // tỉ lệ quy đổi xu (VND > XU)
          table.string('telegramGroupUrl').defaultTo('https://telegram.com'); // link group telegram
          table.string('fbMessengerUrl').defaultTo('https://messenger.com'); // link messenger FB
          table.string('zaloUrl').defaultTo('https://zalo.com'); //link zalo OA
          table.string('playStoreUrl').defaultTo('https://play.google.com/'); //link play store
          table.string('appStoreUrl').defaultTo('https://apps.apple.com/'); //link app store
          table.string('instagramUrl').defaultTo('https://instagram.com'); //link instagram
          table.string('facebookUrl').defaultTo('https://facebook.com'); // link fan page facebook
          table.string('twitterUrl').defaultTo('https://twitter.com'); // link fan page twitter
          table.string('youtubeUrl').defaultTo('https://youtube.com'); // link channel youtube
          table.string('websiteUrl').defaultTo('https://google.com'); // website chinh
          table.string('hotlineNumber').defaultTo('123456789'); //hotline
          table.string('supportEmail').defaultTo('OkedaVN2310@gmail.com'); //hotline
          table.string('address').defaultTo('123 Ho Chi Minh, VietNam'); //dia chi cong ty
          table.string('systemVersion').defaultTo('1.0.0'); //version he thong
          table.float('exchangeVNDPrice', 48, 24).defaultTo(0.001); //gia quy doi USD - VND
          table.string('bannerImage1').nullable();
          table.string('bannerImage2').nullable();
          table.string('bannerImage3').nullable();
          table.string('bannerImage4').nullable();
          table.string('bannerImage5').nullable();
          table.string('bannerImageUrl1').nullable();
          table.string('bannerImageUrl2').nullable();
          table.string('bannerImageUrl3').nullable();
          table.string('bannerImageUrl4').nullable();
          table.string('bannerImageUrl5').nullable();
          table.string('bannerImage1EN').nullable();
          table.string('bannerImage2EN').nullable();
          table.string('bannerImage3EN').nullable();
          table.string('bannerImage1CN').nullable();
          table.string('bannerImage2CN').nullable();
          table.string('bannerImage3CN').nullable();
          table.string('supportChatUrlEN').defaultTo(`https://tawk.io`); //kenh chatbox support bang tieng Anh
          table.string('supportChatUrlVI').defaultTo(`https://tawk.io`); //kenh chatbox support bang tieng Viet
          table.string('supportChatUrlCN').defaultTo(`https://tawk.io`); //kenh chatbox support bang tieng Trung Quoc
          table
            .string('maintainConfig')
            .defaultTo(`${JSON.stringify(SYSTEM_STATUS)}`)
            .nullable(); //kenh chatbox support bang tieng Trung Quoc
          table.float('missionBonusAmount').defaultTo(10000); //so tien thuong nhiem vu
          table.float('missionBonusHalfAmount').defaultTo(3000); //so tien thuong nhiem vu thng 1 lenh
          table.float('missionReferBonusHalfPercentage').defaultTo(0); //so tien thuong nhiem vu
          table.float('missionReferBonusPercentage').defaultTo(10); //so tien hoa hong nhiem vu
          table.integer('maxLimitedPaymentBank').defaultTo(1); // số tài khoản NH tối đa của mỗi user
          table.integer('maxLimitedPaymentUSDT').defaultTo(1); // số tài khoản USDT tối đa của mỗi user
          table.integer('maxLimitedMissionPerDay').defaultTo(3); // số nhiệm vụ tối đa mỗi ngày
          table.integer('bonusMissionForReferUser').defaultTo(1); // số nhiệm vụ tối đa mỗi ngày
          table.integer('lockMissionAllUser').defaultTo(1); // số nhiệm vụ tối đa mỗi ngày
          table.integer('cancelDepositEnable').defaultTo(0); // tự động hủy lệnh nạp
          table.integer('cancelDepositTime').defaultTo(5); // tự động hủy lệnh nạp sau n phút
          table.integer('approveWithdrawEnable').defaultTo(0); // tự động duyệt lệnh rút
          table.integer('approveWithdrawAmount').defaultTo(0); // tự động duyệt lệnh rút không vượt quá n tiền
          table.integer('minWithdrawTransaction').defaultTo(100000); // tự động duyệt lệnh rút không vượt quá n tiền
          table.integer('betAmountMax').defaultTo(20000000); // số tiền đặt cược tối đa
          table.string('bankChanel').defaultTo('MB') // bank chanel của sunpay
          timestamps(table);
          table.index(`${primaryKeyField}`);
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
  let projectStatus = [
    {
      systemVersion: '1.0.0',
      exchangeRateCoin: 1000,
      bannerImage1: `https://${process.env.HOST_NAME}/uploads/sample_banner.png`,
      bannerImage2: `https://${process.env.HOST_NAME}/uploads/sample_banner.png`,
      bannerImage3: `https://${process.env.HOST_NAME}/uploads/sample_banner.png`,
      bannerImage1: `https://${process.env.HOST_NAME}/uploads/sample_banner.png`,
      bannerImage2: `https://${process.env.HOST_NAME}/uploads/sample_banner.png`,
      bannerImage3: `https://${process.env.HOST_NAME}/uploads/sample_banner.png`,
      bannerImage4: `https://${process.env.HOST_NAME}/uploads/sample_banner.png`,
      bannerImage5: `https://${process.env.HOST_NAME}/uploads/sample_banner.png`,
      bannerImage1EN: `https://${process.env.HOST_NAME}/uploads/sample_banner.png`,
      bannerImage2EN: `https://${process.env.HOST_NAME}/uploads/sample_banner.png`,
      bannerImage3EN: `https://${process.env.HOST_NAME}/uploads/sample_banner.png`,
      bannerImage1CN: `https://${process.env.HOST_NAME}/uploads/sample_banner.png`,
      bannerImage2CN: `https://${process.env.HOST_NAME}/uploads/sample_banner.png`,
      bannerImage3CN: `https://${process.env.HOST_NAME}/uploads/sample_banner.png`,
    },
  ];
  return new Promise(async (resolve, reject) => {
    DB(`${tableName}`)
      .insert(projectStatus)
      .then(result => {
        Logger.info(`${tableName}`, `seeding ${tableName}` + result);
        resolve();
      });
  });
}

async function initDB() {
  await createTable();
}

async function updateById(id, data) {
  let dataId = {};
  dataId[primaryKeyField] = id;
  return await Common.updateById(tableName, dataId, data);
}

async function find(filter, skip, limit, order) {
  return await Common.find(tableName, filter, skip, limit, order);
}

module.exports = {
  find,
  updateById,
  initDB,
  modelName: tableName,
};
