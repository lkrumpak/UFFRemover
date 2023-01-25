(function(){{
    ko.bindingHandlers.hasFocus.init(element, valueAccessor, allBindingsAccessor, bindingContext);
    ko.utils.registerEventHandler(element, 'focus', function () {
        element.focus();
    });
}})();