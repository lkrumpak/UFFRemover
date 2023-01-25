(function(){{
    var regexp = /^["'].*["']$/;
    val = val.replace(elements.attrReg, '').replace(newLine, '');
    // check if starts and ends with " or '
    return regexp.test(val) ? val.substr(1, val.length - 2) : val;
}})();