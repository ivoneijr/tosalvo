'use server';
//
// import { DB } from '@/lib/db';
// import { redirect } from 'next/navigation';
//
// import { Rescued, Shelter } from '@prisma/client';

import { redirect } from 'next/navigation';

export const createShelter = async (formData: FormData) => {
  const name = formData.get('name');
  const description = formData.get('description');
  const address = formData.get('address');
  const address_url = formData.get('address_url');

  console.log('ae', { name, description, address, address_url });
  // TODO: SAVE TO DATABASE

  redirect('/');
};
