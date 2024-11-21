export interface Hotel {
  id: number;
  image: string;
  name: string;
  description: string;
  service_type: string;
  schedule: string;
  phoneContact: string;
  address: Address[] | null;
  email: string | null;
  minPrice: number;
  maxPrice: number;
  link_page: string;
  location: Location;
}

export interface Location {
  country: string;
  department: string;
  province: string;
  district: string;
}

export interface Address {
  detail: string;
  link_map: string | null;
}
