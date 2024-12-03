import HouseList from '../components/house-list';
import {usersData} from "@/db/users/data";

export default function House() {
  return (
    <section className="container mx-auto flex flex-col gap-6 px-6 sm:px-0 py-12">
      <HouseList users={usersData} />
    </section>
  );
}
