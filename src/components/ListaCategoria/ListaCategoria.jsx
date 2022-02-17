import React, { Component } from 'react';
import "./style.css"

class ListaCategoria extends Component {

    constructor(){
        super();
        this.state = {categorias:[]}

        this._novasCategorias = this._novasCategorias.bind(this);
    }


    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this._novasCategorias);
    }

    _novasCategorias(categorias) {
        this.setState({...this.state, categorias})
    }

    _handlerEventoInput = (e) => {
        if (e.key == "Enter") {
            let valorCategoria = e.target.value;
            this.props.adicionarCategoria(valorCategoria)
        }
    }

    render() {
        return (
            <section class="lista-cat">

                <ul >
                    {this.state.categorias.map((c, index) => {
                        return (<li key={index} >
                            <div>
                                {c}
                            </div>
                        </li>
                        );
                    })}
                </ul>

                <input
                    type="text"
                    placeholder="Adiconar categoria..."
                    onKeyUp={this._handlerEventoInput} />
            </section>
        );
    }
}

export default ListaCategoria;