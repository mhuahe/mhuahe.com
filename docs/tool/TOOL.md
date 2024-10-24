---
sidebar_position: 1
---

# 工具

## 安卓投屏

### scrcpy
https://github.com/Genymobile/scrcpy/blob/master/doc/windows.md

### Escrcpy
https://github.com/viarotel-org/escrcpy

### QtScrcpy
https://github.com/barry-ran/QtScrcpy

#### 快捷键

| 快捷键（MOD / ALT）         | 描述                     |
| --------------------------- | ------------------------ |
| MOD+f                       | 切换全屏模式             |
| MOD+Left/Right              | 左右旋转                 |
| MOD+Shift+Left/Right        | 水平翻转                 |
| MOD+Shift+Up/Down           | 垂直翻转                 |
| MOD+g/w                     | 全铺/自适应              |
| MOD+h（点击中键）           | HOME键                   |
| MOD+b/Backspace（单机右键） | 返回                     |
| MOD+s                       | 多任务                   |
| MOD+Up/Down                 | 音量                     |
| MOD+p                       | 电源键                   |
| 屏幕熄灭时单机右键          | 显示                     |
| MOD+o/Shift+o               | 开关设备屏幕（保持镜像） |
| MOD+n/Shift+n               | 开关通知栏               |
| MOD+c、MOD+x、MOD+v         | 复制、剪切、粘贴         |

## Ventoy
https://www.ventoy.net/cn/doc_start.html

> 一个开源的U盘启动盘制作工具

## Winget
https://learn.microsoft.com/zh-cn/windows/package-manager/

> Windows 的包管理工具

- `winget list/ls`：显示计算机上当前安装的应用程序的列表
- `winget upgrade/update`：展示需升级的应用程序或升级指定的应用程序

```shell
winget update --name git
```

## alist
https://github.com/AlistGo/alist

> 管理多个云盘的工具

### Windows

- `alist.exe server`：启动服务
- `alist.exe admin set NEW_PASSWORD`：设置管理员密码

### Linux

- `curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s install 【可选目录】`：安装
- `curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s update 【可选目录】`：更新
- `curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s uninstall 【可选目录】`：卸载

#### 启动

- `systemctl start alist`：启动
- `systemctl stop alist`：关闭
- `systemctl status alist`：状态
- `systemctl restart alist`：重启

#### 命令

- `alist admin`：管理员
- `alist admin set NEW_PASSWORD`：设置管理员密码
- `alist admin random`：随机生成管理员密码

## 代理相关

### VPN和机场的区别

#### VPN

VPN，即虚拟私人网络(Virtual Private Network)，是一种通过互联网提供安全通讯隧道的网络技术。VPN可以加密用户的数据，并通过专用协议(如PPTP、L2TP等)将加密数据传输到VPN服务商的服务器，再由服务器访问外部网络。通过这种方式，GFW只能看到加密数据，而无法判断用户访问了哪些网站，达到翻墙的目的。

想象一下，如果你要寄一封绝密信件，直接投递肯定会被检查。但如果你先用密码将信件加密，然后按照预定的秘密渠道发送出去，收信人用钥匙解密就可以读取到内容了。GFW只能看到你送出了一封加密信件，但读不到真正的信息。这就是VPN翻墙的基本原理。

具体来说，VPN服务商会在墙外架设VPN服务器。用户连接到这台服务器后，与其形成一个加密隧道。我们的网页访问请求被加密后通过隧道发给服务器，服务器再帮我们获取信息并传回来。在整个过程中，窥探者只能看到加密乱码，而无法识别我们在访问哪些网站。

#### 机场

