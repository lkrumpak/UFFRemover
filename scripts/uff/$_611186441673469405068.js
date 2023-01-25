(function(){{
    var self =     $that;
    if (!        $that.comparator)
        throw new Error('Cannot sort a set without a comparator');
    options || (options = {});
    if (typeof        $that.comparator === 'string') {
                $that.models.sort(function (left, right) {
            if (left.get) {
                left = left.get(self.comparator);
                right = right.get(self.comparator);
            } else {
                left = left[self.comparator];
                right = right[self.comparator];
            }
            if (left > right || left === void 0)
                return 1;
            if (left < right || right === void 0)
                return -1;
            return 0;
        });
    } else if (        $that.comparator.length === 1) {
                $that.models.sort(function (left, right) {
            left = self.comparator(left);
            right = self.comparator(right);
            if (left > right || left === void 0)
                return 1;
            if (left < right || right === void 0)
                return -1;
            return 0;
        });
    } else {
                $that.models.sort(        $that.comparator.bind(        $that));
    }
    if (!options.silent)
                $that.trigger('sort',         $that, options);
    return    $that;
}})();