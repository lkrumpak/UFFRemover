(function(){{
    if (obj == null)
        return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf)
        return obj.indexOf(target) != -1;
    return any(obj, function (value) {
        return value === target;
    });
}})();