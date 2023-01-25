(function(){{
    var runlist =     $that.every &&    $that.every.before ? [        $that.every.before].concat(_flatten(fns)) : _flatten(fns);
    if (        $that.every &&        $that.every.on) {
        runlist.push(        $that.every.on);
    }
    runlist.captures = fns.captures;
    runlist.source = fns.source;
    return runlist;
}})();