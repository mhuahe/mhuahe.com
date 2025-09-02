# Jsoup

```mdx-code-block
import Copyright from '@site/src/components/Copyright';

<Copyright behavior="学习" description="Jsoup 快速入门" url="https://dunwu.github.io/waterdrop/pages/1f697c93/" />
```

## 概述

soup总共53个类，且没有任何第三方包的依赖

```shell
    jsoup
    ├── examples #样例，包括一个将html转为纯文本和一个抽取所有链接地址的例子。    
    ├── helper #一些工具类，包括读取数据、处理连接以及字符串转换的工具
    ├── nodes #DOM节点定义
    ├── parser #解析html并转换为DOM树
    ├── safety #安全相关，包括白名单及html过滤
    └── select #选择器，支持CSS Selector以及NodeVisitor格式的遍历
```

## 使用

### parse

- `Jsoup.parse(String html)`: 从 HTML 字符串加载一个文档
- `Jsoup.parseBodyFragment(String html)`: 跟parse结果一致，创建一个空壳的文档，并插入解析过的 HTML 到body元素中

### connect

- Jsoup.connect(String url): 方法创建一个新的 Connection, 和 get() 取得和解析一个 HTML 文件。如果从该 URL 获取 HTML 时发生错误，便会抛出 IOException，应适当处理。
```java
Document doc = Jsoup.connect("http://example.com/").get();
```

### 查找元素
- getElementById(String id)
- getElementsByTag(String tag)
- getElementsByClass(String className)
- getElementsByAttribute(String key) (and related methods)
- Element siblings: siblingElements(), firstElementSibling(), lastElementSibling();nextElementSibling(), previousElementSibling()
- Graph: parent(), children(), child(int index)

### 元素数据

- attr(String key)获取属性attr(String key, String value)设置属性
- attributes()获取所有属性
- id(), className() and classNames()
- text()获取文本内容text(String value) 设置文本内容
- html()获取元素内 HTMLhtml(String value)设置元素内的 HTML 内容
- outerHtml()获取元素外 HTML 内容
- data()获取数据内容（例如：script 和 style 标签)
- tag() and tagName()

### select选择器

```java
File input = new File("/tmp/input.html");
Document doc = Jsoup.parse(input, "UTF-8", "http://example.com/");
//带有href属性的a元素
Elements links = doc.select("a[href]"); 
//扩展名为.png的图片
Elements pngs = doc.select("img[src$=.png]");
//class等于masthead的div标签
Element masthead = doc.select("div.masthead").first();
//在h3元素之后的a元素
Elements resultLinks = doc.select("h3.r > a"); 
```

#### Selector 选择器概述

- tagname: 通过标签查找元素，比如：a
- ns|tag: 通过标签在命名空间查找元素，比如：可以用 fb|- name 语法来查找 `` 元素
- #id: 通过 ID 查找元素，比如：#logo
- .class: 通过 class 名称查找元素，比如：.masthead
- [attribute]: 利用属性查找元素，比如：[href]
- [^attr]: 利用属性名前缀来查找元素，比如：可以用- [^data-] 来查找带有 HTML5 Dataset 属性的元素
- [attr=value]: 利用属性值来查找元素，比如：[width=500]
- [attr^=value], [attr$=value], [attr*=value]: 利用匹- 配属性值开头、结尾或包含属性值来查找元素，比如：[href*=/- path/]
- [attr\~=regex]: 利用属性值匹配正则表达式来查找元素，比- 如： img[src\~=(?i)\.(png|jpe?g)]
- *: 这个符号将匹配所有元素

#### Selector 选择器组合使用

- el##id: 元素+ID，比如： div##logo
- el.class: 元素+class，比如： div.masthead
- el[attr]: 元素+class，比如： a[href]
- 任意组合，比如：a[href].highlight
- ancestor child: 查找某个元素下子元素，比如：可以用.body p 查找在"body"元素下的所有p元素
- parent > child: 查找某个父元素下的直接子元素，比如：可以用div.content > p 查找 p 元素，也可以用body > * 查找 body 标签下所有直接子元素
- siblingA + siblingB: 查找在 A 元素之前第一个同级元素 B，比如：div.head + div
- siblingA \~ siblingX: 查找 A 元素之前的同级 X 元素，比如：h1 \~ p
- el, el, el:多个选择器组合，查找匹配任一选择器的唯一元素，例如：div.masthead, div.logo

#### 伪选择器 selectors

- :lt(n): 查找哪些元素的同级索引值（它的位置在 DOM 树中是相对于它的父节点）小于 n，比如：td:lt(3) 表示小于三列的元素
- :gt(n):查找哪些元素的同级索引值大于n``，比如： div p:gt(2)表示哪些 div 中有包含 2 个以上的 p 元素
- :eq(n): 查找哪些元素的同级索引值与n相等，比如：form input:eq(1)表示包含一个 input 标签的 Form 元素
- :has(seletor): 查找匹配选择器包含元素的元素，比如：div:has(p)表示哪些 div 包含了 p 元素
- :not(selector): 查找与选择器不匹配的元素，比如： div:not(.logo) 表示不包含 class=logo 元素的所有 div 列表
- :contains(text): 查找包含给定文本的元素，搜索不区分大不写，比如： p:contains(jsoup)
- :containsOwn(text): 查找直接包含给定文本的元素
- :matches(regex): 查找哪些元素的文本匹配指定的正则表达式，比如：div:matches((?i)login)
- :matchesOwn(regex): 查找自身包含文本匹配指定正则表达式的元素

注意：上述伪选择器索引是从 0 开始的，也就是说第一个元素索引值为 0，第二个元素 index 为 1 等

### 处理 URLs

#### absUrl()

在很多html页面里，链接会使用相对地址，我们有时会需要将其转变为绝对地址。Jsoup的解决方案是在attr()的参数开始加"abs:"，例如attr("abs:href")，而absUrl()就是其实现方式。

```java
Document doc = Jsoup.connect("http://www.open-open.com").get();
Element link = doc.select("a").first();
String relHref = link.attr("href"); // == "/"
String absHref = link.attr("abs:href"); // "http://www.open-open.com/"
```

### HTML 清理

> 在做网站的时候，经常会提供用户评论的功能。有些不怀好意的用户，会搞一些脚本到评论内容中，而这些脚本可能会破坏整个页面的行为，更严重的是获取一些机要信息，此时需要清理该 HTML，以避免跨站脚本cross-site scripting攻击（XSS）

使用 jsoup HTML Cleaner 方法进行清除，但需要指定一个可配置的 Whitelist

```java
String unsafe =
  "<p><a href='http://example.com/' onclick='stealCookies()'>Link</a></p>";
String safe = Jsoup.clean(unsafe, Whitelist.basic());
// now: <p><a href="http://example.com/" rel="nofollow">Link</a></p>
```