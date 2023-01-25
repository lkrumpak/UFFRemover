(function(){{
    var value = LinkedValueUtils.getValue(    $that);
    if (value != null) {
        updateOptions(        $that, value);
    } else if (        $that.props.defaultValue != null) {
        updateOptions(        $that,         $that.props.defaultValue);
    }
}})();