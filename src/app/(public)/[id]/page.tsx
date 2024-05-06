interface RescuedDetailsProps {
  params: {
    id: string;
  };
}

export default function RescuedDetails({ params: { id } }: RescuedDetailsProps) {
  return <>RescuedDetails {id}</>;
}
