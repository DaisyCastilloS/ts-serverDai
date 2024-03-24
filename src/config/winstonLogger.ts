import winston from 'winston';
import { LoggerWrapperInterface } from '../3.1service/interface/LoggerWrapper';

export default class WinstonLogger implements LoggerWrapperInterface {
  private logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
      ],
    });
  }

  emerg(message: string): void {
    this.logger.error(`EMERG: ${message}`);
  }

  alert(message: string): void {
    this.logger.warn(`ALERT: ${message}`);
  }

  crit(message: string): void {
    this.logger.warn(`CRIT: ${message}`);
  }

  error(message: string): void {
    this.logger.error(message);
  }

  warning(message: string): void {
    this.logger.warn(message);
  }

  notice(message: string): void {
    this.logger.info(`NOTICE: ${message}`);
  }

  info(message: string): void {
    this.logger.info(message);
  }

  debug(message: string): void {
    this.logger.debug(message);
  }
}

// Ejemplo de uso
const logger = new WinstonLogger();

logger.emerg('Este es un mensaje de emergencia');
logger.alert('Este es un mensaje de alerta');
logger.crit('Este es un mensaje crítico');
logger.error('Este es un mensaje de error');
logger.warning('Este es un mensaje de advertencia');
logger.notice('Este es un mensaje de aviso');
logger.info('Este es un mensaje informativo');
logger.debug('Este es un mensaje de depuración');
