import { MenuItem, InstagramHighlight, KolektifEvent, SpaceOption } from '../types';

export const HERO_BANNER_IMAGE = '/src/assets/images/kolektif_hero_banner_1784804010149.jpg';
export const COFFEE_SIGNATURE_IMAGE = '/src/assets/images/kolektif_coffee_signature_1784804025418.jpg';
export const MAIN_DISHES_IMAGE = '/src/assets/images/kolektif_main_dishes_1784804054829.jpg';
export const MOCKUP_BG_IMAGE = '/src/assets/images/kolektif_mockup_bg_1784804039658.jpg';

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE & MILKBASED
  {
    id: 'c1',
    name: 'SeaSalt Latte',
    category: 'coffee_milk',
    price: '35K',
    priceNum: 35000,
    description: 'Coffee milk with Butterscotch & Seasalt Cream topping for a velvety, balanced finish.',
    image: COFFEE_SIGNATURE_IMAGE,
    tag: 'Best Seller',
    isIceAvailable: true
  },
  {
    id: 'c2',
    name: 'Dirty Latte',
    category: 'coffee_milk',
    price: '35K',
    priceNum: 35000,
    description: 'Chilled rich milk gently topped with a fresh double shot of arabica ristretto.',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
    tag: 'Signature',
    isIceAvailable: true
  },
  {
    id: 'c3',
    name: 'Picolo Split Shot',
    category: 'coffee_milk',
    price: '31K',
    priceNum: 31000,
    description: 'Perpaduan espresso (arabica) & picolo dengan rasa bold yang seimbang.',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
    tag: 'Must Try',
    isHotAvailable: true
  },
  {
    id: 'c4',
    name: 'Matcha Latte',
    category: 'coffee_milk',
    price: '35K - 37K',
    priceNum: 35000,
    description: 'Authentic Japanese Uji matcha steamed with fresh milk or served over ice.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
    isHotAvailable: true,
    isIceAvailable: true,
    hotPrice: '35K',
    icePrice: '37K'
  },
  {
    id: 'c5',
    name: 'Biscoff Latte',
    category: 'coffee_milk',
    price: '35K',
    priceNum: 35000,
    description: 'Specialty coffee milk infused with creamy peanut butter and crunchy Lotus Biscoff crumble.',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80',
    tag: 'Popular',
    isIceAvailable: true
  },
  {
    id: 'c6',
    name: 'Kolektif Latte',
    category: 'coffee_milk',
    price: '31K',
    priceNum: 31000,
    description: 'House blend espresso with palm sugar and smooth fresh milk.',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80',
    tag: 'Best Seller',
    isIceAvailable: true
  },

  // SIGNATURE / MOCKTAILS
  {
    id: 's1',
    name: 'Amarelo',
    category: 'signature',
    price: '27K',
    priceNum: 27000,
    description: 'Espresso mixed with fresh lemon squeeze & sparkling soda for an energizing kick.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    tag: 'Signature',
    isIceAvailable: true
  },
  {
    id: 's2',
    name: 'Cococano',
    category: 'signature',
    price: '29K',
    priceNum: 29000,
    description: 'Arabica espresso shaken with natural Hydrococo coconut water and aromatic cloves.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    tag: 'Must Try',
    isIceAvailable: true
  },
  {
    id: 's3',
    name: 'Guava Punch',
    category: 'signature',
    price: '37K',
    priceNum: 37000,
    description: 'Refreshing blend of Hydrococo, pink guava, aromatic cloves, lemon juice, and butterfly pea telang tea.',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80',
    tag: 'Signature',
    isIceAvailable: true
  },
  {
    id: 's4',
    name: 'Eclipse Rose',
    category: 'signature',
    price: '33K',
    priceNum: 33000,
    description: 'Black tea infused with Sakura blossom, wildflower honey, lemon, and Hydrococo.',
    image: 'https://images.unsplash.com/photo-1546171753-97d7676e418b?auto=format&fit=crop&w=800&q=80',
    isIceAvailable: true
  },

  // MAIN DISHES
  {
    id: 'm1',
    name: 'Beef Thai Basil',
    category: 'main_dishes',
    price: '43K',
    priceNum: 43000,
    description: 'A rice bowl filled with ground beef cooked in a secret savory sauce with dominant savory flavor, served with warm rice and a fried egg.',
    image: MAIN_DISHES_IMAGE,
    tag: 'Best Seller'
  },
  {
    id: 'm2',
    name: 'Honey Garlic Wings',
    category: 'main_dishes',
    price: '39K',
    priceNum: 39000,
    description: 'Crispy, juicy fried chicken coated in honey garlic sauce. Served with lime rice and white sour mayo on the side.',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
    tag: 'Chef Special'
  },
  {
    id: 'm3',
    name: 'Fried Rice Rendang',
    category: 'main_dishes',
    price: '35K',
    priceNum: 35000,
    description: 'Savory, spicy rendang-seasoned fried rice. Served with beef rendang slices, fresh vegetables, pickles, and emping.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80',
    tag: 'Must Try'
  },
  {
    id: 'm4',
    name: 'Chicken Steak',
    category: 'main_dishes',
    price: '37K',
    priceNum: 37000,
    description: 'Crispy fried chicken on the outside and juicy on the inside with savory BBQ sauce, potato wedges & sautéed mixed vegetables.',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm5',
    name: 'Soto Betawi',
    category: 'main_dishes',
    price: '41K',
    priceNum: 41000,
    description: 'Indonesian Soto with a distinctive coconut milk sauce combined with potato chips, beef, rice, chips, and chili sauce.',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
    tag: 'Popular'
  },
  {
    id: 'm6',
    name: 'Katsudon',
    category: 'main_dishes',
    price: '37K',
    priceNum: 37000,
    description: 'Rice bowl filled with crispy chicken coated in breadcrumbs, warm rice, and an omelette cooked in sweet savory teriyaki sauce.',
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=80'
  },

  // SNACKS & APPETIZERS
  {
    id: 'a1',
    name: 'Mix Platter',
    category: 'snacks_appetizers',
    price: '39K',
    priceNum: 39000,
    description: 'A plate full of flavors: French fries, nuggets, sausage, cireng, and flipped tofu with thousand island & chili dipping sauce.',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80',
    tag: 'Popular'
  },
  {
    id: 'a2',
    name: 'Pisang Wijen',
    category: 'snacks_appetizers',
    price: '31K',
    priceNum: 31000,
    description: 'Banana flour mixed with roasted sesame (8 pcs per serving). Served with caramel sauce, grated cheese, and palm sugar.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    tag: 'Must Try'
  },
  {
    id: 'a3',
    name: 'Fried Gyoza',
    category: 'snacks_appetizers',
    price: '29K',
    priceNum: 29000,
    description: 'Ground chicken wrapped in crispy gyoza skins (6 pcs) served with sweet Bangkok dipping sauce.',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'a4',
    name: 'Beef Tortilla',
    category: 'snacks_appetizers',
    price: '37K',
    priceNum: 37000,
    description: 'Tortilla toast filled with ground beef, iceberg lettuce, romaine lettuce, and mozzarella cheese (4 slices) with orange sour mayo.',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'a5',
    name: 'Crispy Chicken Burger',
    category: 'snacks_appetizers',
    price: '37K',
    priceNum: 37000,
    description: 'Burger with crispy chicken, lettuce, pickle slices, tomato, and caramelized onion served with French fries & sour mayo.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'a6',
    name: 'Mendoan',
    category: 'snacks_appetizers',
    price: '23K',
    priceNum: 23000,
    description: 'Specialty tempeh made from flour dough with special seasoning served with sweet & spicy soy sauce (7 slices).',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80'
  },

  // TEA & FILTER
  {
    id: 't1',
    name: 'Reguler / Guest Filter Beans',
    category: 'tea_filter',
    price: '33K - 35K',
    priceNum: 33000,
    description: 'Single-origin filter coffee pour-over featuring seasonal Indonesian guest micro-lots.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    isHotAvailable: true,
    isIceAvailable: true
  },
  {
    id: 't2',
    name: 'Chamomile / Lychee Tea',
    category: 'tea_filter',
    price: '20K - 23K',
    priceNum: 20000,
    description: 'Soothing organic herbal chamomile or fruit-infused cold lychee tea.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    isHotAvailable: true,
    isIceAvailable: true
  }
];

