import {isEmpty, addClass, hasClass, removeClass} from "./funcs";

export default class Selector {
    countCols = 0;
    countRows = 0;
    //isSelected = false;
    matrix;
    options;
    table;

    constructor (table, options) {
        this.table = table;
        this.options = options;
        if (this.options.usingSizeMatrix) this.initSizeMatrix();
    }

    deselectCell(cell) {
        removeClass(cell, this.options.selectClass);
    }

    deselectAll() {
        let length = 0;
        let list = this.table.getElementsByTagName("td");

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

            if (this.options.usingSizeMatrix) {
                return getCellMatrix(c);
            } else {
                let rows = this.table.getElementsByTagName("tr");
                let iy = 0;
                for (let iy = 0; iy < rows.length; iy++) {
                    if (c[0] != iy) continue;
                    let cols = rows[iy].getElementsByTagName("td");
                    for (let ix = 0; ix < cols.length; ix++) {
                        if (c[1] != ix) continue;
                        return cols[ix];
                    }
                }
            }
            return null;
        } else {
            throw new Error("Invalid coordinate");
        }
    }

    initSizeMatrix () {
        let rows = this.table.getElementsByTagName("tr");
        this.countRows = rows.length;
        this.countCols = 0;

        for (let row of rows) {
            let length = row.getElementsByTagName("td").length;
            if (length > this.countCols) {
                this.countCols = length;
            }
        }

        this.matrix = Array(this.countRows).fill().map(
            () => Array(this.countCols).fill().map(
                () => [0, 0]
            )
        );
        let rowCrest = new Array(this.countCols).fill(0);

        let iy = 0;
        for (let row of rows) {
            let ix = 0;
            let cols = row.getElementsByTagName("td");

            for (let cell of cols) {
                let colspan = cell.getAttribute("colspan");
                let rowspan = cell.getAttribute("rowspan");

                while (ix < this.countCols && rowCrest[ix]) {
                    rowCrest[ix]--;
                    this.matrix[iy][ix][0] = this.matrix[iy-1][ix][0] - 1;
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

    isSelectedCell(cell) {
        return hasClass(cell, this.options.selectClass);
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
     */
    select (c1, c2)
    {
        if (!this.matrix && this.options.usingSizeMatrix) this.initSizeMatrix();

        if (Array.isArray(c1) && (Array.isArray(c2) || c2 === undefined)) {

            if (c2 === undefined) {
                // normalize
                c1[0] = parseInt(c1[0]) || 0;
                c1[1] = parseInt(c1[1]) || 0;
                let cell = this.getCell(c1);
                if (!isEmpty(cell)) {
                    this.selectCell(cell);
                }
            } else {
                [c1, c2] = this.normalizeCoords(c1, c2);
                if (this.options.usingSizeMatrix) {

                } else {
                    let rows = this.table.getElementsByTagName("tr");
                    for (let iy = 0; iy < rows.length; iy++) {
                        if (iy < c1[0] || iy > c2[0]) continue;
                        let cols = rows[iy].getElementsByTagName("td");
                        for (let ix = 0; ix < cols.length; ix++) {
                            if (ix < c1[1] || ix > c2[1]) continue;
                            this.selectCell(cols[ix]);
                        }
                    }
                }
            }

        } else {
            throw new Error("Invalid selection positions");
        }
    }

    selectAll () {
        let length = 0;
        let list = this.table.getElementsByTagName("td");
        for (let cell of list) {
            if (this.selectCell(cell)) {
                length++;
            }
        }
        return length;
    }

    selectCell(cell) {
        const ignoreClass = this.options.ignoreClass;
        if (
            !hasClass(cell, ignoreClass) // td
            && !hasClass(cell.parentNode, ignoreClass) // tr
            && !hasClass(cell.parentNode.parentNode, ignoreClass) // example thead or tfoot
        ) {
            //this.isSelected = true;
            addClass(cell, this.options.selectClass);
            return true;
        }
        return false;
    }

    toRectangle () {
        let isSelected = false;
        let c1 = [null,null];
        let c2 = [null,null];
        if (this.options.usingSizeMatrix) {

        } else {
            let rows = this.table.getElementsByTagName("tr");
            for (let iy = 0; iy < rows.length; iy++) {
                let cols = rows[iy].getElementsByTagName("td");
                for (let ix = 0; ix < cols.length; ix++) {
                    if(this.isSelectedCell(cols[ix]))
                    {
                        isSelected = true;

                        if (c1[0] === null || iy < c1[0]) c1[0] = iy;
                        if (c2[0] === null || iy > c2[0]) c2[0] = iy;

                        if (c1[1] === null || ix < c1[1]) c1[1] = ix;
                        if (c2[1] === null || ix > c2[1]) c2[1] = ix;
                    }
                }
            }
        }
        if (isSelected) this.select(c1, c2);
    }
}