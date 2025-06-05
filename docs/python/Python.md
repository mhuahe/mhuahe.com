# Python

## 基础知识

### 基础

- `CPython`: Python3.5自带解释器
- `Jython`: 运行在Java平台上的Python解释器，可以直接把Python代码编译成Java字节码执行。
- `:`：类似为代码块{}
- `input()`：类似Scanner()
- `'Hello, %s' % 'world'`：'Hello,world'
- `'Hi, %s, you have $%d.' % ('Michael', 1000000)`：'Hi, Michael, you have $1000000.'

### list

```python
classmates = ['Michael', 'Bob', 'Tracy']
len(classmates)
classmates[0]
classmates[-1]
classmates.append('Adam') # 新增末尾元素
classmates.insert(1, 'Jack') # 新增指定位置元素
classmates.pop() # 删除末尾元素
classmates.pop(1)
classmates[1] = 'Sarah' # 覆盖
a.sort() # 排序
```

### tuple
```python
# 和list非常类似,tuple一旦初始化就不能修改
classmates = ('Michael', 'Bob', 'Tracy')
```

### 循环

- for：`for name in names:`
- while：`while n > 0:`

### 随机数

- `range(101)`：随机数,类似Random

### dict
```python
# 类似map
d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}
d['Jack'] = 90
d['Adam']
Thomas' in d # 判断是否存在
d.get('Thomas')
```

### set
```python
# 类似set
s = set([1, 2, 3])
s.add(4)
s.remove(4)
```

### 函数
```python
def my_abs(x): # 定义函数
def calc(*numbers): # 可变函数
def person(name, age, **kw): # 关键字参数函数
```

### 切片
```python
L[0:3] # 取前3个元素
L[:10:2] # 前10个数，每两个取一个
L[::5] # 所有数，每5个取一个
```

### 迭代
```python
# 同时迭代索引和元素本身
for i, value in enumerate(['A', 'B', 'C']):
	print(i, value)
# 正常迭代
for ch in 'ABC':
	print(ch)
# 同时引用了两个变量
for x, y in [(1, 1), (2, 4), (3, 9)]:
	print(x, y)
```

### 列表生成式
```python
# 生成list
list(range(1, 6)) == [1, 2, 3, 4, 5]
[x * x for x in range(1, 6)] == [1, 4, 9, 16, 25]
# 筛选出仅偶数的平方
[x * x for x in range(1, 6) if x % 2 == 0] == [4, 16]
# 双层循环
[m + n for m in 'ABC' for n in 'XYZ'] == ['AX', 'AY', 'AZ', 'BX', 'BY', 'BZ', 'CX', 'CY', 'CZ']
# os.listdir可以列出文件和目录
[d for d in os.listdir('.')]
# 迭代map
d = {'x': 'A', 'y': 'B', 'z': 'C' }
[k + '=' + v for k, v in d.items()]
# 把一个list中所有的字符串变成小写
L = ['Hello', 'World', 'IBM', 'Apple']
[s.lower() for s in L]
```

### 生成器generator
```python
# 第一种方法:只要把一个列表生成式的[]改成()，就创建了一个generator
g = (x * x for x in range(10))
# 通过next()函数获得generator的下一个返回值
next(g)
g = (x * x for x in range(10))
for n in g:
	print(n)
```

### 变量可以指向函数
```python
f = abs
f(-10) == abs(-10)
```

### 函数名也是变量
```python
# 传入函数
def add(x, y, f):
    return f(x) + f(y)
add(-5, 6, abs) == 11
```

### map()
```python
# 将传入的函数依次作用到序列的每个元素，并把结果作为新的Iterator返回
list(map(str, [1, 2, 3, 4, 5, 6, 7, 8, 9]))
```

### reduce()
```python
# 把结果继续和序列的下一个元素做累积计算
reduce(f, [x1, x2, x3, x4]) = f(f(f(x1, x2), x3), x4)
```

### filter()
```python
# 把传入的函数依次作用于每个元素，然后根据返回值是True还是False决定保留还是丢弃该元素。
def is_odd(n):
    return n % 2 == 1
list(filter(is_odd, [1, 2, 4, 5, 6, 9, 10, 15])) == [1, 5, 9, 15]
```

### sorted()
```python
# 接收一个key函数来实现自定义的排序
sorted([36, 5, -12, 9, -21], key=abs) == [5, 9, -12, -21, 36]
```

### 函数作为返回值
```python
def lazy_sum(*args):
    def sum():
        ax = 0
        for n in args:
            ax = ax + n
        return ax
    return sum
f = lazy_sum(1, 3, 5, 7, 9)
f() == 25
```

