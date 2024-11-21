import { Hotel } from './model';

export const hotelsData: Hotel[] = [
  {
    id: 1,
    image: '/hotels/mi-pata-pet-hotel.webp',
    name: 'Mi Pata Pet Hotel',
    description:
      'MI PATA PET HOTEL & RESORT, es una empresa sólida dispuesta a asumir nuevos retos y a competir en un mercado emergente y con gran potencial, valiéndose de la diferenciación como herramienta clave combinada con un servicio de calidad, innovación y encanto.',
    service_type:
      'Room PET, Área de Piscina, Zona de Grooming & Spa, Zona de Juegos y Traslados.',
    schedule: '8:30 am a 5:30 pm',
    phoneContact: '(+51) 987 507 189',
    address: 'Av. Los Álamos 183, Chilca 15870',
    email: 'contacto@mipatapethotel.net',
    minPrice: 55,
    maxPrice: 100,
    link_page: 'https://www.mipatapethotel.net/',
    location: {
      country: 'Peru',
      department: 'Lima',
      province: 'Cañete',
      district: 'Chilca',
      link_map: null,
    },
  },
  {
    id: 2,
    image: '/hotels/wau-hotel.webp',
    name: 'Wau Hotel',
    description:
      'Somos un Hospedaje para Perros, tu mejor opción en alojamiento para mascotas mientras estás de vacaciones o fuera de casa, pues a tu engreído le damos la mejor atención, profesionalismo y mucho amor. Visítanos en Pachacámac.',
    service_type:
      'Alojamiento, Atención Médica, Educación Canina, Juegos de de agilidad, Delivery, Video llamadas y Fotos HD.',
    schedule:
      'Lunes a sábado de 8:00 am a 5:30 pm y domingo de 8:00 am a 12:00 pm',
    phoneContact: '(+51) 994 824 066',
    address: 'Calle Los Cactus, Mz. Q, lote 15A - Huertos de Lurín',
    email: 'reservas@wau.pe',
    minPrice: 55,
    maxPrice: 100,
    link_page: 'https://www.hospedajeparaperros.com/',
    location: {
      country: 'Peru',
      department: 'Lima',
      province: 'Lima',
      district: 'Pachacamac',
      link_map: 'https://maps.app.goo.gl/gxghEKY9rYxtGkUj6',
    },
  },
  {
    id: 3,
    image: '/hotels/pets-camp.webp',
    name: 'PetsCamp',
    description:
      'Somos el espacio ideal para tu mascota. No es solo un hospedaje, es nuestra pasión por brindarle la máxima comodidad y cuidado a tu mascota. Nuestro deber es hacerlas sentir tan cómodas y felices como en casa.',
    service_type: 'Hospedaje Clásico, Hospedaje Premium y Full Day.',
    schedule: 'lunes a domingo de 8:00 am a 10:00 pm',
    phoneContact: '(+51) 978 375 238',
    address: 'Av. Los Pinos 123, Lurín',
    email: 'reservas@petscampperu.com',
    minPrice: 55,
    maxPrice: 100,
    link_page: 'https://petscampperu.com/',
    location: {
      country: 'Peru',
      department: 'Lima',
      province: 'Lima',
      district: 'Lurín',
      link_map: null,
    },
  },
  {
    id: 4,
    image: '/hotels/doggy-camp.webp',
    name: 'Doggy Camp',
    description:
      'Doggy Camp surge de nuestra pasión por los animales, en particular por los perros. El centro ofrece un lugar seguro y agradable para nuestros fieles amigos el cual posee un área de 3000 m² habilitado para el bienestar de su mascota.',
    service_type:
      'Hotel, Guardería, Transporte canino, baño tradicional o medicado, Vacunación, Desoarasitación y Educación canina.',
    schedule: 'lunes a Sabado de 9:00 am - 5:00 pm',
    phoneContact: '(+51) 999 055 841',
    address: 'Huachipa, Lima',
    email: 'doggycamp@outlook.com',
    minPrice: 55,
    maxPrice: 100,
    link_page: 'https://www.thedoggycamp.com/',
    location: {
      country: 'Peru',
      department: 'Lima',
      province: 'Lima',
      district: 'Huachipa',
      link_map: 'https://goo.gl/maps/5Q5Jz4jUZG2BQb4e6',
    },
  },
  {
    id: 5,
    image: '/hotels/petit-lodgel.webp',
    name: 'Petit Lodgel',
    description:
      'Somos un Staff de personas especializadas y amantes de los animales, que nos dedicamos a cuidar de tu mascota y a hacer que pase unos días llenos de experiencias y vivencias junto con otros huéspedes, enseñándole a convivir de una manera saludable con los demás en un ambiente natural y campestre.',
    service_type:
      'Alojamiento, Movilidad, Baño, Atención Médica, Juegos y Premios, Área de juego, Caminatas, Alimentación y Guardería.',
    schedule: 'Lunes a Domingo 8:00 am a 6:00 pm',
    phoneContact: '(+51) 966 132 594',
    address: 'Km 80 Panamericana Sur, Mala',
    email: 'contacto@mipatapethotel.net',
    minPrice: 55,
    maxPrice: 100,
    link_page: 'https://petitlodge.com/',
    location: {
      country: 'Peru',
      department: 'Lima',
      province: 'Cañete',
      district: 'Mala',
      link_map: 'https://goo.gl/maps/5Q5Jz4jUZG2BQb4e6',
    },
  },
];
