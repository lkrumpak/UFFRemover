(function(){{
    return '"' + str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028')    // Per Ecma-262 7.3 + 7.8.4
.replace(/\u2029/g, '\\u2029') + '"';
}})();