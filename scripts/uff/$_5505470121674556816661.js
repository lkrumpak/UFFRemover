(function(){{
    var node, value;
    node =     $that.pNode;
    value =     $that.fragment.getValue();
    if (        $that.isValueAttribute) {
        node._ractive.value = value;
    }
    if (value === undefined) {
        value = '';
    }
    if (value !==        $that.value) {
        if (            $that.useProperty) {
            if (!                $that.receiving) {
                node[                $that.propertyName] = value;
            }
                        $that.value = value;
            return            $that;
        }
        if (            $that.namespace) {
            node.setAttributeNS(            $that.namespace,             $that.name, value);
                        $that.value = value;
            return            $that;
        }
        if (            $that.lcName === 'id') {
            if (                $that.value !== undefined) {
                                $that.root.nodes[                $that.value] = undefined;
            }
                        $that.root.nodes[value] = node;
        }
        node.setAttribute(        $that.name, value);
                $that.value = value;
    }
    return    $that;
}})();