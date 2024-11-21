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
    address: [
      {
        detail: 'Av. Los Álamos 183, Chilca 15870',
        link_map: null,
      },
    ],
    email: 'contacto@mipatapethotel.net',
    minPrice: 55,
    maxPrice: 100,
    link_page: 'https://www.mipatapethotel.net/',
    location: {
      country: 'Peru',
      department: 'Lima',
      province: 'Cañete',
      district: 'Chilca',
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
    address: [
      {
        detail: 'Calle Los Cactus, Mz. Q, lote 15A - Huertos de Lurín',
        link_map: 'https://maps.app.goo.gl/gxghEKY9rYxtGkUj6',
      },
    ],
    email: 'reservas@wau.pe',
    minPrice: 55,
    maxPrice: 100,
    link_page: 'https://www.hospedajeparaperros.com/',
    location: {
      country: 'Peru',
      department: 'Lima',
      province: 'Lima',
      district: 'Pachacamac',
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
    address: [
      {
        detail: 'Av. Los Pinos 123, Lurín',
        link_map: null,
      },
    ],
    email: 'reservas@petscampperu.com',
    minPrice: 55,
    maxPrice: 100,
    link_page: 'https://petscampperu.com/',
    location: {
      country: 'Peru',
      department: 'Lima',
      province: 'Lima',
      district: 'Lurín',
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
    address: [
      {
        detail: 'Huachipa, Lima',
        link_map: null,
      },
    ],
    email: 'doggycamp@outlook.com',
    minPrice: 55,
    maxPrice: 100,
    link_page: 'https://www.thedoggycamp.com/',
    location: {
      country: 'Peru',
      department: 'Lima',
      province: 'Lima',
      district: 'Huachipa',
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
    address: [
      {
        detail: 'Km 80 Panamericana Sur, Mala',
        link_map: null,
      },
    ],
    email: 'contacto@mipatapethotel.net',
    minPrice: 55,
    maxPrice: 100,
    link_page: 'https://petitlodge.com/',
    location: {
      country: 'Peru',
      department: 'Lima',
      province: 'Cañete',
      district: 'Mala',
    },
  },
  {
    id: 6,
    image: '/hotels/dogpackers.jpg',
    name: 'Dog Packers',
    description:
      'Acompañaremos a tu engreído en su proceso de adaptación, nos aseguraremos de que se sienta cómodo en este nuevo espacio y, lo más importante, que se integre a la manada. Recuerda que una sesión de sociabilización es requisito previo para ser parte de Dogpackers.',
    service_type: 'Daycare, Overnight, Veterianrio, Baños y Grooming.',
    schedule:
      'Lunes a Sábado: 6:45 am a 8:00 pm & Domingo: 10:00 am. a 6:00 pm',
    phoneContact: '(+51) 964 180 978',
    address: [
      {
        detail: 'Av. 28 de Julio 640, Miraflores, Lima Perú',
        link_map: 'https://goo.gl/maps/ebDREi1r8cauek4q7',
      },
      {
        detail: 'Av. Antonio Miro Quesada 291, Magdalena',
        link_map: 'https://maps.app.goo.gl/uMAjNt5bGCY1pf8r7',
      },
    ],
    email: null,
    minPrice: 30,
    maxPrice: 150,
    link_page: 'https://dogpackers.pe/',
    location: {
      country: 'Peru',
      department: 'Lima',
      province: 'Lima',
      district: 'Miraflores',
    },
  },
  {
    id: 7,
    image: '/hotels/guau-miau.webp',
    name: 'Guau Miau - Pet Hotel',
    description:
      'Guau Miau Pet Hotel inició en el 2014 en Lima Metropolitana cuidando perritos de todo Lima Metropolitana dando la mejor referencia de cuidado personalizado a tu engreido, brindándole diversión y seguridad al ingresar a la segunda familia.',
    service_type: 'Servico de movilidad, Hospedaje, Guardería, Baño y Corte.',
    schedule:
      'Lunes - Domingo: 8:30 am - 8:30 pm & Feriados: 8:30 am - 7:00 am',
    phoneContact: '(+51) 946 768 006',
    address: null,
    email: 'reservas@hotelguaumiau.com.pe',
    minPrice: 35,
    maxPrice: 45,
    link_page: 'https://www.hotelguaumiau.com.pe/',
    location: {
      country: 'Peru',
      department: 'Lima',
      province: 'Lima',
      district: 'Pueblo libre',
    },
  },
  {
    id: 8,
    image: '/hotels/perrotel.jpg',
    name: 'Perrotel',
    description:
      'La historia de Perrotel comienza con la dedicación de Camila a rescatar animales abandonados en situación de vulnerabilidad, ofreciéndoles un hogar temporal en su propio departamento. Pronto, la cantidad de animales rescatados supera su capacidad, y se ve obligada a buscarles hogares temporales hasta encontrarles un hogar definitivo.',
    service_type: 'Hospedaje, Rehabilitación Canina y Boutique.',
    schedule:
      'Lunes a Sábado: 6:45 am a 8:00 pm & Domingo: 10:00 am. a 6:00 pm',
    phoneContact: '(+51) 908 889 012',
    address: null,
    email: null,
    minPrice: 55,
    maxPrice: 100,
    link_page: 'https://perrotelperu.com/',
    location: {
      country: 'Peru',
      department: 'Lima',
      province: 'Lima',
      district: 'Cieneguilla',
    },
  },
];
