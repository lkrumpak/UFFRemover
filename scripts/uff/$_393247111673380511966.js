(function(){{
    return typeof txt === 'string' || typeof txt === 'number' ? can.esc(txt) : contentText(txt, tag);
}})();