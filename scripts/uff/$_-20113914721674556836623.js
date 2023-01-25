(function(){{
    var match =     $that.location.href.replace(/#.*/, '').match(/\?.+/);
    return match ? match[0] : '';
}})();