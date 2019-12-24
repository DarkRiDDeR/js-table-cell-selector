export const isEmpty = function(value){
    return (value == null || value.length === 0);
};

export const isUndef = function(value){
    return typeof value === 'undefined';
};

export const addClass = function(elem, name){
    elem.classList.add(name);
};
export const hasClass = function(elem, name){
    return elem.classList.contains(name);
};
export const removeClass = function(elem, name){
    elem.classList.remove(name);
};
