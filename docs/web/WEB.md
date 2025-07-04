---
sidebar_position: 1
---

# WEB

## nvm

nvm(Node Version Manager) 是一个用于管理系统上 Node.js 多个版本的工具

```sql
-- 显示可以安装的所有node.js的版本
nvm list available
-- 安装node.js的命名 version是版本
nvm install 16.13.1
-- 查看已安装的node.js
nvm list
-- 切换到使用指定的nodejs版本
nvm use 16.13.1

-- 配置
node_mirror: npm.taobao.org/mirrors/node/
npm_mirror: npm.taobao.org/mirrors/npm/

npm config set registry https://registry.npmmirror.com
-- 其他
npm 官方原始镜像网址是：https://registry.npmjs.org/
淘宝最新 NPM 镜像：https://registry.npmmirror.com
阿里云 NPM 镜像：https://npm.aliyun.com
腾讯云 NPM 镜像：https://mirrors.cloud.tencent.com/npm/
华为云 NPM 镜像：https://mirrors.huaweicloud.com/repository/npm/
网易 NPM 镜像：https://mirrors.163.com/npm/
中科院大学开源镜像站：http://mirrors.ustc.edu.cn/
清华大学开源镜像站：https://mirrors.tuna.tsinghua.edu.cn/
腾讯，华为，阿里的镜像站基本上比较全
```

## nrm

nrm 是一个用于管理 npm 镜像源的工具，可以方便地在不同的镜像源之间切换。

| 命令                 | 说明             |
| -------------------- | ---------------- |
| `npm install -g nrm` | 安装 nrm         |
| `nrm ls`             | 查看所有镜像源   |
| `nrm use taobao`     | 切换到淘宝镜像源 |

## fnm

`fnm`（FNM Node Version Manager）是一个用于管理不同 Node.js 版本的工具。要使用 `fnm` 切换 Node.js 版本，请遵循以下步骤：

在 PowerShell 中使用 fnm

```
fnm env --use-on-cd --shell power-shell | Out-String | Invoke-Expression
```

### 1. 安装 fnm

#### 使用 Winget (Windows)

```
winget install Schniz.fnm
```

### 2. 验证 fnm 安装

安装完成后，您可以验证 `fnm` 是否正确安装：

```sh
fnm --version
```

这将显示 `fnm` 的版本号。

### 3. 列出可用的 Node.js 版本

您可以通过以下命令查看可用的 Node.js 版本列表：

```sh
fnm ls-remote
```

这将列出所有可安装的 Node.js 版本。

### 4. 安装 Node.js 版本

要安装特定版本的 Node.js，您可以使用以下命令：

```sh
fnm install <version>
```

例如，如果您想安装 Node.js 18.17.0，可以运行：

```sh
fnm install 18.17.0
```

### 5. 切换 Node.js 版本

要切换到已安装的 Node.js 版本，可以使用以下命令：

```sh
fnm use <version>
```

例如，要切换到 Node.js 18.17.0，可以运行：

```sh
fnm use 18.17.0
```

## npm

| 命令                      | 描述             |
| ------------------------- | ---------------- |
| `npm install -g npm`      | 升级到最新版本   |
| `npm cache clean --force` | 清理缓存删除依赖 |

## yarn

| 命令                                                          | 描述                        |
| ------------------------------------------------------------- | --------------------------- |
| `npm install --global yarn`                                   | 安装 yarn                   |
| `yarn --version`                                              | 查看版本                    |
| `yarn set version latest`                                     | 升级版本                    |
| `yarn add <package-name>@<version>`                           | 安装指定依赖                |
| `yarn cache clean`                                            | 清理缓存删除依赖            |
| `rmdir /s /q node_modules`                                    | 删除依赖                    |
| `yarn global remove package-name`                             | 删除全局安装的依赖项        |
| `yarn install --frozen-lockfile`                              | 忽略 yarn.lock 重新安装依赖 |
| `yarn config list`                                            | 查看配置                   |
| `yarn config set [proxy\|https-proxy] http://127.0.0.1:10809` | 设置代理                    |
| `yarn config delete [proxy\|https-proxy]`                     | 删除代理配置                 |

## pnpm

| 命令                                               | 描述                        |
| -------------------------------------------------- | --------------------------- |
| `iwr https://get.pnpm.io/install.ps1 -useb \| iex` | windows 下无 node 安装 pnpm |
| `npm install -g pnpm`                              | node 安装 pnpm              |

## Plasmo

https://github.com/PlasmoHQ/plasmo/blob/main/cli/plasmo/i18n/README.zh-CN.md

