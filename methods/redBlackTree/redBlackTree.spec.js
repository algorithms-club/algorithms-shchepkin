/**
 * Created by installer on 2017/06/14.
 */
'use strict';

// llrb - left lint red black tree
const algolib = require('../index.js');

describe('#RedBlackTree', function() {

    it('should create proper data structure', function() {
        let rbt = new algolib.RedBlackTree();

        rbt.insert.should.be.instanceOf(Function);
        rbt.get.should.be.instanceOf(Function);
        rbt.getLastNode.should.be.instanceOf(Function);
    });

    it('should find return', function() {
        let rbt = new algolib.RedBlackTree();

        rbt.insert(19);
        rbt.get(19).should.be.eql(19);
    });

})