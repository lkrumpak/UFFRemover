(function(){{
    var revision = COMPILER_REVISION, versions = REVISION_CHANGES[revision];
    return 'this.compilerInfo = [' + revision + ',\'' + versions + '\'];\n';
}})();