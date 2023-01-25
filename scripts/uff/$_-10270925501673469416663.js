(function(){{
        $that.type = types.TRIPLE;
    if (docFrag) {
                $that.nodes = [];
                $that.docFrag = document.createDocumentFragment();
    }
        $that.initialising = true;
    initMustache(    $that, options);
    if (docFrag) {
        docFrag.appendChild(        $that.docFrag);
    }
        $that.initialising = false;
}})();