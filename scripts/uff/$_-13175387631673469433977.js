(function(){{
    /**
     * The routes observable (the applications use it)
     * @private
     */
    var _routes = new Observable(),
        /**
     * The events observable (used by Routing)
     * @private
     */
        _events = new Observable(),
        /**
     * The routing history
     * @private
     */
        _history = [],
        /**
     * For navigating through the history, remembers the current position
     * @private
     */
        _currentPos = -1,
        /**
     * The depth of the history
     * @private
     */
        _maxHistory = 10;
    /**
     * Only for debugging
     * @private
     */
        $that.getRoutesObservable = function getRoutesObservable() {
        return _routes;
    };
    /**
     * Only for debugging
     * @private
     */
        $that.getEventsObservable = function getEventsObservable() {
        return _events;
    };
    /**
     * Set the maximum length of history
     * As the user navigates through the application, the
     * routeur keeps track of the history. Set the depth of the history
     * depending on your need and the amount of memory that you can allocate it
     * @param {Number} maxHistory the depth of history
     * @returns {Boolean} true if maxHistory is equal or greater than 0
     */
        $that.setMaxHistory = function setMaxHistory(maxHistory) {
        if (maxHistory >= 0) {
            _maxHistory = maxHistory;
            return true;
        } else {
            return false;
        }
    };
    /**
     * Get the current max history setting
     * @returns {Number} the depth of history
     */
        $that.getMaxHistory = function getMaxHistory() {
        return _maxHistory;
    };
    /**
     * Set a new route
     * @param {String} route the name of the route
     * @param {Function} func the function to be execute when navigating to the route
     * @param {Object} scope the scope in which to execute the function
     * @returns a handle to remove the route
     */
        $that.set = function set() {
        return _routes.watch.apply(_routes, arguments);
    };
    /**
     * Remove a route
     * @param {Object} handle the handle provided by the set method
     * @returns true if successfully removed
     */
        $that.unset = function unset(handle) {
        return _routes.unwatch(handle);
    };
    /**
     * Navigate to a route
     * @param {String} route the route to navigate to
     * @param {*} *params
     * @returns
     */
        $that.navigate = function get(route) {
        if (this.load.apply(this, arguments)) {
            // Before adding a new route to the history, we must clear the forward history
            _history.splice(_currentPos + 1, _history.length);
            _history.push(toArray(arguments));
            this.ensureMaxHistory(_history);
            _currentPos = _history.length - 1;
            return true;
        } else {
            return false;
        }
    };
    /**
     * Ensure that history doesn't grow bigger than the max history setting
     * @param {Store} history the history store
     * @private
     */
        $that.ensureMaxHistory = function ensureMaxHistory(history) {
        var count = history.length, max = this.getMaxHistory(), excess = count - max;
        if (excess > 0) {
            history.splice(0, excess);
        }
    };
    /**
     * Actually loads the route
     * @private
     */
        $that.load = function load() {
        var copy = toArray(arguments);
        if (_routes.notify.apply(_routes, copy)) {
            copy.unshift('route');
            _events.notify.apply(_events, copy);
            return true;
        } else {
            return false;
        }
    };
    /**
     * Watch for route changes
     * @param {Function} func the func to execute when the route changes
     * @param {Object} scope the scope in which to execute the function
     * @returns {Object} the handle to unwatch for route changes
     */
        $that.watch = function watch(func, scope) {
        return _events.watch('route', func, scope);
    };
    /**
     * Unwatch routes changes
     * @param {Object} handle the handle was returned by the watch function
     * @returns true if unwatch
     */
        $that.unwatch = function unwatch(handle) {
        return _events.unwatch(handle);
    };
    /**
     * Get the history store, for debugging only
     * @private
     */
        $that.getHistoryStore = function getHistoryStore() {
        return _history;
    };
    /**
     * Get the current length of history
     * @returns {Number} the length of history
     */
        $that.getHistoryCount = function getHistoryCount() {
        return _history.length;
    };
    /**
     * Flush the entire history
     */
        $that.clearHistory = function clearHistory() {
        _history.length = 0;
    };
    /**
     * Go back and forth in the history
     * @param {Number} nb the amount of history to rewind/forward
     * @returns true if history exists
     */
        $that.go = function go(nb) {
        var history = _history[_currentPos + nb];
        if (history) {
            _currentPos += nb;
            this.load.apply(this, history);
            return true;
        } else {
            return false;
        }
    };
    /**
     * Go back in the history, short for go(-1)
     * @returns
     */
        $that.back = function back() {
        return this.go(-1);
    };
    /**
     * Go forward in the history, short for go(1)
     * @returns
     */
        $that.forward = function forward() {
        return this.go(1);
    };
}})();