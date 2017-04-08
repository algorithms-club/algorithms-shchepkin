'use strict';

function coverByTile(height, wight, tileHeight) {
	let rowTileAmount = Math.ceil(wight / tileHeight);
	let columnTileAmount = Math.ceil(height / tileHeight);

	return rowTileAmount * columnTileAmount;
};

module.exports = coverByTile;