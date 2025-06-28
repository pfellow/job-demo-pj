import { createEnv } from '@t3-oss/env-nuxt';
import { z } from 'zod';

export const env = createEnv({
  server: {
    DB_HOST: z.string(),
    DB_PORT: z.coerce.number(),
    DB_USER: z.string(),
    DB_PASSWORD: z.string(),
    DB_NAME: z.string(),
  },
  createFinalSchema: (env) =>
    z.object(env).transform((values) => {
      const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME, ...rest } =
        values;

      return {
        ...rest,
        DB_URL: `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
      };
    }),
  client: {},
  emptyStringAsUndefined: true,
});
