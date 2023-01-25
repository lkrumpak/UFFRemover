(function(){{
    var e, ev, evts, idx, listeningTo, lt, _i, _j, _k, _l, _len, _len1, _len2, _len3, _m, _ref, _ref1, _ref2;
    if (arguments.length === 0) {
        _ref = [
                        $that.listeningTo,
                        $that.listeningToOnce
        ];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            listeningTo = _ref[_i];
            if (!listeningTo) {
                continue;
            }
            for (_j = 0, _len1 = listeningTo.length; _j < _len1; _j++) {
                lt = listeningTo[_j];
                lt.obj.unbind(lt.ev, lt.callback);
            }
        }
                $that.listeningTo = void 0;
                $that.listeningToOnce = void 0;
    } else if (obj) {
        _ref1 = [
                        $that.listeningTo,
                        $that.listeningToOnce
        ];
        for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
            listeningTo = _ref1[_k];
            if (!listeningTo) {
                continue;
            }
            events = events ? events.split(' ') : [void 0];
            for (_l = 0, _len3 = events.length; _l < _len3; _l++) {
                ev = events[_l];
                for (idx = _m = _ref2 = listeningTo.length - 1; _ref2 <= 0 ? _m <= 0 : _m >= 0; idx = _ref2 <= 0 ? ++_m : --_m) {
                    lt = listeningTo[idx];
                    if (lt.obj !== obj) {
                        continue;
                    }
                    if (callback && lt.callback !== callback) {
                        continue;
                    }
                    if (!ev || ev === lt.ev) {
                        lt.obj.unbind(lt.ev, lt.callback);
                        if (idx !== -1) {
                            listeningTo.splice(idx, 1);
                        }
                    } else if (ev) {
                        evts = lt.ev.split(' ');
                        if (__indexOf.call(evts, ev) >= 0) {
                            evts = function () {
                                var _len4, _n, _results;
                                _results = [];
                                for (_n = 0, _len4 = evts.length; _n < _len4; _n++) {
                                    e = evts[_n];
                                    if (e !== ev) {
                                        _results.push(e);
                                    }
                                }
                                return _results;
                            }();
                            lt.ev = $.trim(evts.join(' '));
                            lt.obj.unbind(ev, lt.callback);
                        }
                    }
                }
            }
        }
    }
    return    $that;
}})();