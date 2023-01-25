(function(){{
    var itemRenderer =     $that.getItemRenderer(id);
    if (itemRenderer) {
        itemRenderer.setNb(nb);
        return true;
    } else {
        return false;
    }
}})();