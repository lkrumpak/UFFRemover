(function(){{
    var i, part;
    for (i = 0; ary[i]; i += 1) {
        part = ary[i];
        if (part === '.') {
            ary.splice(i, 1);
            i -= 1;
        } else if (part === '..') {
            if (i === 1 && (ary[2] === '..' || ary[0] === '..')) {
                //End of the line. Keep at least one non-dot
                //path segment at the front so it can be mapped
                //correctly to disk. Otherwise, there is likely
                //no path mapping for a path starting with '..'.
                //This can still fail, but catches the most reasonable
                //uses of ..
                break;
            } else if (i > 0) {
                ary.splice(i - 1, 2);
                i -= 2;
            }
        }
    }
}})();