(function(){{
    var params = [], paramsInit =         $that.setupParams(paramSize, params, missingParams);
    var foundHelper =     $that.nameLookup('helpers', name, 'helper');
    return {
        params: params,
        paramsInit: paramsInit,
        name: foundHelper,
        callParams: ['depth0'].concat(params).join(', '),
        helperMissingParams: missingParams && [
            'depth0',
                        $that.quotedString(name)
        ].concat(params).join(', ')
    };
}})();