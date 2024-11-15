export interface PetFriendly {
  id: number;
  title: string;
  adress: string;
  link_page: string;
  phone: string;
  pet_place_type_id: number;
  location_id: number;
  image_card: string;
  image_detail: null | string;
  description: string;
  price_range: string;
  schedule: string;
  food_type: string;
  location: Location;
}

export interface Location {
  id: number;
  latitude: null | string;
  longitude: null | string;
  country: string;
  city: string;
  department: string;
  zipcode: string;
  province: string;
  district: string;
  abreviated: null;
  user_id: null;
}
