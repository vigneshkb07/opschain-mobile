const debug = require('debug')('constant.js')

// var undefinedEnv = ''
// // Private key allowed to interact with relayers deployed
// const BLK_PRIVATE_RELAYER_ACCOUNT = process.env.BLK_PRIVATE_RELAYER_ACCOUNT
// if (BLK_PRIVATE_RELAYER_ACCOUNT === undefined) {
//   undefinedEnv = undefinedEnv + ' BLK_PRIVATE_RELAYER_ACCOUNT'
// }

// // Private Blockchain params
// const BLK_PRIVATE_NODE_HOST = process.env.BLK_PRIVATE_NODE_HOST
// debug(`Environment var BLK_PRIVATE_NODE_HOST: ${BLK_PRIVATE_NODE_HOST}`)
// if (BLK_PRIVATE_NODE_HOST === undefined) {
//   undefinedEnv = undefinedEnv + ' BLK_PRIVATE_NODE_HOST'
// }

// const BLK_PRIVATE_NODE_PORT = process.env.BLK_PRIVATE_NODE_PORT
// debug(`Environment var BLK_PRIVATE_NODE_PORT: ${BLK_PRIVATE_NODE_PORT}`)
// if (BLK_PRIVATE_NODE_PORT === undefined) {
//   undefinedEnv = undefinedEnv + ' BLK_PRIVATE_NODE_PORT'
// }

// const BLK_PRIVATE_NETWORK_ID = process.env.BLK_PRIVATE_NETWORK_ID
// debug(`Environment var BLK_PRIVATE_NETWORK_ID: ${BLK_PRIVATE_NETWORK_ID}`)
// if (BLK_PRIVATE_NETWORK_ID === undefined) {
//   undefinedEnv = undefinedEnv + ' BLK_PRIVATE_NETWORK_ID'
// }

// // DataBase params
// const DB_PGHOST = process.env.DB_PGHOST
// debug(`Environment var DB_PGHOST: ${DB_PGHOST}`)
// if (DB_PGHOST === undefined) {
//   undefinedEnv = undefinedEnv + ' DB_PGHOST'
// }

// const DB_PGPORT = process.env.DB_PGPORT
// debug(`Environment var DB_PGPORT: ${DB_PGPORT}`)
// if (DB_PGPORT === undefined) {
//   undefinedEnv = undefinedEnv + ' DB_PGPORT'
// }

// const DB_PGUSER = process.env.DB_PGUSER
// if (DB_PGUSER === undefined) {
//   undefinedEnv = undefinedEnv + ' DB_PGUSER'
// }
// const DB_PGPASSWORD = process.env.DB_PGPASSWORD
// if (DB_PGPASSWORD === undefined) {
//   undefinedEnv = undefinedEnv + ' DB_PGPASSWORD'
// }

// const DB_PGDATABASE = process.env.DB_PGDATABASE
// debug(`Environment var DB_PGDATABASE: ${DB_PGDATABASE}`)
// if (DB_PGDATABASE === undefined) {
//   undefinedEnv = undefinedEnv + ' DB_PGDATABASE'
// }

// const DB_REQUEST_SSL = process.env.DB_REQUEST_SSL
// debug(`Environment var DB_REQUEST_SSL: ${DB_REQUEST_SSL}`)
// if (DB_REQUEST_SSL === undefined) {
//   undefinedEnv = undefinedEnv + ' DB_REQUEST_SSL'
// }

// // API params
// // const API_PORT = process.env.API_PORT
// const API_PORT = 3000
// if (API_PORT === undefined) {
//   undefinedEnv = undefinedEnv + ' API_PORT'
// }

// if (undefinedEnv !== '') {
//   throw Error(`Mandatory environment variables are not set: ${undefinedEnv}`)
// }

module.exports = {
  // USER_TYPE: 'user',
  // WINERY_TYPE: 'winery',
  // DB_PGPORT,
  // DB_PGHOST,
  // DB_PGUSER,
  // DB_PGPASSWORD,
  // DB_PGDATABASE,
  // DB_REQUEST_SSL,
  // API_PORT,
  // BLK_PRIVATE_RELAYER_ACCOUNT,
  // BLK_PRIVATE_NODE_HOST,
  // BLK_PRIVATE_NODE_PORT,
  // BLK_PRIVATE_NETWORK_ID,
  LOG_LEVELS:{ 
    fatal: 'fatal', //0
    error: 'error', //1
    warn: 'warn', //2
    info: 'info', //3
    debug: 'debug', //4
    trace: 'trace' //5
  },
  RESPONSE_CODES:{
    LOG_MESSAGE_ONLY: 0,
    REFERENCE_CHECK: 1,
    SUCCESS: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    RESOURCE_NOT_FOUND: 404,
    REQUEST_TIMEOUT: 408,
    RECORD_ALREADY_EXIST: 409,
    SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503,
    APPLICATION_ERROR: 550,
    USER_DUPLICATION: 551,
    TRANSFER_BLOCKED: 552,
    UNKNOWN_BLOCKCHAIN_TRANSACTION_STATUS: 553
  }
}