class Pregunta{
    
        constructor(pregunta, respuestas){
        this._pregunta = pregunta
        this._preguntaValida = true
        this._respuestas = respuestas;
    }

    get pregunta(){
        return this._pregunta
    }

    get preguntaValida(){
        return this._preguntaValida
    }

    get respuestas(){
        return this._respuestas
    }

    set preguntaValida(esValida){
        this._preguntaValida = esValida
    }


}