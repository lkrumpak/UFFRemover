(function(){{
        $that.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';
    var params = ['depth0'];
        $that.setupParams(0, params);
        $that.replaceStack(function (current) {
        params.splice(1, 0, current);
        return 'blockHelperMissing.call(' + params.join(', ') + ')';
    });
}})();