import { d as defineEventHandler } from '../../runtime.mjs';
import mysql from 'mysql2/promise';
import '@netlify/functions';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'nodemailer';
import '@dword-design/functions';
import 'node:url';
import 'ipx';

const postsAlunosContratados = defineEventHandler(async (event) => {
  const connection = await mysql.createConnection({
    host: process.env.DB_SERVERNAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  });
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

export { postsAlunosContratados as default };
//# sourceMappingURL=postsAlunosContratados.mjs.map
