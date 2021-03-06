import React, { Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import RegistreWithRouter from '../Registro/Registro'
import InicioSesion from '../InicioSesion/InicioSesion'
import InfoProductor from '../InfoUsuarios/InfoProductor';
import MiCuenta from '../MiCuenta/MiCuenta'
import Edit from '../EditarPerfil/Edit'

import Welcome from '../Welcome/Welcome'
import Buscador from '../Buscador/Buscador';
import Contenidos from '../Contenido/Contenido'
import Compra from '../Compra/Compra';
import CompraFinal from '../CompraFinal/CompraFinal';

import Contact from '../Contact/Contact'
import ContactProducter from '../Contact/ContactProducter'
import ContactConsumer from '../Contact/ContactConsumer'
import About from '../About/About'

import './Main.css';



class Main extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <section className="fondo">
          <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route exact path="/registro" component={RegistreWithRouter}/>            
            <Route exact path="/iniciosesion/:value" component={InicioSesion}/>
            <Route exact path="/infoproductor" component={InfoProductor}/>
            <Route exact path="/micuenta" component={MiCuenta}/>
            <Route exact path="/editar" component={Edit}/>

            <Route exact path="/buscador" component={Buscador}/>
            <Route exact path="/articulos/:producto" component={Contenidos}/>
            <Route exact path="/resumen" component={CompraFinal}/>  
            <Route exact path="/pedidos" component={Compra}/>   
            
            <Route exact path="/contacto" component={Contact}/>
            <Route exact path="/clienteprod" component={ContactProducter}/>
            <Route exact path="/clientecons" component={ContactConsumer}/>
            <Route excat path="/about" component={About}/>
          </Switch>
      </section>
    );
  }
}

export default Main;