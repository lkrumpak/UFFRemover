(function(){{
    var e;
    for (e in        $that._poll)
                $that._poll.hasOwnProperty(e) && clearInterval(        $that._poll[e]);
    for (e in        $that._timeOut)
                $that._timeOut.hasOwnProperty(e) && clearInterval(        $that._timeOut[e]);
        $that.__serializer && (    $that.__serializer.$dispose(),     $that.__serializer = null),     $that._poll = null,     $that._timeOut = null;
}})();