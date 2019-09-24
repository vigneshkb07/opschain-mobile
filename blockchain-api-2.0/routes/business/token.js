// Import the WebFramework for routing
const Koa = require('koa')
const route = require('koa-route')
const { RESPONSE_CODES } = require('../../utils/constants')
const ExceptionHandler = require('../../utils/ExceptionHandler');
const requestManager = require('../../utils/requestManager')

module.exports = async () => {
  const app = new Koa()
    /**
     * Transfer a token between different startups
     * @param  {string}  interface Interface the contract we will be calling belongs to
     * @param  {string}  contractName Name of the contract stored in the blockchain
     * @param  {string}  contractAddress Blockcahin address of the smart contract
     * @param  {string}  methodName Name of the method to be executed
     * @param  {string}  from Name of the startup lookifn to execute the fucntion
     * @param  {string}  to Name of the startup that will receive the tokens
     * @param  {array}   amount amount to be transfered
     */
    app.use(route.post('/transfer', async (ctx) => {
        // JSON Schema Verification
        let payload = ctx.checkPayload(ctx, 'tokenTransfer')
        if (!payload) {
            throw new ExceptionHandler(RESPONSE_CODES.APPLICATION_ERROR, 'PAYLOAD ISSUE : ' + global.jsonErrorMessage)
        }
        
        const response= {
            to: "0x090932093092039",
            from: "0X10909203092309039",
            tokenId: "89893888"
        }

        // TODO : maybe do something with the response

        // We then pass those names to the front end
        ctx.status = RESPONSE_CODES.SUCCESS
        ctx.body = {
            data: response
        }

    }))

    /**
     * Transfer a token between different startups
     * @param  {string}  interface Interface the contract we will be calling belongs to
     * @param  {string}  contractName Name of the contract stored in the blockchain
     * @param  {string}  contractAddress Blockcahin address of the smart contract
     * @param  {string}  methodName Name of the method to be executed
     * @param  {string}  from Name of the startup lookifn to execute the fucntion
     * @param  {string}  to Name of the startup that will receive the tokens
     * @param  {array}   amount amount to be transfered
     */
    app.use(route.post('/mintProductRefToken', async (ctx) => {
        // JSON Schema Verification
        console.log('----ctx',ctx)
        let payload = ctx.checkPayload(ctx, 'mintProductRefToken')
        console.log('---->',payload)
        if (!payload) {
            throw new ExceptionHandler(RESPONSE_CODES.APPLICATION_ERROR, 'PAYLOAD ISSUE : ' + global.jsonErrorMessage)
        }
       
        //Make sure this structure, specially the order, matches that of the method we are trying to call
        systemPayload = {
            to:  await payload.to,
            tokenURI: await payload.tokenURI
        }
        let contractInfo ={
            contractName: 'ProductToken',
            contractaddress: '0x784774884848', 
            methodName: 'mintProductRefToken'
          }
        //const response = await requestManager.genericMethod(contractInfo, payload)
        const response= {
            tokenId:'0x985985989595989859895'
        }
        // TODO : maybe do something with the response
        //let response = await systemCall(systemPayload, url)
        // We then pass those names to the front end
        ctx.status = RESPONSE_CODES.SUCCESS
        ctx.body = {
            data: response
        }

    }))

    /**
     * Transfer a token between different startups
     * @param  {string}  interface Interface the contract we will be calling belongs to
     * @param  {string}  contractName Name of the contract stored in the blockchain
     * @param  {string}  contractAddress Blockcahin address of the smart contract
     * @param  {string}  methodName Name of the method to be executed
     * @param  {string}  from Name of the startup lookifn to execute the fucntion
     * @param  {string}  to Name of the startup that will receive the tokens
     * @param  {array}   amount amount to be transfered
     */
    app.use(route.post('/mintProductToken', async (ctx) => {
        // JSON Schema Verification
        console.log('---->ctx',ctx)
        let payload = ctx.checkPayload(ctx, 'mintProductToken')
        if (!payload) {
            throw new ExceptionHandler(RESPONSE_CODES.APPLICATION_ERROR, 'PAYLOAD ISSUE : ' + global.jsonErrorMessage)

        }
        //Make sure this structure, specially the order, matches that of the method we are trying to call
        systemPayload = {
            to:  await payload.to,
            tokenURI: await payload.tokenURI,
            tokenId:  await payload.tokenId
        }
        let contractInfo ={
            contractName: 'ProductToken',
            contractaddress: '0x784774884848', 
            methodName: 'mintProductToken'
          }
        //const response = await requestManager.genericMethod(contractInfo, payload)
        const response= {
            tokenId:'0x985985989595989859895',
            hash:'0x46991f280c38a571480b544f6c2b2718be249246225efcf565a03c7908cbc472'
        }
        // TODO : maybe do something with the response
        //let response = await systemCall(systemPayload, url)
        // We then pass those names to the front end
        ctx.status = RESPONSE_CODES.SUCCESS
        ctx.body = {
            data: response
        }

    }))

    /**
     * Transfer a token between different startups
     * @param  {string}  interface Interface the contract we will be calling belongs to
     * @param  {string}  contractName Name of the contract stored in the blockchain
     * @param  {string}  contractAddress Blockcahin address of the smart contract
     * @param  {string}  methodName Name of the method to be executed
     * @param  {string}  from Name of the startup lookifn to execute the fucntion
     * @param  {string}  to Name of the startup that will receive the tokens
     * @param  {array}   amount amount to be transfered
     */
    app.use(route.post('/mintProductRightToken', async (ctx) => {
        // JSON Schema Verification
        let payload = ctx.checkPayload(ctx, 'mintProductRightToken')
        if (!payload) {
            throw new ExceptionHandler(RESPONSE_CODES.APPLICATION_ERROR, 'PAYLOAD ISSUE : ' + global.jsonErrorMessage)

        }
        //Make sure this structure, specially the order, matches that of the method we are trying to call
        systemPayload = {
            to:  await payload.to,
            tokenId: await payload.tokenId,
            rightType:  await payload.rightType
        }
        let contractInfo ={
            contractName: 'ProductToken',
            contractaddress: '0x784774884848', 
            methodName: 'mintProductRightToken'
          }
        //const response = await requestManager.genericMethod(contractInfo, payload)
        const response= {
            tokenId:'0x985985989595989859895'
        }
        // TODO : maybe do something with the response
        //let response = await systemCall(systemPayload, url)
        // We then pass those names to the front end
        ctx.status = RESPONSE_CODES.SUCCESS
        ctx.body = {
            data: response
        }

    }))

    
    return app
}