(function(){{
    while (        $that.fragments.length) {
                $that.fragments.shift().teardown();
    }
        $that.length = 0;
}})();