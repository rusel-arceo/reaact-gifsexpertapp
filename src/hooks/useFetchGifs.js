import {useState, useEffect} from 'react';
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category)=>
{
    const [state, setState] = useState({
        data:[],
        loading:true
    });
useEffect(() => { // Recibe función de flecha que es donde se pondrá el codigo que se quiere controlar y un parametro de control
        getGifs(category).then((imgs)=>{
                setState({
                    data:imgs,
                    loading:false
                });//del setState            
        }); //del useEffect
    },[category] )

    // setTimeout(()=>{
    //     setState({data:[1,2,3,4,5], loading:false}) //dento del setValor del Hook, para pasar mas de dos argumentos debemos utilizar {} y para asigna los :       
    // }, //Parentesís del setTIme OUt
    // 3000);

    return state;
}