import SQLDatabase from '../src/config/SQLConfig';

jest.mock('pg', () => {
  const mockQuery = jest.fn();
  return {
    Pool: jest.fn(() => ({
      query: mockQuery,
    })),
  };
});

describe('SQLDatabase', () => {
  describe('query method', () => {
    it('should call pool.query with provided queryString and params', async () => {
      const queryString = 'SELECT * FROM users WHERE id = $1';
      const userId = 1;
      const params = [userId];

      const sqlDatabase = SQLDatabase.getInstance();
      const mockResult = { rows: [{ /* resultados simulados aquí */ }] };

      // Configura el mock para que la función query resuelva con los resultados simulados
      (sqlDatabase as any).pool.query.mockResolvedValue(mockResult);

      // Llama a la función que estás probando
      const result = await sqlDatabase.query(queryString, params);

      // Verifica si la función query de la instancia de Pool se llamó con los argumentos correctos
      expect((sqlDatabase as any).pool.query).toHaveBeenCalledWith(queryString, params);
      // Verifica si la función query devuelve los resultados esperados
      expect(result).toEqual(mockResult);
    });
  });
});
