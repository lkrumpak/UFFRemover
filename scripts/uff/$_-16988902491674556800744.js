(function(){{
    endTagLength = endTag.length;
    if (stackedTag !== 'script' && stackedTag !== 'style' && stackedTag !== 'noscript') {
        text = text.replace(/<!--([\s\S]*?)-->/g, '$1').replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
    }
    if (options.chars) {
        options.chars(text);
    }
    return '';
}})();