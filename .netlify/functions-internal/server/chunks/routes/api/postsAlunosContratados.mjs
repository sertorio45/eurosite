import { d as defineEventHandler } from '../../runtime.mjs';
import mysql from 'mysql2/promise';
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
    host: "162.214.100.2",
    user: "euroanglo_admin",
    password: "Agenciagsstudio1993#@!",
    database: "euroanglo_site"
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
