(function(){{
    if (childNodeIsTemplate(        $that)) {
        return;
    }
        $that.invalidate = true;
    var i, l;
    if (        $that.attributes) {
        for (i = 0, l =             $that.attributes.length; i < l; i++) {
                        $that.attributes[i].invalidate = true;
        }
    }
    for (i = 0, l =         $that.childrenRepeater.length; i < l; i++) {
                $that.childrenRepeater[i].invalidateData();
    }
    for (i = 0, l =         $that.children.length; i < l; i++) {
                $that.children[i].invalidateData();
    }
}})();