'use strict';

const algolib = require('../index.js');

describe.only('#unionFind', function() {
	
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

	it('should #component return which component has element', function() {
		let unionFind = new algolib.UnionFind();

		unionFind.connect(1, 4);
		unionFind.connect(4, 5);

		let whichComponentHasElement = unionFind.component(1);
		whichComponentHasElement.should.be.eql(5);

	});
	
	it('should #count return number of existing components', function() {
		let unionFind = new algolib.UnionFind();

		unionFind.connect(1, 4);
		unionFind.connect(2, 4);

		let numOfComponents = unionFind.count();
        numOfComponents.should.be.eql(1);

	});

	it('should #count return number of existing components', function() {
		let unionFind = new algolib.UnionFind();

		unionFind.connect(1, 4);
		unionFind.connect(2, 4);
		unionFind.connect(3, 5);

		let numOfComponents = unionFind.count();
        numOfComponents.should.be.eql(2);

	});

	it('should #count return number of existing components', function() {
		let unionFind = new algolib.UnionFind();

		unionFind.connect(1, 4);
		unionFind.connect(2, 4);
		unionFind.connect(3, 5);
		unionFind.connect(5, 4);

		let numOfComponents = unionFind.count();
        numOfComponents.should.be.eql(1);

	});

	it('should #count return number of existing components', function() {
		let unionFind = new algolib.UnionFind();

		unionFind.connect(1, 5);
		unionFind.connect(2, 4);
		unionFind.connect(3, 10);
		unionFind.connect(6, 8);

		let numOfComponents = unionFind.count();
        numOfComponents.should.be.eql(4);

	});

	it('should #count return number of existing components', function() {
		let unionFind = new algolib.UnionFind();

		let numOfComponents = unionFind.count();
        numOfComponents.should.be.eql(0);

	});


})