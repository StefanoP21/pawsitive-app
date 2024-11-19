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
          />
          <h1 className="text-4xl font-semibold">PawSitive</h1>
        </div>
        <p className="text-4xl sm:text-6xl font-bold">
          Descubre los mejores <br /> servicios para tus mascotas
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href={`https://wa.me/${wspNumber}/?text=${encodeURIComponent(
              wspMessageContent
            )}`}
            target="_blank"
          >
            <Button size={'lg'} className="bg-primary">
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
              className="bg-primary-dark hover:bg-primary-dark"
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
