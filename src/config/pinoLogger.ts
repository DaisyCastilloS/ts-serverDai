import pino from 'pino';
import { LoggerWrapperInterface } from '../3.1service/interface/LoggerWrapper';

export default class PinoLogger implements LoggerWrapperInterface {
  private logger: pino.Logger;

  constructor(logger?: pino.Logger) {
    this.logger = logger || pino();
  }

  emerg(message: string): void {
    this.logger.fatal(message);
  }

  alert(message: string): void {
    this.logger.fatal(message);
  }

  crit(message: string): void {
    this.logger.fatal(message);
  }

  error(message: string): void {
    this.logger.error(message);
  }

  warning(message: string): void {
    this.logger.warn(message);
  }

  notice(message: string): void {
    this.logger.info(message);
  }

  info(message: string): void {
    this.logger.info(message);
  }

  debug(message: string): void {
    this.logger.debug(message);
  }
}
