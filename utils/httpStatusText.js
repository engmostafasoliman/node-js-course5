const SUCCESS = 'success';
const FAIL = 'fail';
const ERROR = 'error';
const CLIENT_ERROR = 'clinet_error';
const SERVER_ERROR = 'server_error';
const SUCCESS_STATUS_TEXT = {
  200: 'OK',
  201: 'Created',
  202: 'Accepted',
  204: 'No Content',
};
const CLIENT_ERROR_STATUS_TEXT = {
  400: 'Bad Request',
  401: 'Unauthorized',};
const SERVER_ERROR_STATUS_TEXT = {
  500: 'Internal Server Error',
  501: 'Not Implemented',
  502: 'Bad Gateway',
};
module.exports = {
  SUCCESS,
  FAIL,
    ERROR,
    CLIENT_ERROR,
    SERVER_ERROR,
  SUCCESS_STATUS_TEXT,
  CLIENT_ERROR_STATUS_TEXT,
  SERVER_ERROR_STATUS_TEXT,
};