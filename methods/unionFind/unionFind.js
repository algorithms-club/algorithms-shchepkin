'use strict';

const algolib = require('../index.js');

class UnionFind {

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

	isConnected(a, b) {
		// 0, 1
		// [undefined, undefined]
		if(isNaN(this._elements[a]) || isNaN(this._elements[b])){
			return false;
		}

		return this._elements[a] === this._elements[b];
	}

	count(a) {

		if (isNaN(this._elements[a])){
			return 0;
		}

		let value = this._elements[a];
		let count = 0;

		for (let i = 0; i < this._elements.length; i++) {
			if(this._elements[i] == value){
				count++;
			}
		}
		
		return count;
	}

	component(a){
		if (isNaN(this._elements[a])){
			return false;
		}

		return this._elements[a];		
	}
}

module.exports = UnionFind;
