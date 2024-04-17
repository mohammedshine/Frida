// Define the Java class and methods to hook
var className = "com.tatamotors.evcvp.utils.RootUtil";
var methodName1 = "checkRootMethod1";
var methodName2 = "checkRootMethod2";
var methodName3 = "checkRootMethod3";
var methodName4 = "checkRootMethod4";

// Hooking the methods and replacing their implementation
Java.perform(function () {
    var RootUtil = Java.use(className);

    // Hooking checkRootMethod1 and modifying its behavior to always return true
    RootUtil.Companion[methodName1].implementation = function () {
        console.log("[*] Hooking checkRootMethod1 - Always returning true");
        return true;
    };

    // Hooking checkRootMethod2 and modifying its behavior to always return true
    RootUtil.Companion[methodName2].implementation = function () {
        console.log("[*] Hooking checkRootMethod2 - Always returning true");
        return true;
    };

    // Hooking checkRootMethod3 and modifying its behavior to always return true
    RootUtil.Companion[methodName3].implementation = function () {
        console.log("[*] Hooking checkRootMethod3 - Always returning true");
        return true;
    };

    // Hooking checkRootMethod4 and modifying its behavior to always return true
    RootUtil.Companion[methodName4].implementation = function () {
        console.log("[*] Hooking checkRootMethod4 - Always returning true");
        return true;
    };
});
