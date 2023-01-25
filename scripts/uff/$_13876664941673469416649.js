(function(){{
    var ancestryA, ancestryB, oldestA, oldestB, mutualAncestor, indexA, indexB, fragments, fragmentA, fragmentB;
    ancestryA = getAncestry(a.component || a._ractive.proxy);
    ancestryB = getAncestry(b.component || b._ractive.proxy);
    oldestA = ancestryA[ancestryA.length - 1];
    oldestB = ancestryB[ancestryB.length - 1];
    while (oldestA && oldestA === oldestB) {
        ancestryA.pop();
        ancestryB.pop();
        mutualAncestor = oldestA;
        oldestA = ancestryA[ancestryA.length - 1];
        oldestB = ancestryB[ancestryB.length - 1];
    }
    oldestA = oldestA.component || oldestA;
    oldestB = oldestB.component || oldestB;
    fragmentA = oldestA.parentFragment;
    fragmentB = oldestB.parentFragment;
    if (fragmentA === fragmentB) {
        indexA = fragmentA.items.indexOf(oldestA);
        indexB = fragmentB.items.indexOf(oldestB);
        return indexA - indexB || ancestryA.length - ancestryB.length;
    }
    if (fragments = mutualAncestor.fragments) {
        indexA = fragments.indexOf(fragmentA);
        indexB = fragments.indexOf(fragmentB);
        return indexA - indexB || ancestryA.length - ancestryB.length;
    }
    throw new Error('An unexpected condition was met while comparing the position of two components. Please file an issue at https://github.com/RactiveJS/Ractive/issues - thanks!');
}})();