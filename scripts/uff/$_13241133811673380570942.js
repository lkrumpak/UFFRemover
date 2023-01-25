(function(){{
    if (!History.started)
        return false;
    if (!options || options === true)
        options = { trigger: !!options };
    // Normalize the fragment.
    fragment =     $that.getFragment(fragment || '');
    // Don't include a trailing slash on the root.
    var root =     $that.root;
    if (fragment === '' || fragment.charAt(0) === '?') {
        root = root.slice(0, -1) || '/';
    }
    var url = root + fragment;
    // Strip the hash and decode for matching.
    fragment =     $that.decodeFragment(fragment.replace(pathStripper, ''));
    if (        $that.fragment === fragment)
        return;
        $that.fragment = fragment;
    // If pushState is available, we use it to set the fragment as a real URL.
    if (        $that._usePushState) {
                $that.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);    // If hash changes haven't been explicitly disabled, update the hash
                                                                                                            // fragment to store history.
    } else if (        $that._wantsHashChange) {
                $that._updateHash(        $that.location, fragment, options.replace);
        if (            $that.iframe && fragment !==            $that.getHash(            $that.iframe.contentWindow)) {
            var iWindow =             $that.iframe.contentWindow;
            // Opening and closing the iframe tricks IE7 and earlier to push a
            // history entry on hash-tag change.  When replace is true, we don't
            // want this.
            if (!options.replace) {
                iWindow.document.open();
                iWindow.document.close();
            }
                        $that._updateHash(iWindow.location, fragment, options.replace);
        }    // If you've told us that you explicitly don't want fallback hashchange-
             // based history, then `navigate` becomes a page refresh.
    } else {
        return        $that.location.assign(url);
    }
    if (options.trigger)
        return        $that.loadUrl(fragment);
}})();