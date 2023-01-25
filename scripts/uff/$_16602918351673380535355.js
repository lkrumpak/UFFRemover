(function(){{
    if (hasConsole && !config.silent) {
        console.error('[Vue warn]: ' + msg + ' ' + (vm ? formatLocation(formatComponentName(vm)) : ''));
    }
}})();