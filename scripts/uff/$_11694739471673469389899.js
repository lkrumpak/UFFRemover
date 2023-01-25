(function(){{
    templates.remove(    $that.element);
    if (        $that.watchers) {
                $that.watchers.dispose();
    }
    if (        $that.node) {
                $that.node.dispose();
    }
        $that.element = null;
        $that.watchers = null;
        $that.node = null;
}})();