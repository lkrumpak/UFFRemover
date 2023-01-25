(function(){{
    return function (elem) {
        var result = Sizzle.attr(elem, name);
        if (result == null) {
            return operator === '!=';
        }
        if (!operator) {
            return true;
        }
        result += '';
        return operator === '=' ? result === check : operator === '!=' ? result !== check : operator === '^=' ? check && result.indexOf(check) === 0 : operator === '*=' ? check && result.indexOf(check) > -1 : operator === '$=' ? check && result.slice(-check.length) === check : operator === '~=' ? (' ' + result.replace(rwhitespace, ' ') + ' ').indexOf(check) > -1 : operator === '|=' ? result === check || result.slice(0, check.length + 1) === check + '-' : false;
    };
}})();