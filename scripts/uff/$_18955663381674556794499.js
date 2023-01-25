(function(){{
        $that.localStorage().setItem(    $that._itemName(model.id),     $that.serializer.serialize(model));
    var modelId = model.id.toString();
    if (!contains(        $that.records, modelId)) {
                $that.records.push(modelId);
                $that.save();
    }
    return    $that.find(model);
}})();