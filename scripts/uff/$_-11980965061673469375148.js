(function(){{
    n.reqId = t.id, n.url = t.url;
    var r = t.expectedResponseType;
    if (e) {
                $that.nbKOResponses++, n.responseText || (n.responseText = '');
        if (n.responseText && r === 'json')
            try {
                n.responseJSON =                 $that.__serializer.parse(n.responseText);
            } catch (i) {
                                $that.$logWarn(                $that.JSON_PARSING_ERROR, [
                    t.url,
                    n.responseText
                ]);
            }
        n.error || (n.error = e === !0 ? e.statusText || 'error' : e.errDescription);
    } else
                $that.nbOKResponses++, r &&        $that._jsonTextConverter(n, r), n.error = null;
}})();