> Plasmo 是一个专门开发浏览器扩展程序的框架，使用它来构建您的产品，不用担心配置文件和构建浏览器扩展的奇怪特性。就像是浏览器插件开发领域的 Next.js。

### 特征

- 支持 Recat + Typescript
- 声明式开发 ， 自动生成 mainfest.json（MV3，Manifest Version 3）
- 热加载
- .env* 文件
- 远程代码打包（例如用于 gtag4）
- 自动化部署（通过BPP）

### 系统要求

- Node.js 16.x 或更高版本
- MacOS、Windows 或 Linux
- 推荐使用pnpm

### 初始化

```shell
pnpm dlx plasmo init
# OR npm v7
npm x plasmo init
```

### 目录

```css
example-dir
├───background.ts /*后台*/
├───assets /*资源*/
|   └───icon512.png
├───popup /*弹窗*/
|   ├───index.tsx
|   └───button.tsx
├───options /*选项*/  
|   ├───index.tsx
|   ├───utils.ts
|   └───input.tsx
├───newtab /*新标签页*/ 
|   ├───index.tsx
├───contents /*内容*/
|   ├───site-one.ts
|   ├───site-two.ts
|   └───site-three.ts
...
```

您还可以将源代码放在src子目录下，而不是将源代码放在根目录中。请注意，asset和其他配置文件仍需要在根目录中。要使 TypeScript 正常工作，您需要在tsconfig.json文件paths中将`~*` 或 `@/*`前缀指向`"./src/*"`

```json
"paths": {
  "~*": ["./src/*"]
}
```

### 运行

```shell
pnpm dev
pnpm build
```

创建上传到 Chrome 商店的的 zip 包

```shell
pnpm build -- --zip
# OR
npm build -- --zip
# OR
plasmo build --zip
```

## vite

```sql
-- 搭建
npm create vite@latest
||
yarn create vite
||
pnpm create vite
```

## package-lock 和 package

```sql
1. `package-lock.json` 和 `package.json` 是 Node.js 项目中的两个重要文件，用于管理项目的依赖项
- `package.json` 是项目的描述文件，包含项目的元数据、配置信息和依赖项列表。
- `package-lock.json` 是由 npm 生成的锁定文件，记录了当前安装的每个包及其精确的版本号和依赖关系树，用于保证安装的依赖项的一致性。

-- package.json
`package.json` 是项目的描述文件，它包含了项目的元数据以及相关的配置信息，如项目名称、版本、作者、许可证、脚本命令等。除此之外，`package.json` 还包含了项目的依赖项列表和版本约束。

在 `package.json` 中，你可以定义项目的依赖项，包括需要的包及其版本范围。当你运行 `npm install` 或 `yarn install` 命令时，它们会根据 `package.json` 文件中的依赖项列表自动安装项目所需的包。此外，`package.json` 还可以定义一些脚本命令，用于项目的构建、测试、运行等任务。

-- package-lock.json
`package-lock.json` 是由 npm 生成的锁定文件，它记录了当前安装的每个包及其精确的版本号和依赖关系树。它的目的是确保在不同的环境中（如不同的机器、不同的构建过程）安装的依赖项保持一致。

`package-lock.json` 文件的存在可以确保团队成员之间安装的依赖项是一致的，避免了版本冲突和意外的依赖项更新。当你运行 `npm install` 或 `yarn install` 命令时，它们会根据 `package-lock.json` 文件中的锁定信息来安装确切的包版本，而不是使用范围约束。这样可以保证在不同环境下安装的依赖项是一致的。
```

```sql
npm cache clean --force
rm node_modules
npm install
```

## JS 基础

```sql
-- let 和 const
let — 现代的变量声明方式。
var — 老旧的变量声明方式。一般情况下，我们不会再使用它。但是，我们会在 老旧的 "var" 章节介绍 var 和 let 的微妙差别，以防你需要它们。
const — 类似于 let，但是变量的值无法被修改。
```

### 数据类型

