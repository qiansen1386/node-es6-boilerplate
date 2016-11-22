/* eslint-disable no-param-reassign */
export default function* ping(ctx, next) {
  yield next;

  ctx.status = 200;
  ctx.body = 'pong';
}
/* eslint-enable no-param-reassign */
