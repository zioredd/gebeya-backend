import { registerAs } from '@nestjs/config';
import { CONFIG_TOKEN } from './constant';

export default registerAs(CONFIG_TOKEN.GOOGLE_AUTH, () => ({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackUrl: `${process.env.BACKEND_BASE_URL}/v${process.env.API_VERSION}${process.env.GOOGLE_CALLBACK_URL}`,
}));

export type GoogleAuthEnvs = ReturnType<
  typeof import('./google-auth.config').default
>;
