

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const connection = event.context.connection;

  // Query ajustada para usar a coluna 'dia' e formatar a data
  const [rows] = await connection.execute(`
    SELECT 
      id, 
      titulo AS title, 
      imagem_principal AS image, 
      resumo,
      cidade,
      DATE_FORMAT(dia, '%d/%m/%Y') AS dia, 
      slug,
      ativo
    FROM hall
    ORDER BY dia DESC
  `);

  await connection.end();

  return rows;
});
