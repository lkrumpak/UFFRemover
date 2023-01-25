(function(){{
    var valueFromModel;
        $that.radioName = true;
    inheritProperties(    $that, attribute, node);
    node.name = '{{' + attribute.keypath + '}}';
    node.addEventListener('change', updateModel, false);
    if (node.attachEvent) {
        node.addEventListener('click', updateModel, false);
    }
    valueFromModel =     $that.root.get(    $that.keypath);
    if (valueFromModel !== undefined) {
        node.checked = valueFromModel == node._ractive.value;
    } else {
                $that.root._deferred.radios.push(        $that);
    }
}})();