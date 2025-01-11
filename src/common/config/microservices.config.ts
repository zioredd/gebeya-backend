import { ClientConfig } from '@google-cloud/pubsub';
import { registerAs } from '@nestjs/config';
import { CONFIG_TOKEN } from './constant';
import { Transport } from '@nestjs/common/enums/transport.enum';

const parseBoolean = (value: string | undefined): boolean => {
  return value?.toLowerCase() === 'true';
};

export interface GcpsModuleOptions {
  auth: ClientConfig;
  topic: string;
  format: string;
  subscriptions: string[];
  autoAck: boolean;
  autoNack: boolean;
}

export default registerAs(CONFIG_TOKEN.MICROSERVICES, () => {
  const gcpsEmulatorEnabled = parseBoolean(process.env.GCPS_EMULATOR_ENABLED);

  const gcpsOptions: GcpsModuleOptions = {
    auth: {
      apiEndpoint: gcpsEmulatorEnabled
        ? process.env.GCPS_EMULATOR_API_ENDPOINT
        : undefined,
      projectId: gcpsEmulatorEnabled
        ? process.env.GCPS_EMULATOR_PROJECT
        : process.env.GCS_PROJECT_ID!,
      keyFilename: gcpsEmulatorEnabled
        ? undefined
        : process.env.GCPS_KEY_FILENAME!,
      emulatorMode: gcpsEmulatorEnabled,
    },
    topic: gcpsEmulatorEnabled
      ? process.env.GCPS_EMULATOR_TOPIC!
      : process.env.GCPS_TOPIC!,
    subscriptions: gcpsEmulatorEnabled
      ? [process.env.GCPS_EMULATOR_SUBSCRIPTION!]
      : [process.env.GCPS_SUBSCRIPTION!],
    format: process.env.GCPS_FORMAT!,
    autoAck: parseBoolean(process.env.GCPS_AUTO_ACK),
    autoNack: parseBoolean(process.env.GCPS_AUTO_NACK),
  };

  return {
    tcp: {
      transport: Transport.TCP,
      options: {
        port: Number.parseInt(process.env.MICROSERVICES_TCP_PORT),
      },
    },
    redis: {
      transport: Transport.REDIS,
      options: {
        host: process.env.REDIS_HOST,
        port: Number.parseInt(process.env.REDIS_PORT),
        username: process.env.REDIS_USERNAME,
        password: process.env.REDIS_PASSWORD,
      },
    },
    gcps: gcpsOptions,
  };
});
