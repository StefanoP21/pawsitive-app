'use client';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { petFriendlyData } from '@/db/pet-friendly/data';
import { TbWorldShare } from 'react-icons/tb';

export default function Detail() {
  const params = useParams();
  const storeId = params.id as string;
  const store = petFriendlyData.find((store) => store.id === Number(storeId));

  return (
    <>
      <section className="relative w-full">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover blur-sm z-0"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_ASSETS_URL}/${store?.image_detail})`,
          }}
        />
        <div className="absolute inset-0 bg-black opacity-60 z-0" />
        <div className="relative z-10">
          <Image
            src={`${process.env.PUBLIC_ASSETS_URL}/${store?.image_detail}`}
            alt={store ? store.title : 'Store image'}
            width={500}
            height={500}
            className="object-contain w-full h-80 sm:h-96"
            loading="lazy"
          />
        </div>
      </section>
      <section className="container mx-auto flex flex-col gap-6 px-6 sm:px-0 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <article className="grid col-span-1 sm:col-span-2 gap-2 border border-chart-5/50 rounded-lg p-5">
            <div>
              <h1 className="text-4xl font-bold text-primary">
                {store?.title}
              </h1>
              <p className="text-gray-600 text-lg font-semibold">
                {store?.location?.city}
              </p>
            </div>
            <div>
              <h2 className="text-chart-5 text-2xl font-semibold">
                Descripción del lugar
              </h2>
              <p className="text-gray-600">{store?.description}</p>
            </div>
          </article>

          <article className="grid gap-2 border border-chart-5/50 rounded-lg p-5">
            <h2 className="text-chart-5 text-2xl font-semibold">Detalles</h2>
            <div className="text-gray-600">
              <h3 className="text-lg font-semibold">Tipos de comida</h3>
              <p>{store?.food_type}</p>
            </div>
            <div className="text-gray-600">
              <h3 className="text-lg font-semibold">Horario</h3>
              <p>{store?.schedule}</p>
            </div>
            <div className="text-gray-600">
              <h3 className="text-lg font-semibold">Rango de precio</h3>
              <p>{store?.price_range}</p>
            </div>
          </article>

          <article className="grid gap-2 border border-chart-5/50 rounded-lg p-5">
            <h2 className="text-chart-5 text-2xl font-semibold">Contácto</h2>
            <div className="text-gray-600">
              <h3 className="text-lg font-semibold">Teléfono</h3>
              <p>{store?.phone}</p>
            </div>
            {store?.link_page && (
              <div className="text-gray-600">
                <h3 className="text-lg font-semibold">Página</h3>
                <a
                  href={store?.link_page}
                  target="_blank"
                  className="text-chart-5"
                >
                  <TbWorldShare size={30} />
                </a>
              </div>
            )}
          </article>

          <article className="grid col-span-1 sm:col-span-2 gap-2 border border-chart-5/50 rounded-lg p-5">
            <h2 className="text-chart-5 text-2xl font-semibold">Ubicación</h2>
            <div className="text-gray-600">
              <h3 className="text-lg font-semibold">Dirección</h3>
              <p>{store?.adress}</p>
              <p>Lima - Lima - {store?.location?.district}</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
