import { hotelsData } from '@/db/hotels/data';
import HotelList from '../components/hotel-list';

export default function Hotel() {
  return (
    <section className="container mx-auto flex flex-col gap-6 px-6 sm:px-0 py-12">
      <HotelList hotels={hotelsData} />
    </section>
  );
}
