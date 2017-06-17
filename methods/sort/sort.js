'use strict';

const algolib = require('../index.js');

class Sort {

    constructor(){
        this._elements = [];
    }

    sort(collection, compare){
        this._elements = collection;

        for (let i = 0; i < this._elements.length - 1; i++) {
            if(compare(i, i + 1)){
            }
        }
    }

    compare (a, b){
        return (a > b);
    }

    selectionSort(){
        //find minimum and add to start
    }
    insertionSort(){
        // up to you
    }
    shellSort(){
        // necessary
    }
    shuffle(){
       // рамдомно перемешивает массив
    }
    isSorted(){}
}

module.exports = Sort;
