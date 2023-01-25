(function(){{
    var names = [], last = 0;
    attr.replace(escapeReg, function (first, second, index) {
        if (!second) {
            names.push(attr.slice(last, index).replace(escapeDotReg, '.'));
            last = index + first.length;
        }
    });
    names.push(attr.slice(last).replace(escapeDotReg, '.'));
    return names;
}})();