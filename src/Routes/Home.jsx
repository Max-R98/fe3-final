import React from 'react'
import Card from '../Components/Card'
import { useDentistContext } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useDentistContext()
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.list.map(dentist => <Card dentist={dentist} key={dentist.id} />)}
      </div>
    </main>
  )
}

export default Home