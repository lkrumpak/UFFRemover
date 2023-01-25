(function(){{
    // TODO (yungsters): Remove support for `selected` in <option>.
    if ('production' !== 'development') {
        'production' !== 'development' ? warning(        $that.props.selected == null, 'Use the `defaultValue` or `value` props on <select> instead of ' + 'setting `selected` on <option>.') : null;
    }
}})();