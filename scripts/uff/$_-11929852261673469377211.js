(function(){{
    if (can.isFunction(        $that.constructor.prototype[prop])) {
        return can.compute(        $that[prop],         $that);
    } else {
        var reads = prop.split('.'), last = reads.length - 1, options = { args: [] };
        return can.compute(function (newVal) {
            if (arguments.length) {
                can.compute.read(this, reads.slice(0, last)).value.attr(reads[last], newVal);
            } else {
                return can.compute.read(this, reads, options).value;
            }
        },         $that);
    }
}})();