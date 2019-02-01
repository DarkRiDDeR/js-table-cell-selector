import {_gOptions} from "./app";
import {getElementsByTagNames} from "./dom";

export default class Actions {
    obSelector;
    table;

    constructor (obSelector) {
        this.obSelector = obSelector;
        this.table = this.obSelector.getTable();
    }

    /**
     * Function: copy (c1 [, c2])
     * @param c1
     * @param c2
     * @returns {array[][]}
     */
    copy (c1, c2) {
        if (c2 === undefined) c2 = c1;
        let ar = Array(c2[0] - c1[0] + 1 ).fill().map(
            () => Array(c2[1] - c1[1] + 1 )
        );

        this.iterateCells(c1, c2, (iy, ix, cell) => {
            ar[iy-c1[0]][ix-c1[1]] = _gOptions.getCellFn(cell, [iy, ix]);
        });
        return ar;
    }

    /**
     * Function: clear (c1 [, c2])
     * @param c1
     * @param c2
     */
    clear (c1, c2) {
        if (c2 === undefined) c2 = c1;
        this.iterateCells(c1, c2, (iy, ix, cell) => {
            if (!this.obSelector.isIgnoredCell(cell)) {
                _gOptions.setCellFn(cell, "", [iy, ix]);
            }
        });
    }

    /**
     * Function: cut (c1 [, c2])
     * @param c1
     * @param c2
     * @returns {array[][]}
     */
    cut (c1, c2) {
        if (c2 === undefined) c2 = c1;
        let ar = Array(c2[0] - c1[0] + 1 ).fill().map(
            () => Array(c2[1] - c1[1] + 1 )
        );
        this.iterateCells(c1, c2, (iy, ix, cell) => {
            ar[iy-c1[0]][ix-c1[1]] = _gOptions.getCellFn(cell, [iy, ix]);
            if (!this.obSelector.isIgnoredCell(cell)) {
                _gOptions.setCellFn(cell, "", [iy, ix]);
            }
        });
        return ar;
    }

    getCellData (cell) {
        return cell.innerHTML;
    }

    iterateCells (c1, c2, callbackFn) {
        const matrix = this.obSelector.getSizeMatrix();
        let rows = this.table.getElementsByTagName("tr");
        for (let iy = c1[0]; iy <= c2[0]; iy++) {
            let cells = getElementsByTagNames("td,th", rows[iy]);
            for (let ix = c1[1]; ix <= c2[1]; ix++) {
                if (!(matrix[iy][ix][0] < 0) && !(matrix[iy][ix][1] < 0)) {
                    callbackFn(iy, ix, cells[matrix[iy][ix][2]]);
                }
            }
        }
    }

    mergeWithCell (cell, data, coord) {
        let cellVal = _gOptions.getCellFn(cell, coord).trim();
        if (cellVal === "") cellVal = data;
        else if (data !== "") cellVal += _gOptions.mergePastingGlue + data;
        _gOptions.setCellFn(cell, cellVal, coord);
    }

    paste (data, c1, c2) {
        const matrix = this.obSelector.getSizeMatrix();
        const rows = this.table.getElementsByTagName("tr");
        const countR = this.obSelector.countRows;
        const countC = this.obSelector.countCols;

        let maxY = c1[0] + data.length;
        if (maxY > countR) maxY = countR;
        if (maxY > c2[0]) maxY = c2[0]+1;

        for (let iy = c1[0]; iy < maxY; iy++) {
            let maxX = c1[1] + data[iy-c1[0]].length;
            if (maxX > countC) maxX = countC;
            if (maxX > c2[1]) maxX = c2[1]+1;

            let cellFn;
            for (let ix = c1[1]; ix < maxX; ix++) {
                let y = iy;
                let x = ix;
                if (matrix[iy][ix][1] < 0 || matrix[iy][ix][0] < 0) {
                    if (matrix[iy][ix][0] < 0) y += matrix[iy][ix][0];
                    if (matrix[iy][ix][1] < 0) x += matrix[iy][ix][1];
                    cellFn = this.mergeWithCell;
                } else {
                    cellFn = _gOptions.setCellFn;
                }

                let cell = getElementsByTagNames("td,th", rows[y])[matrix[y][x][2]];
                if (!this.obSelector.isIgnoredCell(cell)) {
                    cellFn(cell, data[iy - c1[0]][ix - c1[1]], [y, x]);
                }
            }
        }
    }
}