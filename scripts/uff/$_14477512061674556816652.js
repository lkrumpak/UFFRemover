(function(){{
        $that.checked =     $that.node.checked;
        $that.attr.receiving = true;
        $that.root.set(    $that.keypath, getValueFromCheckboxes(    $that.root,     $that.keypath));
        $that.attr.receiving = false;
}})();