'use strict';

hw2.include([
    'hw2!{PATH_JS_LIB}application/index.js',
    'hw2!{PATH_JS_LIB}browser/router/index.js'
]).define(function () {
    $ = this;

    return $.Browser.System = $.public.class.extends($.System)(
        $.protected({
            router: null
        }),
        $.public({
            __construct: function (isSpa) {
                this.i.router = new $.Router(document.location.href, isSpa);

                this.i.router.addListner(this.i);

                this.__super();
            },
            init: function () {
                this.__super();
            },
            getRouter: function () {
                return this.i.router;
            }
        })
        );
});