import KoaServer from './4.1insfrastructure/koaServer/server';
import PinoLogger from './config/pinoLogger';

require('dotenv').config();

const logger = new PinoLogger();
const server = new KoaServer(logger);

const PORT = Number(process.env.SERVER_PORT) || 4040;
server.start(PORT);
