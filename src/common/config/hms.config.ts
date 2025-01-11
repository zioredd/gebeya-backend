import { registerAs } from '@nestjs/config';

import { CONFIG_TOKEN } from './constant';

export default registerAs(CONFIG_TOKEN.HMS, () => ({
  accessKey: process.env.HMS_ACCESS_KEY,
  secretKey: process.env.HMS_SECRET,
  baseURL: process.env.HMS_BASE_URL,
  templateId: process.env.HMS_TEMPLATE_ID,
}));
