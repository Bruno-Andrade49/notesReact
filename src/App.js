import Listanotas from "./components/Listanotas"
import Formulario from "./components/Formulario"
import React, { Component } from 'react';
import './assets/index.css';
import "./assets/app.css"
import ListaCategoria from "../src/components/ListaCategoria/ListaCategoria.jsx"
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas"




class App extends Component {

  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }


  /*criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }*/

  /*adicionarCategoria(categoria) {
    const novoArrayCategorias = [...this.state.categorias, categoria]
    const newState = {
      ...this.state, categorias: novoArrayCategorias
    }
    this.setState(newState)
  }
*/
  /*deletarNota(indice) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(indice, 1);
    this.setState({ notas: arrayNotas })
    console.log("Deletado!")
  }

*/

  render() {

    return (
      <>
        <section className="conteudo">
          <Formulario 
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)} />
          <main className="class-categoria">
            <ListaCategoria  
            categorias={this.categorias}
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}/>

            <Listanotas
              apagarNota=
              {this.notas.apagarNota.bind(this.notas)}
              notas={this.notas} />
          </main>
        </section>
      </>
    );
  }
}

export default App;


