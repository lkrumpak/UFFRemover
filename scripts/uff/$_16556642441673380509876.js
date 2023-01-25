(function(){{
    var e =     $that.ua;
    if (e.indexOf('msie') > -1) {
                $that.isIE = !0,         $that.name = 'IE';
        if (/msie[\/\s]((?:\d+\.?)+)/.test(e)) {
                        $that.version = RegExp.$1;
            var t = parseInt(            $that.version, 10);
            if (t == 6)
                                $that.isIE6 = !0;
            else if (t >= 7) {
                var n = Aria.$frameworkWindow.document, r = n.documentMode || 7;
                                $that['isIE' + r] = !0, r != t && (                $that.version = r + '.0');
            }
        }
    } else
        e.indexOf('opera') > -1 ? (        $that.isOpera = !0,         $that.name = 'Opera') : e.indexOf('chrome') > -1 ? (        $that.isChrome = !0,         $that.name = 'Chrome') : e.indexOf('webkit') > -1 ? (        $that.isSafari = !0,         $that.name = 'Safari') : (e.indexOf('gecko') > -1 && (        $that.isGecko = !0), e.indexOf('firefox') > -1 && (        $that.name = 'Firefox',         $that.isFirefox = !0));
        $that.isWebkit =     $that.isSafari ||    $that.isChrome, e.indexOf('windows') != -1 || e.indexOf('win32') != -1 ? (    $that.isWindows = !0,     $that.environment = 'Windows') : e.indexOf('macintosh') != -1 && (    $that.isMac = !0,     $that.environment = 'MacOS'),     $that.isIE || (    $that.isFirefox ? /firefox[\/\s]((?:\d+\.?)+)/.test(e) && (    $that.version = RegExp.$1) :     $that.isSafari ? /version[\/\s]((?:\d+\.?)+)/.test(e) && (    $that.version = RegExp.$1) :     $that.isChrome ? /chrome[\/\s]((?:\d+\.?)+)/.test(e) && (    $that.version = RegExp.$1) :     $that.isOpera && /version[\/\s]((?:\d+\.?)+)/.test(e) && (    $that.version = RegExp.$1)),     $that.version && /(\d+)\./.test(    $that.version) && (    $that.majorVersion = parseInt(RegExp.$1, 10));
    if (        $that.ua) {
        var i = [
                { pattern: /(android)[\/\s-]?([\w\.]+)*/i },
                { pattern: /(ip[honead]+).*os\s*([\w]+)*\slike\smac/i },
                { pattern: /(blackberry).+version\/([\w\.]+)/i },
                { pattern: /(rim\stablet+).*os\s*([\w\.]+)*/i },
                { pattern: /(windows\sphone\sos|windows\s?[mobile]*)[\s\/\;]?([ntwce\d\.\s]+\w)/i },
                { pattern: /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i },
                { pattern: /(webos|palm\sos|bada|rim\sos|meego)[\/\s-]?([\w\.]+)*/i }
            ], s = [
                { pattern: /(chrome|crios)\/((\d+)?[\w\.]+)/i },
                { pattern: /(mobile\ssafari)\/((\d+)?[\w\.]+)/i },
                { pattern: /(mobile)\/\w+\s(safari)\/([\w\.]+)/i },
                { pattern: /(iemobile)[\/\s]?((\d+)?[\w\.]*)/i },
                { pattern: /(safari)\/((\d+)?[\w\.]+)/i },
                { pattern: /(series60.+(browserng))\/((\d+)?[\w\.]+)/i },
                { pattern: /(firefox)\/([\w\.]+).+(fennec)\/\d+/i },
                { pattern: /(opera\smobi)\/((\d+)?[\w\.-]+)/i },
                { pattern: /(opera\smini)\/((\d+)?[\w\.-]+)/i },
                { pattern: /(dolfin|Blazer|S40OviBrowser)\/((\d+)?[\w\.]+)/i }
            ], o = [
                { pattern: /\(((ipad|playbook));/i },
                { pattern: /\(((ip[honed]+));/i },
                { pattern: /(blackberry[\s-]?\w+)/i },
                { pattern: /(hp)\s([\w\s]+\w)/i },
                { pattern: /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i },
                { pattern: /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i },
                { pattern: /((s[cgp]h-\w+|gt-\w+|galaxy\snexus))/i },
                { pattern: /sec-((sgh\w+))/i },
                { pattern: /(maemo|nokia).*(\w|n900|lumia\s\d+)/i },
                { pattern: /(lg)[e;\s\-\/]+(\w+)*/i },
                { pattern: /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola)[\s_-]?([\w-]+)*/i }
            ];
                $that.__testUaMatch(i, 'OS'),         $that.__testUaMatch(s, 'BROWSER'),         $that.__testUaMatch(o, 'DEVICE');
    }
}})();