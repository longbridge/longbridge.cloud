import { isServer } from '@/utils/common'
import { useEffect, useState } from 'react'



export const useWidth = () => {
  const [width, setWidth] = useState(isServer() ? 1080 : window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return width
}
