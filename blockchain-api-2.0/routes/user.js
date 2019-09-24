// Import the WebFramework for routing
const Koa = require('koa')
const route = require('koa-route')
const ExceptionHandler = require('../utils/ExceptionHandler')
const { RESPONSE_CODES } = require('../utils/constants')

const requestManager = require('../utils/requestManager')
module.exports = async () => {
  const app = new Koa()

  /**
   * User registration - Deploy an entity contract on the private blockchain to represent this user and act as a wallet.
   * @param {number} user_sap_id Identifier of SAP user that is creating the winery
   */
  app.use(route.post('/new', async (ctx) => {
    //JSON Schema
   // const payload = ctx.checkPayload(ctx, 'user')
    // if (!payload) {
    //     throw new ExceptionHandler(RESPONSE_CODES.APPLICATION_ERROR, 'PAYLOAD ISSUE : ' + global.jsonErrorMessage)
    // }
    //let results = await requestManager.createUser()
    let response = { address:'0x89748738748379898934893498'}
    // Return status and result 
    ctx.status = RESPONSE_CODES.SUCCESS
    ctx.body = {
      data: response
  }
}))

  return app
}