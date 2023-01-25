(function(){{
    X.g.S.call(    $that);
    Rd(    $that).c(    $that.a(), 'click', function (a) {
        a.preventDefault();
    });
    Rd(    $that).c(    $that.a(), 'dblclick', function () {
        this.$a(!0);
    });
    var a = $e(    $that.a());
    Rd(    $that).c(a, 'keyup', function (a) {
        switch (a.O.keyCode) {
        case 13:
            this.Ka(!1);
            break;
        case 27:
            $e(this.a()).value = this.la(), this.Ka(!1);
        }
    });
}})();