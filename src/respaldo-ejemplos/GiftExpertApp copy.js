import React, {useState} from 'react';

const GiftExpertApp=()=>
{
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']; // Esto no se usa al meenos que estemos seguros que nunca va a cambiar, porque es complicado para agregar y renderizar nuevamente
 
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
   

    const handleAdd=()=>
    {
        
       
        setCategories( [...categories,'Mis cacahuates']);
        //setCategories( categos=> [...categos,'Mis cacahuates']);
        console.log("Tu si sabes preionar!!");
    }

    return (
        <>
        <h2>GifExpetApp</h2>
        <hr />
        <input type='text' id='entrada'/>
        
        <button onClick={handleAdd}>Agregar</button>  
        <ol>
        { 
            categories.map(category => {
                return <li key={category}> {category} </li>;
            })
        } 
        </ol>
        
            {/* No se puede usar un for porque necesita que regrese un valor pero podemos usar funciones que regresen un valo como el map */}
        </>
    );   
}


export default  GiftExpertApp;