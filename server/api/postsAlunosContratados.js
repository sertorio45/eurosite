

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig();
    const connection = event.context.connection;

    if (!connection) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Falha na conexão com o banco de dados'
      });
    }

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
      WHERE ativo = 1
      ORDER BY dia DESC
    `);

    await connection.end();

    return rows;
  } catch (error) {
    console.error('Erro ao buscar alunos contratados:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Erro interno do servidor ao buscar dados dos alunos contratados'
    });
  }
});
