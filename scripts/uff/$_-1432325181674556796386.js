(function(){{
    var stack =         $that.isInline() ?         $that.inlineStack :         $that.compileStack, item = stack[stack.length - 1];
    if (!wrapped && item instanceof Literal) {
        return item.value;
    } else {
        return item;
    }
}})();