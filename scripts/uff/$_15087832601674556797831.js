(function(){{
    var i, len, ref, results, todo;
    ref =     $that.completed();
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
        todo = ref[i];
        results.push(todo.destroy());
    }
    return results;
}})();