```sql
-- 在 JavaScript 中有 8 种基本的数据类型（译注：7 种原始类型和 1 种引用类型）
-- Number 类型
number 类型代表整数和浮点数。
数字可以有很多操作，比如，乘法 *、除法 /、加法 +、减法 - 等等。
除了常规的数字，还包括所谓的“特殊数值（“special numeric values”）”也属于这种类型：Infinity 和 NaN
1.Infinity 代表数学概念中的 无穷大 ∞。是一个比任何数字都大的特殊值
如：alert( 1 / 0 ); // Infinity
2.NaN 代表一个计算错误

-- BigInt 类型
在 JavaScript 中，“number” 类型无法安全地表示大于 (253-1)（即 9007199254740991），或小于 -(253-1) 的整数。
尾部的 "n" 表示这是一个 BigInt 类型
const bigInt = 1234567890123456789012345678901234567890n;

-- String 类型
在 JavaScript 中，有三种包含字符串的方式。
双引号："Hello".
单引号：'Hello'.
反引号：`Hello`.
双引号和单引号都是“简单”引用，在 JavaScript 中两者几乎没有什么差别。
反引号是 功能扩展 引号。它们允许我们通过将变量和表达式包装在 ${…} 中，来将它们嵌入到字符串中。例如
let name = "John";
// 嵌入一个变量
alert( `Hello, ${name}!` ); // Hello, John!
// 嵌入一个表达式
alert( `the result is ${1 + 2}` ); // the result is 3

-- Boolean 类型（逻辑类型）
boolean 类型仅包含两个值：true 和 false

-- null 值
特殊的 null 值不属于上述任何一种类型。
相比较于其他编程语言，JavaScript 中的 null 不是一个“对不存在的 object 的引用”或者 “null 指针”。
JavaScript 中的 null 仅仅是一个代表“无”、“空”或“值未知”的特殊值。

-- undefined 值
特殊值 undefined 和 null 一样自成类型。
undefined 的含义是 未被赋值。
如果一个变量已被声明，但未被赋值，那么它的值就是 undefined

-- Object 类型和 Symbol 类型
object 类型是一个特殊的类型。
其他所有的数据类型都被称为“原始类型”，因为它们的值只包含一个单独的内容（字符串、数字或者其他）。相反，object 则用于储存数据集合和更复杂的实体
symbol 类型用于创建对象的唯一标识符

-- typeof 运算符
typeof 运算符返回参数的类型。当我们想要分别处理不同类型值的时候，或者想快速进行数据类型检验时，非常有用
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)
```

### 交互：alert、prompt 和 confirm

```sql
-- alert
弹出的这个带有信息的小窗口被称为 模态窗。“modal” 意味着用户不能与页面的其他部分（例如点击其他按钮等）进行交互，直到他们处理完窗口。在上面示例这种情况下 —— 直到用户点击“确定”按钮

-- prompt
prompt 函数接收两个参数：
result = prompt(title, [default]);
浏览器会显示一个带有文本消息的模态窗口，还有 input 框和确定/取消按钮。
title
显示给用户的文本
default
可选的第二个参数，指定 input 框的初始值。
let age = prompt('How old are you?', 100);
alert(`You are ${age} years old!`); // You are 100 years old!

-- confirm
result = confirm(question);
confirm 函数显示一个带有 question 以及确定和取消两个按钮的模态窗口。
点击确定返回 true，点击取消返回 false
```

### 类型转换、运算符

```sql
有三种常用的类型转换：转换为 string 类型、转换为 number 类型和转换为 boolean 类型。
字符串转换 —— 转换发生在输出内容的时候，也可以通过 String(value) 进行显式转换。原始类型值的 string 类型转换通常是很明显的。
数字型转换 —— 转换发生在进行算术操作时，也可以通过 Number(value) 进行显式转换。
布尔型转换 —— 转换发生在进行逻辑操作时，也可以通过 Boolean(value) 进行显式转换

比较运算符始终返回布尔值。
字符串的比较，会按照“词典”顺序逐字符地比较大小。
当对不同类型的值进行比较时，它们会先被转化为数字（不包括严格相等检查）再进行比较。
在非严格相等 == 下，null 和 undefined 相等且各自不等于任何其他的值。
在使用 > 或 < 进行比较时，需要注意变量可能为 null/undefined 的情况。比较好的方法是单独检查变量是否等于 null/undefined。

-- ??
空值合并运算符 ?? 提供了一种从列表中选择第一个“已定义的”值的简便方式。
它被用于为变量分配默认值：
// 当 height 的值为 null 或 undefined 时，将 height 的值设置为 100
height = height ?? 100;
```

### 函数

```sql
-- 函数声明
使用 函数声明 创建函数:
function name(parameter1, parameter2, ... parameterN) {
  ...body...
}
-- 函数返回值
函数可以将一个值返回到调用代码中作为结果
function sum(a, b) {
  return a + b;
}
let result = sum(1, 2);
alert( result ); // 3

-- 函数命名
"show" —— 开头的函数通常会显示某些内容
"get…" —— 返回一个值
"calc…" —— 计算某些内容
"create…" —— 创建某些内容
"check…" —— 检查某些内容并返回boolean 值
```

### 函数表达式

