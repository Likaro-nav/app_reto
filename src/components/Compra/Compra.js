import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Compra.css'

export default class Compra extends Component {
    constructor(props){
        super(props);
        this.state = {
            valor: 1,
        }
        this.aumentarCantidad = this.aumentarCantidad.bind(this);
    }

    aumentarCantidad = (e) => {
        this.setState({valor: e.valor+1})
    }

    render() {
        return (
            <article>
                <div className="containerCompra">
                    <div className="headCompra">
                        <div className="logosHead">
                            <Link to ="/articulos/Maiz">
                                <img src="/media/flecha.svg" alt="Flecha izquierda" className="flecha"/>
                            </Link> 
                            <button className="btnMeGusta">
                                <img src="/media/love.svg" alt="Me gusta" className="meGusta"/>
                            </button>
                        </div>
                        <div className="carritoImg">
                            <img className="imgProductoCarrito" src="/media/68.jpg" alt="producto"/>
                        </div>
                    </div>
                    <div className="bodyCompra">  
                        <div className="compra_info">
                            <div className="compra_info_precio">
                                <span className="precio">$2 /</span>
                                <span className="cantidad">kilo</span>
                            </div>
                            <div className="compra_info_nombre">
                                <a href="/pedidos" className="nombre_pedido"> 
                                    Maíz ecológico
                                </a> 
                            </div>
                        </div>
                        <div className="linea_accion_compra">
                            <button className="menos"> 
                                <img src="/media/Group2.svg" alt="Boton menos"className="btnMenos"/> 
                            </button>
                            
                            <div className="cantidad_input">
                                <input className="cantidad_compra" type="text" value={this.state.valor} name="cantidad_producto" min="1" max="9"></input>
                            </div>

                            <button onClick={this.aumentarCantidad} className="mas" >
                                <img src="/media/Group.svg" alt="Boton más" className="btnMas"/>
                            </button>

                            <div className="compra_final"> 
                                <Link to="/comprafinal" className="btnAddToCart">
                                    Añadir producto
                                </Link>
                            </div> 
                        </div>
                    </div>  
                </div>
            </article>
        )
    }
}
