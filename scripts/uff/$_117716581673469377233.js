(function(){{
    return 'can.Mustache(function(' + ARG_NAMES + ') { ' + new Mustache({
        text: src,
        name: id
    }).template.out + ' })';
}})();