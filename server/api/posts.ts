import mysql from 'mysql2/promise';

export default defineEventHandler(async (event) => {
  const connection = await mysql.createConnection({
    host: process.env.NUXT_DB_SERVERNAME,
    user: process.env.NUXT_DB_USERNAME,
    password: process.env.NUXT_DB_PASSWORD,
    database: process.env.NUXT_DB_DATABASE,
  });

  // Query ajustada para usar a coluna 'dia' e formatar a data
  const [rows] = await connection.execute(`
    SELECT 
      id, 
      titulo AS title, 
      imagem_principal AS image, 
      DATE_FORMAT(dia, '%d/%m/%Y') AS date, 
      slug,
      conteudo AS content
    FROM blog
    ORDER BY dia DESC
  `);

  await connection.end();

  return rows;
});
