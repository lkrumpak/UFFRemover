(function(){{
    var node =         $that.node, content =         $that.fragment.toString();
    if (node.styleSheet) {
        node.styleSheet.cssText = content;
    }
    node.innerHTML = content;
}})();