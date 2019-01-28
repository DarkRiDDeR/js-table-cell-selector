import {_gOptions} from "./app";
import {getElementsByTagNames} from "./dom";
import {isEmpty, addClass, hasClass, removeClass} from "./funcs";

export default class Selector {
    countCols = 0;
    countRows = 0;
    matrix;
    table;

    constructor (table) {
        this.table = table;
        /*if (_gOptions.usingSizeMatrix) */ this.initSizeMatrix();
    }

    deselectCell(cell) {
        removeClass(cell, _gOptions.selectClass);
    }

    deselectAll() {
        let length = 0;
        let list = getElementsByTagNames("td,th", this.table);

        for (let cell of list) {
            if (this.isSelectedCell(cell)) {
                this.deselectCell(cell);
                length++;
            }
        }
        return length;
    }

    destroySizeMatrix() {
        this.countCols = undefined;
        this.countRows = undefined;
        this.matrix = undefined;
    }

    /**
     *
     * @param c - coordinate cell. Example [0, 0]
     */
    getCell (c) {
        if (Array.isArray(c) ) {
            // normalize
            c[0] = parseInt(c[0]) || 0;
            c[1] = parseInt(c[1]) || 0;

            if (c[0] >= 0 && c[1] >= 0) {
                //if (_gOptions.usingSizeMatrix) {
                if (c[0] < this.countRows && c[1] < this.countCols) {
                    if (this.matrix[c[0]][c[1]][0] < 0) c[0] += this.matrix[c[0]][c[1]][0];
                    if (this.matrix[c[0]][c[1]][1] < 0) c[1] += this.matrix[c[0]][c[1]][1];

                    let itd = 0;
                    let row = this.table.getElementsByTagName("tr")[c[0]];
                    for (let ix = 0; ix < this.countCols; ix++) {
                        if (!(this.matrix[c[0]][ix][0] < 0) && !(this.matrix[c[0]][ix][1] < 0)) {
                            if (c[1] == ix) {
                                return getElementsByTagNames("td,th", row)[itd];
                            }
                            itd++;
                        }
                    }
                }
                /*} else {
                    let rows = this.table.getElementsByTagName("tr");
                    for (let iy = 0; iy < rows.length; iy++) {
                        if (c[0] != iy) continue;
                        let cols = rows[iy].getElementsByTagName("td");
                        for (let ix = 0; ix < cols.length; ix++) {
                            if (c[1] != ix) continue;
                            return cols[ix];
                        }
                    }
                }*/
            }
            return null;
        } else {
            throw new Error("Invalid coordinate");
        }
    }

    getCountCols () {
        return this.countCols;
    }

    getCountRows () {
        return this.countRows;
    }

    /**
     * get coords of selected cells
     * @returns array [[0, 0], [1, 1]] or false
     */
    getSelectedRectangleCoords () {
        let isSelected = false;
        let c1 = Array(2);
        let c2 = Array(2);

        //if (_gOptions.usingSizeMatrix) {
        // get extreme points
        let rows = this.table.getElementsByTagName("tr");
        for (let iy = 0; iy < this.countRows; iy++) {
            let cols = getElementsByTagNames("td,th", rows[iy]);
            let itd = 0;
            for (let ix = 0; ix < this.countCols; ix++) {
                if (!(this.matrix[iy][ix][0] < 0) && !(this.matrix[iy][ix][1] < 0)) {
                    if (this.isSelectedCell(cols[itd])) {
                        isSelected = true;

                        if (c1[0] === undefined || c1[0] > iy) c1[0] = iy;
                        if (c1[1] === undefined || c1[1] > ix) c1[1] = ix;

                        if (c2[0] === undefined || c2[0] < iy) c2[0] = iy;
                        if (c2[1] === undefined || c2[1] < ix) c2[1] = ix;
                    }
                    itd++;
                }
            }
        }
        /*} else {
            let rows = this.table.getElementsByTagName("tr");
            for (let iy = 0; iy < rows.length; iy++) {
                let cols = rows[iy].getElementsByTagName("td");
                for (let ix = 0; ix < cols.length; ix++) {
                    if(this.isSelectedCell(cols[ix]))
                    {
                        isSelected = true;

                        if (c1[0] === undefined || iy < c1[0]) c1[0] = iy;
                        if (c2[0] === undefined || iy > c2[0]) c2[0] = iy;

                        if (c1[1] === undefined || ix < c1[1]) c1[1] = ix;
                        if (c2[1] === undefined || ix > c2[1]) c2[1] = ix;
                    }
                }
            }
        }*/
        return isSelected ? [c1, c2] : false;
    }

