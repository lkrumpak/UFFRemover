(function(){{
    // Force anything that is inlined onto the stack so we don't have duplication
    // when we examine local
        $that.flushInline();
    var local =     $that.popStack();
        $that.pushSource('if(' + local + ' || ' + local + ' === 0) { ' +    $that.appendToBuffer(local) + ' }');
    if (        $that.environment.isSimple) {
                $that.pushSource('else { ' +        $that.appendToBuffer('\'\'') + ' }');
    }
}})();