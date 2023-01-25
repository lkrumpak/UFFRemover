(function(){{
    var dataset = getDataset(dom);
    if (dataset && typeof dataset[        $that.plugins.name + '_id'] != 'undefined') {
        return +dataset[        $that.plugins.name + '_id'];
    } else {
        return false;
    }
}})();