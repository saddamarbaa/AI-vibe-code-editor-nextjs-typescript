// Load .env so `env("...")` calls in this config can read values from the project `.env` file.
// See .env header comment for why this is needed when using a TypeScript config file.
import 'dotenv/config'
import { defineConfig, env } from 'prisma/config'

export default defineConfig({
	schema: 'prisma/schema.prisma',
	migrations: {
		path: 'prisma/migrations',
	},
	engine: 'classic',
	datasource: {
		url: env('DATABASE_URL'),
	},
})
