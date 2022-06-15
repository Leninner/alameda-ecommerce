import { useEffect } from 'react'

export const Checkout = ({ handleHeader }) => {
  useEffect(() => {
    handleHeader(true)

    return () => {
      handleHeader(false)
    }
  }, [])

  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
      libero in magnam modi neque laboriosam earum doloribus, ut corrupti
      nostrum sapiente, assumenda ratione odio? Vitae veniam corporis iste dolor
      facilis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
      consequuntur quisquam, pariatur, ut possimus saepe quod laborum odio illo
      ipsa quas fugit sapiente inventore magnam quam magni unde ducimus
      perferendis?
    </div>
  )
}
