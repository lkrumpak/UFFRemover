(function(){{
    if (demoLink.getAttribute('href').substr(0, 4) !== 'http') {
        demoLink.setAttribute('href', findRoot() + demoLink.getAttribute('href'));
    }
}})();