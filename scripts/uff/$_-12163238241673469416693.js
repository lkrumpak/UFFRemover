(function(){{
    var len, i;
    if (        $that.nodes) {
        i =         $that.nodes.length;
        while (i--) {
                        $that.docFrag.appendChild(            $that.nodes[i]);
        }
    } else if (        $that.items) {
        len =         $that.items.length;
        for (i = 0; i < len; i += 1) {
                        $that.docFrag.appendChild(            $that.items[i].detach());
        }
    }
    return    $that.docFrag;
}})();