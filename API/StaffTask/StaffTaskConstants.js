/* Copyright (c) 2022 Reminano */

module.exports = {
  STAFF_TASK_ERROR: {
    STAFF_TASK_NOT_FOUND: 'STAFF_TASK_NOT_FOUND',
    INSERT_FAILED: 'INSERT_FAILED',
    INSERT_TASK_UPDATE_HISTORY_FAILED: 'INSERT_TASK_UPDATE_HISTORY_FAILED',
    UPDATE_FAILED: 'UPDATE_FAILED',
    AUTO_GENERATED_NAME_FAILED: 'AUTO_GENERATED_NAME_FAILED',
    CREATE_NOTIFICATION_FAILED: 'CREATE_NOTIFICATION_FAILED',
  },
  STAFF_TASK_PRIORITY: {
    STAFF_TASK_PRIORITY_NORMAL: 1,
    STAFF_TASK_PRIORITY_HIGH: 2,
    STAFF_TASK_PRIORITY_LOW: 3,
  },
  STAFF_TASK_STATUS: {
    NEW: 1,
    ASSIGNED: 10,
    PROCESSING: 20,
    CANCELED: 30,
    FINISHED: 40,
    CLOSED: 50,
    FAILED: 60,
  },
};
