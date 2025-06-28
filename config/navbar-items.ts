import type { NavbarItem } from '@docusaurus/theme-common';

const leftSidebarItems: NavbarItem[] = [
  {
    type: "docSidebar",
    sidebarId: "java",
    position: "left",
    label: "Java",
  },
  {
    type: "docSidebar",
    sidebarId: "web",
    position: "left",
    label: "前端",
  },
  {
    type: "docSidebar",
    sidebarId: "c",
    position: "left",
    label: "C",
  },
  {
    type: "docSidebar",
    sidebarId: "linux",
    position: "left",
    label: "Linux",
  },
  {
    type: "docSidebar",
    sidebarId: "sql",
    position: "left",
    label: "SQL",
  },
  {
    type: "docSidebar",
    sidebarId: "python",
    position: "left",
    label: "Python",
  },
  {
    type: "docSidebar",
    sidebarId: "android",
    position: "left",
    label: "Android",
  },
  {
    type: "docSidebar",
    sidebarId: "tool",
    position: "left",
    label: "工具",
  },
  {
    type: "docSidebar",
    sidebarId: "project",
    position: "left",
    label: "项目",
  },
  {
    type: "docSidebar",
    sidebarId: "knowledge",
    position: "left",
    label: "知识",
  },
  {
    type: "docSidebar",
    sidebarId: "other",
    position: "left",
    label: "其他",
  },
];

const rightItems: NavbarItem[] = [
  {
    type: "docSidebar",
    sidebarId: "example",
    position: "right",
    label: "示例",
  },
  { to: "/blog", label: "Blog", position: "right" },
  {
    to: "/vcard-personal-portfolio/index.html",
    label: "简历",
    position: "right",
    target: "_blank",
  },
  // {
  //   to: "/pintree/index.html",
  //   position: "right",
  //   label: "书签",
  //   target: "_blank",
  // },
  {
    href: "https://github.com/mhuahe/mhuahe.com",
    position: "right",
    className: "navbar-github-link",
    /*
      是一个 ARIA (Accessible Rich Internet Applications) 属性
      1. 辅助功能支持：
        - 为使用屏幕阅读器的用户提供元素的描述性文本
        - 当用户使用屏幕阅读器浏览网站时，会读出 "GitHub repository" 而不是仅显示一个图标
      2. 语义化：
        - 当元素没有可见文本时（比如只有图标的按钮），提供其含义
        - 帮助用户理解这个链接的用途
      3. SEO优化：
        - 提供额外的语义信息，有助于搜索引擎理解页面内容
    */
    "aria-label": "GitHub",
  },
  {
    type: "localeDropdown",
    label: "语言",
    position: "right",
  },
];

export const navbarItems: NavbarItem[] = [...leftSidebarItems, ...rightItems];
