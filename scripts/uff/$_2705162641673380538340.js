(function(){{
    var past =     $that.matched.substr(0,     $that.matched.length -    $that.match.length);
    return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, '');
}})();