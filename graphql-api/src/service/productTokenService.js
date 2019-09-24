
/**
 * Generate a new wallet address for new user
 *
 * @returns {object} - Object that returns address and the private key
 */
import fetch from "isomorphic-fetch"

const tokenTransfer = async(systemPayload)=> {
    let result
    await fetch(`http://${process.env.BLOCKCHAIN_API}/api/token/transfer`, {
        method: 'POST',
        body: JSON.stringify(systemPayload),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(res => result = res.json())
  
    if(result==null){
        throw new ExceptionHandler(RESPONSE_CODES.SERVER_ERROR, 'RESPONSE ISSUE : The response from the server is empty')
    }
  
    return result
}
const mintProductRefToken = async (systemPayload) => {
  let result
  await fetch(`http://${process.env.BLOCKCHAIN_API}/api/token/mintProductRefToken`, {
      method: 'POST',
      body: JSON.stringify(systemPayload),
      headers:{
          'Content-Type': 'application/json'
      }
  })
  .then(res => result = res.json())

  if(result==null){
      throw new ExceptionHandler(RESPONSE_CODES.SERVER_ERROR, 'RESPONSE ISSUE : The response from the server is empty')
  }

  return result
}

const mintProductToken = async (systemPayload) => {
  let result
  await fetch(`http://${process.env.BLOCKCHAIN_API}/api/token/mintProductToken`, {
      method: 'POST',
      body: JSON.stringify(systemPayload),
      headers:{
          'Content-Type': 'application/json'
      }
  })
  .then(res => result = res.json())

  if(result==null){
      throw new ExceptionHandler(RESPONSE_CODES.SERVER_ERROR, 'RESPONSE ISSUE : The response from the server is empty')
  }

  return result
}



export {
    mintProductRefToken,mintProductToken,tokenTransfer
};