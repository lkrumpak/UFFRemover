(function(){{
    'production' !== 'development' ? invariant(ReactElement.isValidElement(children), 'onlyChild must be passed a children with exactly one child.') : invariant(ReactElement.isValidElement(children));
    return children;
}})();