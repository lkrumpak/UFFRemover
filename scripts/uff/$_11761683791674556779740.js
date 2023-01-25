(function(){{
    var returnValue;
    var onChange = LinkedValueUtils.getOnChange(    $that);
    if (onChange) {
        returnValue = onChange.call(        $that, event);
    }
    // Here we use asap to wait until all updates have propagated, which
    // is important when using controlled components within layers:
    // https://github.com/facebook/react/issues/1698
    ReactUpdates.asap(forceUpdateIfMounted,     $that);
    var name =     $that.props.name;
    if (        $that.props.type === 'radio' && name != null) {
        var rootNode =         $that.getDOMNode();
        var queryRoot = rootNode;
        while (queryRoot.parentNode) {
            queryRoot = queryRoot.parentNode;
        }
        // If `rootNode.form` was non-null, then we could try `form.elements`,
        // but that sometimes behaves strangely in IE8. We could also try using
        // `form.getElementsByName`, but that will only return direct children
        // and won't include inputs that use the HTML5 `form=` attribute. Since
        // the input might not even be in a form, let's just use the global
        // `querySelectorAll` to ensure we don't miss anything.
        var group = queryRoot.querySelectorAll('input[name=' + JSON.stringify('' + name) + '][type="radio"]');
        for (var i = 0, groupLen = group.length; i < groupLen; i++) {
            var otherNode = group[i];
            if (otherNode === rootNode || otherNode.form !== rootNode.form) {
                continue;
            }
            var otherID = ReactMount.getID(otherNode);
            'production' !== 'development' ? invariant(otherID, 'ReactDOMInput: Mixing React and non-React radio inputs with the ' + 'same `name` is not supported.') : invariant(otherID);
            var otherInstance = instancesByReactID[otherID];
            'production' !== 'development' ? invariant(otherInstance, 'ReactDOMInput: Unknown radio button ID %s.', otherID) : invariant(otherInstance);
            // If this is a controlled radio button group, forcing the input that
            // was previously checked to update will cause it to be come re-checked
            // as appropriate.
            ReactUpdates.asap(forceUpdateIfMounted, otherInstance);
        }
    }
    return returnValue;
}})();