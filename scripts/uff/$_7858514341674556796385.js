(function(){{
    var inlineStack =     $that.inlineStack;
    if (inlineStack.length) {
                $that.inlineStack = [];
        for (var i = 0, len = inlineStack.length; i < len; i++) {
            var entry = inlineStack[i];
            if (entry instanceof Literal) {
                                $that.compileStack.push(entry);
            } else {
                                $that.pushStack(entry);
            }
        }
    }
}})();