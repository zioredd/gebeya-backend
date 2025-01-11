import { registerAs } from '@nestjs/config';

import { CONFIG_TOKEN } from './constant';

export default registerAs(CONFIG_TOKEN.SOCKET, () => ({
  port: Number(process.env.SOCKET_PORT),
  path: process.env.SOCKET_PATH ?? '/socket.io',
  corsOrigin: process.env.SOCKET_CORS_ORIGIN
    ? process.env.SOCKET_CORS_ORIGIN.split(',')
    : [],
  maxDisconnectionDuration: Number(
    process.env.SOCKET_MAX_DISCONNECTION_DURATION,
  ),
}));
