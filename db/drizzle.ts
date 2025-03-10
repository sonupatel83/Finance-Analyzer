import { neon } from "@neondatabase/serverless";
import type { NeonQueryFunction } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { accounts } from "./schema";
const sql: NeonQueryFunction<boolean, boolean> = neon(process.env.DATABASE_URL!);

export const db = drizzle(sql);

const accounts2 =db.select().from (accounts);