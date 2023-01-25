(function(){{
    var len =     $that.opcodes.length;
    if (other.opcodes.length !== len) {
        return false;
    }
    for (var i = 0; i < len; i++) {
        var opcode =             $that.opcodes[i], otherOpcode = other.opcodes[i];
        if (opcode.opcode !== otherOpcode.opcode || opcode.args.length !== otherOpcode.args.length) {
            return false;
        }
        for (var j = 0; j < opcode.args.length; j++) {
            if (opcode.args[j] !== otherOpcode.args[j]) {
                return false;
            }
        }
    }
    len =     $that.children.length;
    if (other.children.length !== len) {
        return false;
    }
    for (i = 0; i < len; i++) {
        if (!            $that.children[i].equals(other.children[i])) {
            return false;
        }
    }
    return true;
}})();