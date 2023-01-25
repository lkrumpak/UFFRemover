(function(){{
    if (        $that.element[0].nodeName.toUpperCase() === 'SELECT') {
        // need to wait until end of turn ...
        setTimeout(can.proxy(        $that.set,         $that), 1);
    } else {
                $that.set();
    }
}})();