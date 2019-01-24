import {getParentTag, isElement, on, off} from "./dom";

export default class Table {
    options;
    positions;
    table;
    isMouseDown = false; // whether the left mouse button is pressed
    isSelected = false;

    constructor (table, options) {
        if (isElement(table) && table.tagName === "TABLE") {
            this.table = table; // DOM element table
            this.options = options;
            this.table.classList.add(this.options.selectableTableClass);
            this.addEvents();
        } else {
            throw new Error("Мodule must be initialized to Table");
        }
    }

    addEvents () {
        on(this.table, "mouseover", (e) => this.onMouseOver(e));
        on(this.table, "mousedown", (e) => this.onMouseDown(e));
        on(this.table, "mouseup", (e) => this.onMouseUp(e));
        on(this.table.ownerDocument, "click", (e) => this.onOutTableClick(e)); // click outside the table
    }

    deselectAll() {
        let length = 0;
        let list = this.table.getElementsByTagName("td");

        for (let item of list) {
            if (this.isSelectedCell(item)) {
                this.unselectCell(item);
                length++;
            }
        }
        return length;
    }

    destroy () {
        this.table.classList.remove(this.options.selectableTableClass);
        deselectAll();
        removeEvents();
    }

    getPositions () {
        return this.positions;
    }

    isRightMouseBtn (e) {
        let isRightMB;
        e = e || window.event;

        if ("which" in e)  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
            isRightMB = e.which == 3;
        else if ("button" in e)  // IE, Opera
            isRightMB = e.button == 2;

        return isRightMB;
    }

    isSelectedCell(cell) {
        return cell.classList.contains(this.options.selectClass);
    }

    onMouseOver(e) {
        if (!this.isMouseDown) return false;

        let cell = getParentTag(e.target, "td");
        if (cell === null) return; // not for cell

        this.selectCell(cell);

    }

    onMouseDown(e) {
        e.preventDefault();

        if (this.isRightMouseBtn(e)) return true;

        let cell = getParentTag(e.target, "td");
        if (cell === null) return; // not for cell

        this.isMouseDown = true;

        if (this.isSelectedCell(cell) && this.deselectAll() === 1) {
            this.unselectCell(cell);
        } else {
            this.deselectAll();
            this.selectCell(cell);
        }

        this.selectCell(cell);
    }

    onMouseUp (e)
    {
        this.isMouseDown = false;

    }

    onOutTableClick (e) {
        this.isMouseDown = false;
        if (!getParentTag(e.target, "table") && this.options.deselectOutTableClick) {
            this.deselectAll();
        }
    }

    removeEvents () {
        off(this.table, "mouseover", (e) => this.onMouseOver(e));
        off(this.table, "mousedown", (e) => this.onMouseDown(e));
        off(this.table, "mouseup", (e) => this.onMouseUp(e));
        off(this.table.ownerDocument, "click", (e) => this.onOutTableClick(e));
    }

    selectCell(cell) {
        if (!cell.classList.contains(this.options.ignoreClass) && !cell.parentNode.classList.contains(this.options.ignoreClass)) {
            this.isSelected = true;
            return cell.classList.add(this.options.selectClass);
        }
    }

    unselectCell(cell) {
        return cell.classList.remove(this.options.selectClass);
    }
}