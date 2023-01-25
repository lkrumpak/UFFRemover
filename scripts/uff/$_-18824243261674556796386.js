(function(){{
    var options = [], contexts = [], types = [], param, inverse, program;
    options.push('hash:' +    $that.popStack());
    if (        $that.options.stringParams) {
        options.push('hashTypes:' +        $that.popStack());
        options.push('hashContexts:' +        $that.popStack());
    }
    inverse =     $that.popStack();
    program =     $that.popStack();
    // Avoid setting fn and inverse if neither are set. This allows
    // helpers to do a check for `if (options.fn)`
    if (program || inverse) {
        if (!program) {
                        $that.context.aliases.self = 'this';
            program = 'self.noop';
        }
        if (!inverse) {
                        $that.context.aliases.self = 'this';
            inverse = 'self.noop';
        }
        options.push('inverse:' + inverse);
        options.push('fn:' + program);
    }
    for (var i = 0; i < paramSize; i++) {
        param =         $that.popStack();
        params.push(param);
        if (            $that.options.stringParams) {
            types.push(            $that.popStack());
            contexts.push(            $that.popStack());
        }
    }
    if (        $that.options.stringParams) {
        options.push('contexts:[' + contexts.join(',') + ']');
        options.push('types:[' + types.join(',') + ']');
    }
    if (        $that.options.data) {
        options.push('data:data');
    }
    return options;
}})();