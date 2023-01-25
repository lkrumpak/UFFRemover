(function(){{
    var connectionType = resolve('navigator.connection.type');
    if (connectionType !== null) {
        return connectionType === resolve('Connection.NONE');
    } else {
        return _navigatorOnlineSupported ? !navigator.onLine : false;
    }
}})();