```sql
-- 它允许我们在任何表达式的中间创建一个新函数
-- function 关键字后面没有函数名。函数表达式允许省略函数名
let sayHi = function() {
  alert( "Hello" );
};

-- 函数是一个值
无论函数是如何创建的，函数都是一个值
-- 注意，最后一行代码并不会运行函数，因为 sayHi 后没有括号
function sayHi() {
  alert( "Hello" );
}
alert( sayHi ); // 显示函数代码


-- 回调函数
-- ask 的两个参数值 showOk 和 showCancel 可以被称为 回调函数 或简称 回调
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
function showOk() {
  alert( "You agreed." );
}
function showCancel() {
  alert( "You canceled the execution." );
}
// 用法：函数 showOk 和 showCancel 被作为参数传入到 ask
ask("Do you agree?", showOk, showCancel);
```

### 箭头函数

```sql
-- 创建函数还有另外一种非常简单的语法，并且这种方法通常比函数表达式更好
let func = (arg1, arg2, ..., argN) => expression;
-- == 》
let func = function(arg1, arg2, ..., argN) {
  return expression;
};

-- 多行的箭头函数
let sum = (a, b) => {  // 花括号表示开始一个多行函数
  let result = a + b;
  return result; // 如果我们使用了花括号，那么我们需要一个显式的 “return”
};
alert( sum(1, 2) ); // 3
```

### 对象

```sql
-- 创建一个空的对象（“空柜子”）
let user = new Object(); // “构造函数” 的语法
let user = {};  // “字面量” 的语法
通常，我们用花括号。这种方式我们叫做 字面量

-- 文本和属性
我们可以在创建对象的时候，立即将一些属性以键值对的形式放到 {...} 中
let user = {     // 一个对象
  name: "John",  // 键 "name"，值 "John"
  age: 30        // 键 "age"，值 30
};
get ==》 user.name
add ==》 user.isAdmin = true;
delete ==》delete user.age;

-- 可以用多字词语来作为属性名，但必须给它们加上引号
let user = {
  name: "John",
  age: 30,
  "likes birds": true  // 多词属性名必须加引号
};

-- in
let user = { name: "John", age: 30 };
alert( "age" in user ); // true，user.age 存在
alert( "blabla" in user ); // false，user.blabla 不存在。

-- "for..in" 循环
for (key in object) {
  // 对此对象属性中的每个键执行的代码
}
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};
for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // 属性键的值
  alert( user[key] ); // John, 30, true
}

-- 克隆与合并，Object.assign
-- 将所有源对象的属性拷贝到目标对象 dest 中
Object.assign(dest, [src1, src2, src3...])

-- 可选链 ?.
如果可选链 ?. 前面的值为 undefined 或者 null，它会停止运算并返回 undefined
-- 其它变体：?.()
let userAdmin = {
  admin() {
    alert("I am admin");
  }
};
let userGuest = {};
userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // 啥都没发生（没有这样的方法）
-- ?.[]
let key = "firstName";
let user1 = {
  firstName: "John"
};
let user2 = null;
alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined

-- JSON
JavaScript 提供序列化（serialize）成 JSON 的方法 JSON.stringify 和解析 JSON 的方法 JSON.parse

-- object转数组
const obj = {
  "0": {
    "text": "冻结",
    "value": "0"
  },
  "1": {
    "text": "正常",
    "value": "1"
  }
};
const arr = Object.values(obj);
const arr = Object.keys(obj).map(key => obj[key]);
console.log(arr);

-- Rest 参数与 Spread 语法
若 ... 出现在函数参数列表的最后，那么它就是 rest 参数，它会把参数列表中剩余的参数收集到一个数组中。
若 ... 出现在函数调用或类似的表达式中，那它就是 spread 语法，它会把一个数组展开为列表。
```

### 全局对象

```sql
--
alert("Hello");
// 等同于
window.alert("Hello");
-- 如果一个值非常重要，以至于你想使它在全局范围内可用，那么可以直接将其作为属性写入：
// 将当前用户信息全局化，以允许所有脚本访问它
window.currentUser = {
  name: "John"
};
// 代码中的另一个位置
alert(currentUser.name);  // John
// 或者，如果我们有一个名为 "currentUser" 的局部变量
// 从 window 显式地获取它（这是安全的！）
alert(window.currentUser.name); // John
```

### 任务调度

```sql
setTimeout 允许我们将函数推迟到一段时间间隔之后再执行。
setInterval 允许我们重复运行一个函数，从一段时间间隔之后开始运行，之后以该时间间隔连续重复运行该函数。
-- setTimeOut
let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
参数说明：
func|code
想要执行的函数或代码字符串。 一般传入的都是函数。由于某些历史原因，支持传入代码字符串，但是不建议这样做。
delay
执行前的延时，以毫秒为单位（1000 毫秒 = 1 秒），默认值是 0；
arg1，arg2…
要传入被执行函数（或代码字符串）的参数列表（IE9 以下不支持）
function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}
setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John
-- 用 clearTimeout 来取消调度
let timerId = setTimeout(...);
clearTimeout(timerId);

-- setInterval
let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
// 每 2 秒重复一次
let timerId = setInterval(() => alert('tick'), 2000);
// 5 秒之后停止
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

--零延时调度 setTimeout(func, 0)（与 setTimeout(func) 相同）
用来调度需要尽快执行的调用，但是会在当前脚本执行完成后进行调用
```

