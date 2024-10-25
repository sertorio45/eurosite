import { d as defineEventHandler, u as useRuntimeConfig } from '../../runtime.mjs';
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

const posts = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const connection = await mysql.createConnection({
    host: config.NUXT_DB_SERVERNAME,
    user: config.NUXT_DB_USERNAME,
    password: config.NUXT_DB_PASSWORD,
    database: config.NUXT_DB_DATABASE
  });
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

export { posts as default };
//# sourceMappingURL=posts.mjs.map
