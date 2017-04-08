'use strict';

const algolib = require('./index.js');

function bitPlusPlus(sentence) {
	let result = 0;
	let string = String(sentence);

	if (~string.indexOf("++")) {			// "~" == ">= 0"
        result++;
    } else if (string.indexOf("--") >= 0){
        result--;
    }

	return result;         
};

module.exports = bitPlusPlus;