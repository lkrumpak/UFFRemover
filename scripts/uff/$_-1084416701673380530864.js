(function(){{
        $that.context.aliases.helperMissing = 'helpers.helperMissing';
        $that.useRegister('helper');
    var helper =     $that.lastHelper =     $that.setupHelper(paramSize, name, true);
    var nonHelper =     $that.nameLookup('depth' +    $that.lastContext, name, 'context');
    var lookup = 'helper = ' + helper.name + ' || ' + nonHelper;
    if (helper.paramsInit) {
        lookup += ',' + helper.paramsInit;
    }
        $that.push('(' + lookup + ',helper ' + '? helper.call(' + helper.callParams + ') ' + ': helperMissing.call(' + helper.helperMissingParams + '))');
    // Always flush subexpressions. This is both to prevent the compounding size issue that
    // occurs when the code has to be duplicated for inlining and also to prevent errors
    // due to the incorrect options object being passed due to the shared register.
    if (!isRoot) {
                $that.flushInline();
    }
}})();