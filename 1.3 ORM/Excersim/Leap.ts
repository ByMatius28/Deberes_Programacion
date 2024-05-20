export function isLeap(n: number): boolean {
    return (n % 4 === 0 && n % 100 !== 0) || n % 400 === 0
  }