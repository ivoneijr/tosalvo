interface SheltersDetailsProps {
  params: {
    id: string;
  };
}

export default function SheldtersDetails({ params: { id } }: SheltersDetailsProps) {
  return <>SheltersDetails {id}</>;
}
