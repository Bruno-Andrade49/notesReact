import React, { Component } from 'react';
import "./style.css"



class Formulario extends Component {


    constructor(props) {
        super(props);
        this.titulo = "";
        this.nota = "";
        this.categoria = "Sem Categoria";
        this.state = { categorias: [] }

        this.novasCategorias = this._novasCategorias.bind(this);
    }

    componentDidMount() {
        this.props.categorias.inscrever(this.novasCategorias);
    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this.novasCategorias);
    }


    _novasCategorias(categorias) {
        this.setState({ ...this.state, categorias })
    }


    _criarNota(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.nota, this.categoria);
    }


    _handleMudancaTitulo(evento) {
        evento.stopPropagation();

        this.titulo = evento.target.value;
    }

    _handleMudancaNota(evento) {
        evento.stopPropagation();

        this.nota = evento.target.value;
    }

    _handleMudancaCategoria(evento) {
        evento.stopPropagation();

        this.categoria = evento.target.value;
    }


    render() {
        return (

            <form className="formulario-cadastro"
                onSubmit={this._criarNota.bind(this)}
            >
                <select className="formulario_input"
                    onChange={this._handleMudancaCategoria.bind(this)}
                >
                    <option>Sem Categoria</option>
                    {this.state.categorias.map((e, index) => {
                        return <option key={index}>{e}</option>
                    })}
                </select>
                <input
                    className="form-cadastro_input"
                    type="text"
                    placeholder="Título"
                    onChange={this._handleMudancaTitulo.bind(this)}
                />
                <textarea
                    className="form-cadastro-note"
                    placeholder="Escreva sua nota..."
                    onChange={this._handleMudancaNota.bind(this)}
                />
                <button
                    className="form-cadastro_input form-cadastro_submit"
                    type="submit">Criar nota</button>
            </form>
        )
    }

}
export default Formulario;