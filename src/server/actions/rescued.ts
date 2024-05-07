'use server';

import { DB } from '@/lib/db';
import { redirect } from 'next/navigation';

import { Rescued, Shelter } from '@prisma/client';
export type RescuedWithShelter = Rescued & { shelter?: Shelter | null };

export interface GetRescuedListOptions {
  q: string | null;
}

export const getRescuedList = async (options: GetRescuedListOptions) => {
  try {
    const data = await DB.rescued.findMany({
      where: {
        name: {
          contains: options.q ?? '',
          mode: 'insensitive',
        },
      },
      include: {
        shelter: true,
      },
    });

    return { success: data };
  } catch (e) {
    return { error: 'Não encontrado.' };
  }
};

export const updateFiltering = async (formData: FormData) => {
  const name = formData.get('name');

  if (!name) {
    redirect('/');
  }

  const params = new URLSearchParams([['name', `${name}`]]);

  redirect(`/?${params}`);
};

export const createRescued = async (formData: FormData) => {
  const name = formData.get('name') as string;
  const contact = formData.get('contact') as string;
  const description = formData.get('description') as string;

  try {
    const newRescued = await DB.rescued.create({
      data: {
        name,
        contact,
        description,
      },
    });

    if (newRescued) {
      redirect('/');
    }
  } catch (e) {
    console.error('createRescued: ', e);
    return;
  }
};
