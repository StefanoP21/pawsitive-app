'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import useIsMobile from '@/shared/hooks/useIsMobile';
import { Button } from '@/components/ui/button';
import { pages } from '@/constants/pages';
import AnalyticHandler from '@/core/analytics/analytics-handler';
import { askForServiciesAnalytics } from '@/core/analytics';
import { wspMessageContent, wspNumber } from '@/constants/messages';
import { FaWhatsapp } from 'react-icons/fa';

export default function HeaderMobile() {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  if (!isMobile) return null;

  return (
    <div className="text-white">
      <AiOutlineMenu onClick={() => setOpen(!open)} size={20} />
      {createPortal(
        <AnimatePresence>
          {open && (
            <div
              role="menubar"
              className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex z-20"
            >
              {open && (
                <motion.div
                  initial={{ x: -200 }}
                  animate={{ x: 0 }}
                  exit={{ x: -400 }}
                  transition={{ type: 'keyframes', duration: 0.3 }}
                  role="menu"
                  className="mr-auto h-full min-w-min bg-white shadow-sm p-6 min-h-screen"
                >
                  <header className="flex gap-4 items-center justify-between">
                    <Link href={'/'} className="flex items-center">
                      <Image
                        alt="logo"
                        src="/pawsitive.svg"
                        width={25}
                        height={25}
                      />
                      <p className="font-semibold text-center text-xl ml-2">
                        Paw<span className="text-primary">Sitive</span>
                      </p>
                    </Link>
                    <IoClose
                      onClick={() => setOpen(false)}
                      size={25}
                      className="text-primary-dark cursor-pointer"
                    />
                  </header>
                  <ul className="flex flex-col gap-6 mt-8 font-semibold">
                    {pages.map((page, index) => {
                      return (
                        <li key={index}>
                          <Link
                            href={page.href}
                            title={page.label}
                            prefetch={false}
                          >
                            {page.label}
                          </Link>
                        </li>
                      );
                    })}
                    <li>
                      <AnalyticHandler payload={askForServiciesAnalytics}>
                        <a
                          target="_blank"
                          href={`https://wa.me/${wspNumber}/?text=${encodeURIComponent(
                            wspMessageContent
                          )}`}
                        >
                          <Button>
                            <FaWhatsapp size={25} />
                            Contáctanos
                          </Button>
                        </a>
                      </AnalyticHandler>
                    </li>
                  </ul>
                </motion.div>
              )}
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
