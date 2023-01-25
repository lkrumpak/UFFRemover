(function(){{
    var out = [];
    if (!        $that.isChild) {
        var namespace =         $that.namespace;
        var copies = 'helpers = this.merge(helpers, ' + namespace + '.helpers);';
        if (            $that.environment.usePartial) {
            copies = copies + ' partials = this.merge(partials, ' + namespace + '.partials);';
        }
        if (            $that.options.data) {
            copies = copies + ' data = data || {};';
        }
        out.push(copies);
    } else {
        out.push('');
    }
    if (!        $that.environment.isSimple) {
        out.push(', buffer = ' +        $that.initializeBuffer());
    } else {
        out.push('');
    }
    // track the last context pushed into place to allow skipping the
    // getContext opcode when it would be a noop
        $that.lastContext = 0;
        $that.source = out;
}})();