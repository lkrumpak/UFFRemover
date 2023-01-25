(function(){{
    var n = [
        'Android',
        'IOS',
        'BlackBerry',
        'BlackBerry Tablet OS',
        'Windows',
        'Symbian',
        'Other'
    ];
    switch (t) {
    case 0:
                $that.isAndroid = !0,         $that.osName = n[0],         $that.osVersion = e[2] || '', e[2] && e[2].match(/\d/) + '' == '3' ?         $that.isTablet = !0 :         $that.isPhone = !0;
        break;
    case 1:
                $that.isIOS = !0,         $that.osName = n[1];
        var r = e[2] || '';
                $that.osVersion = r.replace(/\_/g, '.'), e[1] == 'iPad' ?         $that.isTablet = !0 :         $that.isPhone = !0;
        break;
    case 2:
                $that.isBlackBerry = !0,         $that.osName = n[2],         $that.osVersion = e[2] || '',         $that.isPhone = !0;
        break;
    case 3:
                $that.isBlackBerry = !0,         $that.osName = n[3],         $that.osVersion = e[2] || '',         $that.isTablet = !0;
        break;
    case 4:
                $that.isWindowsPhone = !0,         $that.osName = n[4],         $that.osVersion = e[2] || '',         $that.isPhone = !0;
        break;
    case 5:
                $that.isSymbian = !0,         $that.osName = n[5],         $that.osVersion = e[2] || '',         $that.isPhone = !0;
        break;
    case 6:
                $that.isOtherMobile = !0,         $that.osName = n[6],         $that.osVersion = e[2] || '',         $that.isPhone = !0;
    }
        $that.osVersion =     $that.osVersion.replace(/\s*/g, '');
}})();