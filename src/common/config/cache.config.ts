import { registerAs } from '@nestjs/config';

import { CONFIG_TOKEN } from './constant';

export default registerAs(CONFIG_TOKEN.CACHE, () => ({
  ttl: Number.parseInt(process.env.CACHE_TTL ?? '600', 10),
}));
