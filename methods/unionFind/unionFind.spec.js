'use strict';

const algolib = require('../index.js');

describe('#unionFind', function() {
	
	it('should create proper data structure', function() {
		let unionFind = new algolib.UnionFind();

		unionFind.connect.should.be.instanceOf(Function);
		unionFind.isConnected.should.be.instanceOf(Function);

	});


	it('should #isConnected return false if elements are not connected', function() {
		let unionFind = new algolib.UnionFind();

		let isElementConnected = unionFind.isConnected(3, 4);
		isElementConnected.should.be.false();

	});

	it('should #isConnected return true if elements are connected', function() {
		let unionFind = new algolib.UnionFind();

		unionFind.connect(1, 4);

		let isElementConnected = unionFind.isConnected(1, 4);
		isElementConnected.should.be.true();

	});
//-------------------------------------------------------------------------------------------------
	it('should #component return false if component undefined', function() {
		let unionFind = new algolib.UnionFind();

		let whichComponentHasElement = unionFind.component(100);
		whichComponentHasElement.should.be.false();

	});

	it('should #component return which component has element', function() {
		let unionFind = new algolib.UnionFind();

		unionFind.connect(1, 4);
		
		let whichComponentHasElement = unionFind.component(1);
		whichComponentHasElement.should.be.eql(4);

	});

	it('should #count return 0 if component undefined', function() {
		let unionFind = new algolib.UnionFind();

		let numElementsInComponent = unionFind.count(100);
		numElementsInComponent.should.be.eql(0);

	});

	it('should #count return number of elements in component', function() {
		let unionFind = new algolib.UnionFind();

		unionFind.connect(1, 4);
		unionFind.connect(2, 4);

		let numElementsInComponent = unionFind.count(4);
		numElementsInComponent.should.be.eql(3);

	});


})