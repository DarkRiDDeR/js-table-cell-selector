import {getParentTag, isElement, on, off} from "./dom";
import {isEmpty, addClass, hasClass, removeClass} from "./funcs";

export default class Table {
    isMouseDown = false; // whether the left mouse button is pressed
    obSelector;
    options;
    positions; // [[0, 0], [1, 1]]
    table; // html table

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
        on(this.table, "mouseover", (e) => this.onMouseOver(e));
        on(this.table, "mousedown", (e) => this.onMouseDown(e));
        on(this.table, "mouseup", (e) => this.onMouseUp(e));
        on(this.table.ownerDocument, "click", (e) => this.onOutTableClick(e)); // click outside the table
    }

    destroy() {
        removeClass(this.table, this.options.selectableTableClass);
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
        if (!getParentTag(e.target, "table") && this.options.deselectOutTableClick) {
            this.obSelector.deselectAll();
        }
        if (this.options.destroySizeMatrix) {
            this.obSelector.destroySizeMatrix();
        }
    }

    removeEvents() {
        off(this.table, "mouseover", (e) => this.onMouseOver(e));
        off(this.table, "mousedown", (e) => this.onMouseDown(e));
        off(this.table, "mouseup", (e) => this.onMouseUp(e));
        off(this.table.ownerDocument, "click", (e) => this.onOutTableClick(e));
    }
}