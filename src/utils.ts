export function debounce<T extends (...args: any) => any>(func: T, wait: number = 300) {
  let timeout: NodeJS.Timeout

  return function (...args: any[]) {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}
