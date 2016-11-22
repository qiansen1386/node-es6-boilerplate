import Koa from 'koa';
import route from 'koa-route';
import Promise from 'bluebird';
import dotenv from 'dotenv';
import ping from './middlewares/ping';
// import fp from 'lodash/fp';

// // Environment
dotenv.config('./config.env');
global.Promise = Promise;

// App
const app = new Koa();
const PORT = process.env.SERVER_PORT || 3030;

// Koa ctx is meant to be mutated.
// So despite it is quite important, we still need to temporarily disable it.
/* eslint-disable no-param-reassign */
app.use(route.get('/', (ctx) => {
  ctx.body = 'Hello Koa';
}));
/* eslint-enable no-param-reassign */
app.use(route.get('/ping', ping));

app.listen(PORT);
console.log(`app is listening at port ${PORT}`);

// app.on('error', (err, ctx) => {
//   log.error('server error', err, ctx);
// });
