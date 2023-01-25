(function(){{
    if (e) {
        var t, n, r;
        if (typeof e == 'string') {
            t = e, n = Aria.getClassRef(t);
            if (!n)
                return;
            r = n.classDefinition || n.interfaceDefinition;
            if (!r)
                return;
        } else {
            n = e, r = n.classDefinition || n.interfaceDefinition;
            if (!r)
                return;
            t = r.$classpath;
            if (!t)
                return;
        }
        var i = t.split('.'), a = i[i.length - 1];
        i.splice(i.length - 1, 1), i = Aria.nspace(i.join('.'));
        if (n == i[a]) {
            r.$singleton && n.$dispose(), r.$onunload && r.$onunload.call(r.$noargConstructor.prototype, n), delete i[a], delete            $that.$classDefinitions[t];
            for (var f = 0, l; l =                 $that.$classes[f]; f++)
                if (l == n) {
                                        $that.$classes.splice(f, 1);
                    break;
                }
        }
    } else {
        var c = Aria.$classes.slice(0);
        for (var f = c.length - 1; f >= 0; f--) {
            var h = c[f];
            Aria.dispose(h);
        }
        c = null;
        var p = Aria.memCheckMode;
        Aria = null;
        if (p)
            return {
                nbConstructions: s,
                nbDestructions: o,
                nbNotDisposed: s - o,
                notDisposed: u
            };
    }
}})();