export const INSTAGRAM_HIGHLIGHTS: InstagramHighlight[] = [
  {
    id: 'coworking',
    title: 'Coworking',
    iconName: 'Laptop',
    coverImage: HERO_BANNER_IMAGE,
    description: 'Designed for focus, deep work, and high-speed productivity in Yogyakarta.',
    slides: [
      {
        title: 'Ergonomic Workstations',
        subtitle: 'Focus & Comfort',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
        details: [
          '⚡ High-speed Dedicated Fiber Wi-Fi (100 Mbps)',
          '🔌 Universal power outlets at every seat',
          '🪑 Herman Miller & Ergonomic mesh chairs',
          '🔇 Silent focus zones & private phone booths'
        ]
      },
      {
        title: 'Unlimited Coffee Privileges',
        subtitle: 'Fuel Your Output',
        image: COFFEE_SIGNATURE_IMAGE,
        details: [
          '☕ Specialty arabica house blend on tap',
          '🥐 Fresh daily pastries & quick bites',
          '💧 Complimentary alkaline mineral water'
        ]
      }
    ]
  },
  {
    id: 'space',
    title: 'Space',
    iconName: 'Building',
    coverImage: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=800&q=80',
    description: 'Modern architectural space with natural ventilation, lush greenery, and indoor-outdoor seating.',
    slides: [
      {
        title: 'Architectural Harmony',
        subtitle: 'Matte Black & Lush Greenery',
        image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80',
        details: [
          '🌿 Open-air garden patio for afternoon breaks',
          '🌤️ Natural ambient lighting for comfortable screens',
          '🛋️ Modular seating for solo or team setups'
        ]
      }
    ]
  },
  {
    id: 'meeting_space',
    title: 'Meeting Space',
    iconName: 'Users',
    coverImage: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=800&q=80',
    description: 'Private, sound-insulated meeting rooms equipped for client pitches and hybrid team huddles.',
    slides: [
      {
        title: 'Kolektif Executive Boardroom',
        subtitle: '4 to 16 Person Capacity',
        image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80',
        details: [
          '📺 4K Smart Display with Wireless Screen Mirroring',
          '🎙️ Conference mic & HD camera system',
          '🖊️ Glass whiteboards & markers',
          '🍽️ In-room food & barista beverage service'
        ]
      }
    ]
  },
  {
    id: 'teman_kolektif',
    title: '#TemanKolektif',
    iconName: 'Sparkles',
    coverImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    description: 'The vibrant network of remote workers, tech founders, designers, and creators in Jogja.',
    slides: [
      {
        title: 'CollaborAction Culture',
        subtitle: '#TogetherMakesBetter',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
        details: [
          '🤝 Monthly Community Mixer & Pitch Sessions',
          '💡 Founder Roundtables & Freelancer Directory',
          '🏷️ Exclusive discounts for regular members'
        ]
      }
    ]
  },
  {
    id: 'event',
    title: 'Event',
    iconName: 'Trophy',
    coverImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    description: 'Home of coffee championships, barista battles, tech talks, and creative showcases.',
    slides: [
      {
        title: 'Coffee Competitions & Battles',
        subtitle: 'Brewing & Latte Art 2026',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
        details: [
          '🏆 Prize pool up to 4,000,000 IDR',
          '☕ Certified SCA Judges & Guest Baristas',
          '🎟️ Registration fee 150K per participant'
        ]
      }
    ]
  },
  {
    id: 'kolektif_daily',
    title: 'Kolektif Daily',
    iconName: 'Coffee',
    coverImage: COFFEE_SIGNATURE_IMAGE,
    description: 'Daily espresso extractions, seasonal roast tasting, and everyday moments at Kolektif.',
    slides: [
      {
        title: 'Crafted Precision',
        subtitle: 'From Bean to Cup',
        image: COFFEE_SIGNATURE_IMAGE,
        details: [
          '⚖️ Precision dose & yield profiling',
          '🥛 Fresh local dairy & oat milk options',
          '🍪 Freshly baked artisan cookies'
        ]
      }
    ]
  },
  {
    id: 'acoustic',
    title: 'Acoustic',
    iconName: 'Music',
    coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    description: 'Unwind every Friday evening with intimate acoustic performances under warm ambient lights.',
    slides: [
      {
        title: 'Friday Night Acoustic Sessions',
        subtitle: '19.00 - 22.00 WIB',
        image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80',
        details: [
          '🎸 Local indie musicians & acoustic duos',
          '🍸 Special mocktail discount hours',
          '✨ Warm patio vibe & community connection'
        ]
      }
    ]
  }
];

