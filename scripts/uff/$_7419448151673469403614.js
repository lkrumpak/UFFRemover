(function(){{
    var partialName = partial.partialName;
        $that.usePartial = true;
    if (partial.hash) {
                $that.accept(partial.hash);
    } else {
                $that.opcode('push', 'undefined');
    }
    if (partial.context) {
                $that.accept(partial.context);
    } else {
                $that.opcode('getContext', 0);
                $that.opcode('pushContext');
    }
        $that.opcode('invokePartial', partialName.name, partial.indent || '');
        $that.opcode('append');
}})();