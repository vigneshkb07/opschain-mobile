import axios from 'axios';
/**
 * Generate a new wallet address for new user
 *
 * @returns {object} - Object that returns address and the private key
 */
const getNewUserWalletAddress = async () => {
  
  const url = `http://${process.env.BLOCKCHAIN_API}/wallet/getNewUserWallet`;
  const options = {
    body:{}
  };

  try {
    const response = await axios.post(url, options);
    const  address= response.data.data;
    return address;
  } catch (err) {
    throw err;
  }
};

export {
    getNewUserWalletAddress
};