import { useState } from 'react';

export const useCounter = ( initialState = 10 ) => {

    const [counter, setCounter] = useState(initialState)

    //const increment = (factor = 1) => {
    const increment = () => {
        setCounter(counter + 1)
    }
    const reset = () => {
        setCounter(initialState)
    }
    //const decrement = (factor = 1) => {
    const decrement = () => {
        setCounter(counter => counter - 1)
    }

    //sirve para mandar llamar esta funcion mas de una vez ya que en vez de 
    //que la funcion cambie el valor del estado directo, se hace uso de una funcion
    //callback que permite hacer el setter correctamente
    //c => c-1;

    return {
        counter,
        increment,
        reset,
        decrement
    };
}
