import React from 'react'
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentist, setDentist] = useState({})
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {id} = useParams()
  const url = 'https://jsonplaceholder.typicode.com/users/'+id
  useEffect(() => {
    axios(url)
    .then(res => setDentist(res.data))
  }, [])
  
  return (
    <>
      <h1>Detail Dentist {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h3>Nombre: {dentist.name} </h3>
      <h4>Email: {dentist.email} </h4>
      <h4>Telefono: {dentist.phone} </h4>
      <h4>Web: {dentist.website} </h4>
    </>
  )
}

export default Detail