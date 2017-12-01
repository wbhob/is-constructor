function isConstructor(symbol: any): boolean {
    console.log(symbol.prototype);
    return notUndefined(symbol) &&
        symbol instanceof Function &&
        symbol.constructor &&
        symbol.constructor instanceof Function &&
        notUndefined(new symbol) &&
        Object.getPrototypeOf(symbol) !== Object.prototype &&
        symbol.constructor !== Object &&
        symbol.prototype.hasOwnProperty('constructor');
};

function notUndefined(item): boolean {
    return item != undefined && item != 'undefined';
}
namespace isConstructor { }

export = isConstructor;
