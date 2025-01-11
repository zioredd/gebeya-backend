import { registerAs } from '@nestjs/config';

import { CONFIG_TOKEN } from './constant';

export default registerAs(CONFIG_TOKEN.DATABASE, () => ({
  uri: process.env.MONGO_URI,
}));
