import { registerAs } from '@nestjs/config';

import { CONFIG_TOKEN } from './constant';

export default registerAs(CONFIG_TOKEN.CLOUDINARY, () => ({
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_API_KEY,
  apiSecret: process.env.CLOUDINARY_API_SECRET,
  apiUrl: process.env.CLOUDINARY_API_URL,
  resUrl: process.env.CLOUDINARY_RES_URL,
}));

export type CloudinaryEnvs = ReturnType<
  typeof import('./cloudinary.config.ts').default
>;
