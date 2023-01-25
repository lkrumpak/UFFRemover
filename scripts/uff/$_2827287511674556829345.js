(function(){{
    ko.utils.unwrapObservable(valueAccessor());
    // for dependency
    // ensure that element is visible before trying to focus
    setTimeout(function () {
        ko.bindingHandlers.hasFocus.update(element, valueAccessor);
    }, 0);
}})();