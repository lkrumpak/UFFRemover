(function(){{
    if (!children) {
        return children;
    }
    return ReactFragment.extract(ReactChildren.map(children, function (child) {
        return child;
    }));
}})();