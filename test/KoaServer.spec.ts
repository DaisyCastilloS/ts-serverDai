import KoaServer from '../src/4.1insfrastructure/koaServer/server';
import { PinoLoggerWrapperInterface } from '../src/3.1service/interface/PinoLoggerWrapper';
import Koa from 'koa';
import supertest from 'supertest';

describe('KoaServer', () => {
  let mockLogger: PinoLoggerWrapperInterface;
  let koaServer: KoaServer;
  let mockApp: Koa;

  beforeEach(() => {
    // Mock de logger
    mockLogger = {
      info: jest.fn(),
      error: jest.fn(),
      warn: jest.fn(),
      fatal: jest.fn(),
      debug: jest.fn(),
      trace: jest.fn(),
    };

    // Mock de la aplicación Koa
    mockApp = {
      use: jest.fn(),
      listen: jest.fn(),
    } as unknown as Koa;

    koaServer = new KoaServer(mockLogger);
    (koaServer as any).app = mockApp; // Inyectar el mock de la aplicación Koa
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should log method and endpoint on request', async () => {
    const mockContext = { method: 'GET', url: '/test' };
    const mockNext = jest.fn();
  
    // Simular middleware
    await (koaServer as any).app.use(mockContext, mockNext);
  
    // Verificar si el logger fue llamado con la información correcta
    expect(mockLogger.info).toHaveBeenCalledWith(`Method ${mockContext.method}, to endpoint ${mockContext.url}`);
    expect(mockNext).toHaveBeenCalled();
  });
  

  it('should start the server', () => {
    const port = 3000;
    koaServer.start(port);

    // Verificar si la aplicación Koa se está escuchando en el puerto correcto
    expect(mockApp.listen).toHaveBeenCalledWith(port, expect.any(Function));
    expect(mockLogger.info).toHaveBeenCalledWith(`Running on port ${port}`);
  });
});
