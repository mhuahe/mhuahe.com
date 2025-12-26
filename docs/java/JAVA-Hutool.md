# HuTool

## 工具类使用

### Convert 转换

```java
//转换工具类
//兼容了"1,3"和"[1,3]"格式
String cover =  "[1,3]";
List<String> list = Convert.toList(String.class, cover);
```

### ObjectUtil 对象判空

```java
//兼容list、map、CharSequence(String)、Iterator、Iterable(可迭代的)判空
ObjectUtil.isNotEmpty(Object);
//比较对象 BigDecimal 。兼容String、list
//(a == b) || (a != null && a.equals(b));
BigDecimal bigNum1 = new BigDecimal();
BigDecimal bigNum2 = new BigDecimal();
ObjectUtil.equals(bigNum1, bigNum2);
//判断不为null
//null != obj && false == obj.equals(null);
ObjectUtil.isNotNull(Object);
```

### CglibUtil 拷贝

```xml
<dependency>
    <groupId>cglib</groupId>
    <artifactId>cglib</artifactId>
    <version>3.1</version>
</dependency>
```

```java
//cglib拷贝
User user = new User("key", "value");
User userCopy = CglibUtil.copy(user, User.class);
//cglib拷贝list Supplier用来创建对象的,每次get都会调用构造方法，获取的对象都不同
Supplier<User> copy = User::new;
User user = copy.get();
List<User> userList = new ArrayList<>();
List<User> users = CglibUtil.copyList(userList, User::new);
```

### CaptchaUtil 图像验证码

```java
//图像验证码
//线形干扰
LineCaptcha captcha = CaptchaUtil.createLineCaptcha(250, 120);
//圆形干扰
CircleCaptcha circleCaptcha = CaptchaUtil.createCircleCaptcha(250, 120);
//扭曲干扰
ShearCaptcha shearCaptcha = CaptchaUtil.createShearCaptcha(250, 120);
//gif
GifCaptcha gifCaptcha = CaptchaUtil.createGifCaptcha(250, 120);
//图形验证码写出，可以写出到文件，也可以写出到流，即在你的电脑D盘中会有一个shear.png的图片
gifCaptcha.write("D://image.jpg");
```

### MailUtil 邮箱

```properties
#mail.setting
# 邮件服务器的SMTP地址，可选，默认为smtp.<发件人邮箱后缀>
host = smtp.exmail.qq.com
# 邮件服务器的SMTP端口，可选，默认25
port = 465
# 发件人（必须正确，否则发送失败）
from = mhuahe@mhuahe.com
# 用户名，默认为发件人邮箱前缀
# user = xxxx
# 密码（注意，某些邮箱需要为SMTP服务单独设置授权码，详情查看相关帮助）
pass = NDp0T1gi3U
#使用 STARTTLS安全连接，STARTTLS是对纯文本通信协议的扩展。
starttlsEnable = true

# 使用SSL安全连接
sslEnable = true
# 指定实现javax.net.SocketFactory接口的类的名称,这个类将被用于创建SMTP的套接字
socketFactoryClass = javax.net.ssl.SSLSocketFactory
# 如果设置为true,未能创建一个套接字使用指定的套接字工厂类将导致使用java.net.Socket创建的套接字类, 默认值为true
socketFactoryFallback = true
# 指定的端口连接到在使用指定的套接字工厂。如果没有设置,将使用默认端口456
socketFactoryPort = 465

# SMTP超时时长，单位毫秒，缺省值不超时
timeout = 0
# Socket连接超时值，单位毫秒，缺省值不超时
connectionTimeout = 0
```

```xml
<dependency>
    <groupId>com.sun.mail</groupId>
    <artifactId>javax.mail</artifactId>
    <version>1.5.6</version>
</dependency>
```

```java
//需要在resource下家mail.setting配置
String sendText = MailUtil.sendText("1075335917@qq.com", "测试邮件", "这是正文");
```

#### 如何获取谷歌应用专用密码
前提条件
谷歌账户必须启用两步验证（2FA）

需要使用 Gmail 发送邮件

详细步骤
第一步：启用两步验证（如果尚未启用）
访问 https://myaccount.google.com/security

登录你的谷歌账号

找到"两步验证"（2-Step Verification）

点击"开始"并按照提示设置

第二步：生成应用专用密码
访问应用密码页面：

直接访问：https://myaccount.google.com/apppasswords

或者：安全设置 → 应用专用密码

选择应用：

在"选择应用"下拉菜单中，选择"邮件"

选择设备：

在"选择设备"下拉菜单中，选择"其他（自定义名称）"

输入一个容易识别的名称，例如："Spring Boot Mail"

生成密码：

点击"生成"

你会看到一个 16位的密码（格式如：xxxx xxxx xxxx xxxx）

立即复制这个密码，因为它只显示一次！

### RadixUtil 进制转换

```java
//012 表示 3进制；0-0,1-1,2-2
String encode = RadixUtil.encode("012", 10);
//ABC 表示 3进制；A-0,B-1,C-2
String encode = RadixUtil.encode("ABC", 10);
```

### PinyinUtil拼音

