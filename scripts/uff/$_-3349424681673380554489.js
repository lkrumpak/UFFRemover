(function(){{
    var data = event.originalEvent.touches ? event.originalEvent.touches[0] : event;
    return {
        time: new Date().getTime(),
        coords: [
            data.pageX,
            data.pageY
        ]
    };
}})();