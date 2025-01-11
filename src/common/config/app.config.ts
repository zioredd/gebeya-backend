import { registerAs } from '@nestjs/config';

import { CONFIG_TOKEN } from './constant';

export default registerAs(CONFIG_TOKEN.APP, () => ({
  name: process.env.APP_NAME ?? 'aladia-backend',
  apiVersion: process.env.API_VERSION,
  colorPalette: process.env.COLOR_PALETTE,
  fallbackLanguage: process.env.FALLBACK_LANGUAGE ?? 'en',
}));
