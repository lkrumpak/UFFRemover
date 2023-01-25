(function(){{
        $that.clearEvents();
    var i, l;
    if (        $that.children) {
        for (i = 0, l =             $that.children.length; i < l; i++) {
                        $that.children[i].dispose();
        }
    }
    if (        $that.childrenRepeater) {
        for (i = 0, l =             $that.childrenRepeater.length; i < l; i++) {
                        $that.childrenRepeater[i].dispose();
        }
    }
    if (        $that.attributes) {
        for (i = 0, l =             $that.attributes.length; i < l; i++) {
                        $that.attributes[i].dispose();
        }
    }
    if (        $that.interpolation) {
                $that.interpolation.dispose();
    }
        $that.element = null;
        $that.scope = null;
        $that.attributes = null;
        $that.value = null;
        $that.interpolation = null;
        $that.repeater = null;
        $that.parent = null;
        $that.children = null;
        $that.childrenRepeater = null;
        $that.previousSibling = null;
        $that.nextSibling = null;
        $that.template = null;
        $that.eventHandlers = null;
}})();