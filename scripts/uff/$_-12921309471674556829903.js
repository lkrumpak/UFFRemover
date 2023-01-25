(function(){{
    var component =     $that.refs[key];
    if (component.componentDidEnter) {
        component.componentDidEnter();
    }
    delete    $that.currentlyTransitioningKeys[key];
    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(    $that.props.children);
    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully entered. Remove it.
                $that.performLeave(key);
    }
}})();