(function(){{
    var itemRenderer =     $that.getItemRenderer(id);
    if (itemRenderer) {
        itemRenderer.render();
        return true;
    } else {
        return false;
    }
}})();