(function(){{
    if (Array.isArray(aChunk)) {
        for (var i = aChunk.length - 1; i >= 0; i--) {
                        $that.prepend(aChunk[i]);
        }
    } else if (aChunk instanceof SourceNode || typeof aChunk === 'string') {
                $that.children.unshift(aChunk);
    } else {
        throw new TypeError('Expected a SourceNode, string, or an array of SourceNodes and strings. Got ' + aChunk);
    }
    return    $that;
}})();