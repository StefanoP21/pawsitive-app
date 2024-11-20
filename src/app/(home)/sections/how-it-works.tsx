import Image from 'next/image';
import { howItWorks } from '@/constants/messages';

export default function HowitWorks() {
  return (
    <div className="bg-primary/5">
      <section className="container mx-auto flex flex-col gap-12 px-6 sm:px-0 py-12">
        <h1 className="text-4xl font-bold mx-auto">¿Cómo funciona?</h1>
        <div className="flex flex-wrap gap-10 items-center justify-center">
          {howItWorks.map((item, index) => (
            <article
              key={index}
              className="flex flex-col gap-1 items-center w-fit sm:max-w-72 h-[340px]"
            >
              <Image
                src={item.image}
                alt="Dog image"
                width={500}
                height={500}
                className="object-contain w-fit h-28 p-2"
                loading="lazy"
              />
              <div className="border-4 border-primary rounded-xl px-4 py-2">
                <span className="text-primary text-xl font-bold">
                  {index + 1}
                </span>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center p-2">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-center text-gray-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
