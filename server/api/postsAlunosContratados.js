import mysql from 'mysql2/promise';

export default defineEventHandler(async (event) => {
  const connection = await mysql.createConnection({
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
      resumo,
      cidade,
      DATE_FORMAT(dia, '%d/%m/%Y') AS dia, 
      slug
    FROM hall
    ORDER BY dia DESC
  `);

  await connection.end();

  return rows;
});
