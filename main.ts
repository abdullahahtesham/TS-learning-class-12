enum Days1 {
  Monday,
  Tuesday,
  Wednesday = 5,
}
// capital letter in name is recommded
// that group of items which cannot change
console.log(Days1.Monday); //by dot notation
console.log(Days1["Monday"]); //by square notation
console.log(Days1[0]);
console.log(Days1[2]);
enum Days2 {
  Monday = "Sunny Weather ",
  Tuesday = "Rainy Day",
  Wednesday = "Dry Weather",
}
console.log(Days2.Monday);
console.log(Days2.Wednesday);

enum Days3 {
  Monday,
  Tuesday,
  Wednesday,
}
console.log(Days3.Monday);
console.log(Days3.Wednesday);
// multiple group of constant are use the enum

//Data types
//any
let val: any;
// data type whoes type is not known by us
val = "Ali";
val = 5;
val = true; ///any data type
val = undefined;
val = null;

let val2: unknown;
val2 = 1234;
val2 = "string";
val2 = true;
val2 = undefined;
val2 = null;
//type casting
let val3: string = val;
/*let val4 : string = val2 */ //this is the difference in the any and unknownn by using unknown error will show
// diiference b/w any and unknow is that when we assign the any or unknown will be assign in
function myFun() {
  while (true) {}
  return 0;
}
// myFun()
let myFun1 = function (num1) {
  return num1;
};
// console.log(myFun1(111));
// types allies
// type muFun2 = string | number ;
let abc: boolean = 4 as unknown as boolean; ///this is called the type casting
console.log(abc);

let data: unknown;
let xyz: boolean = data as unknown as boolean; ///this is called the type casting

// tuples
let trafficLight: string[] = ["Red", "Blue", "Green"];
console.log(trafficLight.join(" "));

let tuples: [string, boolean, number] = ["Red", true, 123333];
//Default Parameter
function myWelcome(name1: string = "user") {
  return `Hello ${name1}`;
}
console.log(myWelcome());
//optional Parameter
function myWelcome1(name1: string = "user", age?: number) {
  return `${name1} is ${age} old`;
}
console.log(myWelcome1());
console.log(myWelcome1("Ali", 18));
console.log(myWelcome1("Ali"));
//rest parameter
function myWelcome2(name1: string = "user", ...rest: string[]) {
  return `Welcome, ${name1} is a ${rest}`;
}
console.log(
  myWelcome2(
    "Ali",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Also Frontend Developer"
  )
);
//function overload
function myWelcome3(message: string): string;
function myWelcome3(message: number): number;
function myWelcome3(message:boolean)
function myWelcome3(message:any){     //any is esstenical in the last function
  return message;
}
myWelcome3(1212121);
