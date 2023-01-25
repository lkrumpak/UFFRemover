(function(){{
    var ones = '', max, binary, starMap, mapper, i;
    if (!starMaps[num]) {
        starMap = [];
        while (ones.length < num) {
            ones += 1;
        }
        max = parseInt(ones, 2);
        mapper = function (digit) {
            return digit === '1';
        };
        for (i = 0; i <= max; i += 1) {
            binary = i.toString(2);
            while (binary.length < num) {
                binary = '0' + binary;
            }
            starMap[i] = Array.prototype.map.call(binary, mapper);
        }
        starMaps[num] = starMap;
    }
    return starMaps[num];
}})();