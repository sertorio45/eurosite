import { d as defineEventHandler, u as useRuntimeConfig, c as createError } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'mysql2/promise';
import 'nodemailer';
import '@dword-design/functions';
import 'node:url';
import 'ipx';

const postsAlunosContratados = defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig();
    const connection = event.context.connection;
    if (!connection) {
      throw createError({
        statusCode: 500,
        statusMessage: "Falha na conex\xE3o com o banco de dados"
      });
    }
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
    console.error("Erro ao buscar alunos contratados:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Erro interno do servidor ao buscar dados dos alunos contratados"
    });
  }
});

export { postsAlunosContratados as default };
//# sourceMappingURL=postsAlunosContratados.mjs.map
