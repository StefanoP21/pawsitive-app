import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { wspMessageContent, wspNumber } from '@/constants/messages';

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat hero-background"
      style={{ backgroundImage: "url('/hero/banner.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-65"></div>
      <div className="relative container mx-auto flex flex-col gap-8 items-start justify-center text-white px-6 hero-background">
        <div className="flex items-center gap-2">
          <Image
            src="/pawsitive.svg"
            alt="PawSitive Logo"
            width={40}
            height={40}
            className="w-10 h-10"
            loading="lazy"
          />
          <h2 className="text-4xl font-semibold">PawSitive</h2>
        </div>
        <h1 className="text-3xl sm:text-6xl font-bold">
          Descubre los mejores <br /> servicios para tus mascotas
        </h1>
        <div className="flex flex-wrap gap-4">
          <Link
            href={`https://wa.me/${wspNumber}/?text=${encodeURIComponent(
              wspMessageContent
            )}`}
            target="_blank"
          >
            <Button
              size={'lg'}
              className="bg-chart-2 hover:bg-chart-2 hover:scale-105 transform transition-transform duration-200 ease-in-out"
            >
              <FaWhatsapp size={30} />
              WhatsApp
            </Button>
          </Link>
          <Link
            href="https://www.instagram.com/pawsitive_center/"
            target="_blank"
          >
            <Button
              size={'lg'}
              className="bg-chart-1 hover:bg-chart-1 hover:scale-105 transform transition-transform duration-200 ease-in-out"
            >
              <FaInstagram size={20} />
              Instagram
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
