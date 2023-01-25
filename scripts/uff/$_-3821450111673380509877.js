(function(){{
    var n = [
        'Mobile Safari',
        'Chrome',
        'Other'
    ];
    switch (t) {
    case 0:
                $that.browserType = n[1],         $that.browserVersion = e[2] || '',         $that.isChrome = !0;
        break;
    case 1:
                $that.browserType = e[1] || '',         $that.browserVersion = e[2] || '',         $that.isAndroid && (        $that.isAndroidBrowser = !0),         $that.isBlackBerry && (        $that.isBlackBerryBrowser = !0);
        break;
    case 2:
                $that.browserType = n[0],         $that.browserVersion = e[3] || '',         $that.isSafariMobile = !0;
        break;
    case 3:
                $that.browserType = e[1] || '',         $that.browserVersion = e[2] || '', e[0] && (e[0].indexOf('XBLWP7') > -1 || e[0].indexOf('ZuneWP7') > -1) ?         $that.DesktopView = !0 :         $that.isMobileView = !0,         $that.isIEMobile = !0;
        break;
    case 4:
                $that.browserType = e[1] || '',         $that.browserVersion = e[2] || '',         $that.isSafari = !0;
        break;
    case 5:
                $that.browserType = e[2] || '',         $that.browserVersion = e[3] || '',         $that.isS60 = !0;
        break;
    case 6:
                $that.browserType = e[1] || '',         $that.browserVersion = e[2] || '',         $that.isFF = !0;
        break;
    case 7:
                $that.browserType = e[1] || '',         $that.browserVersion = e[2] || '',         $that.isFF = !0;
        break;
    case 8:
                $that.browserType = e[1] || '',         $that.browserVersion = e[2] || '',         $that.isFF = !0;
        break;
    case 9:
                $that.browserType = n[2],         $that.browserVersion = e[2] || '',         $that.isOtherBrowser = !0;
    }
}})();