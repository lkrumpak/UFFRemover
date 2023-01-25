(function(){{
    var objs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objs[_i - 0] = arguments[_i];
    }
    var newObj = {};
    for (var i = 0; i < objs.length; i++) {
        var obj = objs[i];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = obj[key];
            }
        }
    }
    return newObj;
}})();