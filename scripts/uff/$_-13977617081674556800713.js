(function(){{
    var value = getter ? getter.call(obj) : val;
    /* eslint-disable no-self-compare */
    if (newVal === value || newVal !== newVal && value !== value) {
        return;
    }
    /* eslint-enable no-self-compare */
    if ('development' !== 'production' && customSetter) {
        customSetter();
    }
    if (setter) {
        setter.call(obj, newVal);
    } else {
        val = newVal;
    }
    childOb = observe(newVal);
    dep.notify();
}})();