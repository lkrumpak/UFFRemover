(function(){{
    var current =     $that.getFragment();
    // If the user pressed the back button, the iframe's hash will have
    // changed and we should use that for comparison.
    if (current ===        $that.fragment &&        $that.iframe) {
        current =         $that.getHash(        $that.iframe.contentWindow);
    }
    if (current ===        $that.fragment)
        return false;
    if (        $that.iframe)
                $that.navigate(current);
        $that.loadUrl();
}})();