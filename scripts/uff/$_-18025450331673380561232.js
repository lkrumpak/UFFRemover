(function(){{
    var state =     $that.serialize(StateFunctions.snapshot(    $that));
        $that.recycle();
    return state;
}})();