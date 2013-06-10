
// console extentions..
(function() {
    var __localhost = (document.location.host === "localhost"),
        __allow_debug = true;

    if (!console) {
        console = {};
    }

    console.__log = console.log;
    console.log = function() {
        if (__localhost) {
            if (typeof console !== "undefined" && typeof console.__log === "function") {
                console.__log(arguments);
            } else {
                var i, msg = "";
                for (i = 0; i < arguments.length; ++i) {
                    msg += arguments[i] + "\r\n";
                }
                alert(msg);
            }
        }
    };

    console.__info = console.info;
    console.info = function() {
        if (__localhost) {
            if (typeof console !== "undefined" && typeof console.__info === "function") {
                console.__info(arguments);
            } else {
                var i, msg = "";
                for (i = 0; i < arguments.length; ++i) {
                    msg += arguments[i] + "\r\n";
                }
                alert(msg);
            }
        }
    };

    console.__warn = console.warn;
    console.warn = function() {
        if (__localhost) {
            if (typeof console !== "undefined" && typeof console.__warn === "function") {
                console.__warn(arguments);
            } else {
                var i, msg = "";
                for (i = 0; i < arguments.length; ++i) {
                    msg += arguments[i] + "\r\n";
                }
                alert(msg);
            }
        }
    };

    console.__error = console.error;
    console.error = function() {
        if (__localhost) {
            if (typeof console !== "undefined" && typeof console.__error === "function") {
                console.__error(arguments);
            } else {
                var i, msg = "";
                for (i = 0; i < arguments.length; ++i) {
                    msg += arguments[i] + "\r\n";
                }
                alert(msg);
            }
        }
    };

    console.__group = console.group;
    console.group = function() {
        if (__localhost) {
            if (typeof console !== "undefined" && typeof console.__group === "function") {
                console.__group(arguments);
            } else {
                var i, msg = "";
                for (i = 0; i < arguments.length; ++i) {
                    msg += arguments[i] + "\r\n";
                }
                alert("group:\r\n" + msg + "{");
            }
        }
    };

    console.__groupEnd = console.groupEnd;
    console.groupEnd = function() {
        if (__localhost) {
            if (typeof console !== "undefined" && typeof console.__groupEnd === "function") {
                console.__groupEnd(arguments);
            } else {
                var i, msg = "";
                for (i = 0; i < arguments.length; ++i) {
                    msg += arguments[i] + "\r\n";
                }
                alert(msg + "\r\n}");
            }
        }
    };

    /// <summary>
    /// Clever way to leave hundreds of debug output messages in the code but not see _everything_
    /// when you only want to see some of the debugging messages.
    /// </summary>
    /// <remarks>
    /// To enable __debug_() statements for sections/groups of code:
    /// In your browser's console type the following
    ///       top.__debug_ABC = true;
    /// This will enable only the console.debug("ABC", ... ) statements in the code.
    /// </remarks>
    console.debug = function() {
        if (!__allow_debug) {
            return;
        }
        if (arguments.length > 0) {
            var obj = top["__debug_" + arguments[0]];
            if (obj && obj === true) {
                console.log(arguments.splice(0, 1));
            }
        }
    };
})();
