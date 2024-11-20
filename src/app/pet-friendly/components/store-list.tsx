import Image from 'next/image';
import { PetFriendly } from '@/db/pet-friendly/model';

interface StoreListProps {
  stores: PetFriendly[];
}

export default function StoreList({ stores }: StoreListProps) {
  let storeType: string;

  switch (stores[0].pet_place_type_id) {
    case 1:
      storeType = 'Comercios';
      break;
    case 2:
      storeType = 'Restaurantes';
      break;
    case 3:
      storeType = 'Cafeterías';
      break;
    default:
      storeType = 'Otros';
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-bold text-primary">{storeType}</h1>
      <div className="flex flex-wrap gap-4 items-center">
        {stores.map((item, index) => (
          <article
            key={index}
            className="flex flex-col gap-2 w-full sm:w-44 lg:w-48 h-auto hover:bg-primary/10 p-2 rounded-2xl"
          >
            <Image
              src={`${process.env.PUBLIC_ASSETS_URL}/${item.image_card}`}
              alt={item.title}
              width={200}
              height={200}
              className="object-cover w-full h-60 rounded-xl shadow-md"
            />
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold text-gray-700 truncate">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.location?.district} - {item.location?.city}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}