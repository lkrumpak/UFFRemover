(function(){{
    if (!model.id && model.id !== 0) {
        model.id = guid();
        model.set(model.idAttribute, model.id);
    }
        $that.localStorage().setItem(    $that._itemName(model.id),     $that.serializer.serialize(model));
        $that.records.push(model.id.toString());
        $that.save();
    return    $that.find(model);
}})();