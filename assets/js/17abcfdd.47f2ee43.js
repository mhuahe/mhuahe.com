"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3873],{5903:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=r(4848),c=r(8453);const o=r.p+"assets/images/WebSocket-webSocket-e43b9061d26e8d34fce4db9c12266760.jpg",s={},d="JAVA-WebSocket",a={id:"java/JAVA-WebSocket",title:"JAVA-WebSocket",description:"WebSocket \u534f\u8bae\u57282008\u5e74\u8bde\u751f\uff0c2011\u5e74\u6210\u4e3a\u56fd\u9645\u6807\u51c6\u3002\u6240\u6709\u6d4f\u89c8\u5668\u90fd\u5df2\u7ecf\u652f\u6301\u4e86",source:"@site/docs/java/JAVA-WebSocket.md",sourceDirName:"java",slug:"/java/JAVA-WebSocket",permalink:"/mhuahe.com/docs/java/JAVA-WebSocket",draft:!1,unlisted:!1,editUrl:"https://github.dev/mhuahe/mhuahe.com/blob/master-ts/docs/java/JAVA-WebSocket.md",tags:[],version:"current",lastUpdatedBy:"heminhua",lastUpdatedAt:1729094642e3,frontMatter:{},sidebar:"java",previous:{title:"JAVA-\u591a\u7ebf\u7a0b",permalink:"/mhuahe.com/docs/java/JAVA-Thread"}},i={},l=[{value:"WebSocket \u548c HTTP \u7684\u5173\u7cfb",id:"websocket-\u548c-http-\u7684\u5173\u7cfb",level:4},{value:"WebSocket",id:"websocket",level:4},{value:"Netty-websocket",id:"netty-websocket",level:4},{value:"\u6ce8\u89e3\u8bf4\u660e",id:"\u6ce8\u89e3\u8bf4\u660e",level:4}];function h(e){const n={code:"code",h1:"h1",h4:"h4",header:"header",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"java-websocket",children:"JAVA-WebSocket"})}),"\n",(0,t.jsx)(n.p,{children:"WebSocket \u534f\u8bae\u57282008\u5e74\u8bde\u751f\uff0c2011\u5e74\u6210\u4e3a\u56fd\u9645\u6807\u51c6\u3002\u6240\u6709\u6d4f\u89c8\u5668\u90fd\u5df2\u7ecf\u652f\u6301\u4e86"}),"\n",(0,t.jsx)(n.h4,{id:"websocket-\u548c-http-\u7684\u5173\u7cfb",children:"WebSocket \u548c HTTP \u7684\u5173\u7cfb"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"-- \u7ed3\u8bba\r\n1.WebSocket\u548cHTTP\u90fd\u662f\u57fa\u4e8eTCP\u534f\u8bae\u7684\u4e24\u4e2a\u4e0d\u540c\u7684\u534f\u8bae\r\n2.WebSocket\u4f9d\u8d56\u4e8eHTTP\u8fde\u63a5\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"-- \u95ee\u9898\u4e00\r\n1.WebSocket\u4f9d\u8d56\u4e8eHTTP\u8fde\u63a5\uff0c\u90a3\u4e48\u5b83\u5982\u4f55\u4ece\u8fde\u63a5\u7684HTTP\u534f\u8bae\u8f6c\u5316\u4e3aWebSocket\u534f\u8bae\uff1f\r\n\u6bcf\u4e2aWebSocket\u8fde\u63a5\u90fd\u59cb\u4e8e\u4e00\u4e2aHTTP\u8bf7\u6c42\u3002\u5177\u4f53\u6765\u8bf4\uff0cWebSocket\u534f\u8bae\u5728\u7b2c\u4e00\u6b21\u63e1\u624b\u8fde\u63a5\u65f6\uff0c\u901a\u8fc7HTTP\u534f\u8bae\u5728\u4f20\u9001WebSocket\u652f\u6301\u7684\u7248\u672c\u53f7\uff0c\u534f\u8bae\u7684\u5b57\u7248\u672c\u53f7\uff0c\u539f\u59cb\u5730\u5740\uff0c\u4e3b\u673a\u5730\u5740\u7b49\u7b49\u4e00\u4e9b\u5217\u5b57\u6bb5\u7ed9\u670d\u52a1\u5668\u7aef\r\nGET /chat HTTP/1.1\r\nHost: server.example.com\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Key:dGhlIHNhbXBsZSBub25jZQ==\r\nOrigin: http://example.com\r\nSec-WebSocket-Version: 13\r\n\u6ce8\u610f\uff0c\u5173\u952e\u7684\u5730\u65b9\u662f\uff0c\u8fd9\u91cc\u9762\u6709\u4e2aUpgrade\u9996\u90e8\uff0c\u7528\u6765\u628a\u5f53\u524d\u7684HTTP\u8bf7\u6c42\u5347\u7ea7\u5230WebSocket\u534f\u8bae\uff0c\u8fd9\u662fHTTP\u534f\u8bae\u672c\u8eab\u7684\u5185\u5bb9\uff0c\u662f\u4e3a\u4e86\u6269\u5c55\u652f\u6301\u5176\u4ed6\u7684\u901a\u8baf\u534f\u8bae\u3002 \u5982\u679c\u670d\u52a1\u5668\u652f\u6301\u65b0\u7684\u534f\u8bae\uff0c\u5219\u5fc5\u987b\u8fd4\u56de101\r\nHTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept:s3pPLMBiTxaQ9kYGzzhZRbK+xOo=\r\n\u81f3\u6b64\uff0cHTTP\u8bf7\u6c42\u7269\u5c3d\u5176\u7528\uff0c\u5982\u679c\u6210\u529f\u89e6\u53d1onopen\u4e8b\u4ef6\uff0c\u5426\u5219\u89e6\u53d1onerror\u4e8b\u4ef6\uff0c\u540e\u9762\u7684\u4f20\u8f93\u5219\u4e0d\u518d\u4f9d\u8d56HTTP\u534f\u8bae\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"-- \u95ee\u9898\u4e8c\r\n2.WebSocket\u4e3a\u4ec0\u4e48\u8981\u4f9d\u8d56\u4e8eHTTP\u534f\u8bae\u7684\u8fde\u63a5\uff1f\r\nWebSocket\u8bbe\u8ba1\u4e0a\u5c31\u662f\u5929\u751f\u4e3aHTTP\u589e\u5f3a\u901a\u4fe1\uff08\u5168\u53cc\u5de5\u901a\u4fe1\u7b49\uff09\uff0c\u6240\u4ee5\u5728HTTP\u534f\u8bae\u8fde\u63a5\u7684\u57fa\u7840\u4e0a\u662f\u5f88\u81ea\u7136\u7684\u4e00\u4ef6\u4e8b\uff0c\u5e76\u56e0\u6b64\u800c\u80fd\u83b7\u5f97HTTP\u7684\u8bf8\u591a\u4fbf\u5229\u3002\u8fd9\u8bf8\u591a\u4fbf\u5229\u4e2d\u6709\u4e00\u6761\u5f88\u91cd\u8981\uff0c\u57fa\u4e8eHTTP\u8fde\u63a5\u5c06\u83b7\u5f97\u6700\u5927\u7684\u4e00\u4e2a\u517c\u5bb9\u652f\u6301\uff0c\u6bd4\u5982\u5373\u4f7f\u670d\u52a1\u5668\u4e0d\u652f\u6301WebSocket\u4e5f\u80fd\u5efa\u7acbHTTP\u901a\u4fe1\uff0c\u53ea\u4e0d\u8fc7\u8fd4\u56de\u7684\u662fonerror\u800c\u5df2\uff0c\u8fd9\u663e\u7136\u6bd4\u670d\u52a1\u5668\u65e0\u54cd\u5e94\u8981\u597d\u7684\u591a\n"})}),"\n",(0,t.jsx)(n.h4,{id:"websocket",children:"WebSocket"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'-- \u6211\u4eec\u5df2\u7ecf\u6709\u4e86 HTTP \u534f\u8bae\uff0c\u4e3a\u4ec0\u4e48\u8fd8\u9700\u8981WebSocket\u534f\u8bae\uff1f\u5b83\u80fd\u5e26\u6765\u4ec0\u4e48\u597d\u5904\uff1f\r\nHTTP \u534f\u8bae\u6709\u4e00\u4e2a\u7f3a\u9677\uff1a\u901a\u4fe1\u53ea\u80fd\u7531\u5ba2\u6237\u7aef\u53d1\u8d77\r\n\u8fd9\u79cd\u5355\u5411\u8bf7\u6c42\u7684\u7279\u70b9\uff0c\u6ce8\u5b9a\u4e86\u5982\u679c\u670d\u52a1\u5668\u6709\u8fde\u7eed\u7684\u72b6\u6001\u53d8\u5316\uff0c\u5ba2\u6237\u7aef\u8981\u83b7\u77e5\u5c31\u975e\u5e38\u9ebb\u70e6\u3002\u6211\u4eec\u53ea\u80fd\u4f7f\u7528"\u8f6e\u8be2"\uff1a\u6bcf\u9694\u4e00\u6bb5\u65f6\u5019\uff0c\u5c31\u53d1\u51fa\u4e00\u4e2a\u8be2\u95ee\uff0c\u4e86\u89e3\u670d\u52a1\u5668\u6709\u6ca1\u6709\u65b0\u7684\u4fe1\u606f\u3002\u6700\u5178\u578b\u7684\u573a\u666f\u5c31\u662f\u804a\u5929\u5ba4\u3002\r\n\u8f6e\u8be2\u7684\u6548\u7387\u4f4e\uff0c\u975e\u5e38\u6d6a\u8d39\u8d44\u6e90\uff08\u56e0\u4e3a\u5fc5\u987b\u4e0d\u505c\u8fde\u63a5\uff0c\u6216\u8005HTTP\u8fde\u63a5\u59cb\u7ec8\u6253\u5f00\uff09\u3002\u56e0\u6b64\uff0c\u5de5\u7a0b\u5e08\u4eec\u4e00\u76f4\u5728\u601d\u8003\uff0c\u6709\u6ca1\u6709\u66f4\u597d\u7684\u65b9\u6cd5\u3002WebSocket \u5c31\u662f\u8fd9\u6837\u53d1\u660e\u7684\u3002\r\n-- \u7279\u70b9\r\nws://example.com:80/some/path\r\n\uff081\uff09\u5efa\u7acb\u5728 TCP \u534f\u8bae\u4e4b\u4e0a\uff0c\u670d\u52a1\u5668\u7aef\u7684\u5b9e\u73b0\u6bd4\u8f83\u5bb9\u6613\u3002\r\n\uff082\uff09\u4e0e HTTP \u534f\u8bae\u6709\u7740\u826f\u597d\u7684\u517c\u5bb9\u6027\u3002\u9ed8\u8ba4\u7aef\u53e3\u4e5f\u662f80\u548c443\uff0c\u5e76\u4e14\u63e1\u624b\u9636\u6bb5\u91c7\u7528 HTTP \u534f\u8bae\uff0c\u56e0\u6b64\u63e1\u624b\u65f6\u4e0d\u5bb9\u6613\u5c4f\u853d\uff0c\u80fd\u901a\u8fc7\u5404\u79cd HTTP \u4ee3\u7406\u670d\u52a1\u5668\u3002\r\n\uff083\uff09\u6570\u636e\u683c\u5f0f\u6bd4\u8f83\u8f7b\u91cf\uff0c\u6027\u80fd\u5f00\u9500\u5c0f\uff0c\u901a\u4fe1\u9ad8\u6548\u3002\r\n\uff084\uff09\u53ef\u4ee5\u53d1\u9001\u6587\u672c\uff0c\u4e5f\u53ef\u4ee5\u53d1\u9001\u4e8c\u8fdb\u5236\u6570\u636e\u3002\r\n\uff085\uff09\u6ca1\u6709\u540c\u6e90\u9650\u5236\uff0c\u5ba2\u6237\u7aef\u53ef\u4ee5\u4e0e\u4efb\u610f\u670d\u52a1\u5668\u901a\u4fe1\u3002\r\n\uff086\uff09\u534f\u8bae\u6807\u8bc6\u7b26\u662fws\uff08\u5982\u679c\u52a0\u5bc6\uff0c\u5219\u4e3awss\uff09\uff0c\u670d\u52a1\u5668\u7f51\u5740\u5c31\u662f URL\u3002\n'})}),"\n","\n",(0,t.jsx)("img",{src:o,alt:"WebSocket-webSocket",width:"50%"}),"\n",(0,t.jsx)(n.h4,{id:"netty-websocket",children:"Netty-websocket"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"\x3c!-- netty\u4f9d\u8d56 --\x3e\r\n<dependency>\r\n    <groupId>org.yeauty</groupId>\r\n    <artifactId>netty-websocket-spring-boot-starter</artifactId>\r\n    <version>0.12.0</version>\r\n</dependency>\n"})}),"\n",(0,t.jsx)(n.h4,{id:"\u6ce8\u89e3\u8bf4\u660e",children:"\u6ce8\u89e3\u8bf4\u660e"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'@ServerEndpoint\r\n\u5f53ServerEndpointExporter\u7c7b\u901a\u8fc7Spring\u914d\u7f6e\u8fdb\u884c\u58f0\u660e\u5e76\u88ab\u4f7f\u7528\uff0c\u5b83\u5c06\u4f1a\u53bb\u626b\u63cf\u5e26\u6709@ServerEndpoint\u6ce8\u89e3\u7684\u7c7b\u88ab\u6ce8\u89e3\u7684\u7c7b\u5c06\u88ab\u6ce8\u518c\u6210\u4e3a\u4e00\u4e2aWebSocket\u7aef\u70b9\u6240\u6709\u7684\u914d\u7f6e\u9879\u90fd\u5728\u8fd9\u4e2a\u6ce8\u89e3\u7684\u5c5e\u6027\u4e2d (\u5982:@ServerEndpoint("/ws") )\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"@BeforeHandshake\r\n\u5f53\u6709\u65b0\u7684\u8fde\u63a5\u8fdb\u5165\u65f6\uff0c\u5bf9\u8be5\u65b9\u6cd5\u8fdb\u884c\u56de\u8c03 \u6ce8\u5165\u53c2\u6570\u7684\u7c7b\u578b:Session\u3001HttpHeaders...\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"@OnOpen\r\n\u5f53\u6709\u65b0\u7684WebSocket\u8fde\u63a5\u5b8c\u6210\u65f6\uff0c\u5bf9\u8be5\u65b9\u6cd5\u8fdb\u884c\u56de\u8c03 \u6ce8\u5165\u53c2\u6570\u7684\u7c7b\u578b:Session\u3001HttpHeaders...\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"@OnClose\r\n\u5f53\u6709WebSocket\u8fde\u63a5\u5173\u95ed\u65f6\uff0c\u5bf9\u8be5\u65b9\u6cd5\u8fdb\u884c\u56de\u8c03 \u6ce8\u5165\u53c2\u6570\u7684\u7c7b\u578b:Session\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"@OnError\r\n\u5f53\u6709WebSocket\u629b\u51fa\u5f02\u5e38\u65f6\uff0c\u5bf9\u8be5\u65b9\u6cd5\u8fdb\u884c\u56de\u8c03 \u6ce8\u5165\u53c2\u6570\u7684\u7c7b\u578b:Session\u3001Throwable\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"@OnMessage\r\n\u5f53\u63a5\u6536\u5230\u5b57\u7b26\u4e32\u6d88\u606f\u65f6\uff0c\u5bf9\u8be5\u65b9\u6cd5\u8fdb\u884c\u56de\u8c03 \u6ce8\u5165\u53c2\u6570\u7684\u7c7b\u578b:Session\u3001String\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"@OnBinary\r\n\u5f53\u63a5\u6536\u5230\u4e8c\u8fdb\u5236\u6d88\u606f\u65f6\uff0c\u5bf9\u8be5\u65b9\u6cd5\u8fdb\u884c\u56de\u8c03 \u6ce8\u5165\u53c2\u6570\u7684\u7c7b\u578b:Session\u3001byte[]\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"@OnEvent\r\n\u5f53\u63a5\u6536\u5230Netty\u7684\u4e8b\u4ef6\u65f6\uff0c\u5bf9\u8be5\u65b9\u6cd5\u8fdb\u884c\u56de\u8c03 \u6ce8\u5165\u53c2\u6570\u7684\u7c7b\u578b:Session\u3001Object\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>d});var t=r(6540);const c={},o=t.createContext(c);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);