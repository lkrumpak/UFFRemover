(function(){{
    if (isObserve) {
        getterSetter.attr(propertyName, newValue);
    } else {
        getterSetter[propertyName] = newValue;
    }
}})();