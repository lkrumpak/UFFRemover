(function(){{
    var buf = [];
    var keys = Object.keys(obj);
    if (keys.length) {
        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i], val = obj[key];
            if ('class' == key) {
                if (val = joinClasses(val)) {
                    buf.push(' ' + key + '="' + val + '"');
                }
            } else {
                buf.push(exports.attr(key, val, false, terse));
            }
        }
    }
    return buf.join('');
}})();