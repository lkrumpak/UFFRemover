(function(){{
    var container, nodes = [];
    if (html) {
        container = elementCache[tagName] || (elementCache[tagName] = createElement(tagName));
        container.innerHTML = html;
        while (container.firstChild) {
            nodes[nodes.length] = container.firstChild;
            docFrag.appendChild(container.firstChild);
        }
    }
    return nodes;
}})();