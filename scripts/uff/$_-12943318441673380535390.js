(function(){{
    if (!conditions.length) {
        return '_e()';
    }
    var condition = conditions.shift();
    if (condition.exp) {
        return '(' + condition.exp + ')?' + genTernaryExp(condition.block) + ':' + genIfConditions(conditions);
    } else {
        return '' + genTernaryExp(condition.block);
    }
    // v-if with v-once should generate code like (a)?_m(0):_m(1)
    function genTernaryExp(el) {
        return el.once ? genOnce(el) : genElement(el);
    }
}})();