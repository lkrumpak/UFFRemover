(function(){{
    if ('production' !== 'development') {
        if (canWarnForReactFragment) {
            if (!fragment[fragmentKey]) {
                'production' !== 'development' ? warning(didWarnForFragment(fragment), 'Any use of a keyed object should be wrapped in ' + 'React.addons.createFragment(object) before being passed as a ' + 'child.') : null;
                return fragment;
            }
            return fragment[fragmentKey];
        }
    }
    return fragment;
}})();