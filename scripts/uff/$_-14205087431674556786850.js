(function(){{
    var i, n = 0;
    for (i = _list.length - 1; i >= n; i--) {
        if (_list[i].completed) {
            _list.splice(i, 1);
        }
    }
        $that.notifyOfListUpdate();
}})();