(function(){{
    var i = children.length;
    while (i--) {
        if (children[i].type === 1) {
            return children[i];
        } else {
            if ('development' !== 'production' && children[i].text !== ' ') {
                warn$1('text "' + children[i].text.trim() + '" between v-if and v-else(-if) ' + 'will be ignored.');
            }
            children.pop();
        }
    }
}})();