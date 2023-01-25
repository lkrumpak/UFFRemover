(function(){{
    var node, value;
    node =     $that.pNode;
    value =     $that.fragment.getValue();
    if (!isArray(value)) {
        node.checked = value == node._ractive.value;
        return        $that;
    }
    node.checked = value.indexOf(node._ractive.value) !== -1;
    return    $that;
}})();