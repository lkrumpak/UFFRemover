(function(){{
    var component =     $that.refs[key];
    if (component.componentDidLeave) {
        component.componentDidLeave();
    }
    delete    $that.currentlyTransitioningKeys[key];
    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(    $that.props.children);
    if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
        // This entered again before it fully left. Add it again.
                $that.performEnter(key);
    } else {
        var newChildren = assign({},         $that.state.children);
        delete newChildren[key];
                $that.setState({ children: newChildren });
    }
}})();