
import { MenuItem, GalleryImage, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Menu', href: 'menu' },
    { name: 'Gallery', href: 'gallery' },
    { name: 'Reserve', href: 'reservation' },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    name: 'Avocado Toast',
    description: 'Sourdough toast with fresh avocado, chili flakes, and a squeeze of lime.',
    price: '$12.50',
    category: 'Appetizers',
    image: 'https://picsum.photos/id/292/400/300'
  },
  {
    name: 'Burrata Salad',
    description: 'Creamy burrata with heirloom tomatoes, basil, and balsamic glaze.',
    price: '$15.00',
    category: 'Appetizers',
    image: 'https://picsum.photos/id/1080/400/300'
  },
  {
    name: 'Gemini Burger',
    description: 'Wagyu beef patty, aged cheddar, special sauce, on a brioche bun.',
    price: '$22.00',
    category: 'Mains',
    image: 'https://picsum.photos/id/1074/400/300'
  },
  {
    name: 'Pan-Seared Salmon',
    description: 'Crispy skin salmon served with asparagus and lemon-butter sauce.',
    price: '$26.00',
    category: 'Mains',
    image: 'https://picsum.photos/id/326/400/300'
  },
  {
    name: 'Mushroom Risotto',
    description: 'Creamy Arborio rice with wild mushrooms, parmesan, and truffle oil.',
    price: '$20.00',
    category: 'Mains',
    image: 'https://picsum.photos/id/495/400/300'
  },
  {
    name: 'Tiramisu',
    description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream.',
    price: '$10.00',
    category: 'Desserts',
    image: 'https://picsum.photos/id/431/400/300'
  },
  {
    name: 'Lava Cake',
    description: 'Molten chocolate lava cake with a scoop of vanilla bean ice cream.',
    price: '$11.00',
    category: 'Desserts',
    image: 'https://picsum.photos/id/425/400/300'
  },
  {
    name: 'Artisanal Coffee',
    description: 'Freshly brewed single-origin coffee. Ask for today\'s selection.',
    price: '$5.00',
    category: 'Beverages',
    image: 'https://picsum.photos/id/225/400/300'
  },
  {
    name: 'Spiced Chai Latte',
    description: 'Aromatic and creamy spiced chai with steamed milk.',
    price: '$6.50',
    category: 'Beverages',
    image: 'https://picsum.photos/id/304/400/300'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: 'https://picsum.photos/id/2/800/600', alt: 'A cozy corner of the cafe' },
  { id: 2, src: 'https://picsum.photos/id/1060/800/600', alt: 'A close-up of a delicious dish' },
  { id: 3, src: 'https://picsum.photos/id/312/800/600', alt: 'The exterior of The Gemini Café' },
  { id: 4, src: 'https://picsum.photos/id/433/800/600', alt: 'Our baristas at work' },
  { id: 5, src: 'https://picsum.photos/id/659/800/600', alt: 'A plate of freshly baked pastries' },
  { id: 6, src: 'https://picsum.photos/id/1011/800/600', alt: 'Happy customers enjoying their meal' }
];

export const MENU_CATEGORIES = ['All', 'Appetizers', 'Mains', 'Desserts', 'Beverages'];
