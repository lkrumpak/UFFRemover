(function(){{
        $that.type = types.INTERPOLATOR;
    if (docFrag) {
                $that.node = document.createTextNode('');
        docFrag.appendChild(        $that.node);
    }
    initMustache(    $that, options);
}})();