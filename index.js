"use strict";
function isConstructor(symbol) {
    console.log(symbol.prototype);
    return notUndefined(symbol) &&
        symbol instanceof Function &&
        symbol.constructor &&
        symbol.constructor instanceof Function &&
        notUndefined(new symbol) &&
        Object.getPrototypeOf(symbol) !== Object.prototype &&
        symbol.constructor !== Object &&
        symbol.prototype.hasOwnProperty('constructor');
}
;
function notUndefined(item) {
    return item != undefined && item != 'undefined';
}
module.exports = isConstructor;
//# sourceMappingURL=index.js.map