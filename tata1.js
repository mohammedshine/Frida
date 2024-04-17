// Define the Java class and methods to hook
var className = "com.tatamotors.evcvp.utils.RootUtil";
var methodName1 = "checkRootMethod1";
var methodName2 = "checkRootMethod2";
var methodName3 = "checkRootMethod3";
var methodName4 = "checkRootMethod4";

// Hooking the methods and replacing their implementation after the class is loaded
Java.perform(function () {
    Java.choose(className, {
        onMatch: function (instance) {
            console.log("[*] Found instance of " + className);
            // Hooking the methods
            var RootUtil = instance.getClass();
            RootUtil.Companion[methodName1].implementation = function () {
                console.log("[*] Hooking checkRootMethod1 - Always returning false");
                return false;
            };

            RootUtil.Companion[methodName2].implementation = function () {
                console.log("[*] Hooking checkRootMethod2 - Always returning false");
                return false;
            };

            RootUtil.Companion[methodName3].implementation = function () {
                console.log("[*] Hooking checkRootMethod3 - Always returning false");
                return false;
            };

            RootUtil.Companion[methodName4].implementation = function () {
                console.log("[*] Hooking checkRootMethod4 - Always returning false");
                return false;
            };
        },
        onComplete: function () {
            console.log("[*] Class " + className + " not found");
        }
    });
});
