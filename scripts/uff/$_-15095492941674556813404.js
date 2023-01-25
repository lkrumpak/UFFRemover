(function(){{
    title = title || '';
    callback = callback || function () {
    };
    var newItem = {
        title: title.trim(),
        completed: false
    };
        $that.storage.save(newItem, callback);
}})();