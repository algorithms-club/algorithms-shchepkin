/**
 * Created by installer on 2017/06/14.
 */
'use strict';

// llrb - left lint red black tree
const should = require();
const algolib = require('../index.js');

describe.only('#Llrb', function() {

    it('should Llrb create instance of tree', function() {
        const  tree = new algolib.Llrb();

        tree.insert.should.be.instanceOf(Function);
        tree.find.should.be.instanceOf(Function);
        tree.getMax.should.be.instanceOf(Function);
        tree.getMin.should.be.instanceOf(Function);
        tree.size.should.be.instanceOf(Function);
    });

    it('should Llrb insert element', function() {
        const  tree = new algolib.Llrb();

        tree.insert(4, 'algorithms');
        should(tree.root).be.ok() ;
    });

    it('should Llrb insert element', function() {
        const  tree = new algolib.Llrb();

        tree.insert(4, 'algorithms');
        tree.insert(8, 'value new');

        tree.right.key.should.be.eql(8);
        tree.right.value.should.be.eql('value new');

        should(tree.root).be.ok();
    });

})