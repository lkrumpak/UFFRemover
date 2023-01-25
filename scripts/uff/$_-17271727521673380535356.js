(function(){{
    if (vm.$root === vm) {
        return 'root instance';
    }
    var name = vm._isVue ? vm.$options.name || vm.$options._componentTag : vm.name;
    return (name ? 'component <' + name + '>' : 'anonymous component') + (vm._isVue && vm.$options.__file ? ' at ' + vm.$options.__file : '');
}})();