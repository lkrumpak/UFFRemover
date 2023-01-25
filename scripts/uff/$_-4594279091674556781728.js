(function(){{
    if (!prevProps.editing &&        $that.props.editing) {
        var node = React.findDOMNode(        $that.refs['editField']);
        node.focus();
        node.setSelectionRange(node.value.length, node.value.length);
    }
}})();