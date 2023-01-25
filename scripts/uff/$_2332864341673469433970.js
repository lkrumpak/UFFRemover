(function(){{
    if (!actual || !expected) {
        return false;
    }
    if (Object.prototype.toString.call(expected) == '[object RegExp]') {
        return expected.test(actual);
    } else if (actual instanceof expected) {
        return true;
    } else if (expected.call({}, actual) === true) {
        return true;
    }
    return false;
}})();