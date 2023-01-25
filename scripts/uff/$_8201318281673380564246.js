(function(){{
    var initialChildMapping =     $that.state.children;
    for (var key in initialChildMapping) {
        if (initialChildMapping[key]) {
                        $that.performAppear(key);
        }
    }
}})();