(function(){{
    Template.prototype.compile.call(    $that);
    dust.loadSource(dust.compile(    $that.code,     $that.name));
}})();