(function(){{
    var uid;
    if (prefix == null) {
        prefix = '';
    }
    uid = prefix +    $that.idCounter++;
    if (        $that.exists(uid)) {
        uid =         $that.uid(prefix);
    }
    return uid;
}})();