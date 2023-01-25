(function(){{
    /* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
    match[1] = match[1].toLowerCase();
    if (match[1].slice(0, 3) === 'nth') {
        // nth-* requires argument
        if (!match[3]) {
            Sizzle.error(match[0]);
        }
        // numeric x and y parameters for Expr.filter.CHILD
        // remember that false/true cast respectively to 0/1
        match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === 'even' || match[3] === 'odd'));
        match[5] = +(match[7] + match[8] || match[3] === 'odd');    // other types prohibit arguments
    } else if (match[3]) {
        Sizzle.error(match[0]);
    }
    return match;
}})();