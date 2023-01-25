(function(){{
    if (Array.isArray(aChunk)) {
        aChunk.forEach(function (chunk) {
            this.add(chunk);
        },         $that);
    } else if (aChunk instanceof SourceNode || typeof aChunk === 'string') {
        if (aChunk) {
                        $that.children.push(aChunk);
        }
    } else {
        throw new TypeError('Expected a SourceNode, string, or an array of SourceNodes and strings. Got ' + aChunk);
    }
    return    $that;
}})();