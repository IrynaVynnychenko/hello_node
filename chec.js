function example(a) {
    if (typeof a === 'string') {
        return 'string'
    } else if (typeof a === 'number') {
        return 'number'
    } else if (Array.isArray(a) === true) {
        return `Это длина массива - ${a.length}`
    } else if (typeof a === 'object') {
        return 'object'
    }
}

module.exports = example;