### 匿名函数
```python
list(map(lambda x: x * x, [1, 2, 3, 4])) == [1, 4, 9, 16]
```

### name属性拿到函数的名字
```python
now.__name__
```

### 装饰器decorator
```python
def log(func):
    def wrapper(*args, **kw):
        print('call %s():' % func.__name__)
        return func(*args, **kw)
    return wrapper
@log
def now():
    print('2015-3-25')
>>> now()
call now():
2015-3-25
```

### 偏函数
```python
# int()函数可以把字符串转换为整数，当仅传入字符串时，int()函数默认按十进制转换
int('12345') == 12345
int()函数还提供额外的base参数，默认值为10。如果传入base参数，就可以做N进制的转换
int('12345', base=8) == 5349
int('12345', 16) == 74565
int2('1000000') == 64
```

### type()判断对象类型

- `type()`: 判断对象类型
- `isinstance()`: 判断一个对象是否是某种类型
- `dir()`: 获得一个对象的所有属性和方法

## Python调用JS方法

在 Python 中调用自定义的 JavaScript（JS）方法，通常有几种方式。以下是常用的几种方案和示例：

### ✅ 方法一：使用 `execjs` 库（推荐）

`execjs` 是一个非常流行的 Python 模块，可以自动检测并使用系统中安装的 JS 引擎（如 Node.js、V8、SpiderMonkey 等）来执行 JS 代码。

#### 📦 安装

```bash
pip install PyExecJS
# 或
pip install PyExecJS2 # 推荐
```

#### 🧪 示例：Python 调用自定义 JS 函数

##### 📁 自定义 JS 文件内容：`my_script.js`

```javascript
function sayHello(name) {
    return "Hello, " + name + "!";
}

function addNumbers(a, b) {
    return a + b;
}
```

##### 🐍 Python 脚本调用它：

```python
import execjs

# 读取 JS 文件内容
with open("my_script.js", "r", encoding="utf-8") as f:
    js_code = f.read()

# 创建 JS 执行环境
ctx = execjs.compile(js_code)

# 调用函数
result1 = ctx.call("sayHello", "Qwen")
print(result1)  # 输出: Hello, Qwen!

result2 = ctx.call("addNumbers", 5, 7)
print(result2)  # 输出: 12
```

### ✅ 方法二：使用 `subprocess` 调用 Node.js 命令行（适合复杂项目）

如果你的 JS 项目比较复杂（比如依赖模块），可以考虑直接通过命令行调用 Node.js 来执行脚本。

#### 📁 my_script.js

```javascript
// 接收参数并返回结果
const args = process.argv.slice(2);
const name = args[0];
console.log(`Hello, ${name}!`);
```

#### 🐍 Python 调用：

```python
import subprocess

# 调用 Node.js 脚本并传参
result = subprocess.run(
    ["node", "my_script.js", "Qwen"],
    capture_output=True,
    text=True
)

print(result.stdout.strip())  # 输出: Hello, Qwen!
```

### ✅ 方法三：使用 `selenium` + 浏览器（适用于网页中的 JS）

如果你需要从网页中调用 JS 方法（例如页面加载后执行某些 JS），可以使用 Selenium 控制浏览器。

#### 🧪 示例：

```python
from selenium import webdriver

driver = webdriver.Chrome()
driver.get("http://example.com")

# 执行页面上的 JS 函数
result = driver.execute_script("""
    function greet(name) {
        return 'Hello, ' + name + '!';
    }
    return greet('Qwen');
""")

print(result)  # 输出: Hello, Qwen!
```

### 🔍 总结对比

| 方法 | 特点 | 适用场景 |
|------|------|----------|
| `execjs` | 简单易用，支持多种 JS 引擎 | 快速执行纯 JS 函数 |
| `subprocess + node.js` | 更灵活，可运行完整项目 | 复杂 JS 项目或依赖模块 |
| `selenium` | 可操作网页 JS | 网页交互、爬虫、前端测试 |

### ❗ 注意事项

- 使用 `execjs` 时，请确保系统已安装 JS 引擎（推荐 Node.js）。
- 如果你在 Linux/macOS 上遇到问题，检查 PATH 是否包含 `node`。
- 在 Windows 上安装 Node.js 后记得重启终端或编辑器。

## 问题

### 解决cmd输入python弹出应用商店的问题

在用户变量PATH中删去`C:\Users…\AppData\Local\Microsoft\WindowsApps`或下移，此处推荐下移，删去可能会自动又添加回来。
