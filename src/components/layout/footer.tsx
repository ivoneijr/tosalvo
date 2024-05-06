import { FadeInWhenVisible } from '@/components/layout/fade-in-when-visible';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mt-12 w-full border-t py-5 text-center shadow-sm">
        <FadeInWhenVisible direction="up">
          <Link href="https://www.instagram.com/ivoneijr/">
            <p className="mt-6 text-sm opacity-50">© {new Date().getFullYear()} Ivo.</p>
          </Link>
        </FadeInWhenVisible>
      </div>
    </footer>
  );
}
