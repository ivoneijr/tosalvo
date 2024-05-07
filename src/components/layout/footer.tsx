'use client';

// import { FadeInWhenVisible } from '@/components/layout/fade-in-when-visible';
// import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useNewMissingPersonModal } from '@/hooks/use-new-missing-person-modal';
import { useNewShelterModal } from '@/hooks/use-new-shelter-modal';

// export default function Footer() {
//   return (
//     <footer className="mt-auto">
//       <div className="mt-12 w-full border-t py-5 text-center shadow-sm">
//         <FadeInWhenVisible direction="up">
//           <Link href="https://www.instagram.com/ivoneijr/">
//             <p className="mt-6 text-sm opacity-50">© {new Date().getFullYear()} Ivo.</p>
//           </Link>
//         </FadeInWhenVisible>
//       </div>
//     </footer>
//   );
// }

export default function Footer() {
  const missingPersonModal = useNewMissingPersonModal();
  const shelterModal = useNewShelterModal();

  return (
    <footer className="h-24">
      <div className="flex h-full w-full justify-between gap-2 border-t px-2 pb-2 text-center shadow-sm">
        <Button
          variant="secondary"
          className="h-full w-full rounded-none text-3xl"
          onClick={shelterModal.onOpen}
          disabled
        >
          Novo Abrigo
        </Button>
        <Button className="h-full w-full rounded-none text-3xl" onClick={missingPersonModal.onOpen}>
          Novo Resgate
        </Button>
      </div>
    </footer>
  );
}
