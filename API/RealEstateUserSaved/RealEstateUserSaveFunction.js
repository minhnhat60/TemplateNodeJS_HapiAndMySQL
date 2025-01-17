/* Copyright (c) 2022 Reminano */

'use strict';
const RealEstateUserSavedResourceAccess = require('./resourceAccess/RealEstateUserSavedResourceAccess');

async function getRealEstateSavedByUserId(userId) {
  let realEstateSaved = await RealEstateUserSavedResourceAccess.find({ appUserIdSaved: userId }, undefined, 50);
  if (realEstateSaved) {
    return realEstateSaved;
  }
  return [];
}

module.exports = {
  getRealEstateSavedByUserId,
};
