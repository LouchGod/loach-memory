function _new(Fn, ...args) {
    const obj = Object.create(Fn.prototype);
    const result = Fn.apply(obj, ...args);

    return result !== null && (typeof result === "object" || typeof result === "function") ? result : obj;
}

