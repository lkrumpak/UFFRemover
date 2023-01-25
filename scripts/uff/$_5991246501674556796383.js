(function(){{
        $that.context.aliases.functionType = '"function"';
        $that.useRegister('helper');
        $that.emptyHash();
    var helper =     $that.setupHelper(0, name, helperCall);
    var helperName =     $that.lastHelper =     $that.nameLookup('helpers', name, 'helper');
    var nonHelper =     $that.nameLookup('depth' +    $that.lastContext, name, 'context');
    var nextStack =     $that.nextStack();
    if (helper.paramsInit) {
                $that.pushSource(helper.paramsInit);
    }
        $that.pushSource('if (helper = ' + helperName + ') { ' + nextStack + ' = helper.call(' + helper.callParams + '); }');
        $that.pushSource('else { helper = ' + nonHelper + '; ' + nextStack + ' = typeof helper === functionType ? helper.call(' + helper.callParams + ') : helper; }');
}})();