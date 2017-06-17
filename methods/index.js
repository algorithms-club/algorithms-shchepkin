'use strict';

let bubbleSort = require('./bubble-sort/bubble-sort');
let coverByTile = require('./coverByTile/coverByTile');
let UnionFind = require('./unionFind/unionFind');
let bitPlusPlus = require('./bitPlusPlus/bitPlusPlus');
let LinkedList = require('./linkedList/linkedList');
let SortFunction = require('./sort/sort');
let RedBlackTree = require('./redBlackTree/redBlackTree');
let Llrb = require('./redBlackTree/llrb');

let algolib = {
    bubbleSort,
    coverByTile,
    UnionFind,
    bitPlusPlus,
    LinkedList,
    SortFunction,
    RedBlackTree,
    Llrb
};

module.exports = algolib;