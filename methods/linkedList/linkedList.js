'use strict';

const algolib = require('../index.js');

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

    del(a){
        if (a > this.last || a < 0){return NaN}

        let objForDelete = this._elements[a];

        if (this.last === 0) {
            this.last = -1;

        }else {
            if (LinkedList.checkIsLast(objForDelete)) {
                if ("prew" in objForDelete) {
                    this.addNextWithLast(objForDelete.prew)
                } else {
                    this.addNextWithLast(a - 1)
                }
            } else {
                if ("prew" in objForDelete) {
                    let obj = this._elements[objForDelete.prew];
                    obj.next = objForDelete.next;
                    this._elements[objForDelete.prew] = obj;

                    obj = this._elements[objForDelete.next];
                    obj.prew = objForDelete.prew;
                    this._elements[objForDelete.next] = obj;

                } else {
                    let obj = this._elements[a - 1];
                    obj.next = objForDelete.next;
                    this._elements[a - 1] = obj;

                    obj = this._elements[a + 1];
                    obj.prew = a - 1;
                    this._elements[a + 1] = obj;
                }
            }
        }

        delete this._elements[a];
    }

    addNextWithLast(a){
        let obj = this._elements[a];
        delete obj.next;
        this._elements[a] = obj;
        this.last = a;
    }

    getNextLink(a){
        let obj = this._elements[a];
        return obj.next;
    }

    getPrewLink(a){
        let obj = this._elements[a];
        return obj.prew;
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

    static checkIsLast(a){
        return !("next" in a);
    }
}

module.exports = LinkedList;
