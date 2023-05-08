import { useBreakfastStore } from './Breakfast'
import React from 'react'

export const Hotel = () => {
  const [ biscotti, compraBiscotti ] = useBreakfastStore((state) => [state.biscotti, state.compraBiscotti])

  return (
    <div className="hotel">
      hello, ho { biscotti } biscotti!
      <button onClick={ compraBiscotti }>Compra</button>
    </div>
  )
}
