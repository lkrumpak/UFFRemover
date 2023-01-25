(function(){{
    var prefix = '', inline =         $that.isInline(), stack, createdStack, usedLiteral;
    // If we are currently inline then we want to merge the inline statement into the
    // replacement statement via ','
    if (inline) {
        var top =         $that.popStack(true);
        if (top instanceof Literal) {
            // Literals do not need to be inlined
            stack = top.value;
            usedLiteral = true;
        } else {
            // Get or create the current stack name for use by the inline
            createdStack = !            $that.stackSlot;
            var name = !createdStack ?             $that.topStackName() :             $that.incrStack();
            prefix = '(' +            $that.push(name) + ' = ' + top + '),';
            stack =             $that.topStack();
        }
    } else {
        stack =         $that.topStack();
    }
    var item = callback.call(    $that, stack);
    if (inline) {
        if (!usedLiteral) {
                        $that.popStack();
        }
        if (createdStack) {
                        $that.stackSlot--;
        }
                $that.push('(' + prefix + item + ')');
    } else {
        // Prevent modification of the context depth variable. Through replaceStack
        if (!/^stack/.test(stack)) {
            stack =             $that.nextStack();
        }
                $that.pushSource(stack + ' = (' + prefix + item + ');');
    }
    return stack;
}})();