    getSizeMatrix () {
        return this.matrix;
    }

    getRectangleCoords (c1, c2) {
        // magic ))
        let loop = true;
        while(loop) {
            loop = false;

            // min y
            for (let iy = c1[0]; iy <= c1[0]; iy++) {
                for (let ix = c1[1]; ix <= c2[1]; ix++) {
                    if (this.matrix[iy][ix][0] !== undefined && this.matrix[iy][ix][0] < 0) {
                        c1[0] += this.matrix[iy][ix][0];
                        iy += this.matrix[iy][ix][0] - 1;
                        loop = true;
                        break;
                    }
                }
            }

            // max y
            for (let iy = c2[0]; iy <= c2[0]; iy++) {
                if ((c2[0] + 1) == this.countRows ) continue;
                for (let ix = c1[1]; ix <= c2[1]; ix++) {
                    if (this.matrix[iy][ix][0] !== undefined && this.matrix[iy + 1][ix][0] < 0) {
                        c2[0]++;
                        loop = true;
                        break;
                    }
                }
            }

            // min x
            for (let iy = c1[0]; iy <= c2[0]; iy++) {
                if (this.matrix[iy][c1[1]][1] < 0) {
                    c1[1] += this.matrix[iy][c1[1]][1];
                    iy = c1[0] - 1;
                    loop = true;
                   // break;
                }
            }

            // max x
            for (let iy = c1[0]; iy <= c2[0]; iy++) {
                if ((c2[1] + 1) == this.countCols) continue;
                if (this.matrix[iy][c2[1]+1][1] < 0) {
                    c2[1]++;
                    iy = c1[0] - 1;
                    loop = true;
                   // break;
                }
            }
        }
        return [c1, c2];
    }

    getTable () {
        return this.table;
    }

    initSizeMatrix () {
        let rows = this.table.getElementsByTagName("tr");
        this.countRows = rows.length;
        this.countCols = 0;

        for (let row of rows) {
            let length = getElementsByTagNames("td, th", row).length;
            if (length > this.countCols) {
                this.countCols = length;
            }
        }

        this.matrix = Array(this.countRows).fill().map(
            () => Array(this.countCols).fill().map(
                () => Array(2)
            )
        );
        let rowCrest = new Array(this.countCols).fill(0);

        let iy = 0;
        for (let row of rows) {
            let ix = 0;
            let cols = getElementsByTagNames("td, th", row);

            for (let cell of cols) {
                let colspan = cell.getAttribute("colspan");
                let rowspan = cell.getAttribute("rowspan");
                if (colspan > 1) this.matrix[iy][ix][1] = 0;
                if (rowspan > 1) this.matrix[iy][ix][0] = 0;

                while (ix < this.countCols && rowCrest[ix]) {
                    rowCrest[ix]--;
                    this.matrix[iy][ix][0] = this.matrix[iy-1][ix][0] || 0 - 1;
                    this.matrix[iy][ix][1] = this.matrix[iy-1][ix][1];
                    ix++;
                }

                if (colspan > 1) {
                    for (let i = 0; i > -colspan; i--) {
                        this.matrix[iy][ix][1] = i;

                        if (rowspan > 1) {
                            rowCrest[ix] = rowspan - 1;
                        }
                        ix++;
                    }
                } else {
                    if (rowspan > 1) {
                        rowCrest[ix] = rowspan - 1;
                    }
                    ix++;
                }
            }
            iy++;
        }
    }

