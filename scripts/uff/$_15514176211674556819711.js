(function(){{
    var result = false, idAttribute =         $that.TModel.prototype.idAttribute, compareObj = {}, id, i, j, model, index, items;
    items = item && ArrayUtils.isArray(item) ? item : Array.prototype.slice.call(arguments, 1);
    for (i = 0, j = items.length; i < j; i++) {
        model = items[i];
        if (typeof model === 'object') {
            model =             $that.prepare(model);
            // If it's a duplicate, remove the old item
            id = model.get(idAttribute);
            if (id !== null) {
                compareObj[idAttribute] = id;
                index =                 $that.indexOf(compareObj);
                if (index > -1 && !                    $that.allowDuplicatedIds) {
                                        $that.remove(index);
                }
            }
                        $that.models.splice(insertIndex, 0, model);
            if (!                $that.suppressTracking) {
                ArrayUtils.remove(                $that.removedItems, model);
                ArrayUtils.remove(                $that.changedItems, model);
                ArrayUtils.pushIfNotExists(                $that.addedItems, model);
            }
            _triggerItemEvent(            $that, 'addItem', null, insertIndex,             $that.models[insertIndex]);
            insertIndex++;
            result = true;
        } else {
            throw 'Only objects can be added to a Collection.';
        }
    }
    return result;
}})();