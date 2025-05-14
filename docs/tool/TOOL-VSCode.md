---
sidebar_position: 3
---

# 工具-VSCode

## 插件

### Git

- Git Graph 
- GitLens
- Git History

### Chinese (Simplified) (简体中文)

> 中文语言包

### 翻译

- Comment Translate

### Highlight Matching Tag

> 高亮区分标签

### Markdown

- Markdown All in One：提供了丰富的 Markdown 编辑功能，适合日常编写和管理 Markdown 文档。
- Markdown Preview Enhanced：提供了增强的 Markdown 预览功能，支持多种主题和样式，使文档看起来更加美观。
- Markdown Preview Github Styling：提供了与 GitHub 类似的 Markdown 预览样式，使文档看起来更加专业。
- markmap：实时思维导图。

### SQL

- MySQL

### Prettier - Code formatter

> Prettier格式化代码。

### Stylelint

> 为 CSS 提供代码风格检查，支持 CSS、SCSS、Less 等样式文件。

### Image Preview

> 图片预览

### Regex Previewer

> 正则表达式预览

### Auto Rename Tag

> 自动更新 HTML、XML 或 JSX 中标签的名称，当您更改一个标签的名字时，它会自动同步更改配对的结束标签

### Azure Repos

> 微软的代码管理工具.提供与 Azure DevOps 服务中的 Git 仓库进行交互的能力。通过这个插件，可以在 VSCode 内部管理和提交代码更改，浏览仓库的历史记录，以及执行其他常见的 Git 操作

### C/C++

- C/C++：包括智能感知（IntelliSense）、导航、格式化、重构以及其他编辑功能。
- C/C++ Extension Pack：一个插件包，包含了多个用于 C/C++ 开发的插件，旨在为用户提供一个完整的 C/C++ 开发环境。
- C/C++ Themes：为 C/C++ 代码提供不同的主题，以提高代码的可读性和视觉效果。

### Java

- Extension Pack for Java：为 Java 提供支持，包括智能感知、代码补全、导航、调试等功能。
- Spring Boot Extension Pack：为 Spring Boot 提供支持，包括项目创建、依赖管理、构建和运行等功能。

### Python

- Python：为 Python 提供语言支持，包括智能感知、代码补全、导航、调试等功能。
- Pylint：为 Python 提供代码分析工具，支持代码风格检查、代码复杂度检查等功能。
- Jupyter：为 Python 提供 Jupyter Notebook 支持，支持交互式编程、数据可视化等功能。
- Python Extension Pack：一个插件包，包含了多个用于 Python 开发的插件，旨在为用户提供一个完整的 Python 开发环境。
- Pylance：为 Python 提供智能感知（IntelliSense）支持，支持代码补全、导航、调试等功能。
- Python Debugger：为 Python 提供调试器，支持断点调试、变量查看、调用栈查看等功能。

### Vue

- Vetur：为 Vue 提供语言支持，包括智能感知、代码补全、导航、调试等功能。
- Vue - Official：为 Vue 提供官方支持，包括智能感知、代码补全、导航、调试等功能。
- VueHelper：为 Vue 提供代码片段，以提高开发效率。

### Code Runner

> 允许用户在不离开编辑器的情况下运行各种编程语言的代码。这个插件非常适用于快速测试代码片段或小型脚本，无需复杂的构建或调试配置。

### ES7+ React/Redux/React-Native snippets

> 为 React、Redux 和 React Native 提供代码片段，以提高开发效率。

### Import Cost

> 显示导入模块的大小，以帮助识别潜在的性能问题。

### IntelliCode、IntelliCode API Usage Examples

> 提供智能代码补全和建议，以提高编码效率。

### Open Browser Preview

> 直接从 VSCode 预览 HTML 文件，并且支持实时更新预览页面。

### Open in Browser

> 在默认浏览器中打开当前活动的 HTML 文件。

### Path Intellisense

> 为文件路径提供智能感知（IntelliSense）支持。

### vscode-icons

> 为文件和文件夹添加图标，以提高代码的可读性和视觉效果。

## 设置

### 设置水平或垂直活动栏

`workbench.activityBar.orientation`：设置水平或垂直活动栏。

### 标签栏行为

`workbench.tabs.wrap`：控制编辑器标签是否应该在到达视口边缘时换行。

### 换行

`editor.wordW`：`Word Wrap` 设置成 `wordWrapColumn`

### 设置代理

```json title="settings.json"
"http.proxy": "http://your-proxy-server:port",
"https.proxy": "https://your-proxy-server:port",
"http.proxyStrictSSL": false
```

### 新窗口

`Open Folders In New Window`：打开新窗口，设置为`on`。

### 配置项目使用的JDK版本

`java.configuration.runtimes`：用于配置和指定要在 Java 项目中使用的 Java 运行时环境

