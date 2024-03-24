import PinoLogger from '../src/config/pinoLogger';
import pino from 'pino';

jest.mock('pino', () => {
  return jest.fn(() => ({
    fatal: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
    info: jest.fn(),
    debug: jest.fn(),
  }));
});

describe('PinoLogger', () => {
  let logger: PinoLogger;
  let mockPinoLogger: pino.Logger;

  beforeEach(() => {
    mockPinoLogger = pino() as pino.Logger;
    logger = new PinoLogger(mockPinoLogger);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should log emerg message as fatal', () => {
    const message = 'Emergency message';
    logger.emerg(message);
    expect(mockPinoLogger.fatal).toHaveBeenCalledWith(message);
  });

  it('should log alert message as fatal', () => {
    const message = 'Alert message';
    logger.alert(message);
    expect(mockPinoLogger.fatal).toHaveBeenCalledWith(message);
  });

  it('should log crit message as fatal', () => {
    const message = 'Critical message';
    logger.crit(message);
    expect(mockPinoLogger.fatal).toHaveBeenCalledWith(message);
  });

  it('should log error message', () => {
    const message = 'Error message';
    logger.error(message);
    expect(mockPinoLogger.error).toHaveBeenCalledWith(message);
  });

  it('should log warning message', () => {
    const message = 'Warning message';
    logger.warning(message);
    expect(mockPinoLogger.warn).toHaveBeenCalledWith(message);
  });

  it('should log notice message as info', () => {
    const message = 'Notice message';
    logger.notice(message);
    expect(mockPinoLogger.info).toHaveBeenCalledWith(message);
  });

  it('should log info message', () => {
    const message = 'Info message';
    logger.info(message);
    expect(mockPinoLogger.info).toHaveBeenCalledWith(message);
  });

  it('should log debug message', () => {
    const message = 'Debug message';
    logger.debug(message);
    expect(mockPinoLogger.debug).toHaveBeenCalledWith(message);
  });
});
