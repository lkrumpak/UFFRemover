(function(){{
    var node =     $that.node;
    if (node.checked) {
                $that.attr.receiving = true;
                $that.root.set(        $that.keypath,         $that.value());
                $that.attr.receiving = false;
    }
}})();