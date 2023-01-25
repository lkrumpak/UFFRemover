(function(){{
    var template = node.quasi;
    var numQuasis = template.quasis.length;
    // print the tag
    utils.move(node.tag.range[0], state);
    traverse(node.tag, path, state);
    utils.catchup(node.tag.range[1], state);
    // print array of template elements
    utils.append('(function() { var siteObj = [', state);
    for (var ii = 0; ii < numQuasis; ii++) {
        utils.append(getCookedValue(template.quasis[ii]), state);
        if (ii !== numQuasis - 1) {
            utils.append(', ', state);
        }
    }
    utils.append(']; siteObj.raw = [', state);
    for (ii = 0; ii < numQuasis; ii++) {
        utils.append(getRawValue(template.quasis[ii]), state);
        if (ii !== numQuasis - 1) {
            utils.append(', ', state);
        }
    }
    utils.append(']; Object.freeze(siteObj.raw); Object.freeze(siteObj); return siteObj; }()', state);
    // print substitutions
    if (numQuasis > 1) {
        for (ii = 0; ii < template.expressions.length; ii++) {
            var expression = template.expressions[ii];
            utils.append(', ', state);
            // maintain line numbers by calling catchupWhiteSpace over the whole
            // previous TemplateElement
            utils.move(template.quasis[ii].range[0], state);
            utils.catchupNewlines(template.quasis[ii].range[1], state);
            utils.move(expression.range[0], state);
            traverse(expression, path, state);
            utils.catchup(expression.range[1], state);
        }
    }
    // print blank lines to push the closing ) down to account for the final
    // TemplateElement.
    utils.catchupNewlines(node.range[1], state);
    utils.append(')', state);
    return false;
}})();