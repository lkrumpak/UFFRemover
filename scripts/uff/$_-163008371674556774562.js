(function(){{
    if ('textContent' in a)
        a.textContent = b;
    else if (3 == a.nodeType)
        a.data = b;
    else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild;)
            a.removeChild(a.lastChild);
        a.firstChild.data = b;
    } else
        Hc(a), a.appendChild(Cc(a).createTextNode(String(b)));
}})();