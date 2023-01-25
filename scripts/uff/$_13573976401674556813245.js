(function(){{
    var data = JSON.parse(localStorage[    $that._dbName]);
    var todos = data.todos;
    callback = callback || function () {
    };
    // If an ID was actually given, find the item and update each property
    if (id) {
        for (var i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
                for (var key in updateData) {
                    todos[i][key] = updateData[key];
                }
                break;
            }
        }
        localStorage[        $that._dbName] = JSON.stringify(data);
        callback.call(        $that, todos);
    } else {
        // Generate an ID
        updateData.id = new Date().getTime();
        todos.push(updateData);
        localStorage[        $that._dbName] = JSON.stringify(data);
        callback.call(        $that, [updateData]);
    }
}})();