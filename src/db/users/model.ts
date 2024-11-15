export interface User {
  id: number;
  name: string;
  last_name: string;
  photo: string | null;
  houser: Houser;
  location: Location;
}

export interface Houser {
  id: number;
  houser_type: string | null;
  inmediate_reservation: number;
  user_id: number;
  type_share: number | null;
  type_exclusive: number | null;
  type_delivery: number | null;
  availability: null;
  houser_services: HouserService[];
  publication: Publication;
  qualifications: unknown[];
  bookings: Booking[];
  galleries: Gallery[];
}

export interface Booking {
  id: number;
  state: number;
  feedback_level: number;
}

export interface Gallery {
  houser_id: number;
  photo: string;
}

export interface HouserService {
  id: number;
  service_id: number;
  service: Service;
}

export interface Service {
  id: number;
  name: string;
  gross_comission: string;
  houser_comission: string;
  money: Money;
}

export interface Money {
  symbol: Symbol;
}

export enum Symbol {
  S = 'S/.',
}

export interface Publication {
  id: number;
  title: string;
}

export interface Location {
  id: number;
  latitude: null | string;
  longitude: null | string;
  department: null;
  province: null;
  district: null | string;
}
