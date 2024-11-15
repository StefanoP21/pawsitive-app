import { socialNetworkAnalytics } from '@/core/analytics';
import { AiFillInstagram, AiFillTikTok } from 'react-icons/ai';

export const socialLinks = [
  {
    href: 'https://www.instagram.com/pawsitive_center/',
    icon: AiFillInstagram,
    label: 'Instagram',
    analytics: socialNetworkAnalytics.instagram,
  },
  {
    href: 'https://www.tiktok.com/@pawsitive_doc?_t=8rD1eIqfvbc&_r=1',
    icon: AiFillTikTok,
    label: 'TikTok',
    analytics: socialNetworkAnalytics.tiktok,
  },
];
