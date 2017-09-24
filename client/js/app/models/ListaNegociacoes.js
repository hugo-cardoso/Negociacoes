class ListaNegociacoes {

    constructor() {

        this._negociacoes = [];
    }

    adiciona( negociacao ) {

        this._negociacoes.push( negociacao );
    }

    get negociacoes() {

        return [].concat(this._negociacoes);
    }

    get totalVolume() {
        let total = 0;
        this._negociacoes.map(function(item) {

            total += item.volume;
        })
        return total;
    }
}