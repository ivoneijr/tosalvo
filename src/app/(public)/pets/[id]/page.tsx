interface PetsDetailsProps {
  params: {
    id: string;
  };
}

export default function PetsDetails({ params: { id } }: PetsDetailsProps) {
  return <>PetsDetails {id}</>;
}
