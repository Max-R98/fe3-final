import { createContext, useContext, useState, useEffect, useReducer } from "react";
import {reducer} from '../Reducers/reducer'
import axios from 'axios'

const DentistContext = createContext()
const initialState = {
    list: [],
    favs: JSON.parse(localStorage.getItem('favs')) || [],
    theme: true
}

const Context = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state);
    const url = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => {

      axios(url)
      .then(res => dispatch({type: 'GET_DENTISTS', payload: res.data}))
    
    }, [])

    useEffect(() => {
      localStorage.setItem('favs', JSON.stringify(state.favs))
    }, [state.favs])
    
    


    return (
        <DentistContext.Provider value={{state, dispatch}}>
            {children}
        </DentistContext.Provider>
    )
}

export default Context

export const useDentistContext = () => useContext(DentistContext)