export const KOLEKTIF_EVENTS: KolektifEvent[] = [
  {
    id: 'ev-1',
    title: 'BREWING COMPETITION 2026',
    subtitle: 'Showcase your pour-over technique & extraction precision.',
    date: 'Sunday, 9 August 2026',
    location: 'Kolektif Coworking Space, Yogyakarta',
    fee: '150K',
    prizePool: '4.000.000 IDR',
    status: 'Open Registration',
    posterImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    description: 'Join the premier manual brewing showdown in Yogyakarta! Compete against top baristas using single-origin guest beans judged by certified SCA sensory judges.',
    contactPerson: '0821-3419-8905 (Rifqi)'
  },
  {
    id: 'ev-2',
    title: 'LATTE ART COMPETITION',
    subtitle: 'Pour your masterpiece. Speed, contrast, & pattern precision.',
    date: 'Sunday, 9 August 2026',
    location: 'Kolektif Coworking Space, Yogyakarta',
    fee: '150K',
    prizePool: '4.000.000 IDR',
    status: 'Open Registration',
    posterImage: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
    description: 'High-stakes head-to-head latte art throwdown on our commercial Sanremo espresso setup. Includes certificate, trophy, and voucher pool.',
    contactPerson: '0821-3419-8905 (Rifqi)'
  },
  {
    id: 'ev-3',
    title: 'FUN BREWING & LATTE ART TOGETHER',
    subtitle: 'Grow together with Yogyakarta’s vibrant coffee community.',
    date: 'Sunday, 9 August 2026',
    location: 'Kolektif Coworking Space, Sleman',
    fee: '150K / Participant',
    status: 'Featured',
    posterImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    description: 'An open collaborative event featuring both brewing accuracy and latte art creativity. Perfect for emerging baristas and passionate coffee enthusiasts!',
    contactPerson: '0821-3419-8905 (Rifqi)'
  },
  {
    id: 'ev-4',
    title: 'FRIDAY NIGHT ACOUSTIC JAM',
    subtitle: 'Chill tunes, mocktails, and deep conversations after work.',
    date: 'Every Friday | 19.00 - 22.00 WIB',
    location: 'Kolektif Outdoor Patio',
    fee: 'Free Entry with order',
    status: 'Coming Soon',
    posterImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    description: 'Unwind your week with live acoustic sessions featuring Yogyakarta indie acoustic performers. Sip on our signature Guava Punch or Eclipse Rose.',
    contactPerson: 'Kolektif Community Manager'
  }
];

