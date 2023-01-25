(function(){{
    var i;
    if (        $that.custom) {
                $that.custom.teardown();
    } else {
                $that.node.removeEventListener(        $that.name, genericHandler, false);
    }
    i =     $that.proxies.length;
    while (i--) {
                $that.proxies[i].teardown();
    }
}})();