(function(){{
    var opcodes =         $that.opcodes, opcode, out = [], params, param;
    for (var i = 0, l = opcodes.length; i < l; i++) {
        opcode = opcodes[i];
        if (opcode.opcode === 'DECLARE') {
            out.push('DECLARE ' + opcode.name + '=' + opcode.value);
        } else {
            params = [];
            for (var j = 0; j < opcode.args.length; j++) {
                param = opcode.args[j];
                if (typeof param === 'string') {
                    param = '"' + param.replace('\n', '\\n') + '"';
                }
                params.push(param);
            }
            out.push(opcode.opcode + ' ' + params.join(' '));
        }
    }
    return out.join('\n');
}})();