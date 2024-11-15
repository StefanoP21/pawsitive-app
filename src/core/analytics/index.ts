export const askForServiciesAnalytics = {
  event: 'action',
  action: {
    name: 'send_message',
    type: 'redirect',
    to: 'whatsapp',
    section: 'home',
  },
};

export const clickOnHotel = (hotel: unknown) => {
  return {
    event: 'action',
    action: {
      name: 'hotel',
      type: 'click',
      data: {
        hotel,
      },
    },
  };
};

export const clickOnPetFriendly = (petFriendly: unknown) => {
  return {
    event: 'action',
    action: {
      name: 'pet_friendly',
      type: 'click',
      data: {
        petFriendly,
      },
    },
  };
};

export const clickOnHouser = (houser: unknown) => {
  return {
    event: 'action',
    action: {
      name: 'houser',
      type: 'click',
      data: {
        houser,
      },
    },
  };
};

export const socialNetworkAnalytics = {
  instagram: {
    event: 'action',
    action: {
      name: 'instagram',
      type: 'redirect',
      to: 'https://www.instagram.com/pawsitive_center/',
    },
  },
  tiktok: {
    event: 'action',
    action: {
      name: 'tiktok',
      type: 'redirect',
      to: 'https://www.tiktok.com/@pawsitive_doc?_t=8rD1eIqfvbc&_r=1',
    },
  },
};