机场并不是某种技术，而是一种商业化的网络服务。机场运营商会在墙外租用VPS(虚拟专用服务器)，在服务器上部署代理软件，如[Shadowsocks](https://www.vpndada.com/shadowsocks-tutorial-cn/)、[V2Ray](https://www.vpndada.com/v2ray-tutorial-cn/)等。用户付费购买机场服务后，就可以获得账号和密码，通过代理软件翻墙。从技术层面看，机场翻墙的原理与VPN相似，也是架设墙外代理服务器。但与VPN的专门加密协议不同，机场主要通过简单的SOCKS5代理进行流量转发。这使得机场相对VPN而言，速度更快，但加密和匿名性较弱。

#### 区别

- **服务形式**：提供VPN服务需要更高的门槛，需要团队维持，而机场服务往往个人也可以提供。
- **速度体验**：VPN的加密与专用协议会带来额外的连接开销，所以网速会比较慢。而机场依赖简单代理，网络速度反而更快。这也是小白用户较为青睐机场的原因之一。
- **价格方面**：专业的VPN服务定价一般在每月5-15美元不等，而个人运营的机场价格低至每月1-3美元，性价比高。
- **覆盖范围**：机场服务通常针对特定区域（如中国）的网络审查，而VPN服务则适用于全球范围内的用户。
- **功能范围**：VPN不仅可以用于绕过网络审查，还能保护用户在公共Wi-Fi下的通信安全，而机场服务则主要专注于绕过特定地区的网络审查。

### TUN模式

TUN模式（TUNel Mode）是一种低层次的网络代理方式，它通过创建虚拟网络接口（TUN接口）来截获系统的网络流量。该接口在操作系统的IP层工作，所有的网络流量会通过这个虚拟接口被重定向到代理程序中进行处理。

- **全流量代理**：TUN模式可以代理所有的网络流量，包括TCP和UDP协议。这意味着，无论应用程序如何配置网络设置，所有流量都可以通过TUN接口进行代理。
- **透明性**：对于应用程序而言，TUN模式的操作是透明的，应用程序无需感知代理的存在。
- **使用场景**：适合需要代理所有流量的场景，尤其是当需要处理系统级别的流量时，例如在一些VPN服务中使用TUN模式来代理整个设备的流量。

#### stack堆栈

tun 模式堆栈，如无使用问题，建议使用 `mixed`栈，默认 `gvisor`

- `system` 使用系统协议栈，可以提供更稳定/全面的 tun 体验，且占用相对其他堆栈更低
- `gvisor` 通过在用户空间中实现网络协议栈，可以提供更高的安全性和隔离性，同时可以避免操作系统内核和用户空间之间的切换，从而在特定情况下具有更好的网络处理性能
- `mixed` 混合堆栈，tcp 使用 `system`栈，udp 使用 `gvisor`栈，使用体验可能相对更好

### 系统代理模式

系统代理是在操作系统层面配置的代理设置，通常通过操作系统的网络设置来配置。配置后，操作系统会将所有支持代理的应用程序的流量通过指定的代理服务器来处理。

- **部分流量代理**：并不是所有的流量都会通过系统代理，通常是那些遵循操作系统代理设置的应用程序的流量会被代理，比如浏览器等。
- **灵活性有限**：系统代理的设置一般对应用程序是显式的，需要应用程序支持代理配置。
- **使用场景**：适用于需要为特定应用（如浏览器或下载工具）代理流量，而不希望代理整个系统流量的情况。

### PAC模式

PAC模式（Proxy Auto-Config）是一种智能代理配置模式，它通过一个由用户定义的JavaScript文件来确定特定网址的访问方式。在PAC模式下，用户可以根据自己的需求，编写一段JavaScript代码，来指定不同网址或者网址模式下的代理服务器设置。

国内网站依旧走本地网络。少部分国外网站不走代理，无法起到加速效果，甚至无法访问。

### 全局代理模式

全局代理模式则是将所有网络流量都通过指定的代理服务器进行访问。在全局代理模式下，无论是浏览网页、下载文件还是其他网络请求，都会经过预先设置的代理服务器。

所有网站都走代理。可访问全球所有网站。

### 配置相关

#### 规则配置

- 右击订阅编辑规则：1.7.1取消了全局配置（Clash Verge）
- 127.0.0.0/16：表示固定前16位（127.0），即127.0.0.0-127.0.255.255



