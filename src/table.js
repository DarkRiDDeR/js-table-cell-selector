import {_gOptions} from "./app";
import {getParentTags, isElement, on, off} from "./dom";
import {addClass, removeClass} from "./funcs";

export default class Table {
    isMouseDown = false; // whether the left mouse button is pressed
    obApp;
    obSelector;
    table; // html table
    _onKeyDown = (e) => this.onKeyDown(e);
    _onMouseOver = (e) => this.onMouseOver(e);
    _onMouseDown = (e) => this.onMouseDown(e);
    _onMouseUp = (e) => this.onMouseUp(e);
    _onOutTableClick = (e) => this.onOutTableClick(e);

    constructor(table, obSelector, obApp) {
        if (isElement(table) && table.tagName === "TABLE") {
            this.table = table; // DOM element table
            this.obApp = obApp;
            this.obSelector = obSelector;
            addClass(this.table, _gOptions.selectableTableClass);
            this.addEvents();
        } else {
            throw new Error("Мodule must be initialized to Table");
        }
    }

    addEvents() {
        on(document.body, "keydown", this._onKeyDown);
        on(this.table, "mouseover", this._onMouseOver);
        on(this.table, "mousedown", this._onMouseDown);
        on(this.table, "mouseup", this._onMouseUp);
        on(this.table.ownerDocument, "click", this._onOutTableClick); // click outside the table
    }

    destroy() {
        removeClass(this.table, _gOptions.selectableTableClass);
        this.removeEvents();
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

    onKeyDown (e) {
        e = e || window.event;
        var key = e.which || e.keyCode; // keyCode detection
        var ctrl = e.ctrlKey ? e.ctrlKey : ((key === 17) ? true : false); // ctrl detection

        if (ctrl) {
            if ( key == 67 ) { // c
                this.obApp.copy();
            } else if ( key == 86 ) { // v
                //this.obApp.copy();
            } else if ( key == 88 ) { // x
                this.obApp.cut();
            } else if ( key == 46 || key == 8 ) { // delete or backspase
                this.obApp.clear();
            }
        }
    }

    onMouseDown(e) {
        e.preventDefault();
        if (this.isRightMouseBtn(e)) return true;

        let cell = getParentTags(e.target, "td,th");
        if (cell === null) return; // not for cell

        this.isMouseDown = true;

        this.obSelector.deselectAll();
        this.obSelector.selectCell(cell);
    }

    onMouseOver(e) {
        if (!this.isMouseDown) return false;

        let cell = getParentTags(e.target, "td,th");
        if (cell === null) return; // not for cell

        this.obSelector.selectCell(cell);
        //magic selection
        let coords = this.obSelector.getSelectedRectangleCoords();
        if (coords !== false) this.obSelector.select(coords[0], coords[1]);
    }

    onMouseUp(e) {
        this.isMouseDown = false;
    }

    onOutTableClick(e) {
        this.isMouseDown = false;
        if (_gOptions.deselectOutTableClick && !getParentTags(e.target, "table")) {
            this.obSelector.deselectAll();
        }
    }

    removeEvents() {
        off(document.body, "keydown", this._onKeyDown);
        off(this.table, "mouseover", this._onMouseOver);
        off(this.table, "mousedown", this._onMouseDown);
        off(this.table, "mouseup", this._onMouseUp);
        off(this.table.ownerDocument, "click", this._onOutTableClick);
    }
}