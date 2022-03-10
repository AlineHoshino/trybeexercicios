"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pizza {
    constructor(_size) {
        this._size = _size;
        // this.size = size;
        this.ingredients = ['massa'];
    }
    get size() {
        return this._size;
    }
    makePizza() {
        return `${this.size} pizza está sendo preparada!`;
    }
    ;
    get price() {
        var _a;
        const pizzaPrices = {
            "medium": 25,
            "large": 30,
            "extra-large": 38
        };
        const price = (_a = pizzaPrices[this.size]) !== null && _a !== void 0 ? _a : pizzaPrices.large;
        //Descrição
        //O operador de coalescência nula(??) retorna os resultados da expressão de seu lado direito se a expressão de seu lado esquerdo for null ou undefined.
        return price;
    }
}
exports.default = Pizza;
