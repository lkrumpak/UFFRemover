(function(){{
    while (        $that.refs.length) {
                $that.refs.pop().teardown();
    }
    clearCache(    $that.root,     $that.keypath);
        $that.root._evaluators[    $that.keypath] = null;
}})();