import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  // 기존 데이터 전체 삭제 (관계상 순서: Comment → Product/Article)
  await prisma.comment.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.article.deleteMany({});

  // 신규 시딩 데이터 삽입
  const product1 = await prisma.product.create({
    data: {
      name: '맥북 에어 M1',
      description: '배터리 효율 86% 제품입니다.',
      price: 200000,
      tags: ['전자기기'],
    },
  })

  const product2 = await prisma.product.create({
    data: {
      name: '커피',
      description: '스타벅스 원두인데 3번밖에 안 먹었어요',
      price: 5000,
      tags: ['식품'],
    },
  })

  const article1 = await prisma.article.create({
    data: {
      title: '리액트 싫어',
      content: 'jsx에서는 class 대신 className을 써야 해요',
    },
  })

  const article2 = await prisma.article.create({
    data: {
      title: '영상편집 외주 받습니다',
      content: '분당 20,000원, 5~10분 분량으로 제작합니다.',
    },
  })

  // 댓글 생성
  await prisma.comment.createMany({
    data: [
      { content: '대충 맥북 좋다는 댓글', productId: product1.id },
      { content: '네고 안 되나요?', productId: product2.id },
      { content: 'htmlFor도 정말 싫어요', articleId: article1.id },
      { content: '비밀 댓글입니다.', articleId: article2.id },
    ],
  })

  console.log('✅ 시딩 완료');
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  })