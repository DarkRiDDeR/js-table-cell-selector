import {getParentTag, isElement, on, off} from "./dom";
import {isEmpty, addClass, hasClass, removeClass} from "./funcs";

export default class Table {
    isMouseDown = false; // whether the left mouse button is pressed
    obSelector;
    options;
    positions; // [[0, 0], [1, 1]]
    table; // html table
    _onMouseOver = (e) => this.onMouseOver(e);
    _onMouseDown = (e) => this.onMouseDown(e);
    _onMouseUp = (e) => this.onMouseUp(e);
    _onOutTableClick = (e) => this.onOutTableClick(e);


    constructor(table, obSelector, options) {
        if (isElement(table) && table.tagName === "TABLE") {
            this.table = table; // DOM element table
            this.obSelector = obSelector;
            this.options = options;
            addClass(this.table, this.options.selectableTableClass);
            this.addEvents();
        } else {
            throw new Error("Мodule must be initialized to Table");
        }
    }

    addEvents() {
        on(this.table, "mouseover", this._onMouseOver);
        on(this.table, "mousedown", this._onMouseDown);
        on(this.table, "mouseup", this._onMouseUp);
        on(this.table.ownerDocument, "click", this._onOutTableClick); // click outside the table
    }

    destroy() {
        removeClass(this.table, this.options.selectableTableClass);
        this.removeEvents();
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

    onMouseDown(e) {
        e.preventDefault();
        if (!this.matrix && this.options.usingSizeMatrix) this.obSelector.initSizeMatrix();
        if (this.isRightMouseBtn(e)) return true;

        let cell = getParentTag(e.target, "td");
        if (cell === null) return; // not for cell

        this.isMouseDown = true;

        this.obSelector.deselectAll();
        this.obSelector.selectCell(cell);
    }

    onMouseOver(e) {
        if (!this.isMouseDown) return false;

        let cell = getParentTag(e.target, "td");
        if (cell === null) return; // not for cell

        this.obSelector.selectCell(cell);
        //magic selection
        this.obSelector.toSelectedRectangle();
    }

    onMouseUp(e) {
        this.isMouseDown = false;

    }

    onOutTableClick(e) {
        this.isMouseDown = false;
        if (this.options.deselectOutTableClick && !getParentTag(e.target, "table")) {
            this.obSelector.deselectAll();
        }
        if (this.options.destroySizeMatrix) {
            this.obSelector.destroySizeMatrix();
        }
    }

    removeEvents() {
        off(this.table, "mouseover", this._onMouseOver);
        off(this.table, "mousedown", this._onMouseDown);
        off(this.table, "mouseup", this._onMouseUp);
        off(this.table.ownerDocument, "click", this._onOutTableClick);
    }
}