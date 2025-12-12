export function getDateOneYearFromNow(): string {
  const date = new Date()
  date.setFullYear(date.getFullYear() + 1)
  return date.toISOString().split('T')[0]
}

export function capitalizeWords(text: string): string {
  return text
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function capitalizeCategory(category: string): string {
  return capitalizeWords(category)
}

export function formatPrice(price: number | string): string {
  return String(price)
}

export function buildImageArray(baseUrl: string, imagePath: string): string[] {
  const baseImage = `${baseUrl}${imagePath}`
  return [
    baseImage,
    `${baseImage}?w=1200&h=630`, // OG size
    `${baseImage}?w=500&h=500`, // Square
  ]
}