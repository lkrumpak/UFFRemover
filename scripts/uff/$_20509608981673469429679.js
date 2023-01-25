(function(){{
    var value = LinkedValueUtils.getValue(    $that);
    if (value != null) {
                $that._pendingUpdate = false;
        updateOptions(        $that, value);
    } else if (!prevProps.multiple !== !        $that.props.multiple) {
        // For simplicity, reapply `defaultValue` if `multiple` is toggled.
        if (            $that.props.defaultValue != null) {
            updateOptions(            $that,             $that.props.defaultValue);
        } else {
            // Revert the select back to its default unselected state.
            updateOptions(            $that,             $that.props.multiple ? [] : '');
        }
    }
}})();