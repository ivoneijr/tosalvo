'use client';

// import { FadeInWhenVisible } from '@/components/layout/fade-in-when-visible';
// import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useNewMissingPersonModal } from '@/hooks/use-new-missing-person-modal';

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
  const modal = useNewMissingPersonModal();
  return (
    <footer className="h-24">
      <div className="h-full w-full border-t text-center shadow-sm ">
        <Button className="h-full w-full rounded-none text-3xl" onClick={modal.onOpen}>
          SALVEI ALGUÉM
        </Button>
      </div>
    </footer>
  );
}
