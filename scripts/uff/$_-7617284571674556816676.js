(function(){{
    var remaining =     $that.remaining().substr(0, 40);
    if (remaining.length === 40) {
        remaining += '...';
    }
    throw new Error('Tokenizer failed: unexpected string "' + remaining + '" (expected ' + thing + ')');
}})();