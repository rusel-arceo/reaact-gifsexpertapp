import React from 'react';

// export const GifGridItem = ( props )=>  // El props se usa por constumbre,
//Pero su uso es común
export const GifGridItem = ( {id, title, url})=>  // En este caso se están mandando 
//las propiedades de forma independiente por lo que los podemos recibir 
//desetructurando, lo que hace que ssea mas directo el uso de cada propiedad
{
    return (
        <div className="card animate__animated animate__fadeIn">
            {/* props.title */}
            <img src={url} alt={title} />
            <br />
            <p>{title}</p>
        </div>
    )
}
