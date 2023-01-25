(function(){{
    var node, value;
    node =     $that.pNode;
    value =     $that.fragment.getValue();
    node.checked = value == node._ractive.value;
    return    $that;
}})();