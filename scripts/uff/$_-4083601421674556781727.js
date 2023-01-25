(function(){{
    var val =     $that.state.editText.trim();
    if (val) {
                $that.props.onSave(val);
                $that.setState({ editText: val });
    } else {
                $that.props.onDestroy();
    }
}})();