const { isAddress }= require('web3-utils');
const uuidv1 = require('uuid/v1');
const { RESPONSE_CODES } = require('./constants')

const generateUUID = () => {
  return uuidv1()
}

const formatErrorResponse = (err, href, requestId=null) => {
  let statusCode
  let message
  let requestIdMessage = ''
  let logMessage = ''

  if (err.response_code){
    if(requestId !== null){
      requestIdMessage = `REQUEST WITH ID : ${requestId} `
    }
    logMessage = `${requestIdMessage} ${href} ENDPOINT CALL ENDED WITH ERROR : ${err.error}`
    
    
    
    statusCode = err.response_code
    message = err.error
  } else{
    
    statusCode = err.status || RESPONSE_CODES.SERVER_ERROR
    message = 'SERVER ERROR'
  }

  return {
    status: statusCode,
    body: {
      response_code: JSON.stringify(statusCode),
      response_message: message
    }
  }
}

const isAddr = (address) => {
  return isAddress(address)
}

function toTokenWei(amount){
  return amount * 100
}

function toDecimalFromWei(amount){
  return parseFloat(amount / 100)
}

module.exports = { formatErrorResponse, generateUUID, isAddr, toTokenWei, toDecimalFromWei }