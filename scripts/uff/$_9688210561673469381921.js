(function(){{
    var msg = 'Notification Name: ' +    $that.getName();
    msg += '\nBody:' + (    $that.body == null ? 'null' :     $that.body.toString());
    msg += '\nType:' + (    $that.type == null ? 'null' :     $that.type);
    return msg;
}})();