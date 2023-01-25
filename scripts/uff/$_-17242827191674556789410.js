(function(){{
    return m('li', {
        class: function () {
            var classes = '';
            classes += task.completed() ? 'completed' : '';
            classes += task.editing() ? ' editing' : '';
            return classes;
        }(),
        key: task.key
    }, [
        m('.view', [
            m('input.toggle[type=checkbox]', {
                onclick: m.withAttr('checked', ctrl.complete.bind(ctrl, task)),
                checked: task.completed()
            }),
            m('label', { ondblclick: ctrl.edit.bind(ctrl, task) }, task.title()),
            m('button.destroy', { onclick: ctrl.remove.bind(ctrl, index) })
        ]),
        m('input.edit', {
            value: task.title(),
            onkeyup: app.watchInput(ctrl.doneEditing.bind(ctrl, task, index), ctrl.cancelEditing.bind(ctrl, task)),
            oninput: m.withAttr('value', function (value) {
                m.redraw.strategy('none');
                task.title(value);
            }),
            config: function (element) {
                if (task.editing()) {
                    element.focus();
                }
            },
            onblur: ctrl.doneEditing.bind(ctrl, task, index)
        })
    ]);
}})();