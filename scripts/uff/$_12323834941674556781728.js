(function(){{
    var _this =     $that;
    return React.createElement('li', {
        'className': classNames({
            completed:             $that.props.todo.completed,
            editing:             $that.props.editing
        })
    }, React.createElement('div', { 'className': 'view' }, React.createElement('input', {
        'className': 'toggle',
        'type': 'checkbox',
        'checked':         $that.props.todo.completed,
        'onChange':         $that.props.onToggle
    }), React.createElement('label', {
        'onDoubleClick': function (e) {
            return _this.handleEdit();
        }
    },     $that.props.todo.title), React.createElement('button', {
        'className': 'destroy',
        'onClick':         $that.props.onDestroy
    })), React.createElement('input', {
        'ref': 'editField',
        'className': 'edit',
        'value':         $that.state.editText,
        'onBlur': function (e) {
            return _this.handleSubmit(e);
        },
        'onChange': function (e) {
            return _this.handleChange(e);
        },
        'onKeyDown': function (e) {
            return _this.handleKeyDown(e);
        }
    }));
}})();