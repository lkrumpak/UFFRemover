(function(){{
    var str, i, id, len;
    str = '';
    i = 0;
    len =     $that.length;
    for (i = 0; i < len; i += 1) {
        str +=         $that.fragments[i].toString();
    }
    if (        $that.fragmentsById) {
        for (id in            $that.fragmentsById) {
            if (                $that.fragmentsById[id]) {
                str +=                 $that.fragmentsById[id].toString();
            }
        }
    }
    return str;
}})();