(function(){{
    if (!view.insertSelf) {
        var pos =         $that.collection.indexOf(view.model);
        var modelToInsertBefore, viewToInsertBefore;
        if (            $that.reverse) {
            modelToInsertBefore =             $that.collection.at(pos - 1);
        } else {
            modelToInsertBefore =             $that.collection.at(pos + 1);
        }
        viewToInsertBefore =         $that._getViewByModel(modelToInsertBefore);
        // FIX IE bug (https://developer.mozilla.org/en-US/docs/Web/API/Node.insertBefore)
        // "In Internet Explorer an undefined value as referenceElement will throw errors, while in rest of the modern browsers, this works fine."
        if (viewToInsertBefore) {
                        $that.el.insertBefore(view.el, viewToInsertBefore && viewToInsertBefore.el);
        } else {
                        $that.el.appendChild(view.el);
        }
    }
}})();