### Class 类

```sql
-- “class” 语法
class MyClass {
  // class 方法
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
-- 类表达式
let User = class {
  sayHi() {
    alert("Hello");
  }
};
-- 类继承
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}
let rabbit = new Rabbit("White Rabbit");
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!
-- 静态属性和静态方法
class MyClass {
  static property = ...;
  static method() {
    ...
  }
}
-- 私有的和受保护的属性和方法
受保护的属性通常以下划线 _ 作为前缀
私有属性和方法应该以 # 开头。它们只在类的内部可被访问
-- 类检查："instanceof"
instanceof 操作符用于检查一个对象是否属于某个特定的 class。同时，它还考虑了继承。
obj instanceof Class
如果 obj 隶属于 Class 类（或 Class 类的衍生类），则返回 true。
typeof	原始数据类型	string
{}.toString	原始数据类型，内建对象，包含 Symbol.toStringTag 属性的对象	string
instanceof	对象	true/false
```

### 错误处理

```sql
-- “try…catch” 语法
try {
  // 执行此处代码
} catch (err) {
  // 如果发生 error，跳转至此处
  // err 是一个 error 对象
} finally {
  // 无论怎样都会在 try/catch 之后执行
}
-- Error 对象包含下列属性：
message _ 人类可读的 error 信息。
name —— 具有 error 名称的字符串（Error 构造器的名称）。
stack（没有标准，但得到了很好的支持）—— Error 发生时的调用栈。
--
如果我们不需要 error 对象，我们可以通过使用 catch { 而不是 catch (err) { 来省略它。
--
我们也可以使用 throw 操作符来生成自定义的 error。从技术上讲，throw 的参数可以是任何东西，但通常是继承自内建的 Error 类的 error 对象。
--
再次抛出（rethrowing）是一种错误处理的重要模式：catch 块通常期望并知道如何处理特定的 error 类型，因此它应该再次抛出它不知道的 error。
--
即使我们没有 try...catch，大多数执行环境也允许我们设置“全局” error 处理程序来捕获“掉出（fall out）”的 error。在浏览器中，就是 window.onerror。
```

### Promise

```sql
-- Promise 对象的构造器（constructor）语法
let promise = new Promise(function(resolve, reject) {
  // executor（生产者代码，“歌手”）
});
resolve(value) —— 如果任务成功完成并带有结果 value。
reject(error) —— 如果出现了 error，error 即为 error 对象。
executor 会自动运行并尝试执行一项工作。尝试结束后，如果成功则调用 resolve，如果出现 error 则调用 reject
-- 内部属性
由 new Promise 构造器返回的 promise 对象具有以下内部属性：
state —— 最初是 "pending"，然后在 resolve 被调用时变为 "fulfilled"，或者在 reject 被调用时变为 "rejected"。
result —— 最初是 undefined，然后在 resolve(value) 被调用时变为 value，或者在 reject(error) 被调用时变为 error。
-- 示例
let promise = new Promise(function(resolve, reject) {
  // 当 promise 被构造完成时，自动执行此函数
  // 1 秒后发出工作已经被完成的信号，并带有结果 "done"
  setTimeout(() => resolve("done"), 1000);
});
--
// Create a Promise that simulates an asynchronous operation
const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation, like fetching data from an API
  setTimeout(() => {
    const data = 'Hello, world!';
    // If the operation is successful, call resolve with the result
    resolve(data);
    // If the operation fails, call reject with an error
    // reject(new Error('Failed to fetch data'));
  }, 2000); // Simulate a delay of 2 seconds
});
// Using the Promise
myPromise.then(
  (result) => {
    console.log('Fulfilled:', result); // Output: Fulfilled: Hello, world!
  },
  (error) => {
    console.error('Rejected:', error); // Output if rejected: Rejected: Error: Failed to fetch data
  }
);
console.log('After calling Promise'); // This will be executed before the promise is resolved or rejected
-- fetch
let promise = fetch(url);
--
fetch('/article/promise-chaining/user.json')
  // 当远程服务器响应时，下面的 .then 开始执行
  .then(function(response) {
    // 当 user.json 加载完成时，response.text() 会返回一个新的 promise
    // 该 promise 以加载的 user.json 为 result 进行 resolve
    return response.text();
  })
  .then(function(text) {
    // ……这是远程文件的内容
    alert(text); // {"name": "iliakan", "isAdmin": true}
  });
```

