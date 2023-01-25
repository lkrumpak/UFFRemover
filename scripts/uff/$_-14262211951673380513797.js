(function(){{
    'production' !== 'development' ? warning(false, 'transition(): tried to perform an animation without ' + 'an animationend or transitionend event after timeout (' + '%sms). You should either disable this ' + 'transition in JS or add a CSS animation/transition.', NO_EVENT_TIMEOUT) : null;
}})();