(function(){{
    var rootNode =     $that.getDOMNode();
    var id = ReactMount.getID(rootNode);
    delete instancesByReactID[id];
}})();