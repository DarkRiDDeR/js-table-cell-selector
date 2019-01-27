"use strict";

import Selector from "./selector";
import Table from "./table";


const _GET_DATA_TEXT = "text"; // default
const _GET_DATA_HTML = "html";
const _GET_DATA_JSON = "json";

export default class TableCellSelector {
    options = {
        deselectOutTableClick: true,
        destroySizeMatrix: false, // when out table click. Clear memory for big table or changing tables
        ignoreClass: 'tcs-ignore',
        //TODO: mergePasting: true,
        mergePastingGlue: ' ',
        selectableTableClass : 'tcs',// class added to table
        selectIgnoreClass: true,
        selectClass: 'tcs-select',
        usingSizeMatrix: true, // !!! for tables with merged cells, enabling is mandatory. Shutdown optimizes performance for simple tables.
    };
    obTable;
    obSelector;


    constructor (table, options) {
        if (typeof options === "object") Object.assign(this.options, options);
        this.obSelector = new Selector(table, this.options);
        this.obTable = new Table(table, this.obSelector, this.options);
    }

    deselect () {
        return this.obSelector.deselectAll();
    }

    destroy () {
        this.deselect();
        this.obTable.destroy();
        delete this.obTable;
        delete this.obSelector;
        delete this;
    }

    /**
     * destroy size matrix for big table or changing tables
     */
    destroySizeMatrix () {
        this.obSelector.destroySizeMatrix();
    }

    static get GET_DATA_TEXT () {
        return _GET_DATA_TEXT;
    }

    static get GET_DATA_HTML () {
        return _GET_DATA_HTML;
    }

    static get GET_DATA_JSON () {
        return _GET_DATA_JSON;
    }

    getArray (type) {

    }

    /**
     *
     * @returns {*}
     */
    getCoords () {
        return this.obSelector.getSelectedRectangleCoords();
    }

    getJson (type) {

    }

    paste (positions, options) {

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