(function(){{
    var ret = context.getElementsByTagName ? context.getElementsByTagName(tag || '*') : context.querySelectorAll ? context.querySelectorAll(tag || '*') : [];
    return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], ret) : ret;
}})();