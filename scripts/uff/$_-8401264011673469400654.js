(function(){{
    return key + ':function(' + String(el.attrsMap.scope) + '){' + 'return ' + (el.tag === 'template' ? genChildren(el) || 'void 0' : genElement(el)) + '}';
}})();