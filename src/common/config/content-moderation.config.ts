import { registerAs } from '@nestjs/config';

import { CONFIG_TOKEN } from './constant';

export default registerAs(CONFIG_TOKEN.CONTENT_MODERATION, () => ({
  gcv: {
    keyFilename: process.env.GCV_KEY_FILENAME,
  },
  thresholdMap: {
    Toxic: Number(process.env.TEXT_MODERATION_TOXIC_THRESHOLD),
    Insult: Number(process.env.TEXT_MODERATION_INSULT_THRESHOLD),
    Profanity: Number(process.env.TEXT_MODERATION_PROFANITY_THRESHOLD),
    Sexual: Number(process.env.TEXT_MODERATION_TOXIC_THRESHOLD),
  },
}));
