declare global {
  interface Window {
    sensors: {
      track: (key: string, data: Record<string, any>) => void
    }
  }
}
// hack 一下
export { }