```json title="settings.json"
"java.configuration.runtimes": [
    {
        "name": "JavaSE-1.8",
        "path": "C:\\Program Files\\Java\\jdk1.8.0_144",
        "default": true
    },
    {
        "name": "JavaSE-21",
        "path": "C:\\Program Files\\Java\\jdk-21",
    }
]
```

在命令窗口，输入`Java: Configure Java Runtime`，设置JDK版本。

## 快捷键

### VsCode 快捷键有五种组合方式（科普）

1. `Ctrl + Shift + ?` : 这种常规组合按钮
2. `Ctrl + V Ctrl +V` : 同时依赖一个按键的组合
3. `Shift + V c` : 先组合后单键的输入
4. `Ctrl + Click`: 键盘 + 鼠标点击
5. `Ctrl + DragMouse` : 键盘 + 鼠标拖动

### 通用快捷键

| 快捷键          | 作用                   |
| :-------------- | :--------------------- |
| Ctrl+Shift+P,F1 | 展示全局命令面板       |
| Ctrl+P          | 快速打开最近打开的文件 |
| Ctrl+Shift+N    | 打开新的编辑器窗口     |
| Ctrl+Shift+W    | 关闭编辑器             |

### 基础编辑

| 快捷键               | 作用                     |
| :------------------- | :----------------------- |
| Ctrl + X             | 剪切                     |
| Ctrl + C             | 复制                     |
| Alt + up/down        | 移动行上下               |
| Shift + Alt up/down  | 在当前行上下复制当前行   |
| Ctrl + Shift + K     | 删除行                   |
| Ctrl + Enter         | 在当前行下插入新的一行   |
| Ctrl + Shift + Enter | 在当前行上插入新的一行   |
| Ctrl + Shift + \     | 匹配花括号的闭合处，跳转 |
| Ctrl + ] / [         | 行缩进                   |
| Home                 | 光标跳转到行头           |
| End                  | 光标跳转到行尾           |
| Ctrl + Home          | 跳转到页头               |
| Ctrl + End           | 跳转到页尾               |
| Ctrl + up/down       | 行视图上下偏移           |
| Alt + PgUp/PgDown    | 屏视图上下偏移           |
| Ctrl + Shift + [     | 折叠区域代码             |
| Ctrl + Shift + ]     | 展开区域代码             |
| Ctrl + K Ctrl + [    | 折叠所有子区域代码       |
| Ctrl + k Ctrl + ]    | 展开所有折叠的子区域代码 |
| Ctrl + K Ctrl + 0    | 折叠所有区域代码         |
| Ctrl + K Ctrl + J    | 展开所有折叠区域代码     |
| Ctrl + K Ctrl + C    | 添加行注释               |
| Ctrl + K Ctrl + U    | 删除行注释               |
| Ctrl + /             | 添加关闭行注释           |
| Shift + Alt +A       | 块区域注释               |
| Alt + Z              | 添加关闭词汇包含         |

### 导航

| 快捷键             | 作用                     |
| :----------------- | :----------------------- |
| Ctrl + T           | 列出所有符号             |
| Ctrl + G           | 跳转行                   |
| Ctrl + P           | 跳转文件                 |
| Ctrl + Shift + O   | 跳转到符号处             |
| Ctrl + Shift + M   | 打开问题展示面板         |
| F8                 | 跳转到下一个错误或者警告 |
| Shift + F8         | 跳转到上一个错误或者警告 |
| Ctrl + Shift + Tab | 切换到最近打开的文件     |
| Alt + left / right | 向后、向前               |
| Ctrl + M           | 进入用Tab来移动焦点      |

### 查询与替换

| 快捷键            | 作用                                       |
| :---------------- | :----------------------------------------- |
| Ctrl + F          | 查询                                       |
| Ctrl + H          | 替换                                       |
| F3 / Shift + F3   | 查询下一个/上一个                          |
| Alt + Enter       | 选中所有出现在查询中的                     |
| Ctrl + K Ctrl + D | 移动当前选择到下个匹配选择的位置(光标选定) |
| Alt + C / R / W   | 不分大小写/使用正则/全字匹配               |

### 多行光标操作于选择

| 快捷键                           | 作用                                     |
| :------------------------------- | :--------------------------------------- |
| Ctrl + D                         | 选中单词，按下快捷继续选中下个相同的单词 |
| Alt + Click                      | 插入光标-支持多个                        |
| Ctrl + Alt + up/down             | 上下插入光标-支持多个                    |
| Ctrl + U                         | 撤销最后一次光标操作                     |
| Shift + Alt + I                  | 插入光标到选中范围内所有行结束符         |
| Ctrl + I                         | 选中当前行                               |
| Ctrl + Shift + L                 | 选择所有出现在当前选中的行-操作          |
| Ctrl + F2                        | 选择所有出现在当前选中的词汇-操作        |
| Shift + Alt + right              | 从光标处扩展选中全行                     |
| Shift + Alt + left               | 收缩选择区域                             |
| Shift + Alt + (drag mouse)       | 鼠标拖动区域，同时在多个行结束符插入光标 |
| Ctrl + Shift + Alt + (Arrow Key) | 也是插入多行光标的[方向键控制]           |
| Ctrl + Shift + Alt + PgUp/PgDown | 也是插入多行光标的[整屏生效]             |

### 丰富的语言操作

| 快捷键               | 作用                           |
| :------------------- | :----------------------------- |
| Ctrl + Space         | 输入建议[智能提示]             |
| Ctrl + Shift + Space | 参数提示                       |
| Tab                  | Emmet指令触发/缩进             |
| Shift + Alt + F      | 格式化代码                     |
| Ctrl + K Ctrl + F    | 格式化选中部分的代码           |
| F12                  | 跳转到定义处                   |
| Alt + F12            | 代码片段显示定义               |
| Ctrl + K F12         | 在其他窗口打开定义处           |
| Ctrl + .             | 快速修复部分可以修复的语法错误 |
| Shift + F12          | 显示所有引用                   |
| F2                   | 重命名符号                     |
| Ctrl + Shift + . / , | 替换下个值                     |
| Ctrl + K Ctrl + X    | 移除空白字符                   |
| Ctrl + K M           | 更改页面文档格式               |

### 编辑器管理

| 快捷键                     | 作用                     |
| :------------------------- | :----------------------- |
| Ctrl + F4, Ctrl + W        | 关闭编辑器               |
| Ctrl + k F                 | 关闭当前打开的文件夹     |
| Ctrl + \                   | 切割编辑窗口             |
| Ctrl + 1/2/3               | 切换焦点在不同的切割窗口 |
| Ctrl + Shift + PgUp/PgDown | 切换标签页的位置         |

### 文件管理

| 快捷键             | 作用                                   |
| :----------------- | :------------------------------------- |
| Ctrl + N           | 新建文件                               |
| Ctrl + O           | 打开文件                               |
| Ctrl + S           | 保存文件                               |
| Ctrl + Shift + S   | 另存为                                 |
| Ctrl + K S         | 保存所有当前已经打开的文件             |
| Ctrl + F4          | 关闭当前编辑窗口                       |
| Ctrl + K Ctrl + W  | 关闭所有编辑窗口                       |
| Ctrl + Shift + T   | 撤销最近关闭的一个文件编辑窗口         |
| Ctrl + K Enter     | 保持开启                               |
| Ctrl + Shift + Tab | 调出最近打开的文件列表，重复按会切换   |
| Ctrl + Tab         | 与上面一致，顺序不一致                 |
| Ctrl + K P         | 复制当前打开文件的存放路径             |
| Ctrl + K R         | 打开当前编辑文件存放位置【文件管理器】 |
| Ctrl + K O         | 在新的编辑器中打开当前编辑的文件       |

### 显示

| 快捷键           | 作用                           |
| :--------------- | :----------------------------- |
| F11              | 切换全屏模式                   |
| Shift + Alt + 1  | 切换编辑布局【目前无效】       |
| Ctrl + =/-       | 放大 / 缩小                    |
| Ctrl + B         | 侧边栏显示隐藏                 |
| Ctrl + Shift + E | 资源视图和编辑视图的焦点切换   |
| Ctrl + Shift + F | 打开全局搜索                   |
| Ctrl + Shift + G | 打开Git可视管理                |
| Ctrl + Shift + D | 打开DeBug面板                  |
| Ctrl + Shift + X | 打开插件市场面板               |
| Ctrl + Shift + H | 在当前文件替换查询替换         |
| Ctrl + Shift + J | 开启详细查询                   |
| Ctrl + Shift + V | 预览Markdown文件【编译后】     |
| Ctrl + K v       | 在边栏打开渲染后的视图【新建】 |

### 调试

| 快捷键            | 作用                |
| :---------------- | :------------------ |
| F9                | 添加解除断点        |
| F5                | 启动调试、继续      |
| F11 / Shift + F11 | 单步进入 / 单步跳出 |
| F10               | 单步跳过            |
| Ctrl + K Ctrl + I | 显示悬浮            |

### 集成终端

| 快捷键                | 作用                 |
| :-------------------- | :------------------- |
| Ctrl + `              | 打开集成终端         |
| Ctrl + Shift + `      | 创建一个新的终端     |
| Ctrl + Shift + C      | 复制所选             |
| Ctrl + Shift + V      | 复制到当前激活的终端 |
| Shift + PgUp / PgDown | 页面上下翻屏         |
| Ctrl + Home / End     | 滚动到页面头部或尾部 |