(function(){{
        $that.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';
    var params = ['depth0'];
        $that.setupParams(0, params);
    var current =     $that.topStack();
    params.splice(1, 0, current);
        $that.pushSource('if (!' +    $that.lastHelper + ') { ' + current + ' = blockHelperMissing.call(' + params.join(', ') + '); }');
}})();