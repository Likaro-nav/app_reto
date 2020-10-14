import React, { Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import Buscador from '../Buscador/Buscador';
import Contenidos from '../Contenido/Contenido'
import Compra from '../Compra/Compra';
import RegistreWithRouter from '../Registro/Registro'
import InicioSesion from '../Registro/InicioSesion'
import Contact from '../Contact/Contact'
import About from '../About/About'

// import Sigin from '../Sigin';
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
      <section>
        <article className="fondo">
          <Switch>
            <Route exact path="/" component={Buscador}/>
            <Route exact path="/articulos/:producto" component={Contenidos}/>
            <Route exact path="/pedidos" component={Compra}/>
            <Route exact path="/registro" component={RegistreWithRouter}/>
            <Route exact path="/iniciosesion/:value" component={InicioSesion}/>
            <Route exact path="/contacto" component={Contact}/>
            <Route excat path="/about" component={About}/>
          </Switch>
        </article>
        
      </section>
    );
  }
}

export default Main;