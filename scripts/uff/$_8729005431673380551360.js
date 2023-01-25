(function(){{
    var valueFromModel;
    inheritProperties(    $that, attribute, node);
    node.addEventListener('change', updateModel, false);
    valueFromModel =     $that.root.get(    $that.keypath);
    if (valueFromModel === undefined) {
                $that.update();
    }
}})();