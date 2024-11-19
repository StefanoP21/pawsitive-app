import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import HeaderMobile from './header-mobile';
import { Button } from '@/components/ui/button';
import { wspMessageContent, wspNumber } from '@/constants/messages';
import { pages } from '@/constants/pages';
import { askForServiciesAnalytics } from '@/core/analytics';
import AnalyticHandler from '@/core/analytics/analytics-handler';

export default function Header() {
  return (
    <header
      data-navigator="true"
      id="header-navigator"
      className="top-0 sm:drop-shadow-sm z-20 fixed bg-primary-dark md:bg-accent w-full h-header transition-all"
    >
      <div className="container mx-auto flex items-center justify-start md:justify-between px-4 sm:px-0 py-2 h-16">
        <HeaderMobile />
        <div className="flex items-center gap-4">
          <Link href={'/'} className="flex items-center">
            <Image
              alt="logo"
              src="/pawsitive.svg"
              width={30}
              height={30}
              title="PawSitive"
              className="hidden md:block"
            />
            <p className="font-semibold text-center text-xl text-white md:text-inherit ml-2">
              Paw<span className="md:text-primary">Sitive</span>
            </p>
          </Link>
          <div className="w-0.5 h-7 bg-primary rounded-full hidden md:block" />
          <nav className="font-bold text-sm hidden md:block">
            <ul className="flex items-center gap-6">
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
          </nav>
        </div>
        <div className="items-center gap-4 hidden md:flex">
          <AnalyticHandler payload={askForServiciesAnalytics}>
            <a
              target="_blank"
              href={`https://wa.me/${wspNumber}/?text=${encodeURIComponent(
                wspMessageContent
              )}`}
            >
              <Button>
                <FaWhatsapp size={25} />
                Conversa con nosotros
              </Button>
            </a>
          </AnalyticHandler>
        </div>
      </div>
    </header>
  );
}
