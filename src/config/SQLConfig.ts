import { Pool } from 'pg';
import dotenv from 'dotenv';
import { SQLDatabaseWrapperInterface } from '../3.1service/interface/SQLDatabaseWrapper';

dotenv.config();

export default class SQLDatabase implements SQLDatabaseWrapperInterface {
  private static instance: SQLDatabase;

  private pool: Pool;

  private constructor(uri: string) {
    this.pool = new Pool({ connectionString: uri });
  }

  public static getInstance(): SQLDatabase {
    if (!SQLDatabase.instance) {
      const uri = process.env.NEONTECH_DATABASE_URI;
      if (!uri) {
        throw new Error('NEONTECH_DATABASE_URI environment variable is not set.');
      }
      SQLDatabase.instance = new SQLDatabase(uri);
    }
    return SQLDatabase.instance;
  }

  public query(queryString: string, params?: Array<any> | undefined): Promise<{ rows: any[] }> {
    return this.pool.query(queryString, params);
  }
}
