(function(){{
    var isHelper = sexpr.isHelper;
    var isEligible = sexpr.eligibleHelper;
    var options =     $that.options;
    // if ambiguous, we can possibly resolve the ambiguity now
    if (isEligible && !isHelper) {
        var name = sexpr.id.parts[0];
        if (options.knownHelpers[name]) {
            isHelper = true;
        } else if (options.knownHelpersOnly) {
            isEligible = false;
        }
    }
    if (isHelper) {
        return 'helper';
    } else if (isEligible) {
        return 'ambiguous';
    } else {
        return 'simple';
    }
}})();