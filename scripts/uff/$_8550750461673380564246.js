(function(){{
        $that.currentlyTransitioningKeys[key] = true;
    var component =     $that.refs[key];
    if (component.componentWillEnter) {
        component.componentWillEnter(        $that._handleDoneEntering.bind(        $that, key));
    } else {
                $that._handleDoneEntering(key);
    }
}})();