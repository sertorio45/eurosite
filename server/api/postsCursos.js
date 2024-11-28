export default defineEventHandler(async (event) => {
  const connection = event.context.connection;

  try {
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

    const coursesMap = {};

    coursesWithDetails.forEach(row => {
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

      if (row.contentId && !coursesMap[row.courseId].contents.some(content => content.id === row.contentId)) {
        coursesMap[row.courseId].contents.push({
          id: row.contentId,
          conteudo: row.content
        });
      }

      if (row.salaryId && !coursesMap[row.courseId].salaries.some(salary => salary.id === row.salaryId)) {
        coursesMap[row.courseId].salaries.push({
          id: row.salaryId,
          cargo: row.jobTitle,
          salario: row.salary
        });
      }
    });

    const coursesWithDetailsArray = Object.values(coursesMap);

    return coursesWithDetailsArray;
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Erro ao carregar dados',
    });
  }
});