### Promise API

```sql
-- Promise.all
假设我们希望并行执行多个 promise，并等待所有 promise 都准备就绪。
例如，并行下载几个 URL，并等到所有内容都下载完毕后再对它们进行处理。
这就是 Promise.all 的用途
let promise = Promise.all(iterable);
-- 例如，下面的 Promise.all 在 3 秒之后 settled，然后它的结果就是一个 [1, 2, 3] 数组：
Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(alert); // 1,2,3 当上面这些 promise 准备好时：每个 promise 都贡献了数组中的一个元素

-- Promise.allSettled
如果任意的 promise reject，则 Promise.all 整个将会 reject。当我们需要 所有 结果都成功时，它对这种“全有或全无”的情况很有用：
Promise.all([
  fetch('/template.html'),
  fetch('/style.css'),
  fetch('/data.json')
]).then(render); // render 方法需要所有 fetch 的数据

-- Promise.race
与 Promise.all 类似，但只等待第一个 settled 的 promise 并获取其结果（或 error）
let promise = Promise.race(iterable);
-- 例如，这里的结果将是 1：
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1

-- Promise.any
与 Promise.race 类似，区别在于 Promise.any 只等待第一个 fulfilled 的 promise，并将这个 fulfilled 的 promise 返回。如果给出的 promise 都 rejected，那么返回的 promise 会带有 AggregateError —— 一个特殊的 error 对象，在其 errors 属性中存储着所有 promise error。
let promise = Promise.any(iterable);
```

### async/await

```sql
-- async function
让我们以 async 这个关键字开始。它可以被放置在一个函数前面，如下所示：
async function f() {
  return 1;
}
在函数前面的 “async” 这个单词表达了一个简单的事情：即这个函数总是返回一个 promise。其他值将自动被包装在一个 resolved 的 promise 中。
-- 例如，下面这个函数返回一个结果为 1 的 resolved promise，让我们测试一下：
async function f() {
  return 1;
}
f().then(alert); // 1
-- ……我们也可以显式地返回一个 promise，结果是一样的：
async function f() {
  return Promise.resolve(1);
}
f().then(alert); // 1

-- await 只在 async 函数内工作
let value = await promise;
关键字 await 让 JavaScript 引擎等待直到 promise 完成（settle）并返回结果
这里的例子就是一个 1 秒后 resolve 的 promise：
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });
  let result = await promise; // 等待，直到 promise resolve (*)
  alert(result); // "done!"
}
f();
```

### 模块

```sql
一个模块（module）就是一个文件。一个脚本就是一个模块。就这么简单。
模块可以相互加载，并可以使用特殊的指令 export 和 import 来交换功能，从另一个模块调用一个模块的函数：
export 关键字标记了可以从当前模块外部访问的变量和函数。
import 关键字允许从其他模块导入功能。
-- 例如，我们有一个 sayHi.js 文件导出了一个函数：
// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
-- ……然后另一个文件可能导入并使用了这个函数：
// 📁 main.js
import { sayHi } from './sayHi.js';
alert(sayHi); // function...
sayHi('John'); // Hello, John!
```

### Proxy 和 Reflect

```sql
-- Proxy
let proxy = new Proxy(target, handler)
-- 参数
target —— 是要包装的对象，可以是任何东西，包括函数。
handler —— 代理配置：带有“捕捉器”（“traps”，即拦截操作的方法）的对象。比如 get 捕捉器用于读取 target 的属性，set 捕捉器用于写入 target 的属性，等等。
-- 例子（带有 “get” 捕捉器的默认值）
-- get(target, property, receiver)
-- target目标对象、property目标属性名、receiver是this对象本身
let numbers = [0, 1, 2];
numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0; // 默认值
    }
  }
});
alert( numbers[1] ); // 1
alert( numbers[123] ); // 0（没有这个数组项）
-- 例子（使用 “set” 捕捉器进行验证）
-- set(target, property, value, receiver)
-- target目标对象、property目标属性名、value目标属性值、receiver是this对象本身
let numbers = [];
numbers = new Proxy(numbers, { // (*)
  set(target, prop, val) { // 拦截写入属性操作
    if (typeof val == 'number') {
      target[prop] = val;
      return true;
    } else {
      return false;
    }
  }
});
numbers.push(1); // 添加成功
numbers.push(2); // 添加成功
alert("Length is: " + numbers.length); // 2
numbers.push("test"); // TypeError（proxy 的 'set' 返回 false）
alert("This line is never reached (error in the line above)");
```

