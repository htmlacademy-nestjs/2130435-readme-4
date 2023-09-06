import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fillDb() {
  const tag = await prisma.tag.upsert({
    where: { tagId: 1 },
    update: {},
    create: {
      title: 'Тег 1',
    },
  });


await prisma.post.upsert({
    where: { postId: 1 },
    update: {},
    create: {
      tags: {
        connect: tag.tagId
      },
      title: 'Видео',
      link: 'https://www.youtube.com/watch?v=piqdKWNnqBo',
      userId: '1',
      type: 'video',
      status: 'published',
    },
  });

  await prisma

  await prisma.post.upsert({
    where: { postId: 2 },
    update: {},
    create: {
      title: 'Текст',
      announcement: 'Анонс',
      description: 'Описание',
      userId: '2',
      type: 'text',
      comments: {
        create: [
          {
            message: 'Вау!',
            userId: '2',
          },
        ],
      },
    },
  });

  await prisma.post.upsert({
    where: { postId: 3 },
    update: {},
    create: {
      authorPost: 'Автор цитаты',
      description: 'Цитата',
      userId: '3',
      type: 'quote',
    },
  });

  await prisma.post.upsert({
    where: { postId: 4 },
    update: {},
    create: {
      photo: 'https://loremflickr.com/640/360',
      userId: '4',
      type: 'photo',
    },
  });

  await prisma.post.upsert({
    where: { postId: 5 },
    update: {},
    create: {
      link: 'https://www.youtube.com/watch?v=piqdKWNnqBo',
      description: 'Описание ссылки',
      userId: '5',
      type: 'link',
    },
  });

  console.info('🤘️ Database was filled');
}

fillDb()
  .catch(async (err) => {
    console.error(err);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
