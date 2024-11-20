import Image from 'next/image';
import { whyUs } from '@/constants/messages';

export default function WhyUs() {
  return (
    <section className="container mx-auto flex flex-col gap-12 px-6 sm:px-0 py-12">
      <h1 className="text-4xl font-bold mx-auto">
        ¿Por qué somos la mejor opción?
      </h1>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {whyUs.map((item, index) => (
          <article
            key={index}
            className="flex flex-col w-fit rounded-lg shadow-md sm:max-w-72"
          >
            <Image
              src={item.image}
              alt="Why us image"
              width={500}
              height={500}
              className="object-cover min-h-72 rounded-t-lg"
              loading="lazy"
            />
            <div className="flex flex-col gap-2 justify-center p-2">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
