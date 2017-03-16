import copy from 'copy-to-clipboard';

export const copyNotification = (notificationText, copyValue, cb) => {
  copy(copyValue);
  cb(notificationText);
};
