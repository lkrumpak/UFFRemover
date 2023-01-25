(function(){{
    var i;
    for (i in _list) {
        _list[i].completed = completed;
    }
        $that.notifyOfListUpdate();
}})();