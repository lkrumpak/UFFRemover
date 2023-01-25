(function(){{
    var t;
    return aria.utils.Type.isHTMLElement(e.form) ? t = e.form : aria.utils.Type.isString(e.formId) && (t = Aria.$window.document.getElementById(e.formId)), t ? (e.url || (e.url = t.action), e.method || (e.method = t.method), e.form = t, e.formId = t.id,     $that.asyncRequest(e)) : (    $that.$logError(    $that.MISSING_FORM), e.callback.onerror.call(e.callback.scope, e));
}})();