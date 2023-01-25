(function(){{
    // Magic theory: IE8 supposedly differentiates between added and updated
    // nodes when processing innerHTML, innerHTML on updated nodes suffers
    // from worse whitespace behavior. Re-adding a node like this triggers
    // the initial and more favorable whitespace behavior.
    // TODO: What to do on a detached node?
    if (node.parentNode) {
        node.parentNode.replaceChild(node, node);
    }
    // We also implement a workaround for non-visible tags disappearing into
    // thin air on IE8, this only happens if there is no visible text
    // in-front of the non-visible tags. Piggyback on the whitespace fix
    // and simply check if any non-visible tags appear in the source.
    if (WHITESPACE_TEST.test(html) || html[0] === '<' && NONVISIBLE_TEST.test(html)) {
        // Recover leading whitespace by temporarily prepending any character.
        // \uFEFF has the potential advantage of being zero-width/invisible.
        node.innerHTML = '\uFEFF' + html;
        // deleteData leaves an empty `TextNode` which offsets the index of all
        // children. Definitely want to avoid this.
        var textNode = node.firstChild;
        if (textNode.data.length === 1) {
            node.removeChild(textNode);
        } else {
            textNode.deleteData(0, 1);
        }
    } else {
        node.innerHTML = html;
    }
}})();