
export interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: 'Appetizers' | 'Mains' | 'Desserts' | 'Beverages';
  image: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export interface NavLink {
    name: string;
    href: string;
}
