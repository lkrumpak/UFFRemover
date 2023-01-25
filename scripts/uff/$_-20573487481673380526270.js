(function(){{
    var arg = arguments[0];
    // Make the changes, replacing each context element with the new content
        $that.domManip(arguments, function (elem) {
        arg = this.parentNode;
        jQuery.cleanData(getAll(this));
        if (arg) {
            arg.replaceChild(elem, this);
        }
    });
    // Force removal if there was no new content (e.g., from empty arguments)
    return arg && (arg.length || arg.nodeType) ?     $that :     $that.remove();
}})();