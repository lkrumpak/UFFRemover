(function(){{
    var value =         $that.popStack(), context, type, id;
    if (        $that.trackIds) {
        id =         $that.popStack();
    }
    if (        $that.stringParams) {
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
    if (id) {
        hash.ids.push('\'' + key + '\': ' + id);
    }
    hash.values.push('\'' + key + '\': (' + value + ')');
}})();