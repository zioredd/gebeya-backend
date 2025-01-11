import { registerAs } from '@nestjs/config';

import { CONFIG_TOKEN } from './constant';

export default registerAs(CONFIG_TOKEN.AI, () => ({
  openAI: {
    apiKey: process.env.OPENAI_API_KEY,
    textModel: process.env.OPENAI_TEXT_MODEL,
    modelTemperature: Number(process.env.OPENAI_MODEL_TEMPERATURE),
    imageModel: process.env.OPENAI_IMAGE_MODEL,
    categoryAssistantId: process.env.OPENAI_CATEGORY_ASSISTANT_ID,
  },
  gcor: {
    apiKey: process.env.GCOR_API_KEY,
    baseUrl: process.env.GCOR_BASE_URL,
  },
}));

export type aiConfig = ReturnType<typeof import('./ai.config').default>;
