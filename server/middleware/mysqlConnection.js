import mysql from 'mysql2/promise';

export default defineEventHandler(async (event) => {

  // Adiciona conexão ao banco no contexto do evento
  event.context.connection = await mysql.createConnection({
    host: '162.214.100.2',
    user: 'euroanglo_admin',
    password: 'Agenciagsstudio1993#@!',
    database: 'euroanglo_site',
  });
});
