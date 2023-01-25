(function(){{
    var itemRenderer =     $that.getItemRenderer(id);
    if (itemRenderer) {
        itemRenderer.setStart(start);
        return true;
    } else {
        return false;
    }
}})();