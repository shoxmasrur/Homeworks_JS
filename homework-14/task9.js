function flatten(obj) {
    if (prefix === '' && !isObj(obj)) {
        throw new TypeError("Faqat obyekt qabul qilinadi!");
    }
    let result = {};
    for (const key in obj) {
        const newKey = prefix ? `${prefix}.${key}` : key;

        if (isObj(obj[key])) {
            Object.assign(result, flatten(obj[key], newKey));
        } else {
            result[newKey] = obj[key];
        }
    }

    return result;
};


const obj ={ a: 1, b: { c: 2, d: { e: 3 } } }
flatten(obj)