(function(){{
    var defaultValue =     $that.props.defaultValue;
    // TODO (yungsters): Remove support for children content in <textarea>.
    var children =     $that.props.children;
    if (children != null) {
        if ('production' !== 'development') {
            'production' !== 'development' ? warning(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.') : null;
        }
        'production' !== 'development' ? invariant(defaultValue == null, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : invariant(defaultValue == null);
        if (Array.isArray(children)) {
            'production' !== 'development' ? invariant(children.length <= 1, '<textarea> can only have at most one child.') : invariant(children.length <= 1);
            children = children[0];
        }
        defaultValue = '' + children;
    }
    if (defaultValue == null) {
        defaultValue = '';
    }
    var value = LinkedValueUtils.getValue(    $that);
    return {
        // We save the initial value so that `ReactDOMComponent` doesn't update
        // `textContent` (unnecessary since we update value).
        // The initial value can be a boolean or object so that's why it's
        // forced to be a string.
        initialValue: '' + (value != null ? value : defaultValue)
    };
}})();