```mdx-code-block
import jsRunInBrowser from '/img/docs/web/web/WEB-JS在浏览器中运行时的鸟瞰图.png';

<img src={jsRunInBrowser} alt="WEB-JS在浏览器中运行时的鸟瞰图" width="50%" />
```

### Document

```sql
-- window 根对象
1. 首先，它是 JavaScript 代码的全局对象
2. 其次，它代表“浏览器窗口”，并提供了控制它的方法。
-- 文档对象模型（DOM）
将所有页面内容表示为可以修改的对象
eg:
// 将背景颜色修改为红色
document.body.style.background = "red";
// 在 1 秒后将其修改回来
setTimeout(() => document.body.style.background = "", 1000);
-- 浏览器对象模型（BOM）
表示由浏览器（主机环境）提供的用于处理文档（document）之外的所有内容的其他对象
eg:
1. navigator 对象提供了有关浏览器和操作系统的背景信息。
navigator 有许多属性，但是最广为人知的两个属性是：
navigator.userAgent —— 关于当前浏览器，
navigator.platform —— 关于平台（有助于区分 Windows/Linux/Mac 等）。
2. location 对象允许我们读取当前 URL，并且可以将浏览器重定向到新的 URL
alert(location.href); // 显示当前 URL
if (confirm("Go to Wikipedia?")) {
  location.href = "https://wikipedia.org"; // 将浏览器重定向到另一个 URL
}

-- document.getElementById
如果一个元素有 id 特性（attribute），那我们就可以使用 document.getElementById(id) 方法获取该元素，无论它在哪里
let elem = document.getElementById('elem');
-- querySelectorAll
返回与给定 CSS 选择器匹配的所有元素
let elements = document.querySelectorAll('ul > li:last-child');
-- querySelector
elem.querySelector(css) 调用会返回给定 CSS 选择器的第一个元素
结果与 elem.querySelectorAll(css)[0] 相同
-- matches
它只会检查 elem 是否与给定的 CSS 选择器匹配。它返回 true 或 false
-- closest
查找与 CSS 选择器匹配的最近的祖先
-- getElementsBy*
getElementsByTagName(tag) 查找具有给定标签的元素，并返回它们的集合
eg: let divs = document.getElementsByTagName('div');
getElementsByClassName(className) 返回具有给定CSS类的元素
```

## 基础

### CSS 属性

#### position

```sql
-- 说明
指定一个元素（静态的，相对的，绝对或固定）的定位方法的类型
JS语法：object.style.position="absolute"

-- 属性值
-- absolute
生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。
元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。

-- fixed
生成固定定位的元素，相对于浏览器窗口进行定位。
元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。

-- relative
生成相对定位的元素，相对于其正常位置进行定位。
因此，"left:20"会向元素的LEFT位置添加20像素。

-- static
默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。

-- sticky
粘性定位，该定位基于用户滚动的位置。
它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。

-- inherit
规定应该从父元素继承position属性的值。

-- initial(关键字)
设置该属性为默认值。
```

### JS

#### 合并参数对象

```js
data() {
    listQuery: {
        pageNum: 1,
            pageSize: 10
    },
    parentId: 0
}
//合并参数
let params = {
    "parentId": this.parentId,
    ...this.listQuery
};
```

##### assign 对象合并

```js
let obj1 = {
  name: "dk",
  age: "99",
  feature: "stronge",
};
let obj2 = {
  name: "tk",
  age: "99",
  feature1: "noStronge",
  address: {
    city: "广州",
    address: {
      city: "深圳",
    },
  },
  skills: ["JavaScript", "React", "Node"],
};
let res = Object.assign(obj1, obj2);
res.address.address.city = "广州";
console.log(obj2);
console.log(res);
```

##### 扩展运算符(...)

```js
let obj1 = {
  name: "dk",
  age: "99",
  feature: "stronge",
};

let obj2 = {
  name: "tk",
  age: "99",
  feature1: "noStronge",
  address: {
    city: "广州",
    address: {
      city: "深圳",
    },
  },
  skills: ["JavaScript", "React", "Node"],
};

let res = { ...obj1, ...obj2 };
res.address.address.city = "杭州";
console.log(obj2);
console.log(res);
```

##### merge 深拷贝

```js
const _ = require("lodash");
let obj1 = {
  name: "dk",
  age: "99",
  feature: "stronge",
};
let obj2 = {
  name: "tk",
  age: "99",
  feature1: "noStronge",
  address: {
    city: "广州",
    address: {
      city: "深圳",
    },
  },
  skills: ["JavaScript", "React", "Node"],
};
const res = _.merge(obj1, obj2);
console.log(res);
```

#### 获取和修改

