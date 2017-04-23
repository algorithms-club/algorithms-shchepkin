'use strict';

const algolib = require('../index.js');

describe.only('#linkedList', function() {

    it('should create proper data structure', function() {
        let linkedList = new algolib.LinkedList();

        linkedList.push.should.be.instanceOf(Function);
    });

    it('should #getLastElementNumber return NaN if there are no elements', function() {
        let linkedList = new algolib.LinkedList();

        let lastElementNum = linkedList.getLastElementNumber();
        lastElementNum.should.be.eql(NaN);
    });

    it('should #getLastElementNumber return valid last element number (2 elements)', function() {
        let linkedList = new algolib.LinkedList();

        linkedList.push(5);
        linkedList.push(3);

        let lastElementNum = linkedList.getLastElementNumber();
        lastElementNum.should.be.eql(1);
    });

    it('should #getLastElementNumber return valid last element number (6 elements)', function() {
        let linkedList = new algolib.LinkedList();

        linkedList.push(5);
        linkedList.push(3);
        linkedList.push(8);
        linkedList.push(1);
        linkedList.push(15);
        linkedList.push(6);

        let lastElementNum = linkedList.getLastElementNumber();
        lastElementNum.should.be.eql(5);
    });

    it('should #get return valid value', function() {
        let linkedList = new algolib.LinkedList();

        linkedList.push(5);
        linkedList.push(3);

        let value = linkedList.get(1);
        value.should.be.eql(3);
    });

    it('should #getNext return valid link to the next element', function() {
        let linkedList = new algolib.LinkedList();

        linkedList.push(5);
        linkedList.push(3);
        linkedList.push(7);
        linkedList.push(58);

        let next = linkedList.getNextLink(2);
        next.should.be.eql(3);
    });

    it('should #del return NaN if argument < 0', function() {
        let linkedList = new algolib.LinkedList();

        let del = linkedList.del(-4);
        del.should.be.eql(NaN);
    });

    it('should #del return NaN if there are no existing elements', function() {
        let linkedList = new algolib.LinkedList();

        let del = linkedList.del(0);
        del.should.be.eql(NaN);
    });

    it('should #del return NaN if argument > then num of existing elements', function() {
        let linkedList = new algolib.LinkedList();

        linkedList.push(23);

        let del = linkedList.del(1);
        del.should.be.eql(NaN);
    });

    it('should #getLastElementNumber return NaN if deleted all elements', function() {
        let linkedList = new algolib.LinkedList();

        linkedList.push(23);
        linkedList.del(0);

        let lastElement = linkedList.getLastElementNumber();
        lastElement.should.be.eql(NaN);
    });

    it('should #getNext return link to next element after deleted', function() {
        let linkedList = new algolib.LinkedList();

        linkedList.push(23);
        linkedList.push(3);
        linkedList.push(13);
        linkedList.del(1);

        let next = linkedList.getNextLink(0);
        next.should.be.eql(2);
    });

    it('should #get return valid value after exchanging link to next element', function() {
        let linkedList = new algolib.LinkedList();

        linkedList.push(23);
        linkedList.push(3);
        linkedList.push(13);
        linkedList.del(1);

        let value = linkedList.get(0);
        value.should.be.eql(23);
    });

    it('should #getNextLink return valid value after deleting 2 elements', function() {
        let linkedList = new algolib.LinkedList();

        linkedList.push(23);
        linkedList.push(3);
        linkedList.push(15);
        linkedList.push(8);
        linkedList.push(12);
        linkedList.push(13);
        linkedList.del(1);
        linkedList.del(4);

        let next1 = linkedList.getNextLink(0);
        let next2 = linkedList.getNextLink(3)
        next1.should.be.eql(2);
        next2.should.be.eql(5);
    });

})