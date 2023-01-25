(function(){{
    if (option.type === 1 && option.tag === 'option' && option.attrsMap.selected != null) {
        warn$3('<select v-model="' + option.parent.attrsMap['v-model'] + '">:\n' + 'inline selected attributes on <option> will be ignored when using v-model. ' + 'Declare initial values in the component\'s data option instead.');
        return true;
    }
    return false;
}})();