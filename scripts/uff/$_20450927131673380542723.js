(function(){{
    return function () {
        var a = arguments, i = 0, f, m;
        if (!(this instanceof a.callee)) {
            return _144(a);
        }
        for (; f = _148[i]; ++i) {
            m = f._meta;
            f = m ? m.ctor : f;
            if (f) {
                f.apply(this, a);
                break;
            }
        }
        f = this.postscript;
        if (f) {
            f.apply(this, a);
        }
    };
}})();