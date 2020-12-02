import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import {useState, useEffect} from 'react';

import {GifGridItem} from './GifGridItem';

export const GifGrid = ({category}) => {
    
    
     /* Recibe una función de flecha y un parametro, 
     al ser este un [] entonces el codigo de adentro solo se 
     ejecutará la primera vez que sea llamado el componente */
    // useEffect(()=>{
    //     getGifs(category).then(gifs=>setImages(gifs));
    // }, [category]);
    
    
    //getGif(); //Al presionar el botón y haber un cambio, el React lo detcta
    //y renderiza todo nuevamente por lo que hace la petición cada vez, 
    //para evitarr eso usaremos el useEfect, al poder category al useEffect le decimos
    //si la categoria cambia queremos voler a diparar el efecto

   const {data:images, loading}= useFetchGifs(category);
   //data:images es para renombrar, coomo se devulve data se deb usar para
   //desestruturar y después le cambiamos el nombre
    
    return (
        <>
       <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading && <p className="animate__animated animate__fash">Cargando...</p>}
        <div className="card-grid">
            {
             images.map(
             img=> { return ( <GifGridItem key={img.id}
                                            {...img} /> //Es algo similar a la linea de abajo pero manda todos los objetos de forma directa.
                                            //img={img} /> //En este caso se manda el objeto con las propiedades que se habían obtenido

                           )
                    }
                )
            }       
        </div>
        </>
    )
}
