(function(){{
        $that.aliases.blockHelperMissing = 'helpers.blockHelperMissing';
    // We're being a bit cheeky and reusing the options value from the prior exec
    var params = [        $that.contextName(0)];
        $that.setupParams('', 0, params, true);
        $that.flushInline();
    var current =     $that.topStack();
    params.splice(1, 0, current);
        $that.pushSource('if (!' +    $that.lastHelper + ') { ' + current + ' = blockHelperMissing.call(' + params.join(', ') + '); }');
}})();