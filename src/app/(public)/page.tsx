import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getQueryClient } from '@/lib/query';

import { getRescuedList } from '@/server/actions/rescued';
import PageLayout from '@/components/layout/page-layout';
import Table from '@/app/(public)/table';
import Filtering from '@/app/(public)/filtering';

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['rescued'],
    queryFn: async () => {
      const people = await getRescuedList();

      if (people.success) {
        return people.success;
      }

      if (people.error) {
        throw new Error(people.error);
      }
    },
  });

  return (
    <PageLayout
      title="Encontre pessoas"
      subtitle="Aqui voce vai encontrar a lista de pessoas resgatadas junto com o local e telefone para contato."
    >
      <HydrationBoundary state={dehydrate(queryClient)}>
        {/* filtering */}
        <Filtering />

        {/* table */}

        <Table />
      </HydrationBoundary>
    </PageLayout>
  );
}
