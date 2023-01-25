(function(){{
    var amount = 0;
    for (var i = 0; i <        $that.list.length; i++) {
        if (            $that.list[i].completed()) {
            amount++;
        }
    }
    return amount;
}})();