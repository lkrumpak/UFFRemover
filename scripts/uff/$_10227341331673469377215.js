(function(){{
    if (isObserve) {
        return getterSetter.attr(propertyName);
    } else {
        return getterSetter[propertyName];
    }
}})();