<!--
 * @Descripttion: 
 * @Author: Andy chen
 * @version: 
 * @Date: 2021-04-28 16:12:32
 * @LastEditors: Andy chen
 * @LastEditTime: 2021-04-29 18:04:38
-->
# LearnTypeScript
LearnTypeScript:Zero to One.

## 1.什么是 TypeScript
1. 官方定义：` TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open source. (TypeScript 是 JavaScript 的类型的超集，它可以编译成纯 JavaScript。编译出来的 JavaScript 可以运行在任何浏览器上。TypeScript 编译工具可以运行在任何服务器和任何系统上。TypeScript 是开源的。)`  
2. 我所理解的定义：
   -  由微软开发的自由和开源的编程语言；
   -  是 JavaScript 的一个超集（添加了类型系统的 JavaScript），支持 ECMAScript 6 标准；
   -  适用于任何规模，适合开发大型应用，它可以编译成纯 JavaScript，编译出来的 JavaScript 可以运行在任何浏览器上。
## 2.为什么选择TypeScript
### 1.TypeScript 增加了代码的可读性和可维护性
   - 类型系统实际上是最好的文档，大部分的函数看看类型的定义就可以知道如何使用了;
   - 可以在编译阶段就发现大部分错误，避免了在运行时候出错；
   - 增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等。
### 2. TypeScript 非常包容
   - TypeScript 是 JavaScript 的超集，.js 文件可以直接重命名为 .ts 即可;
   - 即使不显式的定义类型，也能够自动做出类型推论;
   - 可以定义从简单到复杂的几乎一切类型;
   - 即使 TypeScript 编译报错，也可以生成 JavaScript 文件;
   - 兼容第三方库，即使第三方库不是用 TypeScript 写的，也可以编写单独的类型文件供 TypeScript 读取。
### 3. TypeScript 拥有活跃的社区
   - 大部分第三方库都有提供给 TypeScript 的类型定义文件;
   - Google 开发的 Angular2 就是使用 TypeScript 编写的;
   -  拥抱了 ES6 规范，也支持部分 ESNext 草案的规范。
### 4. TypeScript 的缺点
   -  有一定的学习成本，需要理解接口（Interfaces）、泛型（Generics）、类（Classes）、枚举类型（Enums）等;
   -  短期可能会增加一些开发成本，需要多写一些类型的定义；
   -  集成到构建流程需要一些工作量；
   -  可能和一些库结合的不是很完美。
## 3. 安装TypeScript  
  - 安装nodejs： <http://nodejs.cn/download/>
  - 安装国内镜像： 
    ```javascript
        npm config set registry https://registry.npm.taobao.org
    ```
  - 安装 typescript（在全局环境下安装 tsc 命令） 
    ```javascript
    npm install -g typescript 
    or   
    cnpm install -g typescript //国内镜像 速度快
    ```
  - 用`tsc`命令执行 TypeScript 的相关代码，查看版本号：  
  
    ```javascript
    tsc -v
    Version 4.2.4 
    ```
  - 编译器：推荐使用 Visual Studio Code(是一款开源，跨终端的轻量级编辑器，内置了对 TypeScript 的支持；与typescript都属于微软，此编译器是用typescript编写)：<https://code.visualstudio.com/>  

## 4.自动编译及时运行TypeScript
浏览器只识别`.js`文件，不能直接识别`.ts`文件,所以会用`tsc`命令手动生成`.js`文件。
- 为了自动编译`.ts`文件， 可以创建`tsconfig.json`文件(终端输入以下命令)：  
  
  ```javascript
    tsc --init
  ```
- 修改`tsconfig.json`文件：找到` "outDir": "./js" `，把注释打开
- 在VSCode编译器中点击菜单`终端 -> 运行任务 -> tsc：监视-tsconfig.json` ，这样会在文件夹`js`目录下自动生成`.js`文件。  
## 5.直接在终端查看TypeScript运行结果
想在控制台直接查看`.ts`文件，需要2个步骤：  
1. 执行命令 `tsc hellotypescript.ts` 编译成`.js`文件(`hellotypescript`是ts文件名)
    ```javascript
    tsc hellotypescript.ts 
    ```
2. 在执行命令 `node hellotypescript.js` 才会在终端输出结果：
    ```javascript
    node hellotypescript.js
    hello,TypeScript. //输出结果
    ```
3. 为了更快在终端查看运行结果，我们可以全局安装ts-node 就可以一步到位：
   ```javascript
   npm install -g ts-node
   or
   cnpm install -g ts-node //国内镜像
   ```     


