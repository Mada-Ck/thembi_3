import { defineConfig } from "drizzle-kit";

const connectionString = process.env.DATABASE_URL || "postgres://localhost:5432/thembi";

export default defineConfig({
  schema: "./drizzle/schema.ts",
  out: "./drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: connectionString,
  },
});
