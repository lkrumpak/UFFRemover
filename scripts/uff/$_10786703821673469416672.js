(function(){{
    var node, value;
    node =     $that.pNode;
    value =     $that.fragment.getValue();
    if (value === undefined) {
        value = '';
    }
    if (value !==        $that.value) {
        if (!            $that.receiving) {
            node.innerHTML = value;
        }
                $that.value = value;
    }
    return    $that;
}})();