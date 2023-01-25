(function(){{
    if (a == b)
        throw Error('Unable to set parent component');
    if (b && a.F && a.Y && Td(a.F, a.Y) && a.F != b)
        throw Error('Unable to set parent component');
    a.F = b;
    S.g.fc.call(a, b);
}})();