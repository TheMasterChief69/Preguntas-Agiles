class Respuesta{
    constructor(respuesta, verdaderaFalsa){
        this._respuesta =respuesta
        this._verdaderaFalsa = verdaderaFalsa       
    }

    get respuesta(){
        return this._respuesta
    }

    get verdad(){
        return this._verdaderaFalsa
    }

}