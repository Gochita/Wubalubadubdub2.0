import React from 'react'
import { useSelector } from 'react-redux'
import Barrita from './Barrita'

const Favoritos = () => {
    const favoritos = useSelector((store) => store.personajes.favoritos)
    console.log(favoritos);
  return (
    <div className="container page">
      <Barrita />
    </div>
  )
}

export default Favoritos
