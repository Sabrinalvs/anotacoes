class Anotacoes {
    constructor(){
        this.titulo = "";
        this.notas = "";

    }
    getNotas(){
        return this.notas;
    }
    getTitulo(){
        return this.titulo;
    }
    setNotas(notas){
        try {
            if (typeof notas != 'string') throw new Error ("Criação de notas-dados inválidos")
            else {
                this.notas = notas;
            }
        } catch (error) {
            console.log(error);
            
        }
    }
    setTitulo(titulo){
        try {
            if (typeof titulo != 'string') throw new Error ("Criação de notas-dados inválidos")
            else {
                this.titulo = titulo;
            }
        } catch (error) {
            console.log(error);
            
        }
    }
}
const anot = new Anotacoes()
anot.setNotas("10");
console.log(anot.getNotas());