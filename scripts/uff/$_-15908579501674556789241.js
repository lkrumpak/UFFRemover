(function(){{
    var title =     $that.title().trim();
    if (title) {
                $that.list.push(new app.Todo({ title: title }));
        app.storage.put(        $that.list);
    }
        $that.title('');
}})();