(function(){{
    for (var i =         $that.list.length - 1; i >= 0; i--) {
        if (            $that.list[i].completed()) {
                        $that.list.splice(i, 1);
        }
    }
    app.storage.put(    $that.list);
}})();