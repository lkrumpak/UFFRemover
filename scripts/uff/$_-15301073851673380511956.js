(function(){{
    var args = [];
    can.each(can.makeArray(arguments), function (arg, i) {
        args[i] = arg instanceof can.List ? arg.serialize() : arg;
    });
    return new    $that.constructor(Array.prototype.concat.apply(    $that.serialize(), args));
}})();