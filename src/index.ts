function isConstructor<T>(value: any): value is Constructor<any> {
  if (typeof value !== "function") {
    return false;
  }

  // Check if the function has a prototype property
  if (!value.prototype) {
    return false;
  }

  // Check if the function is not an arrow function
  if (value.prototype.constructor !== value) {
    return false;
  }

  // Additional check for native constructors
  if (/^class\s/.test(Function.prototype.toString.call(value))) {
    return true;
  }

  try {
    Reflect.construct(String, [], value);
    return true;
  } catch (e) {
    return false;
  }
}

export default isConstructor;
export type Constructor<T> = new (...args: any[]) => T;

// Add this type declaration for the Constructor type
namespace isConstructor {
  export type Constructor<T> = new (...args: any[]) => T;
}

// For CommonJS compatibility
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = isConstructor;
  module.exports.default = isConstructor;
}
