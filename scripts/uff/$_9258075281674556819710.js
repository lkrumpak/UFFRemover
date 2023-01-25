(function(){{
    var link = $(e.currentTarget), url = link.attr('href'), rel = link.attr('rel'), target = link.attr('target'), isExternal = link.is('[data-external]');
    if (/^((mailto)|(tel)|(sms))\:/.test(url) || link.is('.ignore')) {
        location.href = url;
        return true;
    } else {
        e.preventDefault();
    }
    if (rel === 'back') {
        History.back();
    } else if (isExternal || rel === 'nofollow' || target === '_blank') {
        e.stopPropagation();
        new ChildBrowser().showWebPage(url);
    } else if (rel === 'cancel') {
                $that.viewManager.dismiss(e.currentTarget);
    } else if (url) {
                $that.router.exec(url, null, null).error(        $that.onInvalidRoute);
    }
}})();