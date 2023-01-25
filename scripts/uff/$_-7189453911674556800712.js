(function(){{
    // stablize the subscriber list first
    var subs =     $that.subs.slice();
    for (var i = 0, l = subs.length; i < l; i++) {
        subs[i].update();
    }
}})();