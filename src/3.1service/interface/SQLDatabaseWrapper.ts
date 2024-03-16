export interface SQLDatabaseWrapperInterface {
  query(queriString: string, params?: any[]): Promise<{ rows: any[] }>;
}