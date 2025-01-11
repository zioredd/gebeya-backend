import { registerAs } from '@nestjs/config';

import { CONFIG_TOKEN } from './constant';

export default registerAs(CONFIG_TOKEN.PRODUCT_PRICE, () => ({
  minimumPrice: Number.parseFloat(process.env.PRODUCT_MINIMUM_PRICE),
  maximumPrice: Number.parseFloat(process.env.PRODUCT_MAXIMUM_PRICE),
}));
