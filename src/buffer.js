import {on, off, isElement} from "./dom";

export default class Buffer {
    fakeElem;
    isMouse = false;
    _text;
    _onInput = (e) => this.onInput(e);
    _onMouseEnter = (e) => this.onMouseEnter(e);
    _onMouseLeave = (e) => this.onMouseLeave(e);
    _onKeyDown = (e) => this.onKeyDown(e);

    constructor (container) {
        this.container = isElement(container) ? container : document.body;
        this.initSelectFake();

        if (this.container !== document.body) {
            on(this.container, "mouseenter", this._onMouseEnter);
            on(this.container, "mouseleave", this._onMouseLeave);
        }
        else this.isMouse = true;

        on(document.body, "keydown", this._onKeyDown);
    }

    /**
     * Executes the copy operation based on the current selection.
     */
    copy(text) {
        try {
            this._text = text;
            this.fakeElem.value = text;
            //this.fakeElem.focus();
            this.select(this.fakeElem);
            return document.execCommand("cut");
        }
        catch (err) {
            return false;
        }
    }

    /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     */
    initSelectFake() {
        //const isRTL = document.documentElement.getAttribute('dir') == 'rtl';

        //this.removeFake();

        this.fakeElem = document.createElement('textarea');
        // Prevent zooming on iOS
        this.fakeElem.style.fontSize = '12pt';
        // Reset box model
        // this.fakeElem.style.border = '0';
        //this.fakeElem.style.padding = '0';
        //this.fakeElem.style.margin = '0';
        // Move element out of screen horizontally
        //this.fakeElem.style.position = 'absolute';
        //this.fakeElem.style[ isRTL ? 'right' : 'left' ] = '-9999px';
        // Move element to the same position vertically
        //let yPosition = window.pageYOffset || document.documentElement.scrollTop;
        //this.fakeElem.style.top = `${yPosition}px`;


        document.body.appendChild(this.fakeElem);

    }

    onInput (e) {
        this._text = e.target.value;
        this.fakeElem.blur();
        off(this.fakeElem, "input", this._onInput);
    }

    onKeyDown (e) {
        if (this.isMouse) {
            e = e || window.event;
            var key = e.which || e.keyCode; // keyCode detection
            var ctrl = e.ctrlKey ? e.ctrlKey : ((key === 17) ? true : false); // ctrl detection

            if (ctrl && key == 86) { // ctrl + v
                this.fakeElem.value = "";
                on(this.fakeElem, "input", this._onInput);
                this.fakeElem.focus();
            }
        }
    }

    onMouseEnter (e) {
        this.isMouse = true;
    }

    onMouseLeave (e) {
        this.isMouse = false;
    }

    paste () {
        this.fakeElem.focus();
        this.fakeElem.value = "";
        return this.fakeElem.value;
    }

    select(elem) {
        elem.select();
        elem.setSelectionRange(0, elem.value.length);
    }

    get text () {
        return this._text;
    }

    destroy() {
        if (this.container !== document.body) {
            off (this.container, "mouseenter", this._onMouseEnter);
            off (this.container, "mouseleave", this._onMouseLeave);
        }
        off(document.body, "keydown", this._onKeyDown);
        if (this.fakeElem) {
            this.container.removeChild(this.fakeElem);
            this.fakeElem = null;
        }
    }
}