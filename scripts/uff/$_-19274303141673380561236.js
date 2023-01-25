(function(){{
    var data = actionObj.dispatch(payload);
    if (data === undefined)
        return null;
    var type = actionObj.id;
    var namespace = type;
    var name = type;
    var details = {
        id: type,
        namespace: namespace,
        name: name
    };
    var dispatchLater = function dispatchLater(x) {
        return alt.dispatch(type, x, details);
    };
    if (fn.isFunction(data))
        return data(dispatchLater, alt);
    return alt.dispatcher.dispatch({
        id: id,
        action: type,
        data: data,
        details: details
    });
}})();