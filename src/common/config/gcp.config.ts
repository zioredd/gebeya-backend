import { registerAs } from '@nestjs/config';

import { CONFIG_TOKEN } from './constant';

export default registerAs(CONFIG_TOKEN.GC, () => ({
  projectId: process.env.GCS_PROJECT_ID,

  logger: {
    keyFilename: process.env.GCL_KEY_FILENAME,
    name: process.env.GCL_LOG_NAME,
    level: process.env.LOGGER_LEVEL,
  },

  mail: {
    keyFilename: process.env.GMS_KEY_FILENAME,
    scopes: ['https://www.googleapis.com/auth/gmail.send'],
    from: process.env.GMS_FROM,
    templatesPath: process.env.GMS_TEMPLATES_PATH,
  },

  storage: {
    keyFilename: process.env.GCS_KEY_FILENAME,
    globalStorageBucket: process.env.GLOBAL_STORAGE_BUCKET,
    gcsHmacSecret: process.env.GCS_HMAC_SECRET,
    gcsHmacKey: process.env.GCS_HMAC_KEY,
  },

  monitoring: {
    keyFilename: process.env.GCM_KEY_FILENAME,
  },

  transcoder: {
    keyFilename: process.env.GCT_KEY_FILENAME,
    location: process.env.GCT_LOCATION,
    templatesPath: process.env.GCT_TEMPLATES_PATH,
  },

  firebase: {
    keyFilename: process.env.GCF_KEY_FILENAME,
    database: process.env.GCF_DATABASE,
  },
}));
