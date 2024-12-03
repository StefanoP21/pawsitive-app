import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { User } from "@/db/users/model";

interface HouselListProps {
  users: User[];
}

export default function HouseList({ users }: HouselListProps) {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-bold text-primary">Cuidadores</h1>
      <div className="flex flex-wrap gap-4 items-center">
        {users.map((item, index) => (
          <article
            key={index}
            className="flex flex-col gap-2 w-full sm:max-w-[31rem] h-auto hover:bg-primary/10 p-2 rounded-2xl border-2"
          >
            <Link
              href={`/houses/${item.name
                ?.replace(/[^a-zA-Z0-9-]/g, "-")
                .toLowerCase()}/${item.id}`}
            >
              <Image
                src={`${process.env.PUBLIC_ASSETS_URL}/${item.houser.galleries[0]?.photo}`}
                alt={item.name}
                width={500}
                height={500}
                className="object-cover w-full h-60 rounded-xl shadow-md"
                loading="lazy"
              />
            </Link>
            <div className="flex flex-col gap-2 p-2 cursor-default text-gray-500">
              <div className="flex flex-col gap-0">
                <span className="font-semibold">
                  {item.houser.type_exclusive
                    ? "Casa Exclusiva"
                    : "Casa Compartida"}
                </span>
                <h3 className="text-xl font-semibold text-chart-5 truncate">
                  {item.houser.publication.title}
                </h3>
                <p className="inline-flex items-center gap-1 font-semibold text-sm">
                  <FaLocationDot size={14} /> {item.location.district}
                </p>
              </div>
              <div className=" font-semibold text-sm">
                {item.houser.houser_services
                  .slice(0, 2)
                  .map((service, index) => (
                    <ul key={index}>
                      <li>
                        {service.service.name}:
                        <span className="text-chart-3">
                          {service.service.money.symbol}
                          {Number(service.service.gross_comission) +
                            Number(service.service.houser_comission)}
                        </span>{" "}
                        por día
                      </li>
                    </ul>
                  ))}
              </div>
              <div className="w-auto h-12 flex items-center justify-end gap-2">
                <h4 className="font-semibold text-chart-3">{item.name}</h4>
                <Image
                  src={`${process.env.PUBLIC_ASSETS_URL}/${item.photo}`}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="object-cover w-12 h-12 rounded-full shadow-md"
                  loading="lazy"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
