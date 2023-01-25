(function(){{
    if (html === undefined)
        html = $document.createElement('html');
    if ($document.documentElement && $document.documentElement !== node) {
        $document.replaceChild(node, $document.documentElement);
    } else
        $document.appendChild(node);
        $that.childNodes = $document.childNodes;
}})();