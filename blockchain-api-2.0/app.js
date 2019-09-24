const Koa = require('koa')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')
const mount = require('koa-mount')
const token = require('./routes/business/token')
const user = require('./routes/user')
//const logEvent = require('./utils/logger')
const { LOG_LEVELS, RESPONSE_CODES } = require('./utils/constants')
const { formatErrorResponse } = require('./utils/utils')

const main = async () => {
  const app = new Koa()
  
  const schema = require('./schema/schema')

  app.use(logger())
  app.use(bodyParser())

  // error handling
  app.use(async (ctx, next) => {
    try {
      //logEvent(LOG_LEVELS.info, RESPONSE_CODES.LOG_MESSAGE_ONLY, `${ctx.request.href} ENDPOINT CALLED`)
      await next()
    } catch (err) {

      const errorResponse = formatErrorResponse(err, ctx.request.href)
      ctx.status = errorResponse.status
      ctx.body = errorResponse.body
      
      ctx.app.emit('error', err, ctx)
    }
    finally {
      //logEvent(LOG_LEVELS.info, RESPONSE_CODES.LOG_MESSAGE_ONLY, `${ctx.request.href} ENDPOINT CALL ENDED`)
    }
  })

 app.use(cors());
  
  app.use(await schema({
    mintProductRefToken : require('./schema/mintProductRefToken.json'),
    mintProductRightToken: require('./schema/mintProductRightToken.json'),
    mintProductToken: require('./schema/mintProductToken.json'),
    tokenTransfer: require('./schema/tokenTransfer.json')
  }))

  app.use(mount('/api/token', await token()))
  app.use(mount('/api/user',await user()))
  

  return app
}

if (require.main === module) {
  main().then(
    (app) => app.listen(80),
    console.error
  )
}

module.exports = main
 