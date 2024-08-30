# 项目-博客

## docusaurus

### 部署

#### 地址 

文档：https://docusaurus.io/zh-CN/

代码：https://github.com/h1075335917/hmh.com

#### 脚手架

```sh
npx create-docusaurus@latest my-website classic
```

#### 目录结构

```bash
my-website
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock
```

- `/blog/`- 包含博客 Markdown 文件。如果您禁用了博客插件，则可以删除该目录，也可以在设置选项后更改其名称`path`。更多详细信息可以在[博客指南中找到](https://docusaurus.io/docs/blog)
- `/docs/`- 包含文档的 Markdown 文件。自定义 中文档侧边栏的顺序`sidebars.js`。如果您禁用了文档插件，则可以删除该目录，也可以在设置选项后更改其名称`path`。更多详细信息可以在[文档指南中找到](https://docusaurus.io/docs/docs-introduction)
- `/src/`- 非文档文件，例如页面或自定义 React 组件。您不必严格将非文档文件放在这里，但是将它们放在集中目录下可以更轻松地指定，以防您需要进行某种 linting/处理
  - `/src/pages`- 此目录中的任何 JSX/TSX/MDX 文件都将转换为网站页面。更多详细信息可以在[页面指南中找到](https://docusaurus.io/docs/creating-pages)
- `/static/`- 静态目录。这里的任何内容都将被复制到最终`build`目录的根目录中
- `/docusaurus.config.js`- 包含站点配置的配置文件。这相当于`siteConfig.js`Docusaurus v1 中的
- `/package.json`- Docusaurus 网站是一个 React 应用程序。您可以在其中安装和使用您喜欢的任何 npm 软件包
- `/sidebars.js`- 文档使用它来指定侧边栏中文档的顺序

#### 更新Docusaurus版本

有多种方法可以更新 Docusaurus 版本。一种有保证的方法是手动将版本号更改`package.json`为所需的版本。请注意，所有`@docusaurus/`命名空间包应使用相同的版本。

然后，在包含 的目录中`package.json`，运行包管理器的安装命令：`yarn install`。

检查更新是否成功：`npx docusaurus --version`。

### 配置

`docusaurus.config.js`

### 部署到Github

1. 配置文件中设置：

```sh
url: 'https://mhuahe.github.io/',
baseUrl: '/hmh.com/',

organizationName: 'mhuahe',
projectName: 'hmh.com',
```

2. 设置Github配置Setting>Pages

3. 执行命令：

   - `yarn build`打包

   - `cmd /C 'set "GIT_USER=mhuahe" && yarn deploy'`

     设置变量 && 部署到Github pages

   - https://mhuahe.github.io/hmh.com/  

     访问Github Pages地址

### 集成搜索引擎Algolia

配置

```js
themeConfig: {
    //algolia文档搜索
    algolia: {
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_SEARCH_API_KEY',
        indexName: 'YOUR_INDEX_NAME',
        // 上下文搜索：它确保搜索结果与当前语言和版本相关
        contextualSearch: true,
        externalUrlRegex: 'external\\.com|domain\\.com',
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
        // Optional: Algolia search parameters
        searchParameters: {},
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,
    },
}
```
### 集成本地搜索引擎docusaurus-search-local

配置

```js
themes: [
  [
    require.resolve('@easyops-cn/docusaurus-search-local'),
    /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
    ({
      // `hashed` is recommended as long-term-cache of index file is possible.
      hashed: true,
      // language: ["en", "zh"],
    }),
  ],
],
```
启动搜索

```
yarn run build
yarn run serve
```

### Markdown 和 JSX
Docusaurus v3使用MDX v3。

MDX语法主要与CommonMark兼容，但更严格，因为您的.mdx文件可以使用 JSX 并编译成真正的 React 组件（检查 Playground ）。

一些有效的 CommonMark 功能不适用于 MDX（更多信息），特别是：

- 缩进代码块：使用三个反引号代替
- 自动链接 (`<http://localhost:3000>`)：使用常规链接语法 (`[http://localhost:3000](http://localhost:3000)`)
- HTML 语法 (`<p style="color: red;">`)：使用JSX代替 (`<p style={{color: 'red'}}>`)
- 未转义的`{`and `<`：用( `\{`and `\<`)转义