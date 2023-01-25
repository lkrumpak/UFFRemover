(function(){{
    var temp = Array.prototype.slice.apply(    $that, arguments);
    return new    $that.constructor(temp);
}})();