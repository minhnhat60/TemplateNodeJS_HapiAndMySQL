/* Copyright (c) 2022-2023 Reminano */

const AppUsers = require('./AppUsersRoute');
const AppUsersRoute_ReferUser = require('./AppUsersRoute_ReferUser');

module.exports = [
  // AppUsers APIs
  { method: 'POST', path: '/AppUsers/checkUserName', config: AppUsers.checkUserName },
  { method: 'POST', path: '/AppUsers/registerUser', config: AppUsers.registerUser },
  { method: 'POST', path: '/AppUsers/registerUserWithOTP', config: AppUsers.registerUserWithOTP },
  { method: 'POST', path: '/AppUsers/registerUserByStaffReferCode', config: AppUsers.registerUserByStaffCode },
  // InfoUsers APIs
  // { method: 'POST', path: '/AppUsers/registerUserByPhone', config: AppUsers.registerUserByPhone },
  // { method: 'POST', path: '/AppUsers/sendPhoneOTP', config: AppUsers.sendPhoneOTP },
  // { method: 'POST', path: '/AppUsers/confirmPhoneOTP', config: AppUsers.confirmPhoneOTP },
  // { method: 'POST', path: '/AppUsers/loginByPhone', config: AppUsers.loginByPhone },
  // { method: 'POST', path: '/AppUsers/loginByToken', config: AppUsers.loginByToken },
  { method: 'POST', path: '/AppUsers/user/getDetailUser', config: AppUsers.userGetDetailById },
  { method: 'POST', path: '/AppUsers/user/uploadAvatar', config: AppUsers.uploadAvatar },
  { method: 'POST', path: '/AppUsers/user/updateInfoUser', config: AppUsers.userUpdateInfo },
  // { method: 'POST', path: '/AppUsers/registerUserByEmail', config: AppUsers.registerUserByEmail },
  { method: 'POST', path: '/AppUsers/loginUser', config: AppUsers.loginUser },
  { method: 'POST', path: '/AppUsers/adminUnblockLoginUser', config: AppUsers.adminUnblockLoginUser },
  { method: 'POST', path: '/AppUsers/blockUserBySupervisorId', config: AppUsers.blockUserBySupervisorId },
  { method: 'POST', path: '/AppUsers/adminUnblockWithdrawBank', config: AppUsers.adminUnblockWithdrawBank },
  { method: 'POST', path: '/AppUsers/adminUnblockWithdrawCrypto', config: AppUsers.adminUnblockWithdrawCrypto },
  // { method: 'POST', path: '/AppUsers/loginByEmail', config: AppUsers.loginByEmail },
  // { method: 'POST', path: '/AppUsers/loginApple', config: AppUsers.loginApple },
  // { method: 'POST', path: '/AppUsers/loginFacebook', config: AppUsers.loginFacebook },
  // { method: 'POST', path: '/AppUsers/loginGoogle', config: AppUsers.loginGoogle },
  // { method: 'POST', path: '/AppUsers/loginZalo', config: AppUsers.loginZalo },
  { method: 'POST', path: '/AppUsers/find', config: AppUsers.find },
  { method: 'POST', path: '/AppUsers/findById', config: AppUsers.findById },
  { method: 'POST', path: '/AppUsers/deleteById', config: AppUsers.deleteById },
  { method: 'POST', path: '/AppUsers/updateUserById', config: AppUsers.updateById },
  { method: 'POST', path: '/AppUsers/changePasswordUser', config: AppUsers.changePasswordUser },
  { method: 'POST', path: '/AppUsers/verify2FA', config: AppUsers.verify2FA },
  { method: 'GET', path: '/AppUsers/get2FACode', config: AppUsers.get2FACode },
  { method: 'POST', path: '/AppUsers/verifyInfoUser', config: AppUsers.verifyInfoUser },
  { method: 'POST', path: '/AppUsers/rejectInfoUser', config: AppUsers.rejectInfoUser },
  { method: 'POST', path: '/AppUsers/getUsersByMonth', config: AppUsers.getUsersByMonth },
  { method: 'POST', path: '/AppUsers/uploadImageIdentityCardBefore', config: AppUsers.uploadIdentityCardBefore },
  { method: 'POST', path: '/AppUsers/uploadImageIdentityCardAfter', config: AppUsers.uploadIdentityCardAfter },
  { method: 'POST', path: '/AppUsers/user/submitIdentity', config: AppUsers.userSubmitIdentity },
  { method: 'POST', path: '/AppUsers/user/checkExistingAccount', config: AppUsers.userCheckExistingAccount },
  { method: 'POST', path: '/AppUsers/exportExcel', config: AppUsers.exportExcelFile },
  { method: 'POST', path: '/AppUsers/forgotPassword', config: AppUsers.forgotPassword },
  { method: 'POST', path: '/AppUsers/user/forgotPasswordEmailOTP', config: AppUsers.forgotPasswordEmailOTP },
  { method: 'POST', path: '/AppUsers/user/forgotPasswordSMSOTP', config: AppUsers.forgotPasswordSMSOTP },
  { method: 'POST', path: '/AppUsers/user/forgotSecondaryPasswordSMSOTP', config: AppUsers.forgotSecondaryPasswordSMSOTP },
  { method: 'POST', path: '/AppUsers/user/forgotSecondaryPasswordEmailOTP', config: AppUsers.forgotSecondaryPasswordEmailOTP },
  // { method: 'POST', path: '/AppUsers/verifyEmailUser', config: AppUsers.verifyEmailUser },
  { method: 'POST', path: '/AppUsers/user/resetPasswordByToken', config: AppUsers.resetPasswordBaseOnToken },
  { method: 'POST', path: '/AppUsers/adminResetPasswordUser', config: AppUsers.adminResetPasswordUser },
  // { method: 'POST', path: '/AppUsers/sendMailToVerifyEmail', config: AppUsers.sendMailToVerify },
  { method: 'POST', path: '/AppUsers/adminChangePasswordUser', config: AppUsers.adminChangePasswordUser },
  { method: 'POST', path: '/AppUsers/adminLockUser', config: AppUsers.adminLockUser },
  { method: 'POST', path: '/AppUsers/resetWithdrawCountDay', config: AppUsers.resetWithdrawCountDay },
  { method: 'POST', path: '/AppUsers/adminChangeSecondaryPasswordUser', config: AppUsers.adminChangeSecondaryPasswordUser },
  { method: 'POST', path: '/AppUsers/userViewsListMembership', config: AppUsers.userViewsListMembership },

  { method: 'POST', path: '/AppUsers/findAllUsersFollowingReferId', config: AppUsers.findAllUsersFollowingReferId },
  { method: 'POST', path: '/AppUsers/sendEmailOTP', config: AppUsers.sendEmailOTP },
  // { method: 'POST', path: '/AppUsers/user/sendEmailOTP', config: AppUsers.sendEmailOTP },
  { method: 'POST', path: '/AppUsers/confirmEmailOTP', config: AppUsers.confirmEmailOTP },
  { method: 'POST', path: '/AppUsers/user/changePasswordviaEmailOTP', config: AppUsers.changePasswordviaEmailOTP },
  { method: 'POST', path: '/AppUsers/user/changeSecondaryPassword', config: AppUsers.userChangeSecondaryPassword },
  { method: 'POST', path: '/AppUsers/user/requestUpgradeUser', config: AppUsers.userRequestUpgradeUser },
  { method: 'POST', path: '/AppUsers/adminCreateVirtualUser', config: AppUsers.adminCreateVirtualUser },
  { method: 'POST', path: '/AppUsers/adminBlockWithdrawal', config: AppUsers.adminBlockWithdrawal },
  { method: 'POST', path: '/AppUsers/adminUnblockWithdrawal', config: AppUsers.adminUnblockWithdrawal },
  { method: 'POST', path: '/AppUsers/adminBlockDeposit', config: AppUsers.adminBlockDeposit },
  { method: 'POST', path: '/AppUsers/adminUnblockDeposit', config: AppUsers.adminUnblockDeposit },
  { method: 'POST', path: '/AppUsers/adminAssignExpert', config: AppUsers.adminAssignExpert },
  { method: 'POST', path: '/AppUsers/adminUnassignExpert', config: AppUsers.adminUnassignExpert },
  { method: 'POST', path: '/AppUsers/findReferedUserByUserId', config: AppUsersRoute_ReferUser.findReferedUserByUserId },
  { method: 'POST', path: '/AppUsers/summaryReferedUserByUserId', config: AppUsersRoute_ReferUser.summaryReferedUserByUserId },
  { method: 'POST', path: '/AppUsers/referUser/findReferedUserByUserId', config: AppUsersRoute_ReferUser.userFindReferedUserByUserId },
  { method: 'POST', path: '/AppUsers/referUser/summaryCurrentRefered', config: AppUsersRoute_ReferUser.userSummaryCurrentRefer },
  { method: 'POST', path: '/AppUsers/referUser/summaryPlayAmountByMonth', config: AppUsersRoute_ReferUser.userSummaryPlayAmount },
  { method: 'POST', path: '/AppUsers/referUser/summaryBonusAmount', config: AppUsersRoute_ReferUser.userSummaryBonusAmount },
  { method: 'POST', path: '/AppUsers/referUser/summaryTotalUserReferF1', config: AppUsersRoute_ReferUser.userSummaryTotalUserReferF1 },
  { method: 'POST', path: '/AppUsers/referUser/summaryTotalUserReferF1InMonth', config: AppUsersRoute_ReferUser.userSummaryTotalUserReferF1InMonth },
  {
    method: 'POST',
    path: '/AppUsers/referUser/summaryTotalUserReferF1LastMonth',
    config: AppUsersRoute_ReferUser.userSummaryTotalUserReferF1LastMonth,
  },
  { method: 'POST', path: '/AppUsers/referUser/summaryTotalUserRefer', config: AppUsersRoute_ReferUser.userSummaryTotalUserRefer },
  { method: 'POST', path: '/AppUsers/referUser/summaryTotalUserReferInMonth', config: AppUsersRoute_ReferUser.userSummaryTotalUserReferInMonth },
  { method: 'POST', path: '/AppUsers/referUser/summaryTotalUserReferLastMonth', config: AppUsersRoute_ReferUser.userSummaryTotalUserReferLastMonth },
  { method: 'POST', path: '/AppUsers/referUser/summaryTotalAgentRefer', config: AppUsersRoute_ReferUser.userSummaryTotalAgentRefer },
  { method: 'POST', path: '/AppUsers/referUser/summaryTotalAgentReferInMonth', config: AppUsersRoute_ReferUser.userSummaryTotalAgentReferInMonth },
  {
    method: 'POST',
    path: '/AppUsers/referUser/summaryTotalAgentReferLastMonth',
    config: AppUsersRoute_ReferUser.userSummaryTotalAgentReferLastMonth,
  },
  { method: 'POST', path: '/AppUsers/referUser/summaryTotalReferBonus', config: AppUsersRoute_ReferUser.userSummaryTotalReferBonus },
  { method: 'POST', path: '/AppUsers/referUser/summaryTotalReferBonusInMonth', config: AppUsersRoute_ReferUser.userSummaryTotalReferBonusInMonth },
  {
    method: 'POST',
    path: '/AppUsers/referUser/summaryTotalReferBonusLastMonth',
    config: AppUsersRoute_ReferUser.userSummaryTotalReferBonusLastMonth,
  },
];
