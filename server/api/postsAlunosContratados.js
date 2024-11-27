import mysql from 'mysql2/promise';

export default defineEventHandler(async (event) => {
  
  const config = useRuntimeConfig();

  const connection = await mysql.createConnection({
    host: '162.214.100.2',
    user: 'euroanglo_admin',
    password: 'Agenciagsstudio1993#@!',
    database: 'euroanglo_site',
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
