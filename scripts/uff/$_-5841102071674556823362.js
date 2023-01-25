(function(){{
    var props = {};
    // Copy the props; except the mouse listeners if we're disabled
    for (var key in        $that.props) {
        if (            $that.props.hasOwnProperty(key) && (!            $that.props.disabled || !mouseListenerNames[key])) {
            props[key] =             $that.props[key];
        }
    }
    return button(props,     $that.props.children);
}})();