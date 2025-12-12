import { Bundle } from '@/types'
import { products } from './products'

export const bundles: Bundle[] = [
  {
    id: 'bundle-1',
    name: 'Starter Pack',
    description: 'Provides energy and promotes muscle growth',
    products: [products[2], products[4]], // Vitamin C & D3
    price: 59000,
    discountPrice: 52000,
    savings: 7000,
    image: '/images/bundles/starter-pack.jpg',
  },
  {
    id: 'bundle-2',
    name: 'Growth Pack',
    description: 'Improves strength and muscle mass',
    products: [products[1], products[6]], // Vitamin C & D3
    price: 95000,
    discountPrice: 85000,
    savings: 10000,
    image: '/images/bundles/fortress-creatine.jpg',
  },
  {
    id: 'bundle-3',
    name: 'Supreme Pack',
    description: 'Improves energy, strength and muscle mass',
    products: [products[1], products[2], products[4]], // Vitamin C & D3
    price: 124000,
    discountPrice: 115000,
    savings: 9000,
    image: '/images/bundles/supreme-pack.jpg',
  },
]