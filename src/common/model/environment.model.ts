import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class EnvironmentModel {
  @IsNotEmpty()
  @IsString()
  APP_NAME: string;

  @IsNotEmpty()
  @IsNumber()
  APP_PORT: number;

  @IsNotEmpty()
  @IsString()
  API_VERSION: string;

  @IsNotEmpty()
  @IsNumber()
  TIMEOUT: number;

  @IsNotEmpty()
  @IsString()
  LOGGER_LEVEL: string;

  @IsNotEmpty()
  @IsString()
  NODE_ENV: string;

  @IsNotEmpty()
  @IsString()
  JWT_SECRET: string;

  @IsNotEmpty()
  @IsString()
  JWT_AUDIENCE: string;

  @IsNotEmpty()
  @IsString()
  JWT_ISSUER: string;

  @IsNotEmpty()
  @IsString()
  JWT_EXPIRES_IN: string;

  @IsNotEmpty()
  @IsNumber()
  MICROSERVICES_TCP_PORT: number;

  @IsNotEmpty()
  @IsString()
  REDIS_HOST: string;

  @IsNotEmpty()
  @IsNumber()
  REDIS_PORT: number;

  @IsOptional()
  @IsString()
  REDIS_USERNAME: string;

  @IsOptional()
  @IsString()
  REDIS_PASSWORD: string;

  @IsNotEmpty()
  @IsString()
  STRIPE_SECRET: string;

  @IsNotEmpty()
  @IsString()
  STRIPE_PLATFORM_WEBHOOK_SECRET: string;

  @IsNotEmpty()
  @IsString()
  STRIPE_CONNECT_WEBHOOK_SECRET: string;

  @IsNotEmpty()
  @IsString()
  STRIPE_REFRESH_URL: string;

  @IsNotEmpty()
  @IsString()
  STRIPE_RETURN_URL: string;

  @IsNotEmpty()
  @IsString()
  GCS_STRIPE_PRICE_ID: string;

  @IsNotEmpty()
  @IsString()
  STREAMING_STRIPE_PRICE_ID: string;

  @IsNotEmpty()
  @IsString()
  AI_STRIPE_PRICE_ID: string;

  @IsNotEmpty()
  @IsString()
  GCS_USAGE_FREE_LIMIT: string;

  @IsNotEmpty()
  @IsString()
  PRODUCT_MINIMUM_PRICE: string;

  @IsNotEmpty()
  @IsString()
  PRODUCT_MAXIMUM_PRICE: string;

  @IsNotEmpty()
  @IsString()
  STREAMING_USAGE_FREE_LIMIT: string;

  @IsNotEmpty()
  @IsString()
  AI_USAGE_FREE_LIMIT: string;

  @IsNotEmpty()
  @IsString()
  GCL_KEY_FILENAME: string;

  @IsNotEmpty()
  @IsString()
  GCL_LOG_NAME: string;

  @IsNotEmpty()
  @IsString()
  GCS_KEY_FILENAME: string;

  @IsNotEmpty()
  @IsString()
  GCS_PROJECT_ID: string;

  @IsNotEmpty()
  @IsString()
  GCS_HMAC_KEY: string;

  @IsNotEmpty()
  @IsString()
  GCS_HMAC_SECRET: string;

  @IsNotEmpty()
  @IsString()
  GCT_KEY_FILENAME: string;

  @IsNotEmpty()
  @IsString()
  GCT_LOCATION: string;

  @IsNotEmpty()
  @IsString()
  GCT_TEMPLATES_PATH: string;

  @IsNotEmpty()
  @IsString()
  GMS_KEY_FILENAME: string;

  @IsNotEmpty()
  @IsString()
  GMS_FROM: string;

  @IsNotEmpty()
  @IsString()
  GMS_TEMPLATES_PATH: string;

  @IsNotEmpty()
  @IsString()
  GCM_KEY_FILENAME: string;

  @IsNotEmpty()
  @IsString()
  GCPS_KEY_FILENAME: string;

  @IsNotEmpty()
  @IsString()
  GCPS_TOPIC: string;

  @IsNotEmpty()
  @IsString()
  GCPS_SUBSCRIPTION: string;

  @IsNotEmpty()
  @IsString()
  GCPS_FORMAT: string;

  @IsNotEmpty()
  @IsString()
  GCBQ_KEY_FILENAME: string;

  @IsNotEmpty()
  @IsString()
  GCBQ_DATASET_ID: string;

  @IsNotEmpty()
  @IsString()
  GCPS_AUTO_ACK: string;

  @IsNotEmpty()
  @IsString()
  GCPS_AUTO_NACK: string;

  @IsNotEmpty()
  @IsString()
  GCPS_EMULATOR_ENABLED: string;

  @IsNotEmpty()
  @IsString()
  GCPS_EMULATOR_PROJECT: string;

  @IsNotEmpty()
  @IsString()
  GCPS_EMULATOR_API_ENDPOINT: string;

  @IsNotEmpty()
  @IsString()
  GCPS_EMULATOR_TOPIC: string;

  @IsNotEmpty()
  @IsString()
  GCPS_EMULATOR_SUBSCRIPTION: string;

  @IsNotEmpty()
  @IsString()
  GCV_KEY_FILENAME: string;

  @IsNotEmpty()
  @IsString()
  GCF_KEY_FILENAME: string;

  @IsNotEmpty()
  @IsString()
  GCF_DATABASE: string;

  @IsNotEmpty()
  @IsString()
  MONGO_URI: string;

  @IsNotEmpty()
  @IsString()
  SCYLLADB_URI: string;

  @IsNotEmpty()
  @IsString()
  SCYLLADB_DATACENTER: string;

  @IsNotEmpty()
  @IsString()
  SCYLLADB_KEYSPACE: string;

  @IsNotEmpty()
  @IsInt()
  SOCKET_PORT: number;

  @IsNotEmpty()
  @IsString()
  SOCKET_CORS_ORIGIN: string;

  @IsNotEmpty()
  @IsInt()
  SOCKET_MAX_DISCONNECTION_DURATION: number;

  @IsNotEmpty()
  @IsString()
  GOOGLE_CLIENT_ID: string;

  @IsNotEmpty()
  @IsString()
  GOOGLE_CLIENT_SECRET: string;

  @IsNotEmpty()
  @IsString()
  GOOGLE_CALLBACK_URL: string;

  @IsNotEmpty()
  @IsString()
  FRONTEND_BASE_URL: string;

  @IsNotEmpty()
  @IsString()
  CACHE_TTL: string;

  @IsNotEmpty()
  @IsString()
  HMS_ACCESS_KEY: string;

  @IsNotEmpty()
  @IsString()
  HMS_SECRET: string;

  @IsNotEmpty()
  @IsString()
  HMS_BASE_URL: string;

  @IsNotEmpty()
  @IsString()
  HMS_TEMPLATE_ID: string;

  @IsNotEmpty()
  @IsString()
  COLOR_PALETTE: string;

  @IsNotEmpty()
  @IsString()
  OPENAI_API_KEY: string;

  @IsNotEmpty()
  @IsString()
  OPENAI_TEXT_MODEL: string;

  @IsNotEmpty()
  @IsString()
  OPENAI_MODEL_TEMPERATURE: string;

  @IsNotEmpty()
  @IsString()
  OPENAI_IMAGE_MODEL: string;

  @IsNotEmpty()
  @IsString()
  OPENAI_CATEGORY_ASSISTANT_ID: string;

  @IsNotEmpty()
  @IsString()
  GCOR_API_KEY: string;

  @IsNotEmpty()
  @IsString()
  GCOR_BASE_URL: string;

  @IsNotEmpty()
  @IsString()
  GLOBAL_STORAGE_BUCKET: string;

  @IsNotEmpty()
  @IsString()
  BACKEND_BASE_URL: string;

  @IsNotEmpty()
  @IsNumber()
  TEXT_MODERATION_TOXIC_THRESHOLD: number;

  @IsNotEmpty()
  @IsNumber()
  TEXT_MODERATION_INSULT_THRESHOLD: number;

  @IsNotEmpty()
  @IsNumber()
  TEXT_MODERATION_PROFANITY_THRESHOLD: number;

  @IsNotEmpty()
  @IsNumber()
  TEXT_MODERATION_SEXUAL_THRESHOLD: number;

  @IsNotEmpty()
  @IsString()
  FALLBACK_LANGUAGE: string;

  @IsNotEmpty()
  @IsString()
  ANDROID_PACKAGE_IDENTIFIER: string;

  @IsNotEmpty()
  @IsString()
  IOS_BUNDLE_ID: string;

  @IsNotEmpty()
  @IsString()
  APPLE_WEB_CLIENT_ID: string;

  @IsNotEmpty()
  @IsString()
  CLOUDINARY_CLOUD_NAME: string;

  @IsNotEmpty()
  @IsString()
  CLOUDINARY_API_KEY: string;

  @IsNotEmpty()
  @IsString()
  CLOUDINARY_API_SECRET: string;

  @IsNotEmpty()
  @IsString()
  CLOUDINARY_API_URL: string;

  @IsNotEmpty()
  @IsString()
  CLOUDINARY_RES_URL: string;
}
