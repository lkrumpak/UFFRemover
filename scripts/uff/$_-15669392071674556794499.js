(function(){{
        $that.localStorage().removeItem(    $that._itemName(model.id));
    var modelId = model.id.toString();
    for (var i = 0, id; i <        $that.records.length; i++) {
        if (            $that.records[i] === modelId) {
                        $that.records.splice(i, 1);
        }
    }
        $that.save();
    return model;
}})();