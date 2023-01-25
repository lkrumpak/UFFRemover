(function(){{
    //Control already destroyed
    if (        $that.element === null) {
        return;
    }
    var Class =         $that.constructor, pluginName = Class.pluginName || Class._fullName, controls;
    // Unbind bindings.
        $that.off();
    if (pluginName && pluginName !== 'can_control') {
        // Remove the `className`.
                $that.element.removeClass(pluginName);
    }
    // Remove from `data`.
    controls = can.data(    $that.element, 'controls');
    controls.splice(can.inArray(    $that, controls), 1);
    can.trigger(    $that, 'destroyed');
    // In case we want to know if the `control` is removed.
        $that.element = null;
}})();