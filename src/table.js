import {_gOptions} from "./app";
import {getParentTags, isElement, on, off} from "./dom";
import {addClass, removeClass} from "./funcs";

export default class Table {
    isMouseDown = false; // whether the left mouse button is pressed
    obApp;
    obSelector;
    observer;
    table; // html table
    _isMouse = false;
    _onMouseOver = (e) => this.onMouseOver(e);
    _onMouseDown = (e) => this.onMouseDown(e);
    _onMouseEnter = (e) => this.onMouseEnter(e);
    _onMouseLeave = (e) => this.onMouseLeave(e);
    _onMouseUp = (e) => this.onMouseUp(e);
    _onOutTableClick = (e) => this.onOutTableClick(e);

    constructor(table, obSelector, obApp) {
        if (isElement(table) && table.tagName === "TABLE") {
            this.table = table; // DOM element table
            this.obApp = obApp;
            this.obSelector = obSelector;
            addClass(this.table, _gOptions.selectableTableClass);
            this.addEvents();
            if (_gOptions.changeTracking) this.initObserver();
        } else {
            throw new Error("Мodule must be initialized to Table");
        }
    }

    addEvents() {
        on(this.table, "mouseover", this._onMouseOver);
        on(this.table, "mousedown", this._onMouseDown);
        on(this.table, "mouseenter", this._onMouseEnter);
        on(this.table, "mouseleave", this._onMouseLeave);
        on(this.table, "mouseup", this._onMouseUp);
        on(this.table.ownerDocument, "click", this._onOutTableClick); // click outside the table
    }

    /**
     * Tracking changes in the structure of the table (delete or add rows of columns) for re-initializing of size matrix
     */
    initObserver() {
        const _Observer = MutationObserver || window.WebKitMutationObserver;
        if (!_Observer) return false;
        this.observer = new _Observer((mutations) => {
            mutations.forEach((e) => {
                if (["TABLE", "THEAD", "TBODY", "TFOOT", "TR"].indexOf(e.target.tagName) > -1) {
                    this.obSelector.initSizeMatrix();
                }
            });
        });
        this.observer.observe(this.table, { childList: true, subtree: true });
        return true;
    }

    get isMouse () {
        return this._isMouse;
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

    onMouseEnter (e) {
        this._isMouse = true;
    }

    onMouseLeave (e) {
        this._isMouse = false;
    }

    onMouseUp(e) {
        this.isMouseDown = false;
    }

    onOutTableClick(e) {
        this.isMouseDown = false;
        if (_gOptions.deselectOutTableClick && !this.isMouse) {
            this.obSelector.deselectAll();
        }
    }

    removeEvents() {
        off(this.table, "mouseover", this._onMouseOver);
        off(this.table, "mousedown", this._onMouseDown);
        off(this.table, "mouseenter", this._onMouseEnter);
        off(this.table, "mouseleave", this._onMouseLeave);
        off(this.table, "mouseup", this._onMouseUp);
        off(this.table.ownerDocument, "click", this._onOutTableClick);
    }

    destroy() {
        if (this.observer) this.observer.disconnect();
        removeClass(this.table, _gOptions.selectableTableClass);
        this.removeEvents();
    }
}