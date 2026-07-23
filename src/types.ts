export type MenuCategory = 
  | 'coffee_milk'
  | 'signature'
  | 'main_dishes'
  | 'snacks_appetizers'
  | 'tea_filter';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: string; // e.g. "35K"
  priceNum: number; // e.g. 35000
  description: string;
  image: string;
  tag?: 'Best Seller' | 'Signature' | 'Must Try' | 'Chef Special' | 'Popular';
  isHotAvailable?: boolean;
  isIceAvailable?: boolean;
  hotPrice?: string;
  icePrice?: string;
}

export interface InstagramHighlight {
  id: string;
  title: string;
  iconName: string;
  coverImage: string;
  description: string;
  slides: {
    title: string;
    subtitle: string;
    image: string;
    details: string[];
  }[];
}

export interface KolektifEvent {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  fee: string;
  prizePool?: string;
  status: 'Open Registration' | 'Coming Soon' | 'Featured';
  posterImage: string;
  description: string;
  contactPerson: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  notes?: string;
  selectedOption?: 'Hot' | 'Iced';
}

export interface SpaceOption {
  id: string;
  name: string;
  type: 'Hot Desk' | 'Dedicated Desk' | 'Meeting Room' | 'Event Space';
  capacity: string;
  rate: string;
  description: string;
  image: string;
  features: string[];
}
