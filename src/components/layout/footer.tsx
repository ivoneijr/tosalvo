import { FadeInWhenVisible } from '@/components/layout/fade-in-when-visible';

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mt-12 w-full border-t py-5 text-center shadow-sm">
        <FadeInWhenVisible direction="up">
          <p className="mt-6 text-sm opacity-50">
            © {new Date().getFullYear()} Prestativ. All rights reserved.
          </p>
        </FadeInWhenVisible>
      </div>
    </footer>
  );
}
