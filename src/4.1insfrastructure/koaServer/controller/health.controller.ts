import { Context } from 'koa';
import { StatusCodes as code } from 'http-status-codes';

export default class ExampleController {
  static async status(ctx: Context) {
    ctx.status = code.OK;
    ctx.body = { status: 'ok' };
  }
}
