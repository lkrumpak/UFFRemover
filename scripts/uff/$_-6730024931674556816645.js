(function(){{
    var i =     $that.nodes.length;
    while (i--) {
                $that.docFrag.appendChild(        $that.nodes[i]);
    }
    return    $that.docFrag;
}})();