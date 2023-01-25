(function(){{
    var description = event.node.value.trim();
    if (!description) {
                $that.get('items').splice(event.index.i, 1);
        return;
    }
        $that.set(event.keypath + '.description', description);
        $that.set(event.keypath + '.editing', false);
}})();