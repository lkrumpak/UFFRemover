(function(){{
    return    $that.domManip(arguments, function (elem) {
        if (this.parentNode) {
            this.parentNode.insertBefore(elem, this);
        }
    });
}})();