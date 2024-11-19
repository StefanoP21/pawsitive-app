import Image from 'next/image';
import Link from 'next/link';
import ContactInSocialNetwork from '../social/contact-social';
import { pages } from '@/constants/pages';

export default function Footer() {
  return (
    <footer className="bg-secondary-foreground text-white px-4 py-8 md:py-14">
      <div className="md:flex justify-between container mx-auto md:px-14">
        <div className="mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <Image
              alt="pawsitive"
              src="/pawsitive.svg"
              width={30}
              height={30}
              title="PawSitive"
            />
            <p className="font-bold text-center text-xl ml-2">PawSitive</p>
          </div>
          <div>
            <ul className="flex gap-6 font-medium mb-4">
              {pages.map((page, index) => {
                return (
                  <li key={index}>
                    <Link href={page.href} title={page.label} prefetch={false}>
                      {page.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mb-4">
            <p className="text-sm text-gray-400">hola@pawsitive.pe</p>
          </div>
          <p className="text-sm text-gray-400">
            © 2024 PawSitive. Todos los derechos reservados
          </p>
        </div>
        <ContactInSocialNetwork />
      </div>
    </footer>
  );
}
