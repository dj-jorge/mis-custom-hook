import { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {
   
    const estaMontado = useRef(true);
    const [state, setState] = useState( { data: null, loading: true, error:null } );  

    useEffect( () => {
        return(()=>{
            estaMontado.current = false;
        })
    },[]);

    useEffect( () => {
        setState( { data: null, loading: true, error:null } );
        fetch( url )
            .then( resp => resp.json() )
            .then( data => {

                setTimeout( () => {

                    if(estaMontado.current){
                        setState({
                            loading: false,
                            error: null,
                            data
                        })
                    }else{
                        console.log('El objeto ya no esta montado');
                    }

                },0);

            } )
            .catch( () => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo descargar la info'
                })
            })
    }, [url] );

    return state;

}