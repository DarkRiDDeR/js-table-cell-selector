"use strict";

import Actions from "./actions";
import _Buffer from "./buffer";
import {isEmpty} from "./funcs";
import Selector from "./selector";
import Table from "./table";
import {off, on} from "./dom";
require("./lib/sheetclip.js");

export let _gOptions = {
    deselectOutTableClick: true,
    enableChanging: false,
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
    obActions;
    obBuffer;
    obSelector;
    obTable;
    _onKeyDown = (e) => this.onKeyDown(e);

    constructor (table, options, buffer) {
        if (typeof options === "object") Object.assign(_gOptions, options);
        this.obSelector = new Selector(table);
        this.obTable = new Table(table, this.obSelector, this);
        this.obActions = new Actions(this.obSelector);
        this.obBuffer = buffer;
        on(document.body, "keydown", this._onKeyDown);
    }

    static get Buffer () {
        return _Buffer;
    }

    /**
     * clear ([c1 [, c2]])
     * @param c1 - starting position [0, 0]
     * @param c2 - end position [1, 1]
     * @returns {boolean}
     */
    clear (c1, c2) {
        if (c1 === undefined) {
            let coords = this.obSelector.getSelectedRectangleCoords();
            if (coords === false) return false;
            [c1, c2] = coords;
        }
        this.obActions.clear(c1, c2);
        return true;
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
        if (this.obBuffer instanceof _Buffer &&  data !== false) {
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
        if (this.obBuffer instanceof _Buffer && data !== false) {
            let str = window.SheetClip.stringify(data);
            this.obBuffer.copy(str);
        }
        return data;
    }

    /**
     *
     * @returns {number}
     */
    deselect () {
        return this.obSelector.deselectAll();
    }

    /**
     * destroy size matrix for big table or changing tables
     */
    destroySizeMatrix () {
        this.obSelector.destroySizeMatrix();
    }

    /**
     *
     * @returns {array[] | false}
     */
    getCoords () {
        return this.obSelector.getSelectedRectangleCoords();
    }

    initSizeMatrix () {
        this.obSelector.initSizeMatrix();
    }

    onKeyDown (e) {
        e = e || window.event;
        var key = e.which || e.keyCode; // keyCode detection
        var ctrl = e.ctrlKey ? e.ctrlKey : (key === 17); // ctrl detection

        if (this.obTable.isMouse && ctrl) {
            switch (key) {
            case 65: // a
                e.preventDefault();
                this.selectAll();
                break;
            case 67: // c
                this.copy();
                break;
            case 86: // v
                if (!_gOptions.enableChanging) break;
                if (this.obBuffer instanceof _Buffer) {
                    this.obBuffer.paste((str) => {
                        this.paste(window.SheetClip.parse(str));
                    });
                }
                break;
            case 88: // x
                if (!_gOptions.enableChanging) break;
                this.cut();
                break;
            case 46: // delete
            case 8: // backspase
                if (!_gOptions.enableChanging) break;
                this.clear();
                break;
            }
        }
    }

    /**
     * paste (data [, c1 [, c2]])
     * @param data - array[][]
     * @param c1 - starting position [0, 0]
     * @param c2 - end position [1, 1]
     */
    paste (data, c1, c2) {
        if (c1 === undefined) {
            let coords = this.obSelector.getSelectedRectangleCoords();
            if (isEmpty(coords)) return false;
            [c1, c2] = coords;
        } else if (c2 === undefined) {
            c2 = c1;
        } else {
            [c1, c2] = this.obSelector.normalizeCoords(c1, c2);
        }
        [c1, c2] = this.obSelector.getRectangleCoords(c1, c2);
        this.obActions.paste(data, c1, c2);
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

    /**
     *
     * @returns {number}
     */
    selectAll () {
        return this.obSelector.selectAll();
    }

    destroy () {
        off(document.body, "keydown", this._onKeyDown);
        this.deselect();
        this.obBuffer.destroy();
        this.obTable.destroy();

        delete
        this.obActions,
        this.obBuffer,
        this.obSelector,
        this.obTable,
        this;
    }
}

if (window) {
    window.TableCellSelector = TableCellSelector;
}