(function(){{
    handler = function () {
        update(get(), value);
    };
    can.bind.call(getterSetter, eventName || propertyName, handler);
    // use getValueAndObserved because
    // we should not be indicating that some parent
    // reads this property if it happens to be binding on it
    value = getValueAndObserved(get).value;
}})();