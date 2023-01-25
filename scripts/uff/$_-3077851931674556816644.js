(function(){{
    var fragment = new DomFragment(options);
    if (        $that.docFrag) {
                $that.docFrag.appendChild(fragment.docFrag);
    }
    return fragment;
}})();