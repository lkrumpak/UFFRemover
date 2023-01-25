(function(){{
    switch (_this.state.nowShowing) {
    case constants_1.ACTIVE_TODOS:
        return !todo.completed;
    case constants_1.COMPLETED_TODOS:
        return todo.completed;
    default:
        return true;
    }
}})();