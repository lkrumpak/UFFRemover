(function(){{
    LocationInfo.call(    $that, locInfo);
        $that.type = 'sexpr';
        $that.hash = hash;
    var id =     $that.id = rawParams[0];
    var params =     $that.params = rawParams.slice(1);
    // a mustache is an eligible helper if:
    // * its id is simple (a single part, not `this` or `..`)
    var eligibleHelper =     $that.eligibleHelper = id.isSimple;
    // a mustache is definitely a helper if:
    // * it is an eligible helper, and
    // * it has at least one parameter or hash segment
        $that.isHelper = eligibleHelper && (params.length || hash);    // if a mustache is an eligible helper but not a definite
                                                                        // helper, it is ambiguous, and will be resolved in a later
                                                                        // pass or at runtime.
}})();