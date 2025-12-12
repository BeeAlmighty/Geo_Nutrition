export function classNames(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'NGN',
  }).format(price)
}

export function calculateSavings(original: number, discount: number): string {
  const savings = ((original - discount) / original * 100).toFixed(0)
  return `Save ${savings}%`
}