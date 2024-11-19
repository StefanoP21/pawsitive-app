import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { wspMessageContent, wspNumber } from '@/constants/messages';

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/banner.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative container mx-auto flex flex-col gap-6 items-start text-white px-6 sm:px-0 py-20 sm:py-40">
        <div className="flex items-center gap-2">
          <Image
            src="/pawsitive.svg"
            alt="PawSitive Logo"
            width={30}
            height={30}
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <h1 className="text-xl sm:text-2xl font-bold leading-tight">
            PawSitive
          </h1>
        </div>
        <p className="text-2xl sm:text-4xl font-semibold">
          Descubre los mejores <br /> servicios para tu mascota
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href={`https://wa.me/${wspNumber}/?text=${encodeURIComponent(
              wspMessageContent
            )}`}
            target="_blank"
          >
            <Button size={'lg'} className="bg-green-600 hover:bg-green-700">
              <FaWhatsapp size={30} />
              Chat on WhatsApp
            </Button>
          </Link>
          <Link
            href="https://www.instagram.com/pawsitive_center/"
            target="_blank"
          >
            <Button size={'lg'} className="bg-pink-600 hover:bg-pink-700">
              <FaInstagram size={20} />
              Visit our Instagram
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
