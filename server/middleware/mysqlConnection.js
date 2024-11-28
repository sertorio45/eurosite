import mysql from 'mysql2/promise';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  // Adiciona conexão ao banco no contexto do evento
  event.context.connection = await mysql.createConnection({
    host: '162.214.100.2',
    user: 'euroanglo_admin',
    password: 'Agenciagsstudio1993#@!',
    database: 'euroanglo_site',
    connectTimeout: 1000 // 10 segundos
  });
  

  // Garante o fechamento da conexão ao final do ciclo
  event.res.on('finish', async () => {
    if (event.context.connection) {
      await event.context.connection.end();
    }
  });
});
