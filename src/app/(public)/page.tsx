import { getRescuedList } from '@/server/actions/rescued';
import PageLayout from '@/components/layout/page-layout';
import Table from '@/app/(public)/table';
import Filtering from '@/app/(public)/filtering';

interface Props {
  searchParams: { name: string };
}

export default async function Home(props: Props) {
  const { success } = await getRescuedList({ q: props.searchParams?.name });

  return (
    <PageLayout
      title="Encontre pessoas"
      subtitle="Aqui voce vai encontrar a lista de pessoas resgatadas junto com o local e telefone para contato."
    >
      <Filtering />
      {success && <Table items={success} />}
    </PageLayout>
  );
}
