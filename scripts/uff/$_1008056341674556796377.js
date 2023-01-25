(function(){{
    var params =         $that.setupFullMustacheParams(sexpr, program, inverse), name = sexpr.id.parts[0];
    if (        $that.options.knownHelpers[name]) {
                $that.opcode('invokeKnownHelper', params.length, name);
    } else if (        $that.options.knownHelpersOnly) {
        throw new Exception('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
    } else {
                $that.opcode('invokeHelper', params.length, name, sexpr.isRoot);
    }
}})();