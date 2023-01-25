(function(){{
    var children = environment.children, child, compiler;
    for (var i = 0, l = children.length; i < l; i++) {
        child = children[i];
        compiler = new        $that.compiler();
        var index =         $that.matchExistingProgram(child);
        if (index == null) {
                        $that.context.programs.push('');
            // Placeholder to prevent name conflicts for nested children
            index =             $that.context.programs.length;
            child.index = index;
            child.name = 'program' + index;
                        $that.context.programs[index] = compiler.compile(child, options,             $that.context);
                        $that.context.environments[index] = child;
        } else {
            child.index = index;
            child.name = 'program' + index;
        }
    }
}})();