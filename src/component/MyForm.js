import React, {Component, useEffect, useState} from 'react'

const MyForm = (props) => {

    /*const parsein = () => {
        let arraux = [];
        props.datos.map((dato) => {
            arraux.push({[dato.datain] : ''}) 
            
            }
        )
        return arraux;
    }

    const [datos, setDatos] = useState(props.datos);*/

    const [inputdata, setInputdata] = useState();

    //const datbutton = useState(props.datbutton) //Acá está mal la forma de usar useState, el hook devuelve un array con [nombreVariableDeEstado, funcQueModifEsaVariable]

    const handleInputChange = ( event ) => {
        console.log( event.target.name)
        setInputdata({
            ...inputdata,
            [event.target.name] : event.target.value
        },)
    }
    

    /*useEffect((event) => {
        console.log( event.target.name);
        this.setDatos({  //Ojo que en componentes de Clase se utiliza unicamente el "this", en componentes función no existe ya que "this" hace referencia a un objeto y acá el componente es justamente una función
            [event.target.name] : event.target.value
        })
    })*/
    

    const enviarDatos = (event) => {
        event.preventDefault();
        props.recepcionDatos(inputdata);
      }

    return(             
       <form className = "CompInput" name= "form" onSubmit = {enviarDatos}>           
            {props.datos.map((dato, index) => 
                <input 
                    key = {index}
                    text={dato.tinp} 
                    onChange = { handleInputChange } 
                    placeholder = {dato.datain} 
                    name = {dato.datain} 
                />
                )                                           
            }
            <button>
                {props.datbutton}
            </button>
       </form>       

    )
}

export default MyForm;
