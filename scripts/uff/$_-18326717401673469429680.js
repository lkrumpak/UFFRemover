(function(){{
    // Clone `this.props` so we don't mutate the input.
    var props = assign({},     $that.props);
    'production' !== 'development' ? invariant(props.dangerouslySetInnerHTML == null, '`dangerouslySetInnerHTML` does not make sense on <textarea>.') : invariant(props.dangerouslySetInnerHTML == null);
    props.defaultValue = null;
    props.value = null;
    props.onChange =     $that._handleChange;
    // Always set children to the same thing. In IE9, the selection range will
    // get reset if `textContent` is mutated.
    return textarea(props,     $that.state.initialValue);
}})();