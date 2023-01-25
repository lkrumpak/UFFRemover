(function(){{
    // Clone `this.props` so we don't mutate the input.
    var props = assign({},     $that.props);
    props.onChange =     $that._handleChange;
    props.value = null;
    return select(props,     $that.props.children);
}})();