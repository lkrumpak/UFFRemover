(function(){{
    var allCompleted =     $that.allCompleted();
    for (var i = 0; i <        $that.list.length; i++) {
                $that.list[i].completed(!allCompleted);
    }
    app.storage.put(    $that.list);
}})();