```xml
<dependency>
    <groupId>com.belerweb</groupId>
    <artifactId>pinyin4j</artifactId>
    <version>2.5.0</version>
</dependency>
```

## 常用工具类

| 类                                       | 类描述                                                       |
| ---------------------------------------- | ------------------------------------------------------------ |
| cn.hutool.core.map.MapUtil               | Map工具类、Map参数排序(用于签名)、键值互换、排序、获取值并转换类型 |
| cn.hutool.json.JSONUtil                  | JSON工具类                                                   |
| cn.hutool.core.comparator.CompareUtil    | 比较器工具类                                                 |
| cn.hutool.core.collection.ListUtil       | List工具类                                                   |
| cn.hutool.core.util.ObjectUtil           | 对象操作工具类、判空、比较                                   |
| cn.hutool.core.util.RadixUtil            | 进制转换工具类                                               |
| cn.hutool.core.bean.BeanUtil             | Bean工具类、Bean转Map                                        |
| cn.hutool.core.util.NumberUtil           | 数字工具类、BigDecimal计算                                   |
| cn.hutool.core.thread.ThreadUtil         | 线程池工具                                                   |
| cn.hutool.http.HttpUtil                  | Http请求工具类                                               |
| cn.hutool.core.text.UnicodeUtil          | Unicode字符串和普通字符串转换工具类                          |
| cn.hutool.core.util.IdcardUtil           | 身份证工具类                                                 |
| cn.hutool.extra.servlet.ServletUtil      | Servlet工具类、请求参数、请求体、请求头、cookie操作          |
| cn.hutool.core.util.IdUtil               | 生成Id工具类、UUID                                           |
| cn.hutool.core.util.PageUtil             | 分页工具类                                                   |
| cn.hutool.core.util.PhoneUtil            | 电话号码工具类                                               |
| cn.hutool.extra.pinyin.PinyinUtil        | 拼音工具类                                                   |
| cn.hutool.core.util.ReflectUtil          | 反射工具类                                                   |
| cn.hutool.extra.spring.SpringUtil        | 从Spring容器中获取Bean                                       |
| cn.hutool.core.util.ZipUtil              | 压缩工具类                                                   |
| cn.hutool.core.util.TypeUtil             | 参数类型工具类、获取方法类型、泛型（反射时使用）             |
| cn.hutool.core.annotation.AnnotationUtil | 快速获取注解对象、注解值等工具封装                           |
| cn.hutool.cache.CacheUtil                | 缓存工具类、创建缓存                                         |
| cn.hutool.core.io.resource.ResourceUtil  | Resource资源工具类                                           |
| cn.hutool.core.convert.Convert           | 类型转换器（通用类型转换，可使用）                           |
| cn.hutool.core.util.DesensitizedUtil     | 脱敏工具类                                                   |

## 其他工具类

