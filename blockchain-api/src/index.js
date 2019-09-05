import app from './app';

import web3 from './utils/web3';

/**
 * Bootstrap the application. Start express.
 */
const main = async () => {
  try {
    
    web3.connect();

    const connectionPort = process.env.PORT || 8081;
    app.listen(connectionPort, () => {
      console.log('running on ', connectionPort);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

main();


