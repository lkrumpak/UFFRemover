(function(){{
    var start = offsets.start;
    var end = offsets.end;
    if (typeof end === 'undefined') {
        end = start;
    }
    if ('selectionStart' in input) {
        input.selectionStart = start;
        input.selectionEnd = Math.min(end, input.value.length);
    } else if (document.selection && input.nodeName === 'INPUT') {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveStart('character', start);
        range.moveEnd('character', end - start);
        range.select();
    } else {
        ReactDOMSelection.setOffsets(input, offsets);
    }
}})();