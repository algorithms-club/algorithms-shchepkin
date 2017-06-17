
'use strict';

const algolib = require('../index.js');

describe('#sortFunction', function() {

    it('should create proper data structure', function() {
        let sortFunction = new algolib.SortFunction();

        sortFunction.sort.should.be.instanceOf(Function);
        sortFunction.compare.should.be.instanceOf(Function);
    });

    it('should ', function() {
        let sortFunction = new algolib.SortFunction();

        let arr = [
            {
                name : '',
                price : 123
            },
            {
                name : '',
                price : 121
            }
        ]

        sortFunction.sort.should.be.instanceOf(Function);
        sortFunction.compare.should.be.instanceOf(Function);
    });

})