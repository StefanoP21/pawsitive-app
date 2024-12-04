"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { usersData } from "@/db/users/data";
import { User } from "@/db/users/model";

export default function Detail() {
  const params = useParams();
  const userId = params.id as string;
  const user = usersData.find((user) => user.id === Number(userId)) as User;

  return (
    <>
      <section className="relative w-full">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover blur-sm z-0"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_ASSETS_URL}/${user?.houser?.galleries[0]?.photo})`,
          }}
        />
        <div className="absolute inset-0 bg-black opacity-60 z-0" />
        <div className="relative z-10">
          <Image
            src={`${process.env.PUBLIC_ASSETS_URL}/${user?.houser?.galleries[0]?.photo}`}
            alt={user ? user.name : "user image"}
            width={500}
            height={500}
            className="object-contain w-full h-80 sm:h-96"
            loading="lazy"
          />
        </div>
      </section>
      <section className="container mx-auto flex flex-col gap-6 px-6 sm:px-0 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-500">
          <article className="grid col-span-1 sm:col-span-2 gap-2 border border-chart-5/50 rounded-lg p-5">
            <div>
              <h1 className="text-4xl font-bold text-chart-3">
                {user?.houser.publication.title}
              </h1>
              <p className="text-gray-600 text-lg">
                {user?.location?.district}
              </p>
            </div>
            <div>
              <h2 className="text-chart-5 text-2xl font-semibold">
                Anfitrión(a)
              </h2>
              <p className="text-gray-600 mb-1">{`${user?.name} ${user?.last_name}`}</p>
              <Image
                src={`${process.env.PUBLIC_ASSETS_URL}/${user.photo}`}
                alt={user.name}
                width={50}
                height={50}
                className="object-cover w-12 h-12 rounded-full shadow-md"
                loading="lazy"
              />
            </div>
          </article>

          <article className="grid gap-2 border border-chart-5/50 rounded-lg p-5">
            <h2 className="text-chart-5 text-2xl font-semibold">Detalles</h2>
            <div className="text-gray-600">
              <h3 className="text-lg font-semibold">Tipos de servicio</h3>
              <p>
                {user.houser.type_exclusive
                  ? "Casa Exclusiva"
                  : "Casa Compartida"}
              </p>
            </div>
          </article>

          <article className="grid col-span-1 sm:col-span-3 gap-2 border border-chart-5/50 rounded-lg p-5">
            <h2 className="text-chart-5 text-2xl font-semibold">Servicios</h2>
            {user?.houser.houser_services?.map((service, index) => (
              <div key={index} className="flex gap-4">
                <div className="text-gray-600">
                  <li>
                    {service?.service.name}:{" "}
                    <span className="text-chart-3 font-semibold">
                      {service.service.money.symbol}
                      {Number(service.service.gross_comission) +
                        Number(service.service.houser_comission)}
                    </span>
                  </li>
                </div>
              </div>
            )) ?? "No disponible"}
          </article>
        </div>
      </section>
    </>
  );
}
