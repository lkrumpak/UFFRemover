(function(){{
    if (!History.started)
        return false;
    if (!options || options === true)
        options = { trigger: !!options };
    var url =     $that.root + (fragment =     $that.getFragment(fragment || ''));
    // Strip the hash for matching.
    fragment = fragment.replace(pathStripper, '');
    if (        $that.fragment === fragment)
        return;
        $that.fragment = fragment;
    // Don't include a trailing slash on the root.
    if (fragment === '' && url !== '/')
        url = url.slice(0, -1);
    // If we're using pushState we use it to set the fragment as a real URL.
    if (        $that._wantsPushState) {
                $that.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);    // If hash changes haven't been explicitly disabled, update the hash
                                                                                                            // fragment to store history.
    } else if (        $that._wantsHashChange) {
                $that._updateHash(        $that.location, fragment, options.replace);    // If you've told us that you explicitly don't want fallback hashchange-
                                                                                           // based history, then `navigate` becomes a page refresh.
    } else {
        return        $that.location.assign(url);
    }
    if (options.trigger)
        return        $that.loadUrl(fragment);
}})();