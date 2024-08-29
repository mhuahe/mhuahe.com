"use strict";(self.webpackChunkmhuahe_com=self.webpackChunkmhuahe_com||[]).push([[7329],{4082:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(4848),r=t(8453);const o={},l="JAVA-\u77e5\u8bc6\u9898",a={id:"java/JAVA-Knowledge-Question",title:"JAVA-\u77e5\u8bc6\u9898",description:"\u4e8c\u7ef4\u6570\u7ec4\u7684\u5b58\u50a8\u5730\u5740",source:"@site/docs/java/JAVA-Knowledge-Question.md",sourceDirName:"java",slug:"/java/JAVA-Knowledge-Question",permalink:"/mhuahe.com/docs/java/JAVA-Knowledge-Question",draft:!1,unlisted:!1,editUrl:"https://github.com/mhuahe/mhuahe.com/tree/master/docs/java/JAVA-Knowledge-Question.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JAVA-JVM",permalink:"/mhuahe.com/docs/java/JAVA-JVM"},next:{title:"JAVA-\u6d88\u606f\u961f\u5217",permalink:"/mhuahe.com/docs/java/JAVA-MQ"}},s={},c=[{value:"\u4e8c\u7ef4\u6570\u7ec4\u7684\u5b58\u50a8\u5730\u5740",id:"\u4e8c\u7ef4\u6570\u7ec4\u7684\u5b58\u50a8\u5730\u5740",level:3},{value:"wait()\u3001notify()\u3001notifyAll()",id:"waitnotifynotifyall",level:3},{value:"GET\u548cPOST\u8bf7\u6c42",id:"get\u548cpost\u8bf7\u6c42",level:3},{value:"\u9759\u6001\u8bed\u53e5\u5757\u548c\u9759\u6001\u53d8\u91cf",id:"\u9759\u6001\u8bed\u53e5\u5757\u548c\u9759\u6001\u53d8\u91cf",level:3},{value:"volatile",id:"volatile",level:3},{value:"HTTP\u9519\u8bef\u7801",id:"http\u9519\u8bef\u7801",level:3}];function d(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"java-\u77e5\u8bc6\u9898",children:"JAVA-\u77e5\u8bc6\u9898"})}),"\n",(0,i.jsx)(n.h3,{id:"\u4e8c\u7ef4\u6570\u7ec4\u7684\u5b58\u50a8\u5730\u5740",children:"\u4e8c\u7ef4\u6570\u7ec4\u7684\u5b58\u50a8\u5730\u5740"}),"\n",(0,i.jsx)("img",{src:"https://hayes-typora.oss-cn-shenzhen.aliyuncs.com/%E4%BA%8C%E7%BB%B4%E6%95%B0%E7%BB%84%E5%AD%98%E5%82%A8%E5%9C%B0%E5%9D%80.png",width:"50%"}),"\n",(0,i.jsx)(n.h3,{id:"waitnotifynotifyall",children:"wait()\u3001notify()\u3001notifyAll()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"1\u3001wait(), notify(), \u548c notifyAll() \u65b9\u6cd5\u662f Object \u7c7b\u4e2d\u5b9a\u4e49\u7684 final \u65b9\u6cd5\uff0c\u56e0\u6b64\u4e0d\u80fd\u88ab\u5b50\u7c7b\u91cd\u5199\u3002\u8fd9\u4e9b\u65b9\u6cd5\u7528\u4e8e\u5b9e\u73b0\u7ebf\u7a0b\u4e4b\u95f4\u7684\u534f\u8c03\u548c\u901a\u4fe1\uff0c\u4e3b\u8981\u7528\u4e8e\u5b9e\u73b0\u7ebf\u7a0b\u7684\u7b49\u5f85\u548c\u5524\u9192\u673a\u5236\r\n2\u3001wait(): \u5f53\u4e00\u4e2a\u7ebf\u7a0b\u8c03\u7528\u5bf9\u8c61\u7684 wait() \u65b9\u6cd5\u65f6\uff0c\u5b83\u5c06\u8fdb\u5165\u7b49\u5f85\u72b6\u6001\uff0c\u76f4\u5230\u5176\u4ed6\u7ebf\u7a0b\u8c03\u7528\u76f8\u540c\u5bf9\u8c61\u7684 notify() \u6216 notifyAll() \u65b9\u6cd5\u6765\u5524\u9192\u5b83\uff0c\u6216\u8005\u7b49\u5f85\u7684\u65f6\u95f4\u5230\u8fbe\u3002\r\n3\u3001notify(): \u7528\u4e8e\u5524\u9192\u7b49\u5f85\u5728\u8be5\u5bf9\u8c61\u4e0a\u7684\u5355\u4e2a\u7ebf\u7a0b\uff0c\u5982\u679c\u6709\u591a\u4e2a\u7ebf\u7a0b\u5728\u7b49\u5f85\uff0c\u5219\u53ea\u80fd\u5524\u9192\u5176\u4e2d\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u5177\u4f53\u5524\u9192\u54ea\u4e2a\u7ebf\u7a0b\u53d6\u51b3\u4e8e\u7ebf\u7a0b\u8c03\u5ea6\u5668\u3002\r\n4\u3001notifyAll(): \u7528\u4e8e\u5524\u9192\u7b49\u5f85\u5728\u8be5\u5bf9\u8c61\u4e0a\u7684\u6240\u6709\u7ebf\u7a0b\uff0c\u8ba9\u5b83\u4eec\u6709\u673a\u4f1a\u53bb\u7ade\u4e89\u9501\uff0c\u4ee5\u4fbf\u7ee7\u7eed\u6267\u884c\u3002\r\n5\u3001\u8fd9\u4e9b\u65b9\u6cd5\u901a\u5e38\u4e0e synchronized \u5173\u952e\u5b57\u4e00\u8d77\u4f7f\u7528\uff0c\u4ee5\u5b9e\u73b0\u591a\u7ebf\u7a0b\u4e4b\u95f4\u7684\u534f\u8c03\u548c\u540c\u6b65\n"})}),"\n",(0,i.jsx)(n.h3,{id:"get\u548cpost\u8bf7\u6c42",children:"GET\u548cPOST\u8bf7\u6c42"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"-- GET\u548cPOST\u6d4f\u89c8\u5668\u7f13\u5b58\u95ee\u9898\r\n1\u3001\u901a\u5e38\u60c5\u51b5\u4e0b\uff0cGET \u8bf7\u6c42\u53ef\u4ee5\u88ab\u6d4f\u89c8\u5668\u4e3b\u52a8\u7f13\u5b58\uff0c\u800c POST \u8bf7\u6c42\u5219\u4e0d\u4f1a\u88ab\u6d4f\u89c8\u5668\u4e3b\u52a8\u7f13\u5b58\u3002\r\n2\u3001GET \u8bf7\u6c42\u7684\u54cd\u5e94\u901a\u5e38\u662f\u5e42\u7b49\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u540c\u6837\u7684\u8bf7\u6c42\u8fd4\u56de\u7684\u5185\u5bb9\u662f\u76f8\u540c\u7684\u3002\u56e0\u6b64\uff0c\u6d4f\u89c8\u5668\u53ef\u4ee5\u5b89\u5168\u5730\u5c06 GET \u8bf7\u6c42\u7684\u54cd\u5e94\u5b58\u50a8\u5728\u7f13\u5b58\u4e2d\uff0c\u4ee5\u4fbf\u5728\u4ee5\u540e\u7684\u8bf7\u6c42\u4e2d\u91cd\u7528\u76f8\u540c\u7684\u54cd\u5e94\u3002\u8fd9\u53ef\u4ee5\u63d0\u9ad8\u6027\u80fd\u5e76\u51cf\u5c11\u7f51\u7edc\u6d41\u91cf\u3002\r\n3\u3001POST \u8bf7\u6c42\u7684\u54cd\u5e94\u901a\u5e38\u4e0d\u4f1a\u88ab\u7f13\u5b58\uff0c\u56e0\u4e3a POST \u8bf7\u6c42\u7684\u7ed3\u679c\u53ef\u80fd\u662f\u975e\u5e42\u7b49\u7684\uff0c\u5b83\u53ef\u80fd\u4f1a\u5bfc\u81f4\u72b6\u6001\u7684\u6539\u53d8\u6216\u8005\u5176\u4ed6\u526f\u4f5c\u7528\u3002\u56e0\u6b64\uff0c\u6d4f\u89c8\u5668\u901a\u5e38\u4e0d\u4f1a\u7f13\u5b58 POST \u8bf7\u6c42\u7684\u54cd\u5e94\uff0c\u4ee5\u786e\u4fdd\u6bcf\u6b21\u8bf7\u6c42\u90fd\u80fd\u83b7\u53d6\u5230\u6700\u65b0\u7684\u6570\u636e\u6216\u72b6\u6001\u3002\r\n4\u3001\u7136\u800c\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e HTTP \u54cd\u5e94\u5934\u6765\u6307\u793a\u6d4f\u89c8\u5668\u662f\u5426\u53ef\u4ee5\u7f13\u5b58\u8bf7\u6c42\u7684\u54cd\u5e94\u3002\u4f8b\u5982\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e Cache-Control \u548c Expires \u7b49\u5934\u90e8\u6765\u63a7\u5236\u7f13\u5b58\u884c\u4e3a\u3002\r\n-- GET\u548cPOST\u6d4f\u89c8\u5668\u56de\u9000\u95ee\u9898\r\n1\u3001GET\u5728\u6d4f\u89c8\u5668\u56de\u9000\u4e0d\u4f1a\u518d\u6b21\u8bf7\u6c42\uff0cPOST\u4f1a\u518d\u6b21\u63d0\u4ea4\u6e05\u6c42\u3002\r\n2\u3001\u5bf9\u4e8e GET \u8bf7\u6c42\uff0c\u6d4f\u89c8\u5668\u4f1a\u5c1d\u8bd5\u4ece\u7f13\u5b58\u4e2d\u52a0\u8f7d\u9875\u9762\uff0c\u800c\u4e0d\u4f1a\u518d\u6b21\u5411\u670d\u52a1\u5668\u53d1\u9001\u8bf7\u6c42\u3002\u8fd9\u662f\u56e0\u4e3a GET \u8bf7\u6c42\u7684\u54cd\u5e94\u901a\u5e38\u88ab\u5141\u8bb8\u7f13\u5b58\uff0c\u6d4f\u89c8\u5668\u4f1a\u5c1d\u8bd5\u4f7f\u7528\u7f13\u5b58\u6765\u63d0\u9ad8\u6027\u80fd\u3002\r\n3\u3001\u5bf9\u4e8e POST \u8bf7\u6c42\uff0c\u6d4f\u89c8\u5668\u4f1a\u8b66\u544a\u7528\u6237\u6570\u636e\u53ef\u80fd\u4f1a\u88ab\u91cd\u65b0\u63d0\u4ea4\uff0c\u5e76\u8be2\u95ee\u7528\u6237\u662f\u5426\u786e\u8ba4\u91cd\u65b0\u63d0\u4ea4\u3002\u8fd9\u662f\u56e0\u4e3a POST \u8bf7\u6c42\u901a\u5e38\u7528\u4e8e\u5411\u670d\u52a1\u5668\u63d0\u4ea4\u6570\u636e\uff0c\u91cd\u65b0\u63d0\u4ea4\u53ef\u80fd\u4f1a\u5bfc\u81f4\u4e0d\u5fc5\u8981\u7684\u526f\u4f5c\u7528\uff0c\u5982\u91cd\u590d\u63d0\u4ea4\u8ba2\u5355\u6216\u91cd\u590d\u521b\u5efa\u8d44\u6e90\u3002\r\n4\u3001\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u867d\u7136\u6d4f\u89c8\u5668\u4f1a\u8b66\u544a\u7528\u6237\u91cd\u65b0\u63d0\u4ea4 POST \u8bf7\u6c42\uff0c\u4f46\u5e76\u4e0d\u662f\u6240\u6709\u6d4f\u89c8\u5668\u90fd\u63d0\u4f9b\u76f8\u540c\u7684\u884c\u4e3a\uff0c\u5177\u4f53\u884c\u4e3a\u53ef\u80fd\u4f1a\u56e0\u6d4f\u89c8\u5668\u7684\u4e0d\u540c\u800c\u6709\u6240\u4e0d\u540c\u3002\r\n-- GET\u548cPOST\u6d4f\u89c8\u5668\u8bf7\u6c42\u53c2\u6570\u5386\u53f2\u8bb0\u5f55\u95ee\u9898\r\n1\u3001\u4e00\u822c\u60c5\u51b5\u4e0b\uff0cGET \u8bf7\u6c42\u7684\u53c2\u6570\u4f1a\u88ab\u5b8c\u6574\u4fdd\u7559\u5728\u6d4f\u89c8\u5668\u7684\u5386\u53f2\u8bb0\u5f55\u4e2d\uff0c\u800c POST \u8bf7\u6c42\u7684\u53c2\u6570\u901a\u5e38\u4e0d\u4f1a\u4fdd\u5b58\u5728\u6d4f\u89c8\u5668\u7684\u5386\u53f2\u8bb0\u5f55\u4e2d\u3002\r\n2\u3001\u5f53\u7528\u6237\u4f7f\u7528\u6d4f\u89c8\u5668\u7684\u56de\u9000\u6216\u524d\u8fdb\u6309\u94ae\u5bfc\u822a\u6d4f\u89c8\u5386\u53f2\u8bb0\u5f55\u65f6\uff0cGET \u8bf7\u6c42\u7684 URL \u4e2d\u7684\u53c2\u6570\u4f1a\u88ab\u5305\u542b\u5728\u8bf7\u6c42\u4e2d\uff0c\u56e0\u6b64\u7528\u6237\u53ef\u4ee5\u91cd\u65b0\u8bbf\u95ee\u5177\u6709\u76f8\u540c\u53c2\u6570\u7684\u9875\u9762\u3002\u8fd9\u6837\u53ef\u4ee5\u65b9\u4fbf\u7528\u6237\u5728\u6d4f\u89c8\u5668\u5386\u53f2\u8bb0\u5f55\u4e2d\u627e\u56de\u4e4b\u524d\u7684\u8bf7\u6c42\u3002\r\n3\u3001POST \u8bf7\u6c42\u7684\u53c2\u6570\u901a\u5e38\u4e0d\u4f1a\u88ab\u4fdd\u5b58\u5728\u6d4f\u89c8\u5668\u7684\u5386\u53f2\u8bb0\u5f55\u4e2d\u3002\u8fd9\u662f\u56e0\u4e3a POST \u8bf7\u6c42\u901a\u5e38\u7528\u4e8e\u5411\u670d\u52a1\u5668\u63d0\u4ea4\u654f\u611f\u6570\u636e\uff0c\u4f8b\u5982\u8868\u5355\u63d0\u4ea4\uff0c\u5c06\u8fd9\u4e9b\u53c2\u6570\u4fdd\u5b58\u5728\u6d4f\u89c8\u5668\u5386\u53f2\u8bb0\u5f55\u4e2d\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5b89\u5168\u98ce\u9669\u548c\u9690\u79c1\u95ee\u9898\u3002\u56e0\u6b64\uff0c\u6d4f\u89c8\u5668\u901a\u5e38\u4e0d\u4f1a\u5c06 POST \u8bf7\u6c42\u7684\u53c2\u6570\u4fdd\u5b58\u5728\u5386\u53f2\u8bb0\u5f55\u4e2d\uff0c\u4ee5\u4fdd\u62a4\u7528\u6237\u7684\u6570\u636e\u5b89\u5168\u3002\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u9759\u6001\u8bed\u53e5\u5757\u548c\u9759\u6001\u53d8\u91cf",children:"\u9759\u6001\u8bed\u53e5\u5757\u548c\u9759\u6001\u53d8\u91cf"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"1\u3001\u9759\u6001\u53d8\u91cf\u548c\u9759\u6001\u521d\u59cb\u5316\u5757\u7684\u521d\u59cb\u5316\u987a\u5e8f\u4e0e\u5b83\u4eec\u5728\u4ee3\u7801\u4e2d\u7684\u58f0\u660e\u987a\u5e8f\u6709\u5173\u3002\r\n2\u3001\u9759\u6001\u53d8\u91cf\uff1a\u9759\u6001\u53d8\u91cf\u6309\u7167\u4ee3\u7801\u4e2d\u7684\u58f0\u660e\u987a\u5e8f\u4f9d\u6b21\u521d\u59cb\u5316\u3002\u5f53\u7c7b\u52a0\u8f7d\u65f6\uff0c\u9759\u6001\u53d8\u91cf\u4f1a\u6309\u7167\u58f0\u660e\u987a\u5e8f\u4f9d\u6b21\u8d4b\u4e88\u521d\u59cb\u503c\u6216\u8005\u88ab\u6267\u884c\u521d\u59cb\u5316\u4ee3\u7801\u3002\r\n3\u3001\u9759\u6001\u521d\u59cb\u5316\u5757\uff1a\u9759\u6001\u521d\u59cb\u5316\u5757\u4e5f\u6309\u7167\u4ee3\u7801\u4e2d\u7684\u58f0\u660e\u987a\u5e8f\u6267\u884c\u3002\u5f53\u7c7b\u52a0\u8f7d\u65f6\uff0c\u9759\u6001\u521d\u59cb\u5316\u5757\u4f1a\u6309\u7167\u58f0\u660e\u987a\u5e8f\u4f9d\u6b21\u6267\u884c\u3002\n"})}),"\n",(0,i.jsx)(n.h3,{id:"volatile",children:"volatile"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"-- \u5de5\u4f5c\u539f\u7406\r\n1\u3001\u53ef\u89c1\u6027\uff08Visibility\uff09\uff1a\u5f53\u4e00\u4e2a\u7ebf\u7a0b\u4fee\u6539\u4e86 volatile \u53d8\u91cf\u7684\u503c\uff0c\u65b0\u503c\u4f1a\u7acb\u5373\u88ab\u5176\u4ed6\u7ebf\u7a0b\u770b\u5230\u3002\u8fd9\u662f\u56e0\u4e3a volatile \u53d8\u91cf\u4f1a\u5f3a\u5236\u88ab\u7ebf\u7a0b\u4ece\u4e3b\u5b58\u4e2d\u8bfb\u53d6\uff0c\u800c\u4e0d\u662f\u4ece\u7ebf\u7a0b\u7684\u5de5\u4f5c\u5185\u5b58\u4e2d\u8bfb\u53d6\uff0c\u4ece\u800c\u786e\u4fdd\u4e86\u6240\u6709\u7ebf\u7a0b\u770b\u5230\u7684\u503c\u90fd\u662f\u6700\u65b0\u7684\u3002\r\n2\u3001\u7981\u6b62\u6307\u4ee4\u91cd\u6392\u5e8f\uff1avolatile \u53d8\u91cf\u7684\u8bfb\u5199\u64cd\u4f5c\u4e0d\u80fd\u548c\u5176\u524d\u540e\u7684\u6307\u4ee4\u91cd\u6392\u5e8f\uff0c\u4fdd\u8bc1\u4e86\u4ee3\u7801\u7684\u6267\u884c\u987a\u5e8f\u7b26\u5408\u9884\u671f\u3002\n"})}),"\n",(0,i.jsx)(n.h3,{id:"http\u9519\u8bef\u7801",children:"HTTP\u9519\u8bef\u7801"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"-- 302\r\n1\u3001HTTP\u72b6\u6001\u7801302\u8868\u793a\u4e34\u65f6\u91cd\u5b9a\u5411\uff08Temporary Redirect\uff09\u3002\u5f53\u670d\u52a1\u5668\u6536\u5230\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u540e\uff0c\u4f1a\u8fd4\u56de302\u72b6\u6001\u7801\u548c\u4e00\u4e2aLocation\u5934\u90e8\uff0c\u544a\u8bc9\u5ba2\u6237\u7aef\u8d44\u6e90\u4e34\u65f6\u88ab\u8f6c\u79fb\u5230\u53e6\u4e00\u4e2a\u4f4d\u7f6e\u3002\u5ba2\u6237\u7aef\u4f1a\u6839\u636eLocation\u5934\u90e8\u7684\u5730\u5740\u91cd\u65b0\u53d1\u8d77\u8bf7\u6c42\u3002\r\n2\u3001\u7b80\u5355\u6765\u8bf4\uff0c302\u72b6\u6001\u7801\u544a\u8bc9\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u8d44\u6e90\u6682\u65f6\u6027\u5730\u88ab\u8f6c\u79fb\u5230\u53e6\u4e00\u4e2a\u4f4d\u7f6e\uff0c\u5ba2\u6237\u7aef\u9700\u8981\u91cd\u65b0\u53d1\u9001\u8bf7\u6c42\u5230\u65b0\u7684\u5730\u5740\u3002\r\n3\u3001\u8fd9\u79cd\u91cd\u5b9a\u5411\u901a\u5e38\u7528\u4e8e\u4e34\u65f6\u6027\u7684\u8d44\u6e90\u4f4d\u7f6e\u66f4\u6539\uff0c\u800c\u4e0d\u662f\u6c38\u4e45\u6027\u7684\u3002\u5982\u679c\u8d44\u6e90\u7684\u4f4d\u7f6e\u6c38\u4e45\u6027\u6539\u53d8\uff0c\u5e94\u8be5\u4f7f\u7528301\u72b6\u6001\u7801\u3002\r\n-- 206\r\n1\u3001HTTP\u72b6\u6001\u7801206\u8868\u793a\u90e8\u5206\u5185\u5bb9\uff08Partial Content\uff09\u3002\u8fd9\u4e2a\u72b6\u6001\u7801\u662f\u5728\u5ba2\u6237\u7aef\u53d1\u9001\u4e86\u4e00\u4e2a\u5e26\u6709Range\u5934\u90e8\u7684GET\u8bf7\u6c42\uff0c\u670d\u52a1\u5668\u6210\u529f\u5904\u7406\u4e86\u8fd9\u4e2a\u8bf7\u6c42\u5e76\u4e14\u54cd\u5e94\u5305\u542b\u4e86\u8bf7\u6c42\u8303\u56f4\u5185\u7684\u90e8\u5206\u5185\u5bb9\u3002\u8fd9\u79cd\u60c5\u51b5\u901a\u5e38\u53d1\u751f\u5728\u5ba2\u6237\u7aef\u9700\u8981\u4e0b\u8f7d\u5927\u6587\u4ef6\u7684\u4e00\u90e8\u5206\u65f6\uff0c\u6216\u8005\u5728\u89c6\u9891\u6d41\u7b49\u5a92\u4f53\u6587\u4ef6\u7684\u5206\u6bb5\u4f20\u8f93\u4e2d\u3002\r\n2\u3001\u5f53\u5ba2\u6237\u7aef\u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42\uff0c\u5e76\u5728\u8bf7\u6c42\u5934\u90e8\u5305\u542bRange\u5b57\u6bb5\u6765\u6307\u5b9a\u6240\u9700\u7684\u5185\u5bb9\u8303\u56f4\u65f6\uff0c\u670d\u52a1\u5668\u4f1a\u8fd4\u56de206\u72b6\u6001\u7801\uff0c\u5e76\u4e14\u5728\u54cd\u5e94\u5934\u90e8\u5305\u542bContent-Range\u5b57\u6bb5\uff0c\u6307\u793a\u8fd4\u56de\u5185\u5bb9\u7684\u8303\u56f4\u3002\u8fd9\u5141\u8bb8\u5ba2\u6237\u7aef\u5728\u591a\u6b21\u8bf7\u6c42\u4e2d\u9010\u6b65\u83b7\u53d6\u6574\u4e2a\u8d44\u6e90\uff0c\u800c\u4e0d\u9700\u8981\u4e00\u6b21\u6027\u4e0b\u8f7d\u6574\u4e2a\u6587\u4ef6\u3002\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var i=t(6540);const r={},o=i.createContext(r);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);