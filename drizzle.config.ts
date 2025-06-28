import { defineConfig } from 'drizzle-kit';
import { env } from './env';

export default defineConfig({
  out: './drizzle',
  schema: './drizzle/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DB_URL,
  },
});