| 类                                           | 类描述                                                       |
| -------------------------------------------- | ------------------------------------------------------------ |
| cn.hutool.core.date.TemporalAccessorUtil     | 时间工具类（时间格式转换）、TemporalAccessor时间类           |
| cn.hutool.core.date.DateUtil                 | 时间工具类、Date、格式转换                                   |
| cn.hutool.core.date.TemporalUtil             | 时间工具类                                                   |
| cn.hutool.core.date.LocalDateTimeUtil        | LocalDateTime工具类封装                                      |
| cn.hutool.core.date.CalendarUtil             | Calendar对象封装工具类、日历                                 |
|                                              |                                                              |
| cn.hutool.extra.compress.CompressUtil        | 压缩工具类                                                   |
| cn.hutool.core.lang.caller.CallerUtil        | 获取调用者                                                   |
| cn.hutool.core.util.HashUtil                 | Hash算法                                                     |
| cn.hutool.core.util.EnumUtil                 | 枚举工具类                                                   |
| cn.hutool.core.lang.tree.TreeUtil            | 构建树工具类                                                 |
|                                              |                                                              |
| cn.hutool.core.util.CreditCodeUtil           | 统一社会信用代码工具类                                       |
| cn.hutool.core.util.ModifierUtil             | 修饰符工具类                                                 |
| cn.hutool.http.HtmlUtil                      | HTML工具类、清除Html标签或内容                               |
| cn.hutool.core.util.ReferenceUtil            | 引用工具类、创建引用。new对象默认强引用。工具可设置成其它引用 |
| cn.hutool.extra.mail.MailUtil                | 邮件工具类，基于javax.mail封装、使用配置文件设置的邮箱发送   |
| cn.hutool.core.util.URLUtil                  | URL统一资源定位符相关工具类                                  |
| cn.hutool.core.util.HexUtil                  | 字节数组使用十六进制加密转换                                 |
|                                              |                                                              |
| cn.hutool.cron.CronUtil                      | 定时任务工具类                                               |
| cn.hutool.cron.pattern.CronPatternUtil       | 定时任务表达式工具类                                         |
|                                              |                                                              |
| cn.hutool.core.util.RuntimeUtil              | 系统运行时工具类，用于执行系统命令的工具                     |
|                                              |                                                              |
| cn.hutool.crypto.SecureUtil                  | 安全相关工具类、加密算法                                     |
| cn.hutool.core.net.NetUtil                   | 网络相关工具                                                 |
| cn.hutool.core.util.EscapeUtil               | 转义和反转义工具类Escape、Unescape                           |
| cn.hutool.crypto.BCUtil                      | Bouncy Castle相关工具类封装、BC公钥私钥                      |
| cn.hutool.core.net.Ipv4Util                  | IPV4地址工具类                                               |
| cn.hutool.crypto.digest.DigestUtil           | 摘要算法工具类、MD5、sha256                                  |
| cn.hutool.extra.qrcode.QrCodeUtil            | 基于Zxing的二维码工具类                                      |
|                                              |                                                              |
| cn.hutool.system.oshi.OshiUtil               | Oshi库封装的工具类，通过此工具类，可获取系统、硬件相关信息   |
| cn.hutool.socket.SocketUtil                  | Socket相关工具类                                             |
| cn.hutool.core.util.ServiceLoaderUtil        | SPI机制中的服务加载工具类                                    |
| cn.hutool.aop.ProxyUtil                      | 代理工具类                                                   |
| cn.hutool.core.exceptions.ExceptionUtil      | 异常工具类                                                   |
| cn.hutool.core.util.XmlUtil                  | XML工具类                                                    |
|                                              |                                                              |
| cn.hutool.core.img.GraphicsUtil              | Graphics相关工具类、绘图、画笔                               |
| cn.hutool.core.img.FontUtil                  | AWT中字体相关工具类                                          |
|                                              |                                                              |
| cn.hutool.core.compiler.CompilerUtil         | 源码编译工具类                                               |
| cn.hutool.crypto.SmUtil                      | SM国密算法工具类                                             |
| cn.hutool.dfa.SensitiveUtil                  | 敏感词工具类                                                 |
| cn.hutool.crypto.KeyUtil                     | 密钥工具类                                                   |
| cn.hutool.crypto.PemUtil                     | PEM格式工具类、公钥私钥、证书                                |
|                                              |                                                              |
| cn.hutool.setting.dialect.PropsUtil          | Props工具类、获取配置文件                                    |
|                                              |                                                              |
| cn.hutool.core.util.ClassUtil                | 类工具类                                                     |
| cn.hutool.core.util.ClassLoaderUtil          | 类加载器工具类                                               |
|                                              |                                                              |
| cn.hutool.core.swing.ScreenUtil              | 屏幕操作、截图、获取屏幕大小                                 |
| cn.hutool.captcha.CaptchaUtil                | 图片验证码工具类                                             |
| cn.hutool.core.img.ImgUtil                   | 图像处理工具类、二值化、缩放、水印、旋转、压缩、base64转换、文件创建图片等 |
| cn.hutool.extra.emoji.EmojiUtil              | Emoji表情工具类                                              |
| cn.hutool.core.swing.RobotUtil               | 模拟鼠标、键盘操作工具类                                     |
| cn.hutool.core.swing.clipboard.ClipboardUtil | 系统剪贴板工具类、监听剪切板修改                             |
| cn.hutool.core.swing.DesktopUtil             | 桌面相关工具                                                 |
|                                              |                                                              |
| cn.hutool.core.io.NioUtil                    | 拷贝文件流工具类                                             |
| cn.hutool.core.io.IoUtil                     | IO工具类                                                     |
| cn.hutool.core.io.file.FileNameUtil          | 文件名相关工具类                                             |
| cn.hutool.core.io.BufferUtil                 | ByteBuffer工具类                                             |
| cn.hutool.core.io.file.PathUtil              | NIO中Path对象操作封装                                        |
| cn.hutool.core.io.FileUtil                   | 文件工具类                                                   |
| cn.hutool.core.io.FileTypeUtil               | 文件类型判断工具类、视频、图片类型                           |
|                                              |                                                              |
| cn.hutool.core.util.ArrayUtil                | 数组工具类、数组操作元素                                     |
| cn.hutool.extra.cglib.CglibUtil              | cglib工具类、拷贝对象、集合、对象map互转                     |
| cn.hutool.system.SystemUtil                  | Java的System类封装工具类                                     |
| cn.hutool.core.collection.IterUtil           | Iterable、Iterator相关工具类                                 |
| cn.hutool.core.collection.CollUtil           | 集合相关工具类                                               |
| cn.hutool.core.text.CharSequenceUtil         | CharSequence相关工具类封装                                   |
| cn.hutool.core.util.CharsetUtil              | 字符集工具类、转换字符集编码                                 |
| cn.hutool.core.util.StrUtil                  | 字符串工具类                                                 |
| cn.hutool.core.util.ReUtil                   | 正则相关工具类                                               |
| cn.hutool.core.util.RandomUtil               | 随机工具类                                                   |
| cn.hutool.core.util.BooleanUtil              | Boolean类型工具类                                            |
| cn.hutool.core.math.MathUtil                 | 数学相关方法工具类、计算阶级                                 |
| cn.hutool.core.util.PrimitiveArrayUtil       | 数组工具类                                                   |
| cn.hutool.core.util.CharUtil                 | 字符工具类，字符判断                                         |

