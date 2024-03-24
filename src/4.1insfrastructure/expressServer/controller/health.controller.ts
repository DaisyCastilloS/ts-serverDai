import { Request, Response } from 'express';
import { StatusCodes as code } from 'http-status-codes';

export default class ExampleController {
  static status(req: Request, res: Response) {
    res.status(code.OK).json({ status: 'ok' });
  }
}
