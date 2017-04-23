'use strict';

const algolib = require('../index.js');

describe(' #bitPlusPlus', function() {
	
	it('should #bitPlusPlus return 1 if sentence contains ++ (integer)', function() {
		let result = algolib.bitPlusPlus("X++");
		result.should.be.eql(1);
	});

	
	it('should #bitPlusPlus return -1 if sentence contains -- (integer)', function() {
		let result = algolib.bitPlusPlus("--X");
		result.should.be.eql(-1);
	});


	it('should #bitPlusPlus return 0 if sentence not contains ++ or -- (integer)', function() {
		let result = algolib.bitPlusPlus("X+-");
		result.should.be.eql(0);
	});

})