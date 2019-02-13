import {on, off, isElement} from "./dom";

export default class Buffer {
    fakeElem;
    _onScroll = (e) => this.onScroll(e);
    _text;

    constructor (container) {
        this.container = isElement(container) ? container : document.body;
        this.initSelectFake();
        on(window, "scroll", this._onScroll);
    }

    /**
     * Executes the copy operation based on the current selection.
     */
    copy(text) {
        try {
            this._text = text;
            this.fakeElem.value = text;
            this.fakeElem.select();
            this.fakeElem.setSelectionRange(0, text.length);
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
        const isRTL = document.documentElement.getAttribute('dir') == 'rtl';

        this.fakeElem = document.createElement('textarea');
        // Prevent zooming on iOS
        this.fakeElem.style.fontSize = '12pt';
        // Reset box model
        this.fakeElem.style.border = '0';
        this.fakeElem.style.padding = '0';
        this.fakeElem.style.margin = '0';
        // Move element out of screen horizontally
        this.fakeElem.style.position = 'absolute';
        this.fakeElem.style[ isRTL ? 'right' : 'left' ] = '-9999px';

        this.container.appendChild(this.fakeElem);
    }

    onScroll (e) {
        let yPosition = window.pageYOffset || document.documentElement.scrollTop;
        this.fakeElem.style.top = yPosition+"px";
    }

    /**
     * Can only be called when the combination is pressed Ctrl + V
     * @returns {string}
     */
    paste (callback) {
        this.fakeElem.value = "";
        this.fakeElem.focus();
        let onInput = (e) => {
            this._text = e.target.value;
            this.fakeElem.blur();
            off(this.fakeElem, "input", onInput);
            callback(this._text);
        };
        on(this.fakeElem, "input", onInput);
    }

    get text () {
        return this._text;
    }

    destroy() {
        this.container.removeChild(this.fakeElem);
        this.fakeElem = null;
        off(window, "scroll", this._onScroll);
    }
}