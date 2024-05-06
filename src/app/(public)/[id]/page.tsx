import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface RescuedDetailsProps {
  params: {
    id: string;
  };
}

export default function RescuedDetails({ params: { id } }: RescuedDetailsProps) {
  console.log(id);

  return <div className="p-12">detalhes</div>;
}
