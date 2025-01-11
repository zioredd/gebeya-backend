import { registerAs } from '@nestjs/config';

import { CONFIG_TOKEN } from './constant';

export default registerAs(CONFIG_TOKEN.SERVER, () => ({
  nodeEnv: process.env.NODE_ENV,
  port: Number.parseInt(process.env.APP_PORT),
  timeout: Number.parseInt(process.env.TIMEOUT),
  frontendBaseUrl: process.env.FRONTEND_BASE_URL,
  backendBaseUrl: process.env.BACKEND_BASE_URL,
  androidPackageIdentifier: process.env.ANDROID_PACKAGE_IDENTIFIER,
  iosBundleId: process.env.IOS_BUNDLE_ID,
  appleWebClientId: process.env.APPLE_WEB_CLIENT_ID,
}));
