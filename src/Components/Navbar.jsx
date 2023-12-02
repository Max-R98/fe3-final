import React from 'react'
import { Link } from 'react-router-dom'
import { useDentistContext } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state} = useDentistContext()
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to='/'>Home</Link>
      <Link to='/favs'>Favs</Link>
      <Link to='/contact'>Contact</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme {state ? '☀️' : '🌕'} </button>
    </nav>
  )
}

export default Navbar