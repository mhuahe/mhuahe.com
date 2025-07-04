import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { navbarItems } from './config/navbar-items';
import { footerItems } from './config/footer-items';

const config: Config = {
  title: "mhuahe's website",
  tagline: "mhuahe's personal note website",
  favicon: "img/favicon_white.ico",
  // 静态资源目录
  staticDirectories: ['static'],

  // 设置生产环境的站点 URL
  url: "https://mhuahe.github.io/",
  // 设置站点的 /<baseUrl>/ 路径名，您的站点在此路径下提供
  // 对于 GitHub pages 部署，它通常是 '/<projectName>/'
  baseUrl: "/mhuahe.com/",

  // GitHub pages 部署配置。
  // 如果您不使用 GitHub pages，则不需要这些。
  organizationName: "mhuahe", // 拥有部署仓库的 GitHub 用户或组织 ORGANIZATION_NAME
  projectName: "mhuahe.com", // 部署仓库的名字 PROJECT_NAME
  deploymentBranch: "gh-pages", // 部署分支的名称 DEPLOYMENT_BRANCH
  trailingSlash: false, // 是否在 URL 末尾添加尾随斜杠

  onBrokenLinks: "throw", // 当链接断开时，抛出错误
  onBrokenMarkdownLinks: "warn", // 当 Markdown 链接断开时，发出警告

  // 即使您不使用国际化，也可以使用此字段设置
  // 有用元数据，例如 html lang。例如，如果您的网站是中文，您可能希望将 "en" 替换为 "zh-Hans"。
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn', 'en'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      'zh-cn':{
        label: '中文',
        direction: 'ltr',
      },
    },
  },

  future: {
    // @docusaurus/faster
    v4: {
      removeLegacyPostBuildHeadAttribute: true, // 更好地利用所有可用的 CPU，缩短静态站点生成时间，并控制潜在的内存泄漏
    },
    experimental_faster: {
      ssgWorkerThreads: true, // 使用SSG工作线程，为静态站点生成任务分配多个线程
      swcJsLoader: true, // 使用SWC转译 JS (而不是Babel )
      swcJsMinimizer: true, // 使用SWC来缩小 JS （而不是Terser）
      swcHtmlMinimizer: true, // 使用SWC来缩小 HTML （而不是HtmlMinimizer）
      lightningCssMinimizer: true, // 使用Lightning CSS来缩小CSS（而不是CSSMinimizer）
      rspackBundler: true, //使用Rspack作为捆绑器（而不是Webpack）
      rspackPersistentCache: true, // 使用Rspack持久化缓存，为浏览器/Node.js 环境编译 MDX 文件一次，而不是两次
      mdxCrossCompilerCache: true, // 使用MDX交叉编译器缓存，为浏览器/Node.js 环境编译 MDX 文件一次，而不是两次
    },
  },

  plugins: [
    // Rsdoctor插件可以帮助您解决 Docusaurus 站点捆绑阶段的问题，同时支持 Webpack 和 Rspack。
    // [
    //   "rsdoctor",
    //   {
    //     rsdoctorOptions: {
    //       mode: "lite",
    //     },
    //   },
    // ],
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        // 将传递给 @docusaurus/plugin-content-docs (false 禁用)
        docs: {
          path: "docs",
          editUrl: "https://github.dev/mhuahe/mhuahe.com/blob/master-ts/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: "./sidebars.ts",
          // 面包屑：默认情况下，面包屑使用当前页面的“侧边栏路径”呈现在顶部。
          breadcrumbs: true,
        },
        // 将传递给 @docusaurus/plugin-content-blog (false 禁用)
        blog: {
          path: "blog",
          editUrl: "https://github.dev/mhuahe/mhuahe.com/blob/master-ts/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          showReadingTime: true,
          // 博客订阅选项
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // 博客侧边栏标题
          blogSidebarTitle: "最新博客",
          // 在行内标签上警告
          onInlineTags: "warn",
          // 在行内作者上警告
          onInlineAuthors: "warn",
          // 在未截断的博客文章上警告
          onUntruncatedBlogPosts: "warn",
        },
        // 将传递给 @docusaurus/plugin-content-pages (false 禁用)
        pages: {
          path: "src/pages",
          editUrl: "https://github.dev/mhuahe/mhuahe.com/blob/master-ts/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        // 将传递给 @docusaurus/plugin-sitemap (false 禁用)
        sitemap: {},
        // 将传递给 @docusaurus/theme-classic
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // 当您的网站链接被分享到社交媒体平台（如Facebook、Twitter等）时，这些平台会生成一个预览卡片，显示网站的基本信息。这个卡片通常包含网站标题、描述和一张图片。
    image: "img/docusaurus-social-card.jpg",
    // 导航栏
    navbar: {
      title: "mhuahe's website",
      logo: {
        alt: "mhuahe site logo",
        src: "img/favicon_white.png",
        srcDark: "img/favicon_black.png",
        width: 32,
        height: 32,
      },
      // 滚动页面时，导航栏隐藏
      hideOnScroll: false,
      // 导航栏项目
      items: navbarItems,
    },
    algolia: {
      appId: "SSZM8E31Q1",
      apiKey: "a44c5956a2291c2381e6f37661abc1be",
      indexName: "mhuaheio",
      // 区分语言和版本，分片搜索
      contextualSearch: true,
    },
    // 公告栏
    // announcementBar: {
    //   id: "announcement-bar",
    //   content:
    //     '🎉️<b>本网站正在建设中，欢迎提出宝贵意见！<a target="_blank" href="https://github.com/mhuahe/mhuahe.com">源码地址</a></b> 🥳️',
    //   isCloseable: true,
    // },
    footer: footerItems,
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      //自定义高亮
      magicComments: [
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line", //只适用于下一行
          block: { start: "highlight-start", end: "highlight-end" }, //适用在区间
        },
        {
          className: "code-block-error-line",
          line: "This will error",
        },
      ],
    },
    docs: {
      // 版本持久化
      versionPersistence: "localStorage",
      sidebar: {
        // 可隐藏侧边栏
        hideable: true,
        // 展开一个类别时折叠所有同级类别
        autoCollapseCategories: false,
      },
    },
    //目录层级
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 6,
    },
    //[mermaid 主题](https://mermaid.js.org/config/theming.html)
    mermaid: {
      theme: {
        light: "neutral",
        dark: "forest",
      },
    },
    colorMode: {
      // 使用prefers-color-scheme媒体查询、使用用户系统首选项.
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,

  themes: [
    //交互代码编辑器
    require.resolve("@docusaurus/theme-live-codeblock"),
    //mermaid图表插件
    require.resolve("@docusaurus/theme-mermaid"),
  ],

  markdown: {
    // 启用mermaid图表
    mermaid: true,
  },
};

export default config;
