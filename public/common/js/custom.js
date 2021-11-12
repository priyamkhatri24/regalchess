function (e, t, n) {
    "use strict";
    e("../utils/plugins").createTab({
        triggers: ".login-register-form-trigger",
        elements: ".login-register-form-element",
        animation: { type: "slide-in-right" },
        onTabChange: function (e) {
            e.querySelector("input").focus();
        },
    });
},