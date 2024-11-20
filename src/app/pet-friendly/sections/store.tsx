import StoreList from '../components/store-list';
import { petFriendlyData } from '@/db/pet-friendly/data';

export default function Store() {
  const petFriendlyRestaurants = petFriendlyData.filter(
    (store) => store.pet_place_type_id === 2
  );

  const petFriendlyStores = petFriendlyData.filter(
    (store) => store.pet_place_type_id === 1
  );

  const petFriendlyCoffee = petFriendlyData.filter(
    (store) => store.pet_place_type_id === 3
  );

  return (
    <section className="container mx-auto flex flex-col gap-6 px-6 sm:px-0 py-12">
      <StoreList stores={petFriendlyRestaurants} />
      <StoreList stores={petFriendlyCoffee} />
      <StoreList stores={petFriendlyStores} />
    </section>
  );
}
