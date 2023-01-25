(function(){{
        $that.args[argNum] = [
        isIndexRef,
        value
    ];
        $that.bubble();
        $that.resolved = !--    $that.unresolved;
}})();