```sql
-- 获取js中的数据
{{ownerQrcodeNet}}

-- 获取表单字段值
$("#cronExpression").val()

-- 变更表单字段值
$("#cronExpression").val(cronExpression)

-- 修改指定class="inuptxt"的css样式
$(".inuptxt").css("width",220)
$(".inuptxt").css({
   "width": 220
})
```

#### 定时器

```js
setTimeout(function () {
  that.showQRCode();
}, 200);
```

#### WebSocket

```sql
-- WebSocket 构造函数（客户端就会与服务器进行连接）
var ws = new WebSocket('ws://localhost:8080');
```

```sql
-- webSocket.readyState
readyState属性返回实例对象的当前状态，共有四种：
    CONNECTING：值为0，表示正在连接。
    OPEN：值为1，表示连接成功，可以通信了。
    CLOSING：值为2，表示连接正在关闭。
    CLOSED：值为3，表示连接已经关闭，或者打开连接失败。
-- 示例
switch (ws.readyState) {
  case WebSocket.CONNECTING:
    break;
  case WebSocket.OPEN:
    break;
  case WebSocket.CLOSING:
    break;
  case WebSocket.CLOSED:
    break;
  default:
    break;
}
```

```sql
-- webSocket.onopen
实例对象的onopen属性，用于指定连接成功后的回调函数
ws.onopen = function () {
  ws.send('Hello Server!');
}
如果要指定多个回调函数，可以使用addEventListener方法
ws.addEventListener('open', function (event) {
});
-- webSocket.onclose
实例对象的onclose属性，用于指定连接关闭后的回调函数
ws.onclose = function(event) {
  var code = event.code;
  var reason = event.reason;
  var wasClean = event.wasClean;
  // handle close event
};
ws.addEventListener("close", function(event) {
});
-- webSocket.onmessage
实例对象的onmessage属性，用于指定收到服务器数据后的回调函数
服务器数据可能是文本，也可能是二进制数据（blob对象或Arraybuffer对象）
ws.onmessage = function(event) {
  if(typeof event.data === String) {
    console.log("Received data string");
  }
  if(event.data instanceof ArrayBuffer){
    var buffer = event.data;
    console.log("Received arraybuffer");
  }
};
ws.addEventListener("message", function(event) {
});
-- webSocket.onerror
实例对象的onerror属性，用于指定报错时的回调函数
socket.onerror = function(event) {
  // handle error event
};
socket.addEventListener("error", function(event) {
});
```

```sql
-- webSocket.send()
实例对象的send()方法用于向服务器发送数据
-- 发送文本
ws.send('your message');
-- 发送 Blob 对象
var file = document
  .querySelector('input[type="file"]')
  .files[0];
ws.send(file);
-- 发送 ArrayBuffer 对象
var img = canvas_context.getImageData(0, 0, 400, 320);
var binary = new Uint8Array(img.data.length);
for (var i = 0; i < img.data.length; i++) {
  binary[i] = img.data[i];
}
ws.send(binary.buffer);
```

```sql
-- webSocket.bufferedAmount
实例对象的bufferedAmount属性，表示还有多少字节的二进制数据没有发送出去。它可以用来判断发送是否结束
var data = new ArrayBuffer(10000000);
socket.send(data);
if (socket.bufferedAmount === 0) {
  // 发送完毕
} else {
  // 发送还没结束
}
```

### Axios 拦截器

```javascript
// 1.创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000, // 请求超时时间
});
//将创建的 Axios 实例 service 导出，以便在其他模块中使用
export default service;
```

```js
// request拦截器
service.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      config.headers["Authorization"] = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
  },
  (error) => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);
```

```js
// response拦截器
service.interceptors.response.use(
  (response) => {
    /**
     * code为非200是抛错 可结合自己业务进行修改
     */
    const res = response.data;
    if (res.code !== 200) {
      Message({
        message: res.message,
        type: "error",
        duration: 3 * 1000,
      });
      // 401:未登录,弹窗;
      if (res.code === 401) {
        MessageBox.confirm(
          "你已被登出，可以取消继续留在该页面，或者重新登录",
          "确定登出",
          {
            confirmButtonText: "重新登录",
            cancelButtonText: "取消",
            type: "warning",
          }
        ).then(() => {
          store.dispatch("FedLogOut").then(() => {
            location.reload(); // 为了重新实例化vue-router对象 避免bug
          });
        });
      }
      // 403:没有相关权限;
      if (res.code === 401) {
        Message.error("没有相关权限");
      }
      return Promise.reject("error");
    } else {
      return response.data;
    }
  },
  (error) => {
    console.log("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 3 * 1000,
    });
    return Promise.reject(error);
  }
);
```
