(function(){{
    switch (a.a.t(b)) {
    case 'script':
        return a.a.ba(b.text);
    case 'textarea':
        return a.a.ba(b.value);
    case 'template':
        if (e(b.content))
            return a.a.ia(b.content.childNodes);
    }
    return a.a.ia(b.childNodes);
}})();