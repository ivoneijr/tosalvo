import { useQuery } from '@tanstack/react-query';
import { getRescuedList } from '@/server/actions/rescued';

export function useGetRescued() {
  return useQuery({
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
}
