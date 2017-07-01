'use strict';
const algolib = require('../index.js');

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
        this.isRed = true;
    }
}

class Llrb {

    constructor(elements) {
        this.root = null;
        this.numOfNodes = 0;

        if (elements && elements.length) {
            this._buildFromArray(elements);
        }
    }

    _buildFromArray() {
    }

    _rotateLeft(node) {
        let _root = node.right;
        node.right = _root.left;
        _root.left = node;
        _root.isRed = node.isRed;
        node.isRed = true;
        return _root;
    }

    _rotateRight(node) {
        let _root = node.left;
        node.left = _root.right;
        _root.right = node;
        _root.isRed = node.isRed;
        node.isRed = true;
        return _root;
    }

    _flipColor(node) {
        node.isRed = !node.isRed;
        node.left.isRed = !node.left.isRed;
        node.right.isRed = !node.right.isRed;
    }

    _findPlace(node, key) {
        if (key < node.key && node.left ) {
            return this._findPlace(node.left, key);
        }else if (key > node.key && node.right) {
            return this._findPlace(node.right, key);
        }else {
            return node;
        }
    }

    insert(key, value) {
        if (!this.root) {
            return this.root = new Node(key, value);
        }
        const parent = this._findPlace(this.root, key);

        if (parent.key < key) {
            parent.right = new Node(key, value);
        } else if (parent.key > key) {
            parent.left = new Node(key, value);
        } else {
            return parent.value = value;
        }

        //node.right = red --> _leftRotate
        //left & right = red --> _flipColor
        //node.left = red, node.left.left = _rightRotate
        this.numOfNodes++;
    }

    find(key) {
        let _currentRoot = this.root;
        while (_currentRoot) {
            if (key > _currentRoot.key) {
                _currentRoot = _currentRoot.right;
            } else if (key < _currentRoot.key) {
                _currentRoot = _currentRoot.left;
            } else return _currentRoot.value;
        }
    }

    getMin() {
        let _currentRoot = this.root;
        while (_currentRoot.left) {
            _currentRoot = _currentRoot.left;
        }
        return _currentRoot;
    }

    getMax() {
        let _currentRoot = this.root;
        while (_currentRoot) {
            if (_currentRoot.right) {
                _currentRoot = _currentRoot.right;
            } else return _currentRoot;
        }
    }

    size() {
        if (this.numOfNodes || this.root) {
            return this.numOfNodes + 1;
        } else return this.numOfNodes;
    }
}

module.exports = Llrb;