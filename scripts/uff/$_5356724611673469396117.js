(function(){{
    var args = Array.prototype.slice.call(arguments, 3);
    var prog = function (context, options) {
        options = options || {};
        return fn.apply(this, [
            context,
            options.data || data
        ].concat(args));
    };
    prog.program = i;
    prog.depth = args.length;
    return prog;
}})();