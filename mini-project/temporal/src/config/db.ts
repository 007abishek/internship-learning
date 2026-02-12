import { Pool } from 'pg';

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',      // because your Node runs outside Docker
  database: 'app_db',
  password: 'postgres',   // ✅ FIXED
  port: 5432,
});
