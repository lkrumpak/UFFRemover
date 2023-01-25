(function(){{
    var html, i, len, item;
    if (        $that.html) {
        return        $that.html;
    }
    html = '';
    if (!        $that.items) {
        return html;
    }
    len =     $that.items.length;
    for (i = 0; i < len; i += 1) {
        item =         $that.items[i];
        html += item.toString();
    }
    return html;
}})();