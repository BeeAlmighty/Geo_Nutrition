export interface Product {
  id: string
  slug: string
  name: string
  price: number
  discountPrice?: number
  image: string
  description: string
  longDescription: string
  benefits: string[]
  ingredients: string[]
  dosage: string
  category: 'vitamins' | 'minerals' | 'supplements' | 'protein'
}

export interface Bundle {
  id: string
  name: string
  description: string
  products: Product[]
  price: number
  discountPrice?: number
  savings: number
  image: string
}