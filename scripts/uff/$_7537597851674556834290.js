(function(){{
        $that.name = 'AssertionError';
        $that.actual = options.actual;
        $that.expected = options.expected;
        $that.operator = options.operator;
    if (options.message) {
                $that.message = options.message;
                $that.generatedMessage = false;
    } else {
                $that.message = getMessage(        $that);
                $that.generatedMessage = true;
    }
    var stackStartFunction = options.stackStartFunction || fail;
    if (Error.captureStackTrace) {
        Error.captureStackTrace(        $that, stackStartFunction);
    } else {
        // non v8 browsers so we can have a stacktrace
        var err = new Error();
        if (err.stack) {
            var out = err.stack;
            // try to strip useless frames
            var fn_name = stackStartFunction.name;
            var idx = out.indexOf('\n' + fn_name);
            if (idx >= 0) {
                // once we have located the function frame
                // we need to strip out everything before it (and its line)
                var next_line = out.indexOf('\n', idx + 1);
                out = out.substring(next_line + 1);
            }
                        $that.stack = out;
        }
    }
}})();