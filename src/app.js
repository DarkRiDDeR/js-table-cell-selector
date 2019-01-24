"use strict";

import Table from "./table";


const _GET_DATA_TEXT = "text"; // default
const _GET_DATA_HTML = "html";
const _GET_DATA_JSON = "json";

export default class TableCellSelector {
    options = {
        deselectOutTableClick: true,
        ignoreClass: 'tcs-ignore',
        selectableTableClass : 'tcs',// class added to table
        selectClass: 'tcs-select',
    };
    obTable;


    constructor (table, options) {
        Object.assign(this.options, options);
        this.obTable = new Table(table, this.options);
    }

    destroy () {
        this.obTable.destroy();
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

    getPositions () {
        return this.obTable.getPositions();
    }

    getJson (type) {

    }

    paste (positions, options) {

    }
}

window.TableCellSelector = TableCellSelector;