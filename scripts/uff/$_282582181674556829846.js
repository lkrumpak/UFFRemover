(function(){{
    if (input.props.valueLink) {
        _assertValueLink(input);
        return _handleLinkedValueChange;
    } else if (input.props.checkedLink) {
        _assertCheckedLink(input);
        return _handleLinkedCheckChange;
    }
    return input.props.onChange;
}})();