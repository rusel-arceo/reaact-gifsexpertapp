import React, {useState} from 'react'
import PropTypes from 'prop-types'

/*Se encarga de mostrar los escrito en el input y agregarlo 
a la liosta dse categorias al presionar enter */

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
        
    const handleSubmit=(e)=>{ //Al usar el setCategories aquí, nos aseguramos que se renderice al ahcer enter
        e.preventDefault(); // porque el evento devuelve un formulario, es para que no recargue
        
        if(inputValue.trim().length>2) //El .trim borra los espacios
        {
            setCategories(cats=>[inputValue, ...cats]);
            setInputValue('');
        }
        //Set categories modifica el arreglo de categorias, este se puede pasar como argumento pero al ser 
        //Esta funcion parte del mismo hook, se pueden llamar como argumento en el callback
        //es decir laa variable ya viaja como argumento en la función

    }

    const handleInputChange = (e)=>{        
            setInputValue(e.target.value);            
            
    }

    
        return (        
        
        <form onSubmit={handleSubmit}>
            <input type="text"
                    value={inputValue}
                    onChange = { handleInputChange }
            />

        </form>           
        //</>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}