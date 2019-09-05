import express from 'express';
import cors from 'cors';
import userWallet from './routes/userWallet.route';

const app = express();
app.use(express.json());
// cors & body parser middleware should come before any routes are handled
app.use(cors({origin: '*', credentials: true}));

// eslint-disable-next-line func-names
app.use('/health-check', function(_req, res) {
  res.sendStatus(200);
});

// routes
app.use('/wallet', userWallet);
/**
 * Handle application errors.
 *
 * NOTE: 500 status code is returned by default.
 *
 * To properly leverage this middleware, rather than return responses in your routes,
 * simply set a response status in the route and then pass the error object to `next`.
 * This middleware will catch that error and handle it in a consistent way across
 * the entire application. For example:
 *
 *     try {
 *       // look up something here
 *     } catch (err) {
 *       res.status(404);
 *       return next(err);
 *     }
 *
 * The reason it has to be done this way is because all of our routes are
 * asynchronous promises, and express won't be able to catch them unless
 * we explicitly catch & pass them along with `next`.
 *
 * @see {@link https://expressjs.com/en/guide/error-handling.html}
 */

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  console.error(err);
  return res.status(res.statusCode || 500).send({ message: err.message });
});

export default app;
module.exports = app;