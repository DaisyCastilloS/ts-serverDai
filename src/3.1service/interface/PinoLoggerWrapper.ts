export interface PinoLoggerWrapperInterface {
  fatal(message: string): void;
  error(message: string): void;
  warn(message: string): void;
  info(message: string): void;
  debug(message: string): void;
  trace(message: string): void;
}

//pino usa valores numericos para representar estos niveles: fatal: 60,
//error: 50 ,warn: 40,info: 30,debug: 20,trace: 10