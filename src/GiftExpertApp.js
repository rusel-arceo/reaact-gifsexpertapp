import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

/*Componente principal, donde se llaman a los otros componentes,
Su proposito es mostrar imágenes gifs obtenidas de una API key*/

const GiftExpertApp=()=>
{
    const [categories, setCategories] = useState(['One Punch']);
   
   /*  const handleAdd=()=>
    {
        
       
        setCategories( [...categories,'Mis cacahuates']);
        //setCategories( categos=> [...categos,'Mis cacahuates']);
    } */

    return (
        <>
        <h2>GifExpetApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr />
        <br />
        <br />
        
        <ol>
        { 
             categories.map(category => (
             <GifGrid key={category} category={category}/> 
             ))// agrupación del return y del map
        } 
        </ol>
        
            {/* No se puede usar un for porque necesita que regrese un valor pero podemos usar funciones que regresen un valo como el map */}
        </>
    );   
}


export default  GiftExpertApp;