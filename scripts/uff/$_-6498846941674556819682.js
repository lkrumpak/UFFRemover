(function(){{
    if (e.state) {
        _pushCount--;
        var previousId = _currentId;
        _currentId = e.state.id;
        self.trigger('popstate', {
            state: e.state.state,
            title: e.state.title,
            url: e.state.url,
            id: e.state.id,
            direction: _currentId > previousId ? 'forward' : 'back'
        });
    }
}})();