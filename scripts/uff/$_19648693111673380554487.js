(function(){{
    Map.apply(    $that, arguments);
    var locale = name.toLowerCase().split('_');
    /**
     * The ISO 639-2 code for the translation's language
     * @property {String} language
     * @default null
     */
        $that.language = locale[0];
    /**
     * The ISO 3166-1 code for the translation's country
     * @property {String} country
     * @default ''
     */
        $that.country = locale[1] || '';
    /**
     * The locale of this translation (either lang or lang_COUNTRY)
     * @property {String} locale
     * @default null
     */
        $that.locale =     $that.country ?     $that.language + '_' +    $that.country :     $that.language;
}})();