import Image from 'next/image';
import { whyUs } from '@/constants/messages';

export default function WhyUs() {
  return (
    <section className="container mx-auto flex flex-col gap-8 px-6 sm:px-0 py-10">
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
              src={`/img/${item.image}`}
              alt="Why Us"
              width={400}
              height={300}
              className="object-cover min-h-72 rounded-t-lg"
            />
            <div className="flex flex-col gap-2 justify-center p-2">
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
