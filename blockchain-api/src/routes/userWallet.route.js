import express from 'express';
import web3 from '../utils/web3';


const router = express.Router();

// get new user wallet address

router.post('/getNewUserWallet', async (req, res, next) => {
  
  try {
    const userDetails = await web3.createAccount();
    res.json({ success: true, message: 'User created successfully', data: userDetails });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Some error occured' });
    next(err);
  }
});



export default router;