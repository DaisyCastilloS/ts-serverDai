import pino, { Logger } from 'pino';
import { PinoLoggerWrapperInterface } from '../3.1service/interface/PinoLoggerWrapper';

export default class PinoLogger implements PinoLoggerWrapperInterface {
  private logger: pino.Logger;

  constructor(logger?: Logger) {
    this.logger = logger || pino();
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

  getLoggerInstance(): pino.Logger {
    return this.logger;
  }
}
