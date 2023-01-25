(function(){{
    var oldModels = clone(        $that.models), oldIndex;
        $that.models.reverse();
    if (!        $that.suppressTracking) {
                $that.changedOrder = true;
    }
    if (!        $that.suppressEvents) {
                $that.each(function (index, model) {
            oldIndex = ArrayUtils.indexOf(oldModels, model);
            if (oldIndex !== index) {
                _triggerItemEvent(this, 'moveItem', ArrayUtils.indexOf(oldModels, model), index, model);
            }
        });
    }
    return    $that;
}})();