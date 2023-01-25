(function(){{
    if (event.keyCode !== constants_1.ENTER_KEY) {
        return;
    }
    event.preventDefault();
    var val = React.findDOMNode(    $that.refs['newField']).value.trim();
    if (val) {
                $that.props.model.addTodo(val);
        React.findDOMNode(        $that.refs['newField']).value = '';
    }
}})();