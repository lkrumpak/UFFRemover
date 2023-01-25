(function(){{
    var component =     $that.refs[key];
    if (component.componentDidAppear) {
        component.componentDidAppear();
    }
    delete    $that.currentlyTransitioningKeys[key];
    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(    $that.props.children);
    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully appeared. Remove it.
                $that.performLeave(key);
    }
}})();