(function(){{
    if (oldIndex instanceof        $that.TModel) {
        oldIndex = ArrayUtils.indexOf(        $that.models, oldIndex);
    }
    if (oldIndex > -1) {
        var model =         $that.models.splice(oldIndex, 1)[0];
        if (model) {
                        $that.models.splice(newIndex, 0, model);
            if (!                $that.suppressTracking) {
                                $that.changedOrder = true;
            }
            _triggerItemEvent(            $that, 'moveItem', oldIndex, newIndex, model);
        }
    }
}})();