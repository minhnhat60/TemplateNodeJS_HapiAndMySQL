/* Copyright (c) 2023 TORITECH LIMITED 2022 */

const AppUserVehicle = require('./AppUserVehicleRoute');

module.exports = [
  { method: 'POST', path: '/AppUserVehicle/find', config: AppUserVehicle.find },
  { method: 'POST', path: '/AppUserVehicle/count', config: AppUserVehicle.count },
  { method: 'POST', path: '/AppUserVehicle/findById', config: AppUserVehicle.findById },
  { method: 'POST', path: '/AppUserVehicle/deleteById', config: AppUserVehicle.deleteById },
  { method: 'POST', path: '/AppUserVehicle/updateById', config: AppUserVehicle.updateById },
  { method: 'POST', path: '/AppUserVehicle/user/getList', config: AppUserVehicle.userGetList },
  { method: 'POST', path: '/AppUserVehicle/user/getDetail', config: AppUserVehicle.userGetDetail },
  { method: 'POST', path: '/AppUserVehicle/user/registerVehicle', config: AppUserVehicle.userRegisterVehicle },
  { method: 'POST', path: '/AppUserVehicle/user/updateVehicle', config: AppUserVehicle.userUpdateVehicle },
  { method: 'POST', path: '/AppUserVehicle/user/deleteVehicle', config: AppUserVehicle.userDeleteVehicle },

  { method: 'POST', path: '/AppUserVehicle/user/findByHash', config: AppUserVehicle.getVehicleInfoByHash },

  // api to check valid license plate
  // { method: 'POST', path: '/AppUserVehicle/checkLicensePlate', config: AppUserVehicle.userCheckLicensePlate },
];
