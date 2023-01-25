(function(){{
    while (        $that.scouts.length) {
                $that.scouts.pop().teardown();
    }
}})();