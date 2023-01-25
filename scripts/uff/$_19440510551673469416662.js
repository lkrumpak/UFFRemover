(function(){{
    var i, len;
    len =     $that.fragments.length;
    for (i = 0; i < len; i += 1) {
                $that.docFrag.appendChild(        $that.fragments[i].detach());
    }
    return    $that.docFrag;
}})();