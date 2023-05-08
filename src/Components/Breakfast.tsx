import React from 'react'
import { create } from 'zustand'

interface BreakfastProps {

}

type State = {
  biscotti: number,
}

type Action = {
  compraBiscotti: () => void,
  mangiaBiscotti: () => void
  // assumiCameriere: (name: string) => void
}

export const useBreakfastStore = create<State & Action>((set) => ({
  biscotti: 0,
  salaDaPranzo: {
    numeroPosti: 10,
    ventilazione: 'AC',
    servizio: {
      camerieri: ['Anna', 'Roberto']
    }
  },
  compraBiscotti: () => set((state) => ({ biscotti: state.biscotti + 1 })),
  mangiaBiscotti: () => set((state) => ({ biscotti: state.biscotti - 1 }))
  // assumiCameriere: (nome) => set((state) => ({ salaDaPranzo: ...salaDaPranzo, servizio: { ...salaDaPranzo.servizio, camerieri: [...salaDaPranzo.servizio.camerieri nome] } }))
}))

export const Breakfast: React.FC<BreakfastProps> = () => {
  const [biscotti, compraBiscotti, mangiaBiscotti] = useBreakfastStore(
    (state) => [state.biscotti, state.compraBiscotti, state.mangiaBiscotti]
  )

  return (
    <div className="breakfast">
      <div className="label">{ biscotti } biscotti in dispensa.</div>
      <button onClick={ compraBiscotti }>Compra!</button>
      <button onClick={ mangiaBiscotti } disabled={ biscotti === 0 }>Mangia!</button>
    </div>
  )
}

// Altri argomenti
//
// race condition
// Immer --> evita copia manuale deep