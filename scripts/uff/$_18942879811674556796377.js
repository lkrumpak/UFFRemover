(function(){{
        $that.addDepth(id.depth);
        $that.opcode('getContext', id.depth);
    var name = id.parts[0];
    if (!name) {
                $that.opcode('pushContext');
    } else {
                $that.opcode('lookupOnContext', id.parts[0]);
    }
    for (var i = 1, l = id.parts.length; i < l; i++) {
                $that.opcode('lookup', id.parts[i]);
    }
}})();