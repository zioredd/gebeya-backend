import { registerAs } from '@nestjs/config';

import { CONFIG_TOKEN } from './constant';

export default registerAs(CONFIG_TOKEN.STRIPE, () => ({
  secrets: {
    apiKey: process.env.STRIPE_SECRET,
    platformWebhook: process.env.STRIPE_PLATFORM_WEBHOOK_SECRET,
    connectWebhook: process.env.STRIPE_CONNECT_WEBHOOK_SECRET,
  },
  urls: {
    refresh: process.env.STRIPE_REFRESH_URL,
    return: process.env.STRIPE_RETURN_URL,
  },
  priceIds: {
    gcs: process.env.GCS_STRIPE_PRICE_ID,
    streaming: process.env.STREAMING_STRIPE_PRICE_ID,
    ai: process.env.AI_STRIPE_PRICE_ID,
  },
  freeLimits: {
    gcs: Number.parseFloat(process.env.STREAMING_USAGE_FREE_LIMIT),
    streaming: Number.parseFloat(process.env.STREAMING_USAGE_FREE_LIMIT),
    ai: Number.parseFloat(process.env.AI_USAGE_FREE_LIMIT),
  },
}));
