(function(){{
    if ('production' !== 'development') {
        if (canWarnForReactFragment) {
            // If it is the opaque type, return the keyed object.
            if (fragment[fragmentKey]) {
                return fragment[fragmentKey];
            }
            // Otherwise, check each property if it has an element, if it does
            // it is probably meant as a fragment, so we can warn early. Defer,
            // the warning to extract.
            for (var key in fragment) {
                if (fragment.hasOwnProperty(key) && ReactElement.isValidElement(fragment[key])) {
                    // This looks like a fragment object, we should provide an
                    // early warning.
                    return ReactFragment.extract(fragment);
                }
            }
        }
    }
    return fragment;
}})();