    isIgnoredCell(cell) {
        return hasClass(cell, _gOptions.ignoreClass) // td
            || hasClass(cell.parentNode, _gOptions.ignoreClass) // tr
            || hasClass(cell.parentNode.parentNode, _gOptions.ignoreClass); // example thead or tfoot
    }

    isSelectedCell(cell) {
        return hasClass(cell, _gOptions.selectClass);
    }

    normalizeCoords (c1, c2) {
        // normalize
        c1[0] = parseInt(c1[0]) || 0;
        c1[1] = parseInt(c1[1]) || 0;
        c2[0] = parseInt(c2[0]) || 0;
        c2[1] = parseInt(c2[1]) || 0;
        let temp;
        if (c1[0] > c2[0]) {
            temp = c2[0];
            c2[0] = c1[0];
            c1[0] = temp;
        }
        if (c1[1] > c2[1]) {
            temp = c2[1];
            c2[1] = c1[1];
            c1[1] = temp;
        }
        return [c1, c2];
    }

    /**
     * select cells. Fn: select (c1 [, c2])
     * @param c1 - starting position [0, 0]
     * @param c2 - end position [1, 1]
     * @returns {boolean}
     */
    select (c1, c2)
    {
        if (Array.isArray(c1) && (Array.isArray(c2) || c2 === undefined)) {

            if (c2 === undefined || (c1[0] == c2[0] && c1[1] == c2[1])) {
                // normalize
                let cell = this.getCell(c1);
                if (!isEmpty(cell)) {
                    return this.selectCell(cell);
                }
            } else {
                let isSelected = false;
                [c1, c2] = this.normalizeCoords(c1, c2);

                //if (_gOptions.usingSizeMatrix) {
                if (c1[0] >= this.countRows || c1[1] >= this.countCols || c2[0] < 0 || c2[1] < 0) return false;
                if (c1[0] < 0) c1[0] = 0;
                if (c1[1] < 0) c1[1] = 0;
                if (c2[0] >= this.countRows) c2[0] = this.countRows - 1;
                if (c2[1] >= this.countCols) c2[1] = this.countCols - 1;

                [c1, c2] = this.getRectangleCoords(c1, c2);

                let rows = this.table.getElementsByTagName("tr");
                for (let iy = c1[0]; iy <= c2[0]; iy++) {
                    let cols = getElementsByTagNames("td, th", rows[iy]);
                    let itd = 0;
                    for (let ix = 0; ix < this.countCols; ix++) {
                        if (!(this.matrix[iy][ix][0] < 0) && !(this.matrix[iy][ix][1] < 0)) {
                            if (c1[1] <= ix && ix <= c2[1]) {
                                let result = this.selectCell(cols[itd]);
                                if (!isSelected) isSelected = result;
                            }
                            itd++;
                        }
                    }
                }
                /*} else {

                    let rows = this.table.getElementsByTagName("tr");
                    for (let iy = 0; iy < rows.length; iy++) {
                        if (iy < c1[0] || iy > c2[0]) continue;
                        let cols = rows[iy].getElementsByTagName("td");
                        for (let ix = 0; ix < cols.length; ix++) {
                            if (ix < c1[1] || ix > c2[1]) continue;
                            let result = this.selectCell(cols[ix]);
                            if (!isSelected) isSelected = result;
                        }
                    }
                }*/
                return isSelected;
            }

            return false;
        } else {
            throw new Error("Invalid selection positions");
        }
    }

    selectAll () {
        let length = 0;
        let list = getElementsByTagNames("td, th", this.table);
        for (let cell of list) {
            if (this.selectCell(cell)) {
                length++;
            }
        }
        return length;
    }

    selectCell(cell) {
        if (_gOptions.selectIgnoreClass || !this.isIgnoredCell(cell)) {
            addClass(cell, _gOptions.selectClass);
            return true;
        }
        return false;
    }
}