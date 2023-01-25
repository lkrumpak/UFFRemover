(function(){{
    var result, instances, instance, i, previousTransitionManagers = {}, transitionManagers = {};
    result = Array.prototype[methodName].apply(    $that, arguments);
    instances =     $that._ractive.instances;
    i = instances.length;
    while (i--) {
        instance = instances[i];
        previousTransitionManagers[instance._guid] = instance._transitionManager;
        instance._transitionManager = transitionManagers[instance._guid] = makeTransitionManager(instance, noop);
    }
        $that._ractive.setting = true;
    notifyArrayDependants(    $that, methodName, arguments);
        $that._ractive.setting = false;
    i = instances.length;
    while (i--) {
        instance = instances[i];
        instance._transitionManager = previousTransitionManagers[instance._guid];
        transitionManagers[instance._guid].ready();
        preDomUpdate(instance);
        postDomUpdate(instance);
    }
    return result;
}})();