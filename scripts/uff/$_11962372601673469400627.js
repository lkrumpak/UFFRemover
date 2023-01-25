(function(){{
    var propsData = vm.$options.propsData || {};
    var keys = vm.$options._propKeys = Object.keys(props);
    var isRoot = !vm.$parent;
    // root instance props should be converted
    observerState.shouldConvert = isRoot;
    var loop = function (i) {
        var key = keys[i];
        /* istanbul ignore else */
        {
            if (isReservedProp[key]) {
                warn('"' + key + '" is a reserved attribute and cannot be used as component prop.', vm);
            }
            defineReactive$$1(vm, key, validateProp(key, props, propsData, vm), function () {
                if (vm.$parent && !observerState.isSettingProps) {
                    warn('Avoid mutating a prop directly since the value will be ' + 'overwritten whenever the parent component re-renders. ' + 'Instead, use a data or computed property based on the prop\'s ' + 'value. Prop being mutated: "' + key + '"', vm);
                }
            });
        }
    };
    for (var i = 0; i < keys.length; i++)
        loop(i);
    observerState.shouldConvert = true;
}})();