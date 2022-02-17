export default class Categorias {
    constructor() {
        this.categorias = [];
        this._incritos = [];
    }

    inscrever(func) {
        this._incritos.push(func);
    }

    desinscrever(func) {
        console.log(this._incritos.length)
        this._incritos = this._incritos.filter(f =>  f !== func);
        console.log(this._incritos.length)
    }

    notificar() {
        this._incritos.forEach(func => {
            func(this.categorias);
            }
        );
    }

    adicionarCategoria(novaCategoria) {
        this.categorias.push(novaCategoria)
        this.notificar();
    }
}