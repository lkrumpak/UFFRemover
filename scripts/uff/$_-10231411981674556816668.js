(function(){{
    var i =     $that.proxies.length;
    while (i--) {
                $that.proxies[i].fire(event);
    }
}})();