export const SPACE_OPTIONS: SpaceOption[] = [
  {
    id: 'sp-1',
    name: 'Flex Hot Desk',
    type: 'Hot Desk',
    capacity: '1 Person',
    rate: '35.000 / Day',
    description: 'Flexible seating in our high-energy main workspace or outdoor patio.',
    image: HERO_BANNER_IMAGE,
    features: ['100 Mbps Wi-Fi', 'Power Outlet', 'Free Mineral Water', '10% Drink Discount']
  },
  {
    id: 'sp-2',
    name: 'Dedicated Focus Desk',
    type: 'Dedicated Desk',
    capacity: '1 Person',
    rate: '750.000 / Month',
    description: 'Your reserved desk with lockable storage drawer in our quiet zone.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    features: ['Reserved Desk', '24/7 Access Option', '20 Hours Meeting Room Access', 'Locker Storage']
  },
  {
    id: 'sp-3',
    name: 'CollaborAction Meeting Room',
    type: 'Meeting Room',
    capacity: '6 - 12 Persons',
    rate: '150.000 / Hour',
    description: 'Private soundproofed glass room equipped with 4K screen and whiteboard.',
    image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=800&q=80',
    features: ['4K Smart TV', 'Glass Whiteboard', 'In-Room Coffee Service', 'Air Conditioned']
  },
  {
    id: 'sp-4',
    name: 'Full Hall Event Venue',
    type: 'Event Space',
    capacity: 'Up to 80 Persons',
    rate: 'Custom Booking',
    description: 'Spacious hall for workshops, competitions, launches, and private events.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    features: ['PA Sound System & Mics', 'Projector & Screen', 'Barista Catering Package', 'Modular Layout']
  }
];
