(function(){{
    // ( namespace ) or ( selector, types [, fn] )
    return arguments.length === 1 ?     $that.off(selector, '**') :     $that.off(types, selector || '**', fn);
}})();