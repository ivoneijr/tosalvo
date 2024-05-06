import { DB } from '@/lib/db';

const list = async () => {
  const data = await DB.rescued.findMany({
    include: {
      shelter: true,
    },
  });

  return data;
};

export const rescued = {
  list,
};
