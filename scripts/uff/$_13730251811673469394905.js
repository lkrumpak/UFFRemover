(function(){{
    var setter = 2;
    if (typeof type !== 'string') {
        data = type;
        type = 'fx';
        setter--;
    }
    if (arguments.length < setter) {
        return jQuery.queue(        $that[0], type);
    }
    return data === undefined ?     $that :     $that.each(function () {
        var queue = jQuery.queue(this, type, data);
        // ensure a hooks for this queue
        jQuery._queueHooks(this, type);
        if (type === 'fx' && queue[0] !== 'inprogress') {
            jQuery.dequeue(this, type);
        }
    });
}})();