(function(){{
    if (n.render)
        return;
    if (!J) {
        J = R('style');
        J.setAttribute('type', 'text/css');
    }
    var t = document.head || document.getElementsByTagName('head')[0];
    if (J.styleSheet)
        J.styleSheet.cssText += e;
    else
        J.innerHTML += e;
    if (!J._rendered)
        if (J.styleSheet) {
            document.body.appendChild(J);
        } else {
            var r = I('style[type=riot]');
            if (r) {
                r.parentNode.insertBefore(J, r);
                r.parentNode.removeChild(r);
            } else
                t.appendChild(J);
        }
    J._rendered = true;
}})();