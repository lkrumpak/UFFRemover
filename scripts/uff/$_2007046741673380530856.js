(function(){{
        $that.options.data = true;
    if (data.id.isScoped || data.id.depth) {
        throw new Exception('Scoped data references are not supported: ' + data.original, data);
    }
        $that.opcode('lookupData');
    var parts = data.id.parts;
    for (var i = 0, l = parts.length; i < l; i++) {
                $that.opcode('lookup', parts[i]);
    }
}})();