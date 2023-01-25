(function(){{
    var n, it, items, index, i, removed;
    if (arguments.length === 1 && ArrayUtils.isArray(item)) {
        n = 0;
        removed = [];
        while (!!(it = item[n++])) {
            removed.push(            $that.remove(it));
        }
        return removed;
    } else if (arguments.length > 1) {
        // Prevent passing multiple numeric arguments,
        // which could have unexpected behavior
        if (typeof item === 'number' && item % 1 === 0) {
            // is integer
            return            $that.remove(item);
        } else {
            return            $that.remove([].slice.call(arguments));
        }
    }
    if (item instanceof        $that.TModel) {
        index = ArrayUtils.remove(        $that.models, item);
        if (index > -1) {
            if (!                $that.suppressTracking) {
                ArrayUtils.remove(                $that.addedItems, item);
                ArrayUtils.remove(                $that.changedItems, item);
                ArrayUtils.pushIfNotExists(                $that.removedItems, item);
            }
            item.off('change',             $that.onItemEvent).off('invalid',             $that.onItemEvent).off('saveSuccess',             $that.onItemEvent).off('saveError',             $that.onItemEvent);
            _triggerItemEvent(            $that, 'removeItem', index, null, item);
            return true;
        } else {
            return false;
        }
    } else if (typeof item === 'number' && item % 1 === 0) {
        // is integer
        if (item >= 0 && item <            $that.count()) {
            return            $that.remove(            $that.itemAt(item));
        } else {
            return false;
        }
    } else {
        items =         $that.filter(item), i = -1, removed = false;
        while (!!(item = items[++i])) {
            removed =             $that.remove(item) || removed;
        }
        return removed;
    }
}})();