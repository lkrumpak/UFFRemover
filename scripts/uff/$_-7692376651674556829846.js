(function(){{
    'production' !== 'development' ? invariant(    $that.isMounted(), 'Must be mounted to trap events') : invariant(    $that.isMounted());
    // If a component renders to null or if another component fatals and causes
    // the state of the tree to be corrupted, `node` here can be null.
    var node =     $that.getDOMNode();
    'production' !== 'development' ? invariant(node, 'LocalEventTrapMixin.trapBubbledEvent(...): Requires node to be rendered.') : invariant(node);
    var listener = ReactBrowserEventEmitter.trapBubbledEvent(topLevelType, handlerBaseName, node);
        $that._localEventListeners = accumulateInto(    $that._localEventListeners, listener);
}})();