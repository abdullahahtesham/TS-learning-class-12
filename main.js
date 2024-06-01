var Days1;
(function (Days1) {
    Days1[Days1["Monday"] = 0] = "Monday";
    Days1[Days1["Tuesday"] = 1] = "Tuesday";
    Days1[Days1["Wednesday"] = 5] = "Wednesday";
})(Days1 || (Days1 = {}));
// capital letter in name is recommded
// that group of items which cannot change
console.log(Days1.Monday); //by dot notation
console.log(Days1["Monday"]); //by square notation
console.log(Days1[0]);
console.log(Days1[2]);
var Days2;
(function (Days2) {
    Days2["Monday"] = "Sunny Weather ";
    Days2["Tuesday"] = "Rainy Day";
    Days2["Wednesday"] = "Dry Weather";
})(Days2 || (Days2 = {}));
console.log(Days2.Monday);
console.log(Days2.Wednesday);
var Days3;
(function (Days3) {
    Days3[Days3["Monday"] = 0] = "Monday";
    Days3[Days3["Tuesday"] = 1] = "Tuesday";
    Days3[Days3["Wednesday"] = 2] = "Wednesday";
})(Days3 || (Days3 = {}));
console.log(Days3.Monday);
console.log(Days3.Wednesday);
// multiple group of constant are use the enum
//Data types
//any
var val;
// data type whoes type is not known by us
val = "Ali";
val = 5;
val = true; ///any data type
val = undefined;
val = null;
var val2;
val2 = 1234;
val2 = "string";
val2 = true;
val2 = undefined;
val2 = null;
//type casting
var val3 = val;
/*let val4 : string = val2 */ //this is the difference in the any and unknownn by using unknown error will show
// diiference b/w any and unknow is that when we assign the any or unknown will be assign in
function myFun() {
    while (true) { }
    return 0;
}
// myFun()
var myFun1 = function (num1) {
    return num1;
};
// console.log(myFun1(111));
// types allies
// type muFun2 = string | number ;
var abc = 4; ///this is called the type casting
console.log(abc);
var data;
var xyz = data; ///this is called the type casting
// tuples
var trafficLight = ["Red", "Blue", "Green"];
console.log(trafficLight.join(" "));
var tuples = ["Red", true, 123333];
//Default Parameter
function myWelcome(name1) {
    if (name1 === void 0) { name1 = "user"; }
    return "Hello ".concat(name1);
}
console.log(myWelcome());
//optional Parameter
function myWelcome1(name1, age) {
    if (name1 === void 0) { name1 = "user"; }
    return "".concat(name1, " is ").concat(age, " old");
}
console.log(myWelcome1());
console.log(myWelcome1("Ali", 18));
console.log(myWelcome1("Ali"));
//rest parameter
function myWelcome2(name1) {
    if (name1 === void 0) { name1 = "user"; }
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return "Welcome, ".concat(name1, " is a ").concat(rest);
}
console.log(myWelcome2("Ali", "MERN Stack Developer", "Full Stack Developer", "Also Frontend Developer"));
function myWelcome3(message) {
    return message;
}
myWelcome3(1212121);
