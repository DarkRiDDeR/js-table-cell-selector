"use strict";

import Actions from "./actions";
import Buffer from "./buffer";
import {isEmpty} from "./funcs";
import Selector from "./selector";
import Table from "./table";
require("./lib/sheetclip.js");

export let _gOptions = {
    deselectOutTableClick: true,
    enablePasting: true,
    getCellFn: function (cell, coord) {
        return cell.innerText;
    },
    ignoreClass: 'tcs-ignore',
    //TODO: mergePasting: true,
    mergePastingGlue: ' ',
    selectableTableClass : 'tcs',// class added to table
    selectIgnoreClass: true,
    selectClass: 'tcs-select',
    setCellFn: function (cell, data, coord) {
        cell.innerText = data;
    }
    //frozen option:  usingSizeMatrix: true, // !!! for tables with merged cells, enabling is mandatory. Shutdown optimizes performance for simple tables.
};

export default class TableCellSelector {
    obTable;
    obSelector;
    obActions;

    constructor (table, options) {
        if (typeof options === "object") Object.assign(_gOptions, options);
        this.obSelector = new Selector(table);
        this.obTable = new Table(table, this.obSelector, this);
        this.obActions = new Actions(this.obSelector);
        this.obBuffer = new Buffer(table);
    }

    /**
     * clear ([c1 [, c2]])
     * @param c1 - starting position [0, 0]
     * @param c2 - end position [1, 1]
     */
    clear (c1, c2) {
        if (c1 === undefined) {
            let coords = this.obSelector.getSelectedRectangleCoords();
            if (coords === false) return false;
            [c1, c2] = coords;
        }
        return this.obActions.clear(c1, c2);
    }

    /**
     * copy ([c1 [, c2]])
     * @param c1 - starting position [0, 0]
     * @param c2 - end position [1, 1]
     * @returns {array[][] | false}
     */
    copy (c1, c2) {
        if (c1 === undefined) {
            let coords = this.obSelector.getSelectedRectangleCoords();
            if (coords === false) return false;
            [c1, c2] = coords;
        }
        const data = this.obActions.copy(c1, c2);
        if (data !== false) {
            let str = window.SheetClip.stringify(data);
            this.obBuffer.copy(str);
        }
        return data;
    }

    /**
     * cut ([c1 [, c2]])
     * @param c1 - starting position [0, 0]
     * @param c2 - end position [1, 1]
     * @returns {array[][] | false}
     */
    cut (c1, c2) {
        if (c1 === undefined) {
            let coords = this.obSelector.getSelectedRectangleCoords();
            if (isEmpty(coords)) return false;
            [c1, c2] = coords;
        }
        const data = this.obActions.cut(c1, c2);
        if (data !== false) {
            let str = window.SheetClip.stringify(data);
            this.obBuffer.copy(str);
        }
        return data;
    }

    deselect () {
        return this.obSelector.deselectAll();
    }

    destroy () {
        this.deselect();
        this.obBuffer.destroy();
        this.obTable.destroy();
        delete this.obActions;
        delete this.obBuffer;
        delete this.obSelector;
        delete this.obTable;
        delete this;
    }

    /**
     * destroy size matrix for big table or changing tables
     */
    destroySizeMatrix () {
        this.obSelector.destroySizeMatrix();
    }

    initSizeMatrix () {
        this.obSelector.initSizeMatrix();
    }

    getCoords () {
        return this.obSelector.getSelectedRectangleCoords();
    }

    /**
     * paste (data [, c1 [, c2]])
     * @param data - array[][]
     * @param c1 - starting position [0, 0]
     * @param c2 - end position [1, 1]
     * @returns {boolean}
     */
    paste (data, c1, c2) {
        if (c1 === undefined) {
            let coords = this.obSelector.getSelectedRectangleCoords();
            if (isEmpty(coords)) return false;
            [c1, c2] = coords;
        } else if (c2 === undefined) {
            c2 = c1;
        } else {
            [c1, c2] = this/this.obSelector.normalizeCoords(c1, c2);
        }
        this.obActions.paste(data, c1, c2);
        console.log(this.obBuffer.paste());

        return true;
    }

    /**
     * select (c1 [, c2])
     * @param c1 - starting position [0, 0]
     * @param c2 - end position [1, 1]
     * @returns {boolean}
     */
    select (c1, c2) {
        this.obSelector.deselectAll();
        return this.obSelector.select(c1, c2);
    }

    selectAll () {
        return this.obSelector.selectAll();
    }
}

if (window) {
    window.TableCellSelector = TableCellSelector;
}