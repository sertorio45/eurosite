import mysql from 'mysql2/promise';

export default defineEventHandler(async (event) => {
  // Cria a conexão com o banco de dados
  const connection = await mysql.createConnection({
    host: process.env.NUXT_DB_SERVERNAME,
    user: process.env.NUXT_NUXT_DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.NUXT_DB_DATABASE,
  });

  try {
    // Consulta para unir 'cursos', 'cursos_conteudo' e 'cursos_mediasalarial'
    const [coursesWithDetails] = await connection.execute(`
      SELECT 
        c.id AS courseId, 
        c.titulo AS title, 
        c.imagem_principal AS image, 
        DATE_FORMAT(c.dia, '%d/%m/%Y') AS date, 
        c.metodologia,
        c.mercadotrabalho,
        c.ativo,
        c.subtitulo,
        c.video,
        c.slug,
        cc.id AS contentId,
        cc.conteudo AS content,
        cm.id AS salaryId,
        cm.cargo AS jobTitle,
        cm.salario AS salary
      FROM cursos c
      LEFT JOIN cursos_conteudo cc ON c.id = cc.id_curso AND cc.ativo = 1
      LEFT JOIN cursos_mediasalarial cm ON c.id = cm.id_curso AND cm.ativo = 1
      ORDER BY c.dia DESC
    `);

    // Organiza os dados em um formato mais estruturado
    const coursesMap = {};

    coursesWithDetails.forEach(row => {
      // Verifica se o curso já existe no mapa, caso contrário, adiciona
      if (!coursesMap[row.courseId]) {
        coursesMap[row.courseId] = {
          id: row.courseId,
          title: row.title,
          image: row.image,
          date: row.date,
          metodologia: row.metodologia,
          mercadotrabalho: row.mercadotrabalho,
          ativo: row.ativo,
          subtitulo: row.subtitulo,
          video: row.video,
          slug: row.slug,
          contents: [],
          salaries: []
        };
      }

      // Adiciona o conteúdo se ainda não estiver presente
      if (row.contentId && !coursesMap[row.courseId].contents.some(content => content.id === row.contentId)) {
        coursesMap[row.courseId].contents.push({
          id: row.contentId,
          conteudo: row.content
        });
      }

      // Adiciona a média salarial se ainda não estiver presente
      if (row.salaryId && !coursesMap[row.courseId].salaries.some(salary => salary.id === row.salaryId)) {
        coursesMap[row.courseId].salaries.push({
          id: row.salaryId,
          cargo: row.jobTitle,
          salario: row.salary
        });
      }
    });

    // Converte o objeto de mapeamento para um array de cursos
    const coursesWithDetailsArray = Object.values(coursesMap);

    // Retorna os cursos com o conteúdo e as médias salariais
    return coursesWithDetailsArray;
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
    throw new Error('Erro ao carregar dados');
  } finally {
    // Fecha a conexão
    await connection.end();
  }
});
