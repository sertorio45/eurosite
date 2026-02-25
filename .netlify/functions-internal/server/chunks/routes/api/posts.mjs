import { d as defineEventHandler, u as useRuntimeConfig } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'mysql2/promise';
import 'nodemailer';
import '@dword-design/functions';
import 'node:url';
import 'ipx';

const posts = defineEventHandler(async (event) => {
  useRuntimeConfig();
  const connection = event.context.connection;
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
