(function(){{
    var value =         $that.popStack(), context, type;
    if (        $that.options.stringParams) {
        type =         $that.popStack();
        context =         $that.popStack();
    }
    var hash =     $that.hash;
    if (context) {
        hash.contexts.push('\'' + key + '\': ' + context);
    }
    if (type) {
        hash.types.push('\'' + key + '\': ' + type);
    }
    hash.values.push('\'' + key + '\': (' + value + ')');
}})();