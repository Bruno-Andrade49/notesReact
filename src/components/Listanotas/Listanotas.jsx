import React, { Component } from 'react';
import CardNota from "../CardNota";
import "./style.css"


class Listanotas extends Component {

    constructor() {
        super();
        this.state = {notas:[]}

        this._novasNotas = this._novasNotas.bind(this)
      }

    componentDidMount() {
        this.props.notas.inscrever(this._novasNotas);
    }

    componentWillUnmount() {
        this.props.notas.desinscrever(this._novasNotas);
    }
  
    _novasNotas(notas) {
      this.setState({...this.state, notas})
      console.log(this.state.notas)
    }

    render() {
        return (
            <ul className="lista-notas">
                {this.state.notas.map((notas, index) => {
                    return (
                        <li className="lista-itens" key={index}>
                            <CardNota 
                            indice = {index}
                            apagarNota={this.props.apagarNota}
                            titulo={notas.titulo} 
                            texto={notas.texto}
                            categoria={notas.categoria}/>
                        </li>
                    )
                })}
            </ul>
        )
    }




}

export default Listanotas;