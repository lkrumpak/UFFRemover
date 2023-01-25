(function(){{
        $that.flushInline();
    var stack =     $that.incrStack();
    if (item) {
                $that.pushSource(stack + ' = ' + item + ';');
    }
        $that.compileStack.push(stack);
    return stack;
}})();