/* Copyright (c) 2022-2023 TORITECH LIMITED 2022 */

module.exports = {
  APP_USER_ERROR: {
    USER_INACTIVATED: 'USER_INACTIVATED', //Tài khoản đã bị khóa
    NOT_VERIFIED_PHONE_NUMBER: 'NOT_VERIFIED_PHONE_NUMBER', //Số điện thoại chưa được kích hoạt
    DUPLICATE_USER_NAME: 'DUPLICATE_USER_NAME', //Số điện thoại đã được đăng ký
    DUPLICATE_EMAIL: 'DUPLICATE_EMAIL', //Email đã được đăng ký
    DUPLICATE_PHONENUMBER: 'DUPLICATE_PHONENUMBER', //số điện thoại đã được đăng ký
    DUPLICATE_EMPLOYEE_CODE: 'DUPLICATE_EMPLOYEE_CODE', //Mã đăng kiểm viên đã được đăng ký
    DUPLICATE_USER_IDENTITY: 'DUPLICATE_USER_IDENTITY',
    NOT_HAVE_PERMISSION: 'NOT_HAVE_PERMISSION',
    INVALID_PHONE_NUMBER: 'INVALID_PHONE_NUMBER',
    INVALID_USER: 'INVALID_USER',
    INVALID_TOKEN: 'INVALID_TOKEN',
    CANNOT_CHANGE_PASSWORD: 'CANNOT_CHANGE_PASSWORD',
    CANNOT_ACTIVE_USER: 'CANNOT_ACTIVE_USER',
    PHONE_NUMBER_NOT_REGISTERED: 'PHONE_NUMBER_NOT_REGISTERED', // Tài khoản chưa được đăng ký
  },
  APP_USER_CATEGORY: {
    PERSONAL_ACCOUNT: 1, //tai khoan ca nhan - mac dinh
    COMPANY_ACCOUNT: 2, //tai khoan doanh nghiep
  },
  USER_VERIFY_PHONE_NUMBER_STATUS: {
    NOT_VERIFIED: 0,
    IS_VERIFIED: 1,
    VERIFYING: 2,
    REJECTED: 3,
  },
  ACCOUNT_STATUS: {
    ACTIVE: 1,
    BLOCK: 0,
  },
  COMPANY_STATUS: {
    NOT_ACCEPT: 0,
    NOT_VERIFIED: 2,
    ACCEPT: 1,
  },
  BOOKING_PHONE_STATUS: {
    ACTIVE: 1,
    BLOCK: 0,
  },
};