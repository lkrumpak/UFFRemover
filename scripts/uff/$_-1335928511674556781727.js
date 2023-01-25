(function(){{
    if (event.keyCode === constants_1.ESCAPE_KEY) {
                $that.setState({ editText:             $that.props.todo.title });
                $that.props.onCancel(event);
    } else if (event.keyCode === constants_1.ENTER_KEY) {
                $that.handleSubmit(event);
    }
}})();