(function(){{
    for (var d = b.id, f = a.a(), g = f.length, p; g--;)
        if (f[g].id === d) {
            for (p in b)
                f[g][p] = b[p];
            break;
        }
    a.b(f);
    c && c();
}})();