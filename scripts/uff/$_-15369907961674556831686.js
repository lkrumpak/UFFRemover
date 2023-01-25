(function(){{
    if (!(        $that instanceof SlowBuffer))
        return new SlowBuffer(subject, encoding);
    var buf = new Buffer(subject, encoding);
    delete buf.parent;
    return buf;
}})();