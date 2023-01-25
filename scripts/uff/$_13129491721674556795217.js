(function(){{
    // Flatten any nested arrays
    args = concat.apply([], args);
    var first, node, hasScripts, scripts, doc, fragment, i = 0, l =         $that.length, set =         $that, iNoClone = l - 1, value = args[0], isFunction = jQuery.isFunction(value);
    // We can't cloneNode fragments that contain checked, in WebKit
    if (isFunction || l > 1 && typeof value === 'string' && !support.checkClone && rchecked.test(value)) {
        return        $that.each(function (index) {
            var self = set.eq(index);
            if (isFunction) {
                args[0] = value.call(this, index, self.html());
            }
            self.domManip(args, callback);
        });
    }
    if (l) {
        fragment = jQuery.buildFragment(args,         $that[0].ownerDocument, false,         $that);
        first = fragment.firstChild;
        if (fragment.childNodes.length === 1) {
            fragment = first;
        }
        if (first) {
            scripts = jQuery.map(getAll(fragment, 'script'), disableScript);
            hasScripts = scripts.length;
            // Use the original fragment for the last item instead of the first because it can end up
            // being emptied incorrectly in certain situations (#8070).
            for (; i < l; i++) {
                node = fragment;
                if (i !== iNoClone) {
                    node = jQuery.clone(node, true, true);
                    // Keep references to cloned scripts for later restoration
                    if (hasScripts) {
                        jQuery.merge(scripts, getAll(node, 'script'));
                    }
                }
                callback.call(                $that[i], node, i);
            }
            if (hasScripts) {
                doc = scripts[scripts.length - 1].ownerDocument;
                // Reenable scripts
                jQuery.map(scripts, restoreScript);
                // Evaluate executable scripts on first document insertion
                for (i = 0; i < hasScripts; i++) {
                    node = scripts[i];
                    if (rscriptType.test(node.type || '') && !jQuery._data(node, 'globalEval') && jQuery.contains(doc, node)) {
                        if (node.src) {
                            // Optional AJAX dependency, but won't run scripts if not present
                            if (jQuery._evalUrl) {
                                jQuery._evalUrl(node.src);
                            }
                        } else {
                            jQuery.globalEval((node.text || node.textContent || node.innerHTML || '').replace(rcleanScript, ''));
                        }
                    }
                }
            }
            // Fix #11809: Avoid leaking memory
            fragment = first = null;
        }
    }
    return    $that;
}})();