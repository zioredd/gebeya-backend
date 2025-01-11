import { registerAs } from '@nestjs/config';

import { CONFIG_TOKEN } from './constant';

export default registerAs(CONFIG_TOKEN.ANALYTICS, () => ({
  gcbq: {
    keyFilename: process.env.GCBQ_KEY_FILENAME,
    datasetId: process.env.GCBQ_DATASET_ID,
  },
}));
