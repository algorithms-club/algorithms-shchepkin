'use strict';
const algolib = require('../index.js');

class Node{
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.righ = null;
        this.isRed = true;
    }
}

class Llrb {

    constructor(elements){
        this.root = null;

        if (elements && elements.length){
           this._buildFromArray(elements);
        }
    }

    _buildFromArray(){}

    _findPlace(key){}

    insert(key, value){
        if(!this.root){
            return this.root = new Node (key, value);
        }
    }

    find(key){}
    getMin(){}
    getMax(){}
    size(){}
}

module.exports = Llrb;