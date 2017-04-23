'use strict';

const algolib = require('./index.js');

class LinkedList {

    constructor(){
        this._elements = [];
        this.last = -1;
    }

    push(value){
        this.last++;
        let obj = {};

        obj.value = value;
        this._elements[this.last] = obj;

        if (this.last > 0){
           obj = this._elements[this.last - 1];
           obj.next =  this.last;
           this._elements[this.last - 1] = obj;
        }

        return this._elements;
    }

    getNextLink(a){
        let obj = this._elements[a];
        return obj.next;
    }

    get(a){
        let obj = this._elements[a];
        return obj.value;
    }

    getLastElementNumber(){
        if (this.last < 0){
            return NaN;
        }else return this.last;
    }

    del(a){
        if (a > this.last || a < 0){return NaN}
        let objOld = this._elements[a];

        delete this._elements[a];

        if (this.last === 0) {
            this.last = -1;

        }else if (a !== 0){
           let obj = this._elements[a - 1];
           obj.next =  objOld.next;
           this._elements[a - 1] = obj;
        }
    }

}

module.exports = LinkedList;
