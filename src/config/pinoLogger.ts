import pino from 'pino';
import { PinoLoggerWrapperInterface } from '../3.1service/interface/PinoLoggerWrapper';

export default class PinoLogger implements PinoLoggerWrapperInterface {
  private logger: pino.Logger;

  constructor() {
    this.logger = pino();
  }

  fatal(message: string): void {
    this.logger.fatal(message);
  }

  error(message: string): void {
    this.logger.error(message);
  }

  warn(message: string): void {
    this.logger.warn(message);
  }

  info(message: string): void {
    this.logger.info(message);
  }

  debug(message: string): void {
    this.logger.debug(message);
  }

  trace(message: string): void {
    this.logger.trace(message);
  }
}
