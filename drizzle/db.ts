import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema';
import { env } from '~/env';

export const db = drizzle(env.DB_URL, {
  schema,
});
