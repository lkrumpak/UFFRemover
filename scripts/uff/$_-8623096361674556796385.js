(function(){{
    var inline =         $that.isInline(), item = (inline ?         $that.inlineStack :         $that.compileStack).pop();
    if (!wrapped && item instanceof Literal) {
        return item.value;
    } else {
        if (!inline) {
            if (!                $that.stackSlot) {
                throw new Exception('Invalid stack pop');
            }
                        $that.stackSlot--;
        }
        return item;
    }
}})();