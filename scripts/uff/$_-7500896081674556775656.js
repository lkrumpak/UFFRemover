(function(){{
    if (typeof e.value == 'string') {
        if (Aria.isJsReservedWord(e.value) || !/^([a-zA-Z_\$][\w\$]*(:[\w\$]*)?)|(\d+)$/.test(e.value))
            return n(            $that, e);
    } else if (typeof e.value != 'number' || parseInt(e.value, 10) != e.value)
        return n(        $that, e);
}})();