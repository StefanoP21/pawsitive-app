'use client';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { TbWorldShare } from 'react-icons/tb';
import { hotelsData } from '@/db/hotels/data';
import { Hotel } from '@/db/hotels/model';

export default function Detail() {
  const params = useParams();
  const hotelId = params.id as string;
  const hotel = hotelsData.find(
    (hotel) => hotel.id === Number(hotelId)
  ) as Hotel;

  return (
    <>
      <section className="relative w-full">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover blur-sm z-0"
          style={{
            backgroundImage: `url(${hotel?.image})`,
          }}
        />
        <div className="absolute inset-0 bg-black opacity-60 z-0" />
        <div className="relative z-10">
          <Image
            src={hotel?.image}
            alt={hotel ? hotel.name : 'hotel image'}
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
              <h1 className="text-4xl font-bold text-primary">{hotel?.name}</h1>
              <p className="text-gray-600 text-lg font-semibold">
                {hotel?.location?.district}
              </p>
            </div>
            <div>
              <h2 className="text-chart-5 text-2xl font-semibold">
                Descripción del lugar
              </h2>
              <p className="text-gray-600">{hotel?.description}</p>
            </div>
          </article>

          <article className="grid gap-2 border border-chart-5/50 rounded-lg p-5">
            <h2 className="text-chart-5 text-2xl font-semibold">Detalles</h2>
            <div className="text-gray-600">
              <h3 className="text-lg font-semibold">Tipos de servicio</h3>
              <p>{hotel.service_type}</p>
            </div>
            <div className="text-gray-600">
              <h3 className="text-lg font-semibold">Horario</h3>
              <p>{hotel?.schedule}</p>
            </div>
            <div className="text-gray-600">
              <h3 className="text-lg font-semibold">Rango de precio</h3>
              <p>
                S/. {hotel?.minPrice} - S/. {hotel?.maxPrice}
              </p>
            </div>
          </article>

          <article className="grid gap-2 border border-chart-5/50 rounded-lg p-5">
            <h2 className="text-chart-5 text-2xl font-semibold">Contácto</h2>
            {hotel?.email && (
              <div className="text-gray-600">
                <h3 className="text-lg font-semibold">Correo</h3>
                <p>{hotel?.email}</p>
              </div>
            )}
            <div className="text-gray-600">
              <h3 className="text-lg font-semibold">Teléfono</h3>
              <p>{hotel?.phoneContact}</p>
            </div>
            <div className="text-gray-600">
              <h3 className="text-lg font-semibold">Página</h3>
              <a
                href={hotel?.link_page}
                target="_blank"
                className="text-chart-5"
              >
                <TbWorldShare size={30} />
              </a>
            </div>
          </article>

          <article className="grid col-span-1 sm:col-span-2 gap-2 border border-chart-5/50 rounded-lg p-5">
            <h2 className="text-chart-5 text-2xl font-semibold">Ubicación</h2>
            {hotel?.address?.map((address, index) => (
              <div key={index} className="flex gap-4">
                <div className="text-gray-600">
                  <h3 className="text-lg font-semibold">Dirección</h3>
                  <p>{address?.detail}</p>
                  <p>
                    {hotel?.location?.department} - {hotel?.location?.province}{' '}
                    - {hotel?.location?.district}
                  </p>
                </div>
                <div className="text-gray-600">
                  <h3 className="text-lg font-semibold">Mapa</h3>
                  <a
                    href={address?.link_map ?? undefined}
                    target="_blank"
                    className="text-chart-5"
                  >
                    <FaMapMarkedAlt size={30} />
                  </a>
                </div>
              </div>
            )) ?? 'No disponible'}
          </article>
        </div>
      </section>
    </>
  );
}
