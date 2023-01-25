(function(){{
    var lastChild =     $that.children[    $that.children.length - 1];
    if (lastChild instanceof SourceNode) {
        lastChild.replaceRight(aPattern, aReplacement);
    } else if (typeof lastChild === 'string') {
                $that.children[        $that.children.length - 1] = lastChild.replace(aPattern, aReplacement);
    } else {
                $that.children.push(''.replace(aPattern, aReplacement));
    }
    return    $that;
}})();