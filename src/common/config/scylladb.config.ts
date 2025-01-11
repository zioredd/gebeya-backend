import { registerAs } from '@nestjs/config';

import { CONFIG_TOKEN } from './constant';

export default registerAs(CONFIG_TOKEN.SCYLLADB, () => ({
  contactPoints: process.env.SCYLLADB_URI?.split(',') ?? [],
  localDataCenter: process.env.SCYLLADB_DATACENTER,
  username: process.env.SCYLLADB_USERNAME,
  password: process.env.SCYLLADB_PASSWORD,
  keyspace: process.env.SCYLLADB_KEYSPACE,
}));
