import {isEmpty, addClass, hasClass, removeClass} from "./funcs";

export default class Selector {
    isSelected = false;
    options;
    table;

    constructor (table, options) {
        this.table = table;
        this.options = options;
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

    isSelectedCell(cell) {
        return hasClass(cell, this.options.selectClass);
    }

    /**
     * select cells. Fn: select (c1 [, c2])
     * @param c1 - starting position [0, 0]
     * @param c2 - end position [1, 1]
     */
    select (c1, c2)
    {
        if (!this.matrix && this.options.usingSizeMatrix) this.initSizeMatrix();

        if (typeof c1 === "array" && (typeof c2 === "array" || c2 === undefined)) {
            // normalize
            c1[0] = parseInt(c1[0]) || 0;
            c1[1] = parseInt(c1[1]) || 0;

            if (c2 === undefined) {

            } else {
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
            this.isSelected = true;
            addClass(cell, this.options.selectClass);
            return true;
        }
        return false;
    }
}