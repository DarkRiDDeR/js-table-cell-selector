export const getParentTag = function (elem, tagName) {
    tagName = tagName.toLowerCase();
    if (elem.tagName.toLowerCase() === tagName) return elem;
    for ( ; elem && elem !== document; elem = elem.parentNode ) {
        if ( elem.tagName.toLowerCase() === tagName ) return elem;
    }
    return null;
};

export const isElement = function(elem) {
    return elem instanceof Element || elem instanceof HTMLDocument;
};

export const on = (function() {
    if (document.addEventListener) {
        return function(element, event, handler) {
            if (element && event && handler) {
                element.addEventListener(event, handler, false);
            }
        };
    } else {
        return function(element, event, handler) {
            if (element && event && handler) {
                element.attachEvent('on' + event, handler);
            }
        };
    }
})();

export const off = (function() {
    if (document.removeEventListener) {
        return function(element, event, handler) {
            if (element && event) {
                element.removeEventListener(event, handler, false);
            }
        };
    } else {
        return function(element, event, handler) {
            if (element && event) {
                element.detachEvent('on' + event, handler);
            }
        };
    }
})();

