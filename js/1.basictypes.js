"use strict";
/*
 * @Descripttion: typescript的数据类型
 * @Author: Andy chen
 * @version:
 * @Date: 2021-04-29 14:57:04
 * @LastEditors: Andy chen
 * @LastEditTime: 2021-04-29 17:44:05
 */
/*
  typescript中为了使编写的代码更规范，更有利于维护，增加了类型校验，在typescript中主要给我们提供了以下数据类型:
  布尔类型（boolean）
  数字类型（number）
  字符串类型(string)
  数组类型（array）
  元组类型（tuple）
  枚举类型（enum）
  任意类型（any）
  void类型
  null 和 undefined
  never类型
  Object
*/
/*
    1.布尔类型（boolean）
    最基本的数据类型就是简单的true/false值，在JavaScript和TypeScript里叫做boolean（其它语言中也一样）
*/
/*
    es5的写法 （正确写法）  ts中（错误写法）
    var flag=true;
    flag=123;
*/
/*
    typescript中为了使编写的代码更规范，更有利于维护，增加了类型校验
 */
var flag = true;
// flag=123;  //错误
flag = false; //正确
console.log(flag);
/*
    2.数字类型（number）
*/
var num = 123;
num = 456; //正确
// num='456';    //错误
console.log(num);
/*
    3.字符串类型(string)
*/
var basicStr = 'this is Basictype.';
basicStr = 'hello,andy.'; //正确
// str=true;  //错误
/*
    4.数组类型（array）
    ts中定义数组有两种方式
*/
//  var arr=[1,2,3,4];  //es5定义数组
// 1.第一种定义数组的方式
var arr = [1, 2, 3, 4];
console.log(arr);
//2.第二种定义数组的方式 
var arr2 = ['1', '2', '3', '4'];
console.log(arr2);
//3、第三种定义数组的方式 
var arr3 = ['1', 2, true];
console.log(arr3);
/*
    5.元组类型（tuple）
    属于数组的一种
*/
var arr4 = [123, 'this is ts'];
// let arr4:[number,string]=[123,'this is ts',234];//错误：无法将类型number,string，number分配给number,string
console.log(arr4);
/*
    6.枚举类型（enum）
    随着计算机的不断普及，程序不仅只用于数值计算，还更广泛地用于处理非数值的数据。
    例如：性别、月份、星期几、颜色、单位名、学历、职业等，都不是数值数据。
    在其它程序设计语言中，一般用一个数值来代表某一状态，这种处理方法不直观，易读性差。
    如果能在程序中用自然语言中有相应含义的单词来代表某一状态，则程序就很容易阅读和理解。
    也就是说，事先考虑到某一变量可能取的值，尽量用自然语言中含义清楚的单词来表示它的每一个值，
    这种方法称为枚举方法，用这种方法定义的类型称枚举类型。
        enum 枚举名{
            标识符[=整型常数],
            标识符[=整型常数],
            ...
            标识符[=整型常数],
        } ;

 */
var Colors;
(function (Colors) {
    Colors[Colors["blue"] = 0] = "blue";
    Colors[Colors["red"] = 1] = "red";
    Colors[Colors["green"] = 2] = "green";
})(Colors || (Colors = {}));
;
var c = Colors.red;
console.log(c); //1 标识符未赋值，值为下标
// Demo
var getValue = function () {
    return 0;
};
var List;
(function (List) {
    List[List["A"] = getValue()] = "A";
    List[List["B"] = 2] = "B";
    List[List["C"] = 3] = "C";
})(List || (List = {}));
console.log(List.A); // 0
console.log(List.B); // 2
console.log(List.C); // 3
//A 的值是被计算出来的。注意注释部分，如果某个属性的值是计算出来的，那么它后面一位的成员必须要初始化值。
/*
    7.任意类型（any）：表示允许赋值为任意类型
    声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值
*/
// 如果是一个普通类型，在赋值过程中改变类型是不被允许的
var num2 = '7';
//num2=7; //错误
//如果是 any 类型，则允许被赋值为任意类型。
var num3 = '7';
num3 = 8;
console.log(num3);
// 在任意值上访问任何属性都是允许的
var anyThing = 'hello';
console.log(anyThing.myName);
// 允许调用任何方法
var otherThing = 'Tom';
otherThing.setName('Andy');
otherThing.setName('Andy').sayHello();
/*
    8.void
    
*/
//表示没有任何返回值的函数
function alertName() {
    alert('My name is Andy.');
}
// alert(alertName());
//声明一个 void 类型的变量没有什么用,只能赋值undefined和null
var unusable = undefined;
/*
    9.null 和 undefined
    tsconfig.json中设置的是："strict": true
    然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。
    这能避免 很多常见的问题。
    也许在某处你想传入一个 string或null或undefined，你可以使用联合类型string | null | undefined。
    再次说明，稍后我们会介绍联合类型。
*/
var u = undefined;
console.log(u);
var n = null;
console.log(n);
//以下内容基于  tsconfig.json中设置的如果是："strict": false
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
// let num4: number = undefined;// 这样不会报错
// let u1: undefined;
// let num: number = u1; // 这样也不会报错
// void 类型的变量不能赋值给 number 类型的变量：
/*
    let u2: void;
    let num5: number = u2;//报错
*/
/*
    10.Never
    表示的是那些永不存在的值的类型
    never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；
    变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
    never类型是任何类型的子类型，也可以赋值给任何类型；
    然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。
    any也不可以赋值给never
 */
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
create({ prop: 0 }); // 正确
create(null); // 正确
// create(42); // 报错
// create("string"); // 报错
// create(false); // 报错
// create(undefined); // 报错
/*
    类型断言：
    有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。
    通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
    通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。
    类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。
    它没有运行时的影响，只是在编译阶段起作用。
    TypeScript会假设你，程序员，已经进行了必须的检查。
    有2种语法形式
    注意：当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
*/
// 1."尖括号"语法：
var someValue = "this is a string";
var strLength = someValue.length;
// 2.as语法：
var anyValue = "this is other string";
var strsLength = anyValue.length;
