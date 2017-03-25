'use strict';

const algolib = require('../index.js');

describe(' #coverByTile', function() {
	
	it('should count amount of tiles to cover area (integer)', function() {
		let tileAmount = algolib.coverByTile(5, 3, 2);
		tileAmount.should.be.eql(6);
	});


	it('should count amount of tiles to cover area (integer)', function() {
		let tileAmount = algolib.coverByTile(0.5, 1.3, 0.2);
		tileAmount.should.be.eql(21);
	});

})