(function(){{
    var hash =     $that.hash;
        $that.hash =     $that.hashes.pop();
    if (        $that.options.stringParams) {
                $that.push('{' + hash.contexts.join(',') + '}');
                $that.push('{' + hash.types.join(',') + '}');
    }
        $that.push('{\n    ' + hash.values.join(',\n    ') + '\n  }');
}})();