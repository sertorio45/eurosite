import mysql from 'mysql2/promise';

export default defineEventHandler(async (event) => {
  let connection;
  
  try {
    // Estabelecendo conexão
    connection = await mysql.createConnection({
      host: process.env.DB_SERVERNAME,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });

    // Query ajustada para usar a coluna 'dia' e formatar a data
    const [rows] = await connection.execute(`
      SELECT 
        id, 
        titulo AS title, 
        imagem_principal AS image, 
        DATE_FORMAT(dia, '%d/%m/%Y') AS date, 
        metodologia,
        mercadotrabalho,
        ativo,
        subtitulo,
        video,
        slug
      FROM cursos
      ORDER BY dia DESC
    `);

    return rows;

  } catch (error) {
    // Log do erro para depuração
    console.error('Erro ao executar a query MySQL:', error);

    // Retornando uma mensagem de erro personalizada
    return {
      statusCode: 500,
      message: 'Erro ao buscar os cursos. Tente novamente mais tarde.',
    };

  } finally {
    // Fechando conexão se ela foi criada
    if (connection) {
      await connection.end();
    }
  }
});
