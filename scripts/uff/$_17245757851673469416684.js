(function(){{
    var start, text, index;
    start = tokenizer.pos;
    text = getUnquotedAttributeValueText(tokenizer);
    if (!text) {
        return null;
    }
    if ((index = text.indexOf(tokenizer.delimiters[0])) !== -1) {
        text = text.substr(0, index);
        tokenizer.pos = start + text.length;
    }
    return {
        type: types.TEXT,
        value: text
    };
}})();