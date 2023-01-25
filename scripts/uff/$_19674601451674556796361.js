(function(){{
    var prog = function (context, options) {
        options = options || {};
        return fn(context, options.data || data);
    };
    prog.program = i;
    prog.depth = 0;
    return prog;
}})();