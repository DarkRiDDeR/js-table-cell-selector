import {_gOptions} from "./app";
import {getElementsByTagNames} from "./dom";


const _TYPE_CLEAR = "clear";
const _TYPE_COPY = "copy";
const _TYPE_CUT = "cut";
const _TYPE_PASTE = "paste";

export default class Actions {
    _action;
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
        this._action = this.TYPE_COPY;
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
        this._action = this.TYPE_CLEAR;
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
        this._action = this.TYPE_CUT;
        return ar;
    }

    getAction () {
        return this._action;
    }

    getCellData (cell) {
        return cell.innerHTML;
    }

    iterateCells (c1, c2, callbackFn) {
        const matrix = this.obSelector.getSizeMatrix();
        let rows = this.table.getElementsByTagName("tr");
        for (let iy = c1[0]; iy <= c2[0]; iy++) {
            let cells = getElementsByTagNames("td,th", rows[iy]);
            let itd = 0;
            for (let ix = 0; ix < matrix[iy].length; ix++) {
                if (!(matrix[iy][ix][0] < 0) && !(matrix[iy][ix][1] < 0)) {
                    if (c1[1] <= ix && ix <= c2[1]) {
                        callbackFn(iy, ix, cells[itd]);
                    }
                    itd++;
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
        const countR = this.obSelector.getCountRows();
        const countC = this.obSelector.getCountCols();

        let maxY = c1[0] + data.length;
        if (maxY > countR) maxY = countR;
        if (maxY > c2[0]) maxY = c2[0]+1;

        for (let iy = c1[0]; iy < maxY; iy++) {
            let cells = getElementsByTagNames("td,th", rows[iy]);
            let itd = 0;
            let maxX = c1[1] + data[iy-c1[0]].length;
            if (maxX > countC) maxX = countC;
            if (maxX > c2[1]) maxX = c2[1]+1;

            for (let ix = 0; ix < maxX; ix++) {
                if (matrix[iy][ix][0] < 0) {
                    let iy2 = iy + matrix[iy][ix][0];
                    let itd2 = 0;
                    let cells2 = getElementsByTagNames("td,th", rows[iy2]);
                    for (let ix2 = 0; ix2 < maxX; ix2++) {
                        if (matrix[iy2][ix2][1] <= 0) {
                            if (ix2 == ix && !this.obSelector.isIgnoredCell(cells[itd2])) {
                                this.mergeWithCell(cells2[itd2], data[iy - c1[0]][ix - c1[1]], [iy2, ix2 + matrix[iy2][ix2][1]]);
                                if (!(matrix[iy2][ix2][1] < 0)) break;
                            }
                        } else {
                            itd2++;
                        }
                    }
                } else if (matrix[iy][ix][1] < 0) {
                    if (!this.obSelector.isIgnoredCell(cells[itd-1])) {
                        let coord = [iy, ix + matrix[iy][ix][1]];
                        this.mergeWithCell(cells[itd - 1], data[iy - c1[0]][ix - c1[1]], coord);
                    }
                } else {
                    if (c1[1] <= ix && !this.obSelector.isIgnoredCell(cells[itd])) {
                        _gOptions.setCellFn(cells[itd], data[iy-c1[0]][ix-c1[1]], [iy, ix]);
                    }
                    itd++;
                }
            }
        }
        this._action = this.TYPE_PASTE;
    }

    static get TYPE_CLEAR () {
        return _TYPE_CLEAR;
    }
    static get TYPE_COPY () {
        return _TYPE_COPY;
    }
    static get TYPE_CUT () {
        return _TYPE_CUT;
    }
    static get TYPE_PASTE () {
        return _TYPE_PASTE;
    }
}