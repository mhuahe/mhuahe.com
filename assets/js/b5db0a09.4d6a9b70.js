"use strict";(self.webpackChunkmhuahe_com=self.webpackChunkmhuahe_com||[]).push([[2606],{5457:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=r(4848),o=r(8453);const s={},l="WEB-ElementUI",a={id:"web/WEB-ElementUI",title:"WEB-ElementUI",description:"ElementUI",source:"@site/docs/web/WEB-ElementUI.md",sourceDirName:"web",slug:"/web/WEB-ElementUI",permalink:"/mhuahe.com/docs/web/WEB-ElementUI",draft:!1,unlisted:!1,editUrl:"https://github.com/mhuahe/mhuahe.com/tree/master/docs/web/WEB-ElementUI.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u524d\u7aef",permalink:"/mhuahe.com/docs/category/\u524d\u7aef"},next:{title:"WEB-HTML",permalink:"/mhuahe.com/docs/web/WEB-HTML"}},i={},d=[{value:"ElementUI",id:"elementui",level:2},{value:"\u6807\u7b7e",id:"\u6807\u7b7e",level:2},{value:"el-dialog",id:"el-dialog",level:3},{value:"el-dropdown",id:"el-dropdown",level:3},{value:"el-dropdown-menu",id:"el-dropdown-menu",level:3},{value:"router-link",id:"router-link",level:3},{value:"\u5bf9\u8c61",id:"\u5bf9\u8c61",level:2},{value:"getters\u5bf9\u8c61",id:"getters\u5bf9\u8c61",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"web-elementui",children:"WEB-ElementUI"})}),"\n",(0,t.jsx)(n.h2,{id:"elementui",children:"ElementUI"}),"\n",(0,t.jsx)(n.h2,{id:"\u6807\u7b7e",children:"\u6807\u7b7e"}),"\n",(0,t.jsx)(n.h3,{id:"el-dialog",children:"el-dialog"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-vue",children:'\x3c!--\r\n\u901a\u8fc7 openDialog \u65b9\u6cd5\u5c06 dialogVisible \u5c5e\u6027\u8bbe\u4e3a true\uff0c\u4ece\u800c\u663e\u793a\u5bf9\u8bdd\u6846\u3002\r\n\u5bf9\u8bdd\u6846\u7684\u6807\u9898\u901a\u8fc7 title \u5c5e\u6027\u8bbe\u7f6e\uff0c\u5185\u5bb9\u53ef\u4ee5\u653e\u5728\u5bf9\u8bdd\u6846\u6807\u7b7e\u5185\u90e8\u3002\r\n\u5f53\u70b9\u51fb\u5bf9\u8bdd\u6846\u7684\u5173\u95ed\u6309\u94ae\u6216\u8005\u70b9\u51fb\u906e\u7f69\u5c42\u65f6\uff0c\u4f1a\u89e6\u53d1 @close \u4e8b\u4ef6\uff0c\r\n\u901a\u8fc7 closeDialog \u65b9\u6cd5\u5c06 dialogVisible \u5c5e\u6027\u8bbe\u4e3a false\uff0c\u4ece\u800c\u5173\u95ed\u5bf9\u8bdd\u6846\r\n--\x3e\r\n<template>\r\n  <div>\r\n    <el-button @click="openDialog">\u6253\u5f00\u5bf9\u8bdd\u6846</el-button>\r\n    <el-dialog\r\n      :visible="dialogVisible"\r\n      title="\u5bf9\u8bdd\u6846\u6807\u9898"\r\n      @close="closeDialog"\r\n    >\r\n      <p>\u5bf9\u8bdd\u6846\u5185\u5bb9</p>\r\n    </el-dialog>\r\n  </div>\r\n</template>\r\n<script>\r\n    export default {\r\n      data() {\r\n        return {\r\n          dialogVisible: false, // \u63a7\u5236\u5bf9\u8bdd\u6846\u7684\u663e\u793a/\u9690\u85cf\r\n        };\r\n      },\r\n      methods: {\r\n        openDialog() {\r\n          this.dialogVisible = true; // \u6253\u5f00\u5bf9\u8bdd\u6846\r\n        },\r\n        closeDialog() {\r\n          this.dialogVisible = false; // \u5173\u95ed\u5bf9\u8bdd\u6846\r\n        },\r\n      },\r\n    };\r\n<\/script>\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-vue",children:'\x3c!--\r\n@keyup.enter.native:\u7528\u4e8e\u76d1\u542c\u952e\u76d8\u6309\u4e0b Enter \u952e\u7684\u4e8b\u4ef6\uff0c\u5e76\u89e6\u53d1\u76f8\u5e94\u7684\u5904\u7406\u51fd\u6570handleLogin\r\n--\x3e\r\n<el-input name="password"\r\n                    :type="pwdType"\r\n                    @keyup.enter.native="handleLogin"\r\n                    v-model="loginForm.password"\r\n                    autoComplete="on"\r\n                    placeholder="\u8bf7\u8f93\u5165\u5bc6\u7801">\n'})}),"\n",(0,t.jsx)(n.h3,{id:"el-dropdown",children:"el-dropdown"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-vue",children:'\x3c!-- \u4e0b\u62c9\u83dc\u5355\u5bb9\u5668 --\x3e\r\n\x3c!-- \u901a\u8fc7 <span> \u5143\u7d20\u8bbe\u7f6e\u4e86\u89e6\u53d1\u4e0b\u62c9\u83dc\u5355\u5c55\u793a\u7684\u6587\u672c --\x3e\r\n<el-dropdown class="avatar-container" trigger="click">\r\n    <span class="el-dropdown-link">\r\n      \u4e0b\u62c9\u83dc\u5355 <i class="el-icon-arrow-down el-icon--right"></i>\r\n    </span>\r\n    <div class="avatar-wrapper">\r\n        <img class="user-avatar" :src="avatar">\r\n        <i class="el-icon-caret-bottom"></i>\r\n    </div>\r\n    <el-dropdown-menu class="user-dropdown" slot="dropdown">\r\n    </el-dropdown-menu>\r\n</el-dropdown>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"el-dropdown-menu",children:"el-dropdown-menu"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-vue",children:'\x3c!-- \u4e0b\u62c9\u83dc\u5355 --\x3e\r\n\x3c!-- el-dropdown-item\u5b9a\u4e49\u83dc\u5355\u9879 --\x3e\r\n\x3c!-- router-link\u7ec4\u4ef6\u7528\u4e8e\u521b\u5efa\u5bfc\u822a\u94fe\u63a5\u3002\u901a\u8fc7 to \u5c5e\u6027\u6307\u5b9a\u8981\u5bfc\u822a\u5230\u7684\u76ee\u6807\u8def\u7531\u8def\u5f84 --\x3e\r\n<el-dropdown-menu class="user-dropdown" slot="dropdown">\r\n  <router-link class="inlineBlock" to="/">\r\n    <el-dropdown-item>\r\n      \u9996\u9875\r\n    </el-dropdown-item>\r\n  </router-link>\r\n  <el-dropdown-item divided>\r\n    <span @click="logout" style="display:block;">\u9000\u51fa</span>\r\n  </el-dropdown-item>\r\n</el-dropdown-menu>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"router-link",children:"router-link"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-vue",children:'\x3c!-- \r\nrouter-link\u7ec4\u4ef6\u7528\u4e8e\u521b\u5efa\u5bfc\u822a\u94fe\u63a5\u3002\u901a\u8fc7 to \u5c5e\u6027\u6307\u5b9a\u8981\u5bfc\u822a\u5230\u7684\u76ee\u6807\u8def\u7531\u8def\u5f84\r\n\u5f53\u7528\u6237\u70b9\u51fb <router-link> \u65f6\uff0cVue Router \u4f1a\u6839\u636e\u6307\u5b9a\u7684\u8def\u5f84\u52a0\u8f7d\u5bf9\u5e94\u7684\u7ec4\u4ef6\uff0c\u5e76\u6e32\u67d3\u5230\u5e94\u7528\u7684\u89c6\u56fe\u4e2d\r\n--\x3e\r\n<template>\r\n  <div>\r\n    <router-link to="/home">\u9996\u9875</router-link>\r\n    <router-link to="/about">\u5173\u4e8e</router-link>\r\n  </div>\r\n</template>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u5bf9\u8c61",children:"\u5bf9\u8c61"}),"\n",(0,t.jsx)(n.h3,{id:"getters\u5bf9\u8c61",children:"getters\u5bf9\u8c61"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"/*\r\n\u8fd9\u662f\u4e00\u4e2a\u4f7f\u7528Vuex\u7684getters\u5bf9\u8c61\uff0c\u5b83\u5b9a\u4e49\u4e86\u4e00\u4e9b\u8ba1\u7b97\u5c5e\u6027\uff0c\u7528\u4e8e\u83b7\u53d6\u72b6\u6001\u4e2d\u7684\u6570\u636e\u3002\u8fd9\u4e9b\u5c5e\u6027\u53ef\u4ee5\u5728\u5e94\u7528\u7684\u5176\u4ed6\u7ec4\u4ef6\u4e2d\u4f7f\u7528\r\nVue\u7ec4\u4ef6\u4e2d\u4f7f\u7528this.$store.getters\u6765\u83b7\u53d6\u8fd9\u4e9b\u5c5e\u6027\u7684\u503c\u3002\u5982\uff0c\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528this.$store.getters.token\u6765\u83b7\u53d6\u7528\u6237\u7684\u8bbf\u95ee\u4ee4\u724c\r\n*/\r\nconst getters = {\r\n  //\u83b7\u53d6\u5e94\u7528\u72b6\u6001\u4e2d\u7684app.sidebar\uff0c\u4fa7\u8fb9\u680f\u7684\u72b6\u6001\r\n  sidebar: state => state.app.sidebar,\r\n  //\u83b7\u53d6\u5e94\u7528\u72b6\u6001\u4e2d\u7684app.device\uff0c\u8bbe\u5907\u7684\u72b6\u6001\r\n  device: state => state.app.device,\r\n  //\u83b7\u53d6\u7528\u6237\u72b6\u6001\u4e2d\u7684user.token\uff0c\u7528\u6237\u7684\u8bbf\u95ee\u4ee4\u724c\r\n  token: state => state.user.token,\r\n  //\u83b7\u53d6\u7528\u6237\u72b6\u6001\u4e2d\u7684user.avatar\uff0c\u7528\u6237\u7684\u5934\u50cf\r\n  avatar: state => state.user.avatar,\r\n  //\u83b7\u53d6\u7528\u6237\u72b6\u6001\u4e2d\u7684user.name\uff0c\u7528\u6237\u7684\u540d\u79f0\r\n  name: state => state.user.name,\r\n  //\u83b7\u53d6\u7528\u6237\u72b6\u6001\u4e2d\u7684user.roles\uff0c\u7528\u6237\u7684\u89d2\u8272\r\n  roles: state => state.user.roles,\r\n  //\u83b7\u53d6\u6743\u9650\u72b6\u6001\u4e2d\u7684permission.addRouters\uff0c\u6dfb\u52a0\u7684\u52a8\u6001\u8def\u7531\r\n  addRouters: state => state.permission.addRouters,\r\n  //\u83b7\u53d6\u6743\u9650\u72b6\u6001\u4e2d\u7684permission.routers\uff0c\u6240\u6709\u7684\u8def\u7531\r\n  routers: state => state.permission.routers\r\n}\r\nexport default getters\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"//\u5982\u4f55\u8bbe\u7f6e\u8fd9\u4e9b\u72b6\u6001\u7684\u503c\uff1f\r\n1. \u5728actions\u4e2d\u8fdb\u884c\u5f02\u6b65\u64cd\u4f5c\r\n// \u5728actions\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u65b9\u6cd5\uff0c\u7528\u4e8e\u83b7\u53d6\u6570\u636e\u5e76\u8bbe\u7f6e\u72b6\u6001\r\nactions: {\r\n    // \u767b\u5f55\r\n    Login({commit}, userInfo) {\r\n      const username = userInfo.username.trim()\r\n      return new Promise((resolve, reject) => {\r\n        login(username, userInfo.password).then(response => {\r\n          const data = response.data\r\n          const tokenStr = data.tokenHead + data.token\r\n          commit('SET_TOKEN', tokenStr)\r\n          resolve()\r\n        }).catch(error => {\r\n          reject(error)\r\n        })\r\n      })\r\n    },\r\n}\r\nmutations: {\r\n    SET_TOKEN: (state, token) => {\r\n      state.token = token\r\n    },\r\n}\r\n2. \u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528commit\u65b9\u6cd5\u8bbe\u7f6e\u72b6\u6001\r\nexport default {\r\n  methods: {\r\n    login() {\r\n      // \u5728\u7ec4\u4ef6\u7684\u65b9\u6cd5\u4e2d\u8c03\u7528commit\u65b9\u6cd5\u8bbe\u7f6e\u72b6\u6001\r\n      this.$store.commit('setToken', 'abcdefg');\r\n    }\r\n  }\r\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>a});var t=r(6540);const o={},s=t.createContext(o);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);