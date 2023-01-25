(function(){{
    var attr = el.getAttribute(attributeName), scopeData = data.scope.read(attr, {
            returnObserveMethods: true,
            isArgument: true
        });
    return scopeData.value.call(scopeData.parent, data.scope._context, can.$(    $that), ev);
}})();