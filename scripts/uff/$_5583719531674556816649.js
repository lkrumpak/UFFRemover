(function(){{
    var node =         $that.pNode, interpolator, binding, bindings;
    if (!        $that.fragment) {
        return false;
    }
    interpolator = getInterpolator(    $that);
    if (!interpolator) {
        return false;
    }
        $that.interpolator = interpolator;
        $that.keypath = interpolator.keypath || interpolator.descriptor.r;
    binding = getBinding(    $that);
    if (!binding) {
        return false;
    }
    node._ractive.binding =     $that.element.binding = binding;
        $that.twoway = true;
    bindings =     $that.root._twowayBindings[    $that.keypath] || (    $that.root._twowayBindings[    $that.keypath] = []);
    bindings[bindings.length] = binding;
    return true;
}})();