import KoaServer from '../src/4.1insfrastructure/koaServer/server';
import { LoggerWrapperInterface } from '../src/3.1service/interface/LoggerWrapper';
import Koa from 'koa';

describe('KoaServer', () => {
  let mockLogger: LoggerWrapperInterface;
  let koaServer: KoaServer;
  let mockApp: Koa;

  beforeEach(() => {
    // Mock de logger
    mockLogger = {
      emerg: jest.fn(),
      alert: jest.fn(),
      crit: jest.fn(),
      error: jest.fn(),
      warning: jest.fn(),
      notice: jest.fn(),
      info: jest.fn(),
      debug: jest.fn(),
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
  
    // Crear un middleware simulado
    const middleware: Koa.Middleware = async (ctx, next) => {
      mockLogger.info(`Method ${ctx.method}, to endpoint ${ctx.url}`);
      await next();
    };

    // Ejecutar el middleware
    await middleware(mockContext as any, jest.fn());

    // Verificar si el logger fue llamado con la información correcta
    expect(mockLogger.info).toHaveBeenCalledWith(`Method ${mockContext.method}, to endpoint ${mockContext.url}`);
  });

  it('should start the server', () => {
    const port = 3000;

    koaServer.start(port);
    
    // Verificar si la aplicación Koa se está escuchando en el puerto correcto
    expect(mockApp.listen).toHaveBeenCalledWith(port, expect.any(Function));
  });
});
