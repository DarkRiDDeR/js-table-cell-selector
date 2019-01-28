export const getParentTags = function (elem, list) {
    let tagNames = list
        .toLowerCase()
        .split(',')
        .map(function (e) {
            return e.trim();
        });
    if (tagNames.indexOf(elem.tagName.toLowerCase()) > -1) return elem;
    for ( ; elem && elem !== document; elem = elem.parentNode ) {
        if (tagNames.indexOf( elem.tagName.toLowerCase()) > -1) return elem;
    }
    return null;
};

export const isElement = function(elem) {
    return elem instanceof Element || elem instanceof HTMLDocument;
};

/**
 * get elements by tag names. Function: getElementsByTagNames(list [,obj])
 * @param list of tag names. Example "td, th"
 * @param obj - parent element
 * @returns array elements
 */
export const getElementsByTagNames = function(list, obj) {
    if (!obj) obj = document;
    let tagNames = list.split(',');
    let resultArray = new Array();
    for (let i=0;i<tagNames.length;i++) {
        let tags = obj.getElementsByTagName(tagNames[i].trim());
        for (let j=0;j<tags.length;j++) {
            resultArray.push(tags[j]);
        }
    }
    let testNode = resultArray[0];
    if (!testNode) return [];
    if (testNode.sourceIndex) {
        resultArray.sort(function (a,b) {
            return a.sourceIndex - b.sourceIndex;
        });
    }
    else if (testNode.compareDocumentPosition) {
        resultArray.sort(function (a,b) {
            return 3 - (a.compareDocumentPosition(b) & 6);
        });
    }
    return resultArray;
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

