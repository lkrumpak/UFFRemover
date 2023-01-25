(function(){{
        $that.environment = environment;
        $that.options = options || {};
    log('debug',     $that.environment.disassemble() + '\n\n');
        $that.name =     $that.environment.name;
        $that.isChild = !!context;
        $that.context = context || {
        programs: [],
        environments: [],
        aliases: {}
    };
        $that.preamble();
        $that.stackSlot = 0;
        $that.stackVars = [];
        $that.registers = { list: [] };
        $that.hashes = [];
        $that.compileStack = [];
        $that.inlineStack = [];
        $that.compileChildren(environment, options);
    var opcodes = environment.opcodes, opcode;
        $that.i = 0;
    for (var l = opcodes.length;         $that.i < l;         $that.i++) {
        opcode = opcodes[        $that.i];
        if (opcode.opcode === 'DECLARE') {
                        $that[opcode.name] = opcode.value;
        } else {
                        $that[opcode.opcode].apply(            $that, opcode.args);
        }
        // Reset the stripNext flag if it was not set by this operation.
        if (opcode.opcode !==            $that.stripNext) {
                        $that.stripNext = false;
        }
    }
    // Flush any trailing content that might be pending.
        $that.pushSource('');
    if (        $that.stackSlot ||        $that.inlineStack.length ||        $that.compileStack.length) {
        throw new Exception('Compile completed with content left on stack');
    }
    return    $that.createFunctionContext(asObject);
}})();