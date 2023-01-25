(function(){{
    Model.__super__.constructor.apply(    $that, arguments);
    if (        $that.constructor.uuid != null && typeof        $that.constructor.uuid === 'function') {
                $that.cid =         $that.constructor.uuid();
        if (!            $that.id) {
                        $that.id =             $that.cid;
        }
    } else {
                $that.cid = (atts != null ? atts.cid : void 0) ||        $that.constructor.uid('c-');
    }
    if (atts) {
                $that.load(atts);
    }
}})();