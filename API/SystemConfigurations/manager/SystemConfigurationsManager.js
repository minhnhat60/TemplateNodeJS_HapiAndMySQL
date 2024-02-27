/* Copyright (c) 2021-2023 Reminano */

/**
 * Created by Huu on 11/18/21.
 */

'use strict';
const SystemConfigurationsResourceAccess = require('../resourceAccess/SystemConfigurationsResourceAccess');
const Logger = require('../../../utils/logging');
const SystemConfigurationsFunction = require('../SystemConfigurationsFunction');
const { logAppDataChanged } = require('../../SystemAppChangedLog/SystemAppChangedLogFunctions');

async function find(req) {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await SystemConfigurationsResourceAccess.find({}, 0, 1);

      if (data) {
        resolve({ data: data, total: 1 });
      } else {
        resolve({ data: [], total: 0 });
      }
    } catch (e) {
      Logger.error(__filename, e);
      reject('failed');
    }
  });
}

async function updateById(req) {
  return new Promise(async (resolve, reject) => {
    try {
      let config = await SystemConfigurationsResourceAccess.find({}, 0, 1);
      let data = req.payload.data;
      let dataBefore = {};
      let dataAfter = {};
      for (let i = 0; i < Object.keys(data).length; i++) {
        const element = Object.keys(data)[i];
        dataBefore[element] = config[0][element];
      }
      dataAfter = data;
      let result = await SystemConfigurationsResourceAccess.updateById(config[0].systemConfigurationsId, data);
      if (result) {
        await logAppDataChanged(dataBefore, dataAfter, req.currentUser, SystemConfigurationsResourceAccess.modelName);
        resolve(result);
      }
      reject('failed');
    } catch (e) {
      Logger.error(__filename, e);
      reject('failed');
    }
  });
}

async function userGetDetail(req) {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await SystemConfigurationsResourceAccess.find({}, 0, 1);

      if (data && data.length > 0) {
        let _systemConfig = data[0];

        if (_systemConfig.USDTWalletAddress && _systemConfig.USDTWalletAddress !== null) {
          //them QRCode cho front-end
          const QRCodeFunction = require('../../../ThirdParty/QRCode/QRCodeFunctions');
          const QRCodeImage = await QRCodeFunction.createQRCode(_systemConfig.USDTWalletAddress);
          if (QRCodeImage) {
            _systemConfig.USDTWalletAddressQRCode = `https://${process.env.HOST_NAME}/${QRCodeImage}`;
          }
        }

        resolve(_systemConfig);
      } else {
        reject('failed');
      }
    } catch (e) {
      Logger.error(__filename, e);
      reject('failed');
    }
  });
}

module.exports = {
  find,
  updateById,
  userGetDetail,
};
