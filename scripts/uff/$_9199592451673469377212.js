(function(){{
    if (items === undefined) {
        return Map.helpers.serialize(        $that, 'attr', []);
    }
    // Create a copy.
    items = can.makeArray(items);
    can.batch.start();
        $that._updateAttrs(items, remove);
    can.batch.stop();
}})();