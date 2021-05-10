/*
 * @Descripttion: es5中的类 继承
 * @Author: Andy chen
 * @version: 
 * @Date: 2021-05-10 10:37:44
 * @LastEditors: Andy chen
 * @LastEditTime: 2021-05-10 14:56:25
 */

/* 
    es5 class
*/

// 1.最简单的类
/* 
function Person(){

    this.name='zhangsan';
    this.age=18;

}
var p=new Person();
console.log(p.name); //zhangsan
*/

//2.构造函数和原型链里面加方法
/* 
function Person(){

    this.name='zhangsan';//属性
    this.age=18;
    this.run=function(){ //实例方法 通过new以后才能被调用
        
        console.log(this.name+'running');
    }

}

// 原型链属性会被多个实例共享，构造函数不会
Person.prototype.sex='man';
Person.prototype.work=function(){

    console.log(this.name+'working');

}

var p=new Person();
p.run();//zhangsan running
p.work();//zhangsan working 
*/

// 3.类的静态方法
/* 
function Person(){

    this.name='zhangsan';

}

// 静态方法
Person.sleep=function(){

    console.log('我是静态方法');

}
//调用静态方法
Person.sleep();//我是静态方法 
*/

// 4.es5的继承 对象冒充实现继承
/*
function Person(){

    this.name='zhangsan';
    this.age=18;
    this.run=function(){ //实例方法 
        
        console.log(this.name+'running');

    }

}

Person.prototype.sex='man';
Person.prototype.work=function(){

    console.log(this.name+'working');

}

// Web类继承Person类 原型链+对象冒充的组合继承模式
function Web(){

    Person.call(this);//对象冒充实现继承

}

var w=new Web();
w.run();//zhagnsan running（对象冒充可以继承构造函数里面的属性和方法）
w.work();//error  (对象冒充可以继承构造函数里面的属性和方法，但无法继承原型链上的属性和方法)
 */

// 5.es5继承   原型链实现继承
/* 
function Person(){

    this.name='zhangsan';
    this.age=18;
    this.run=function(){ //实例方法 
        
        console.log(this.name+'running');

    }

}

Person.prototype.sex='man';
Person.prototype.work=function(){

    console.log(this.name+'working');

}

function Web(){

}

Web.prototype=new Person();//原型链实现继承
var w=new Web();

//原型链实现继承:可以继承构造函数里面的属性和方法 也可以继承原型链上面的属性和方法
w.run();//zhagnsan running
w.work();//zhagnsan working 
 */

// 原型链实现继承的弊端：实例化子类不能给父类传参
/* 
function  Person(name,age){

    this.name=name;
    this.age=age;
    this.run=function(){ //实例方法 
        
        console.log(this.name+'running');

    }

}

Person.prototype.sex='man';
Person.prototype.work=function(){

    console.log(this.name+'working');

}
var p=new Person('lisi',20);
p.run();//lisi running

function Web(name,age){

}

Web.prototype=new Person();
var w=new Web('lisi',20);//实例化子类不能给父类传参
w.run();//undefined running 
*/

// 6.原型链+对象冒充的组合继承模式
// 第一种表达式
/* 
function Person(name,age){

    this.name=name;
    this.age=age;
    this.run=function(){ //实例方法 
        
        console.log(this.name+'running');

    }

}

Person.prototype.sex='man';
Person.prototype.work=function(){

    console.log(this.name+'working');

}

function Web(name,age){

    Person.call(this,name,age);   //对象冒充继承   实例化子类可以给父类传参
    
}

Web.prototype=new Person();
var w=new Web('lisi',20); 
w.run();//lisi running  
*/

// 第二种表达式
/* 
function Person(name,age){
    this.name=name;
    this.age=age;
    this.run=function(){ //实例方法 
        
        console.log(this.name+'running');

    }

}

Person.prototype.sex='man';
Person.prototype.work=function(){

    console.log(this.name+'working');

}

function Web(name,age){

    Person.call(this,name,age);   //对象冒充继承   实例化子类可以给父类传参
    
}

Web.prototype=Person.prototype;
var w=new Web('lisi',20); 
w.run();//lisi running   
*/