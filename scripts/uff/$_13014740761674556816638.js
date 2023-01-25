(function(){{
    if (!        $that.root._evaluators[        $that.keypath]) {
                $that.root._evaluators[        $that.keypath] = new Evaluator(        $that.root,         $that.keypath,         $that.str,         $that.args,         $that.mustache.priority);
    } else {
                $that.root._evaluators[        $that.keypath].refresh();
    }
}})();