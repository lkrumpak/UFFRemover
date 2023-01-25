(function(){{
    var valueFromModel, checked;
        $that.checkboxName = true;
    inheritProperties(    $that, attribute, node);
    node.name = '{{' +    $that.keypath + '}}';
    node.addEventListener('change', updateModel, false);
    if (node.attachEvent) {
        node.addEventListener('click', updateModel, false);
    }
    valueFromModel =     $that.root.get(    $that.keypath);
    if (valueFromModel !== undefined) {
        checked = valueFromModel.indexOf(node._ractive.value) !== -1;
        node.checked = checked;
    } else {
        if (            $that.root._deferred.checkboxes.indexOf(            $that.keypath) === -1) {
                        $that.root._deferred.checkboxes.push(            $that.keypath);
        }
    }
}})();