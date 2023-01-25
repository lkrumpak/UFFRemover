(function(){{
    return interactiveScript && interactiveScript.readyState === 'interactive' ? interactiveScript : (eachReverse(scripts(), function (a) {
        if (a.readyState === 'interactive')
            return interactiveScript = a;
    }), interactiveScript);
}})();