(function(){{
    var str = '';
    var max = exports.INSPECT_MAX_BYTES;
    if (        $that.length > 0) {
        str =         $that.toString('hex', 0, max).match(/.{2}/g).join(' ');
        if (            $that.length > max)
            str += ' ... ';
    }
    return '<Buffer ' + str + '>';
}})();