

import fetch from "isomorphic-fetch"

const getNewUserWalletAddress = async()=> {
    let result
    await fetch(`http://${process.env.BLOCKCHAIN_API}/api/user/new`, {
        method: 'POST',
        body: JSON.stringify({}),
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
    getNewUserWalletAddress
};