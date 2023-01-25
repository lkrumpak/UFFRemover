(function(){{
    var oldKeypath;
    if (!        $that.ready) {
        return;
    }
    oldKeypath =     $that.keypath;
        $that.keypath = getKeypath(    $that.str,     $that.args);
    if (        $that.keypath.substr(0, 2) === '${') {
                $that.createEvaluator();
    }
    if (oldKeypath) {
        reassignDependants(        $that.root, oldKeypath,         $that.keypath);
    } else {
                $that.mustache.resolve(        $that.keypath);
    }
}})();