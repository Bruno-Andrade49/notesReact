import React, { Component } from 'react';
import "./style.css";
import {ReactComponent as Delete} from "../../assets/img/delete.svg"


class CardNota extends Component {

    apagar() {
        const indice = this.props.indice;
        this.props.apagarNota(indice)
    }
    render() {
        return (
            <>
            <section className="card-nota">
                <header className="titulo-header">
                    <h3 className="titulo-texto"> {this.props.titulo} </h3>
                    <Delete onClick={this.apagar.bind(this)}/>
                    <h4>{this.props.categoria}</h4>
                </header>
                <p className="texto-texto"> {this.props.texto} </p>
            </section>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Hind:wght@300&family=Poppins:wght@100&family=Roboto&display=swap');
            </style>
            </>
        )
    }
}


export default CardNota;