import React from 'react';
import {useState, useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';
import {GifGridItem} from './GifGridItem';

export const GifGrid = ({category}) => {
    
    const [images, setImages] = useState([]);
     /* Recibe una función de flecha y un parametro, 
     al ser este un [] entonces el codigo de adentro solo se 
     ejecutará la primera vez que sea llamado el componente */
    useEffect(()=>{
        getGifs(category).then(gifs=>setImages(gifs));
    }, [category]);
    
    
    //getGif(); //Al presionar el botón y haber un cambio, el React lo detcta
    //y renderiza todo nuevamente por lo que hace la petición cada vez, 
    //para evitarr eso usaremos el useEfect, al poder category al useEffect le decimos
    //si la categoria cambia queremos voler a diparar el efecto

   
    
    return (
        <>
       <h3>{category}</h3>
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
