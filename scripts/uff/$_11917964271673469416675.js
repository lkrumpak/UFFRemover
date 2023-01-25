(function(){{
    var str;
    if (        $that.value === null) {
        return        $that.name;
    }
    if (!        $that.fragment) {
        return        $that.name + '=' + JSON.stringify(        $that.value);
    }
    str =     $that.fragment.toString();
    return    $that.name + '=' + JSON.stringify(str);
}})();