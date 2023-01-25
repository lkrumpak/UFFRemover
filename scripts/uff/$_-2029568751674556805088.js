(function(){{
    if ((event === 'add' || event === 'remove') && collection !==        $that)
        return;
    if (event === 'destroy')
                $that.remove(model, options);
    if (model && event === 'change:' +        $that.mainIndex) {
                $that._deIndex(model);
                $that._index(model);
    }
        $that.trigger.apply(    $that, arguments);
}})();