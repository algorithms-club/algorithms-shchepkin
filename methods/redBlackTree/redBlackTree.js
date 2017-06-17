/**
 * Created by installer on 2017/06/14.
 */
'use strict';
const algolib = require('../index.js');

class RedBlackTree {

    constructor(value, parent){
        this._element = {
            value: value,
            parent: parent,
            right: NaN,
            left: NaN,
            isRed: true
        };
    }

    insert(value){

        if (this.getLastNode(value).value === value) {
            return;
        }

        if (value > this.getLastNode(value).value){
            this._element.right = new RedBlackTree(value, this._element);
        }

        if (value < this.getLastNode(value).value){
            this._element.left = new RedBlackTree(value, this._element);
            // if (this._element.isRed){rotateRight();}
        }
    }

    get(value) {
        if (this._element.value === value) return this;
        if (value > this._element.value && !isNaN(this._element.right)) return this._element.right.get(value);
        if (value < this._element.value && !isNaN(this._element.left)) return this._element.left.get(value);
    }

    getLastNode(value){
        if (this._element.value === value) return this;

        if (value > this._element.value && !isNaN(this._element.right)) {
            return this._element.right.getLastNode(value);
        }

        if (value < this._element.value && !isNaN(this._element.left)) {
            return this._element.left.getLastNode(value);
        }
    }

}

module.exports = RedBlackTree;