(function(){{
    var options = '{' +    $that.setupOptions(paramSize, params).join(',') + '}';
    if (useRegister) {
                $that.useRegister('options');
        params.push('options');
        return 'options=' + options;
    } else {
        params.push(options);
        return '';
    }
}})();