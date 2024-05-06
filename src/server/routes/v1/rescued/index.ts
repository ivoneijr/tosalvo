import { DB } from '@/lib/db';

const list = async () => {
  const data = await DB.rescued.findMany();

  return data;
};

export const rescued = {
  list,
};
