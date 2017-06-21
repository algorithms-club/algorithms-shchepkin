/**
 * Created by installer on 2017/06/14.
 */
'use strict';

// llrb - left lint red black tree
const should = require('should');
const algolib = require('../index.js');

describe.only('#Llrb', function() {

    it('should #Llrb create instance of tree', function() {
        const  tree = new algolib.Llrb();

        tree.insert.should.be.instanceOf(Function);
        tree.find.should.be.instanceOf(Function);
        tree.getMax.should.be.instanceOf(Function);
        tree.getMin.should.be.instanceOf(Function);
        tree.size.should.be.instanceOf(Function);
    });

    it('should #Llrb insert element in root', function() {
        const  tree = new algolib.Llrb();

        tree.insert(4, 'algorithms');
        should(tree.root).be.ok() ;
    });

    it('should #Llrb insert element in the right place', function() {
        const  tree = new algolib.Llrb();

        tree.insert(4, 'algorithms');
        tree.insert(8, 'value right');

        tree.root.right.key.should.be.eql(8);
        tree.root.right.value.should.be.eql('value new');

        should(tree.root).be.ok();
    });

    it('should #Llrb insert element in the left place', function() {
        const  tree = new algolib.Llrb();

        tree.insert(8, 'algorithms');
        tree.insert(4, 'value left');

        tree.root.left.key.should.be.eql(4);
        tree.root.left.value.should.be.eql('value left');
        should(tree.root).be.ok();
    });

    it('should #Llrb insert element in the left and the right places', function() {
        const  tree = new algolib.Llrb();

        tree.insert(8, 'algorithms');
        tree.insert(4, 'value left');
        tree.insert(10, 'value right');

        tree.root.left.key.should.be.eql(4);
        tree.root.left.value.should.be.eql('value left');
        tree.root.right.key.should.be.eql(10);
        tree.root.right.value.should.be.eql('value right');
        should(tree.root).be.ok();
    });

    it('should #getMin return min element', function() {
        const  tree = new algolib.Llrb();

        tree.insert(20, 'value 20');
        tree.insert(15, 'value 15');
        tree.insert(30, 'value 30');
        tree.insert(25, 'value 25');
        tree.insert(27, 'value 27');
        tree.insert(23, 'value 23');
        tree.insert(17, 'value 17');
        tree.insert(10, 'value 10');
        tree.insert(6, 'value 6');

        tree.getMin().key.should.be.eql(6);
        tree.getMin().value.should.be.eql('value 6');
        should(tree.root).be.ok();
    });

    it('should #getMax return max element', function() {
        const  tree = new algolib.Llrb();

        tree.insert(20, 'value 20');
        tree.insert(15, 'value 15');
        tree.insert(30, 'value 30');
        tree.insert(25, 'value 25');
        tree.insert(27, 'value 27');
        tree.insert(23, 'value 23');
        tree.insert(17, 'value 17');
        tree.insert(10, 'value 10');
        tree.insert(6, 'value 6');

        tree.getMax().key.should.be.eql(30);
        tree.getMax().value.should.be.eql('value 30');

        tree.size().should.be.eql(9);
        should(tree.root).be.ok();
    });

    it('should #size return 3 if inserted 3 elements', function() {
        const  tree = new algolib.Llrb();

        tree.insert(20, 'value 20');
        tree.insert(15, 'value 15');
        tree.insert(30, 'value 30');

        tree.size().should.be.eql(3);
        should(tree.root).be.ok();
    });

    it('should #size return 0 if there are no one element', function() {
        const  tree = new algolib.Llrb();
        tree.size().should.be.eql(0);
    });

    it.only('should #find return max element', function() {
        const  tree = new algolib.Llrb();

        tree.insert(20, 'value 20');
        tree.insert(15, 'value 15');
        tree.insert(30, 'value 30');
        tree.insert(25, 'value 25');
        tree.insert(27, 'value 27');
        tree.insert(23, 'value 23');
        tree.insert(17, 'value 17');
        tree.insert(10, 'value 10');
        tree.insert(6, 'value 6');

        tree.find(27).should.be.eql('value 27');
        should(tree.root).be.ok();
    });


});