(function(){{
    var prev = findPrevElement(parent.children);
    if (prev && prev.if) {
        addIfCondition(prev, {
            exp: el.elseif,
            block: el
        });
    } else {
        warn$1('v-' + (el.elseif ? 'else-if="' + el.elseif + '"' : 'else') + ' ' + 'used on element <' + el.tag + '> without corresponding v-if.');
    }
}})();