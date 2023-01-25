(function(){{
    var activeTodoWord = utils_1.Utils.pluralize(    $that.props.count, 'item');
    var clearButton = null;
    if (        $that.props.completedCount > 0) {
        clearButton = React.createElement('button', {
            'className': 'clear-completed',
            'onClick':             $that.props.onClearCompleted
        }, 'Clear completed');
    }
    var nowShowing =     $that.props.nowShowing;
    return React.createElement('footer', { 'className': 'footer' }, React.createElement('span', { 'className': 'todo-count' }, React.createElement('strong', null,     $that.props.count), ' ', activeTodoWord, ' left'), React.createElement('ul', { 'className': 'filters' }, React.createElement('li', null, React.createElement('a', {
        'href': '#/',
        'className': classNames({ selected: nowShowing === constants_1.ALL_TODOS })
    }, 'All')), ' ', React.createElement('li', null, React.createElement('a', {
        'href': '#/active',
        'className': classNames({ selected: nowShowing === constants_1.ACTIVE_TODOS })
    }, 'Active')), ' ', React.createElement('li', null, React.createElement('a', {
        'href': '#/completed',
        'className': classNames({ selected: nowShowing === constants_1.COMPLETED_TODOS })
    }, 'Completed'))), clearButton);
}})();