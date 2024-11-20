import Image from 'next/image';
import { Hotel } from '@/db/hotels/model';
import Link from 'next/link';

interface HotelListProps {
  hotels: Hotel[];
}

export default function HotelList({ hotels }: HotelListProps) {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-bold text-primary">Hoteles</h1>
      <div className="flex flex-wrap gap-4 items-center">
        {hotels.map((item, index) => (
          <article
            key={index}
            className="flex flex-col gap-4 w-full sm:max-w-[18rem] h-auto hover:bg-primary/10 p-2 rounded-2xl"
          >
            <Link href={item.link_page} target="_blank">
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={500}
                className="object-cover w-full h-60 rounded-xl shadow-md"
                loading="lazy"
              />
            </Link>
            <div className="flex flex-col gap-1 cursor-default">
              <h3 className="text-xl font-semibold text-gray-700 truncate">
                {item.name}
              </h3>
              <p className="text-gray-600">{item.address}</p>
              <p className="text-gray-600 italic">{item.phoneContact}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
