(function(){{
        $that.currentlyTransitioningKeys[key] = true;
    var component =     $that.refs[key];
    if (component.componentWillLeave) {
        component.componentWillLeave(        $that._handleDoneLeaving.bind(        $that, key));
    } else {
        // Note that this is somewhat dangerous b/c it calls setState()
        // again, effectively mutating the component before all the work
        // is done.
                $that._handleDoneLeaving(key);
    }
}})();