import {getParentTag, isElement, on, off} from "./dom";
import {isEmpty, addClass, hasClass, removeClass} from "./funcs";

export default class Table {
    countRows = 0;
    countCols = 0;
    options;
    positions; // [[0, 0], [1, 1]]
    table; // html table
    isMouseDown = false; // whether the left mouse button is pressed
    matrix;

    constructor(table, options) {
        if (isElement(table) && table.tagName === "TABLE") {
            this.table = table; // DOM element table
            this.options = options;
            this.table.classList.add(this.options.selectableTableClass);
            this.addEvents();
            if (this.options.usingSizeMatrix) this.initSizeMatrix();
        } else {
            throw new Error("Мodule must be initialized to Table");
        }
    }

    addEvents() {
        on(this.table, "mouseover", (e) => this.onMouseOver(e));
        on(this.table, "mousedown", (e) => this.onMouseDown(e));
        on(this.table, "mouseup", (e) => this.onMouseUp(e));
        on(this.table.ownerDocument, "click", (e) => this.onOutTableClick(e)); // click outside the table
    }

    destroy() {
        this.table.classList.remove(this.options.selectableTableClass);
        deselectAll();
        removeEvents();
    }

    getPositions() {
        return this.positions;
    }

    isRightMouseBtn(e) {
        let isRightMB;
        e = e || window.event;

        if ("which" in e)  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
            isRightMB = e.which == 3;
        else if ("button" in e)  // IE, Opera
            isRightMB = e.button == 2;

        return isRightMB;
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

                while (ix < countCols && rowCrest[ix]) {
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

    onMouseDown(e) {
        e.preventDefault();
        if (!this.matrix && this.options.usingSizeMatrix) this.initSizeMatrix();
        if (this.isRightMouseBtn(e)) return true;

        let cell = getParentTag(e.target, "td");
        if (cell === null) return; // not for cell

        this.isMouseDown = true;

        if (this.isSelectedCell(cell) && this.deselectAll() === 1) {
            this.deselectCell(cell);
        } else {
            this.deselectAll();
            this.selectCell(cell);
        }

        this.selectCell(cell);
    }

    onMouseOver(e) {
        if (!this.isMouseDown) return false;

        let cell = getParentTag(e.target, "td");
        if (cell === null) return; // not for cell

        this.selectCell(cell);

        //magic selection
        let cells = this.table.getElementsByTagName("td");
        let firstCell = cells[0];
        let lastCell = cells[cells.length-1];

    }

    onMouseUp(e) {
        this.isMouseDown = false;

    }

    onOutTableClick(e) {
        this.isMouseDown = false;
        if (!getParentTag(e.target, "table") && this.options.deselectOutTableClick) {
            this.deselectAll();
        }
        if (this.options.destroySizeMatrix) {
            this.matrix = undefined;
        }
    }

    removeEvents() {
        off(this.table, "mouseover", (e) => this.onMouseOver(e));
        off(this.table, "mousedown", (e) => this.onMouseDown(e));
        off(this.table, "mouseup", (e) => this.onMouseUp(e));
        off(this.table.ownerDocument, "click", (e) => this.onOutTableClick(e));
    }
}