(function(){{
    // TODO: we could get rid of the need for the wrapper node
    // by cloning a single child
    var childrenToRender = [];
    for (var key in        $that.state.children) {
        var child =         $that.state.children[key];
        if (child) {
            // You may need to apply reactive updates to a child as it is leaving.
            // The normal React way to do it won't work since the child will have
            // already been removed. In case you need this behavior you can provide
            // a childFactory function to wrap every child, even the ones that are
            // leaving.
            childrenToRender.push(cloneWithProps(            $that.props.childFactory(child), {
                ref: key,
                key: key
            }));
        }
    }
    return React.createElement(    $that.props.component,     $that.props, childrenToRender);
}})();