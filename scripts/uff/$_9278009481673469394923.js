(function(){{
    var className = ' ' + selector + ' ', i = 0, l =         $that.length;
    for (; i < l; i++) {
        if (            $that[i].nodeType === 1 && (' ' +            $that[i].className + ' ').replace(rclass, ' ').indexOf(className) >= 0) {
            return true;
        }
    }
    return false;
}})();