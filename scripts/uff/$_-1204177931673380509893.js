(function(){{
    if (t == 'text')
        !e.responseText && e.responseJSON != null && (aria.utils.Type.isString(e.responseJSON) ? e.responseText = e.responseJSON : e.responseText = aria.utils.Json.convertToJsonString(e.responseJSON));
    else if (t == 'json' && e.responseJSON == null && e.responseText != null) {
        var n = aria.utils.String.substitute(        $that.JSON_PARSING_ERROR, [
            e.url,
            e.responseText
        ]);
        e.responseJSON = aria.utils.Json.load(e.responseText,         $that, n);
    }
}})();