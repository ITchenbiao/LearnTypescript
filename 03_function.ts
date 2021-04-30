/*
 * @Descripttion: 3.TypeScript Funciton 
 * @Author: Andy chen
 * @version: 
 * @Date: 2021-04-30 15:35:41
 * @LastEditors: Andy chen
 * @LastEditTime: 2021-04-30 17:50:00
 */

/* 
    3.typeScript中的函数：
    3.1、函数的定义
    3.2、可选参数
    3.3、默认参数
    3.4、剩余参数
    3.5、函数重载
    3.6、箭头函数
*/

/* 
    3.1、函数的定义
*/

//es5定义函数的方法
/* 
//es5的函数声明法
function add(x, y) {
    return x + y;
}
//es5的匿名函数
let myAdd = function(x, y) { 
    return x + y; 
}; 
*/

// ts中的函数
// 函数声明法
function add(x: number, y: number): number {
    return x + y;
}

// 匿名函数
let myAdd = function(x: number, y: number): number { 
    return x + y; 
};
/*  
    为函数定义类型
    函数类型包含两部分：参数类型和返回值类型
    当写出完整函数类型的时候，这两部分都是需要的。 
    我们以参数列表的形式写出参数类型，为每个参数指定一个名字和类型 
*/
// 增加函数可读性 可以将myAdd改为以下方式：
// 只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确
let myAddNew: (baseValue: number, increment: number) => number =
    function(x: number, y: number): number { 
        return x + y; 
    };

//没有返回值的方法 
function myVoid():void {
    console.log('no data');
    // return 1;//error
}
/* 
    3.2 可选参数
    es5里面方法的实参和行参可以不一样，但是ts中必须一样，如果不一样就需要配置可选参数
*/

function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

// let result1 = buildName("Andy");                  // error, 少参数
// let result2 = buildName("Andy", "Chen", "Brother");  // error, 多一个参数
let result3 = buildName("Andy", "Chen");         // 正确 return "Andy Chen"

/* 
    JavaScript里，每个参数都是可选的，可传可不传。 没传参的时候，它的值就是undefined。 
    在TypeScript里可以在参数名旁使用 ?实现可选参数的功能
    注意：可选参数必须在必须参数后面
*/

function buildOtherName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let res1 = buildOtherName("ZhangFei");  // 正确 return "Andy"
// let res2 = buildOtherName("ZhangFei", "Chen", "Tony");  // error, 多出一个参数
let res3 = buildOtherName("ZhangFei", "Chen");  // 正确 return "Andy Chen"

/* 
    3.3 默认参数
    es5里面没法设置默认参数，es6和ts中都可以设置默认参数
    注意：默认参数可以放到必须参数前，前提是必须明确的传入undefined值来获得默认值
*/
function buildNewName(firstName: string, lastName="GuanYu") {
    return firstName + " " + lastName;
}
let newres1 = buildNewName("LiuBei");                  // return "Bob Smith"
let newres2 = buildNewName("LiuBei", undefined);       // 正确, also return "LiuBei GuanYu"
// let newres3 = buildNewName("LiuBei", "Andy", "String");  // error, 多出一个参数
let newres4 = buildNewName("LiuBei", "Andy");         // 正确 return "LiuBei Andy"

// 默认参数可以放到必须参数前，前提是必须明确的传入undefined值来获得默认值
function buildNames(firstName = "Will", lastName: string) {
    return firstName + " " + lastName;
}

// let results1 = buildNames("Bob");                  // error, 少参数
// let results2 = buildNames("Bob", "Andy", "Sr.");  // error, 多一个参数
let results3 = buildNames("Bob", "Andy");         // return "Bob Andy"
let results4 = buildNames(undefined, "Andy");     // return "Will Andy"

/* 
    3.4 剩余参数
    在JavaScript里，可以使用 arguments来访问所有传入的参数
*/
function sum(a:number,b:number,c:number,d:number):number{

    return a+b+c+d;
}

sum(1,2,3,4);// 10

//三点运算符 接受新参传过来的值
function mySum(...myresult:number[]):number{
    let sum=0;
    for(let i=0;i<myresult.length;i++){
        sum+=myresult[i];
    }

    return sum;
}

mySum(1,2,3,4,5);// 15    

// 不确定参数个数时 多参数情况
function newSum(a:number,b:number,...newres:number[]):number{
    let sum=a+b;
    for(let i=0;i<newres.length;i++){
        sum+=newres[i];
    }
    return sum;
}

newSum(1,2,3,4,5,6); // 21

/* 
    3.5 函数重载
    javascript中函数的重载：重载指的是两个或者两个以上同名函数，但它们的参数不一样，这时会出现函数重载的情况。
    typescript中函数的重载：通过为同一个函数提供多个函数类型定义来试下多种功能的目的。
*/

//es5中出现同名方法，下面的会替换上面的方法 
/*
function css(config){

    //...

}

//此函数会覆盖上一个css函数
function css(config,value){

 //...

}
*/

//ts的重载
function getUserInfo(name:string):string;
function getUserInfo(age:number):string;
function getUserInfo(str:any):any{
    if(typeof str==='string')
        return `我叫${str}`;
    else
        return `我${str}岁啦`;    
};

getUserInfo('Andy');// return "我叫Andy"
getUserInfo(18);// return "我18岁啦"
// getInfo(true); //error 布尔类型不属于any类型

/* 
    3.6 箭头函数
    箭头函数的this指向上下文
*/

// es5
/* 
setTimeout(function(){

    console.log('hello,funciton')

},1000)
*/

// es6 
setTimeout(()=>{

    console.log('hi,Andy')

},1000)

