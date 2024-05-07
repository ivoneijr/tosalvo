'use server';

import { DB } from '@/lib/db';

// import { Rescued, Shelter } from '@prisma/client';
// type RescuedWithShelter = Rescued & { shelter?: Shelter };

export const getRescuedList = async () => {
  try {
    const data = await DB.rescued.findMany({
      include: {
        shelter: true,
      },
    });

    return { success: data };
  } catch (e) {
    return { error: 'Could not fetch rescued' };
  }
};
