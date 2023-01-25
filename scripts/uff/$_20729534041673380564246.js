(function(){{
        $that.currentlyTransitioningKeys[key] = true;
    var component =     $that.refs[key];
    if (component.componentWillAppear) {
        component.componentWillAppear(        $that._handleDoneAppearing.bind(        $that, key));
    } else {
                $that._handleDoneAppearing(key);
    }
}})();