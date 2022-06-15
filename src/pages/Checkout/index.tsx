import { useEffect } from 'react'

export const Checkout = ({ handleHeader }) => {
  useEffect(() => {
    handleHeader(true)

    return () => {
      handleHeader(false)
    }
  }, [])

  return <div>Leninsin</div>
}
