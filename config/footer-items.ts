import type { Footer } from '@docusaurus/theme-common';

/**
 * 创建一个新的类型，继承 Footer 但让 style 变为可选
 * 
 * Omit 是 TypeScript 内置的一个工具类型（utility type），它的作用是从一个类型中剔除指定的属性，创建一个新的类型。
 * 语法格式是：`Omit<Type, Keys>`
 * - Type: 原始类型
 * - Keys: 要剔除的属性名（可以是单个属性或多个属性的联合类型）
 * 
 * 这段代码的作用是：
 * 1. 首先从 Footer 类型中移除 style、links 和 copyright 这三个属性
 * 2. 然后通过 &（交叉类型）重新添加这三个属性，但是都变成了可选属性（通过 ? 标记）
 */
type CustomFooter = Omit<Footer, 'style' | 'links' | 'copyright'> & {
  style?: Footer['style'];
  links?: Footer['links'];
  copyright: Footer['copyright'];
};

const packageJson = require('../package.json');
const version = packageJson.dependencies['@docusaurus/core'];

export const footerItems: CustomFooter = {
  copyright: `© ${new Date().getFullYear()} mhuahe. Built with <a href="https://docusaurus.io/" target="_blank">Docusaurus</a>${version}.`,
};
