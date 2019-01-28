"use strict";

import Selector from "./selector";
import Table from "./table";
import Actions from "./actions";
import {isEmpty} from "./funcs";

export let _gOptions = {
    deselectOutTableClick: true,
    destroySizeMatrix: false, // when out table click. Clear memory for big table or changing tables
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
        this.obTable = new Table(table, this.obSelector);
        this.obActions = new Actions(this.obSelector);
    }

    /**
     * Function: clear ([c1 [, c2]])
     * @param c1
     * @param c2
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
     * Function: copy ([c1 [, c2]])
     * @param c1
     * @param c2
     * @returns {array[][]}
     */
    copy (c1, c2) {
        if (c1 === undefined) {
            let coords = this.obSelector.getSelectedRectangleCoords();
            if (coords === false) return false;
            [c1, c2] = coords;
        }
        return this.obActions.copy(c1, c2);
    }

    /**
     * Function: cut ([c1 [, c2]])
     * @param c1
     * @param c2
     * @returns {array[][]}
     */
    cut (c1, c2) {
        if (c1 === undefined) {
            let coords = this.obSelector.getSelectedRectangleCoords();
            if (isEmpty(coords)) return false;
            [c1, c2] = coords;
        }
        return this.obActions.cut(c1, c2);
    }

    deselect () {
        return this.obSelector.deselectAll();
    }

    destroy () {
        this.deselect();
        this.obTable.destroy();
        delete this.obTable;
        delete this.obSelector;
        delete this.obActions;
        delete this;
    }

    /**
     * destroy size matrix for big table or changing tables
     */
    destroySizeMatrix () {
        this.obSelector.destroySizeMatrix();
    }

    getCoords () {
        return this.obSelector.getSelectedRectangleCoords();
    }

    paste (data, c) {
        if (c === undefined) {
            let coords = this.obSelector.getSelectedRectangleCoords();
            if (isEmpty(coords)) return false;
            c = coords[0];
        }
        this.obActions.paste(data, c);
        return true;
    }

    /**
     * select cells. Fn: select (c1 [, c2])
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