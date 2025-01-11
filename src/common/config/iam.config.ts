import { registerAs } from '@nestjs/config';

import { CONFIG_TOKEN } from './constant';

export default registerAs(CONFIG_TOKEN.IAM, () => ({
  jwt: {
    secret: process.env.JWT_SECRET,
    audience: process.env.JWT_AUDIENCE,
    issuer: process.env.JWT_ISSUER,
    expiresIn: Number.parseInt(process.env.JWT_EXPIRES_IN, 10),
  },
}));

export type IamConfig = ReturnType<typeof import('./iam.config').default>;
