'use strict';

const algolib = require('./index.js');

class linkedList {

    constructor(){
        this._elements = [];
    }

    connect(a, b) {

        if(this.isConnected(a, b)) {
            return;
        }

        this._elements[a] = isNaN(this._elements[a]) ? a : this._elements[a];
        this._elements[b] = isNaN(this._elements[b]) ? b : this._elements[b];

        let componentA = this._elements[a];
        let componentB = this._elements[b];

        for (let i = 0; i < this._elements.length; i++) {
            if(this._elements[i] == componentA){
                this._elements[i] = componentB;
            }
        }

    }

}

module.exports = linkedList;
