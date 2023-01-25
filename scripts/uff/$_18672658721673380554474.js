(function(){{
    if (flag) {
        var attrs =             $that.flags[flag], i = -1, attr, item;
        if (attrs) {
            while (!!(attr = attrs[++i])) {
                ArrayUtils.remove(                $that.unsavedAttributes, attr);
                item =                 $that.get(attr);
                if (item && item.dispose) {
                    item.dispose();
                }
                                $that.set(attr, null);
            }
        }
    } else {
                $that.attributes.dispose();
                $that.attributes = new Cache();
                $that.unsavedAttributes.length = 0;
    }
}})();