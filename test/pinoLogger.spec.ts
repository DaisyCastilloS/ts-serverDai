import PinoLogger from '../src/config/pinoLogger';
import pino,{ Logger } from 'pino';

// Mock pino module
jest.mock('pino', () => {
  return jest.fn(() => ({
    fatal: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
    info: jest.fn(),
    debug: jest.fn(),
    trace: jest.fn(),
  }));
});

describe('PinoLogger', () => {
  let logger: PinoLogger;
  let mockPinoLogger: Logger;

  beforeEach(() => {
    mockPinoLogger = pino() as Logger;
    logger = new PinoLogger(mockPinoLogger);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should log fatal message', () => {
    const message = 'Fatal error occurred';
    logger.fatal(message);
    // Verificar si el método fatal del mock de pino fue llamado con el mensaje correcto
    expect(mockPinoLogger.fatal).toHaveBeenCalledWith(message);
  });

  // Similar tests for other log levels

  it('should expose the logger', () => {
    const loggerInstance = logger.getLoggerInstance();
    expect(loggerInstance).toBeDefined();
    // Test any custom methods or properties exposed by getLoggerInstance()
  });
});
