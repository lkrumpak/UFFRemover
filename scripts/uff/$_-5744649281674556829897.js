(function(){{
    return function (a, b, c, d, e, f) {
        var partialState = funcReturningState.call(component, a, b, c, d, e, f);
        if (partialState) {
            component.setState(partialState);
        }
    };
}})();