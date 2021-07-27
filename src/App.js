import { Component } from 'react';
import './App.css';
import MyForm from './component/MyForm';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      datos : [
        { datain: 'Email' , tinp: 'email', required: true},
        { datain: 'Password' , tinp: 'password', required: true}
      ],
      datbutton : 'Ingresar'
    }
  }

  recepcionDatos = (datos) => {
    console.log('El email ingresado es: ' + datos.Email);
    console.log('Contrasenia ' + datos.Password);
  }


  render() {
    return (
      <div className="App">
        <MyForm datos = {this.state.datos} datbutton = {this.state.datbutton} recepcionDatos = {this.recepcionDatos}/>
      </div>
    );
    }
}

export default App;
