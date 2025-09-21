---
sidebar_position: 6
sidebar_label: 工具-Nginx
---

# Nginx

## 部署Nginx

1、`./configure`: 编译前的配置和依赖检查
2、`make`：编译
3、`make install`: 安装

Nginx安装完成后，默认自动创建 /usr/local/nginx 目录

## 基本命令

```shell
# 启动nginx
$ nginx -c nginx.conf

# 停止nginx
$ nginx -s stop

# 重载nginx
$ nginx -s reload

# 杀掉nginx
$ nginx -s quit

# 检查nginx配置
$ nginx -t
```

```sql
-- 查看是否启动成功
tasklist /fi "imagename eq nginx.exe" 

-- 快速停止或关闭nginx
-- 使用nginx -s stop命令关闭所启动的nginx时，同时会删除logs中的nginx.pid文件
nginx -s stop

-- 完整有序的停止nginx
-- 使用nginx -s quit命令关闭所启动的nginx时，同时也会删除logs中的nginx.pid文件
nginx -s quit

-- 使用taskkill停止或关闭nginx
-- 使用taskkill /f /t /im nginx.exe命令关闭所启动的nginx时，不会删除logs中的nginx.pid文件
taskkill /f /t /im nginx.exe

-- 多个配置
1、在conf文件在创建目录conf.d文件夹
2、将需要导入的配置文件写到conf.d文件夹下
3、在nginx.conf文件后添加配置（需要全路径）
include D:/hayes/software-0104/nginx-1.22.1/conf/conf.d/*.conf;
```

## 配置方式

###  反向代理

```sql
-- 反向代理就是当请求访问你的代理服务器时，代理服务器会对你的请求进行转发，可以转发到静态的资源路径上去，也可以转发到动态的服务接口上去
```

#### 静态代理

```sql
-- 静态代理就是将请求代理到不同的静态资源路径上去，这里我们将对docs.hmh.com的请求代理到我的文档项目中

-- 首先我们修改下本机的host文件
127.0.0.1 docs.hmh.com

-- 修改nginx配置文件
server {
    listen       80;
    server_name  docs.hmh.com;

    location / {
        root   D:/hayes/mine-code/hmh_start/hmh-parent/hmh-system/src/main/resources;
        index  index.html index.htm;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}
```

####  动态代理

```sql
-- 动态代理就是把代理服务器的请求转发到另一个服务上去，这里我们将对api.hmh.com的请求代理到hmh-start的后台服务上去

-- 首先我们修改下本机的host文件
127.0.0.1 api.hmh.com

-- 修改nginx配置文件
server {
	listen       80;
	server_name  api.hmh.com; #修改域名

	location / {
		proxy_pass   http://127.0.0.1:9992; #修改为代理服务地址
		index  index.html index.htm;
	}

	error_page   500 502 503 504  /50x.html;
	location = /50x.html {
		root   /usr/share/nginx/html;
	}
}
```

### 文件压缩

```sql
-- 如果我们租用了一个带宽很低的服务器，网站访问速度会很慢，这时我们可以通过让nginx开启GZIP压缩来提高网站的访问速度。这里我们以mall的前端项目为例来演示下它的提速效果

-- 首先我们对nginx进行限速操作，限制每个连接的访问速度为128K来建立一个比较慢的访问场景
server {
	listen       80;
	server_name  api.hmh.com; #修改域名
	
	limit_rate 128K; #限制网速为128K

	location / {
		proxy_pass   http://127.0.0.1:9992; #修改为代理服务地址
		index  index.html index.htm;
	}

	error_page   500 502 503 504  /50x.html;
	location = /50x.html {
		root   /usr/share/nginx/html;
	}
}

-- 修改配置文件，开启GZIP压缩
http {

    gzip on; #开启gzip
    gzip_disable "msie6"; #IE6不使用gzip
    gzip_vary on; #设置为on会在Header里增加 "Vary: Accept-Encoding"
    gzip_proxied any; #代理结果数据的压缩
    gzip_comp_level 6; #gzip压缩比（1~9），越小压缩效果越差，但是越大处理越慢，所以一般取中间值
    gzip_buffers 16 8k; #获取多少内存用于缓存压缩结果
    gzip_http_version 1.1; #识别http协议的版本
    gzip_min_length 1k; #设置允许压缩的页面最小字节数，超过1k的文件会被压缩
    gzip_types application/javascript text/css; #对特定的MIME类型生效,js和css文件会被压缩

}

-- nginx返回请求头中添加了Content-Encoding: gzip的信息
```

### 地址重写

```sql
-- 有的时候我们的网站更换了域名，但还有用户在使用老的域名访问，这时可以通过nginx的地址重写来让用户跳转到新的域名进行访问

-- 比如说原来我们用的docs.macrozheng.com这个域名不用了，现在改成www.macrozheng.com了来访问文档项目了

-- 修改docs.conf配置文件，将地址带参数重写到新地址
server {
	listen       80;
	server_name  api.hmh.com; #修改域名
	
	rewrite "^/(.*)$" http://www.macrozheng.com/$1; #地址重写到新地址
	
	limit_rate 128K; #限制网速为128K

	location / {
		proxy_pass   http://127.0.0.1:9992; #修改为代理服务地址
		index  index.html index.htm;
	}

	error_page   500 502 503 504  /50x.html;
	location = /50x.html {
		root   /usr/share/nginx/html;
	}
}

-- 此时访问旧域名api.hmh.com会直接跳转到www.macrozheng.com去
```

### 按目录划分项目

```sql
-- 有时候我们需要使用同一个域名来访问不同的前端项目，这时候就需要通过子目录来区分前端项目了

-- 比如说我们需要按以下路径来访问各个前端项目
www.hmh.com #访问文档项目
www.hmh.com/admin #访问后台项目
www.hmh.com/app #访问移动端项目

-- 首先我们修改下本机的host文件
127.0.0.1 www.hmh.com

-- 修改配置文件，添加不同的location规则，要注意alias和root指令的区别，root不会将location配置的路径去掉，而alias会将location配置的路径去掉

server {
	listen       80;
	server_name  www.hmh.com;

	location / {
		root   D:/hayes/software-0104/html;
		index  index.html index.htm;
	}

	location /admin {
		alias   D:/hayes/software-0104/html/admin;
		index  index.html index.htm;
	}

	location /app {
		alias   D:/hayes/software-0104/html/app;
		index  index.html index.htm;
	}

	error_page   500 502 503 504  /50x.html;
	location = /50x.html {
		root   /usr/share/nginx/html;
	}
}
```

### nginx支持https

#### 生成SSL自签名证书

```sql
-- 首先创建SSL证书私钥，期间需要输入两次用户名和密码，生成文件为blog.key
openssl genrsa -des3 -out blog.key 2048

-- 利用私钥生成一个不需要输入密码的密钥文件，生成文件为blog_nopass.key
openssl rsa -in blog.key -out blog_nopass.key

-- 创建SSL证书签名请求文件，生成SSL证书时需要使用到，生成文件为blog.csr
openssl req -new -key blog.key -out blog.csr

-- 在生成过程中，我们需要输入一些信息，需要注意的是Common Name需要和网站域名一致
Enter pass phrase for blog.key:
-----
Country Name (2 letter code) [XX]:CN                                         # 国家代码
State or Province Name (full name) []:jiangsu                                # 省份
Locality Name (eg, city) [Default City]:jiangsu                              # 城市
Organization Name (eg, company) [Default Company Ltd]:macrozheng             # 机构名称
Organizational Unit Name (eg, section) []:dev                                # 单位名称
Common Name (eg, your name or your server is hostname) []:blog.macrozheng.com # 网站域名
Email Address []:macrozheng@qq.com                                           # 邮箱

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:                                                     # 私钥保护密码,可以不输入直接回车
An optional company name []:                                                 # 可选公司名称，可以不输入直接回车
             
-- 生成SSL证书，有效期为365天，生成文件为blog.crt
openssl x509 -req -days 365 -in blog.csr -signkey blog.key -out blog.crt

-- 有用的文件，一个是证书文件blog.crt，另一个是不需要输入密码的证书私钥文件blog_nopass.key
```

##### 配置支持HTTPS

```sql
-- 将我们生成好的SSL证书和私钥拷贝到Nginx的html/ssl目录下

-- 接下来我们需要给blog.hmh.com这个域名添加HTTPS支持，在配置目录下添加Nginx配置文件blog.conf，配置文件内容如下
server {
	listen       80; # 同时支持HTTP
	listen       443 ssl; # 添加HTTPS支持
	server_name  blog.hmh.com;
  
	#SSL配置
	ssl_certificate      D:/hayes/software-0104/nginx-1.22.1/html/ssl/blog.crt; # 配置证书
	ssl_certificate_key  D:/hayes/software-0104/nginx-1.22.1/html/ssl/blog_nopass.key; # 配置证书私钥
	ssl_protocols        TLSv1 TLSv1.1 TLSv1.2; # 配置SSL协议版本
	ssl_ciphers          ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE; # 配置SSL加密算法
	ssl_prefer_server_ciphers  on; # 优先采取服务器算法
	ssl_session_cache    shared:SSL:10m; # 配置共享会话缓存大小
	ssl_session_timeout  10m; # 配置会话超时时间

	location / {
		root   D:/hayes/software-0104/html;
		index  index.html index.htm;
	}

	location /admin {
		alias   D:/hayes/software-0104/html/admin;
		index  index.html index.htm;
	}

	location /app {
		alias   D:/hayes/software-0104/html/app;
		index  index.html index.htm;
	}

	error_page   500 502 503 504  /50x.html;
	location = /50x.html {
		root   /usr/share/nginx/html;
	}
}
```

#### 使用受信任的证书

```sql
-- 之前我们使用的是自签名的SSL证书，对于浏览器来说是无效的。使用权威机构颁发的SSL证书浏览器才会认为是有效的，这里给大家推荐两种申请免费SSL证书的方法，一种是从阿里云申请，另一种是从FreeSSL申请

-- 阿里云证书
-- 下载完成后解压会有下面两个文件
blog.hmh.com.key # 证书私钥文件
blog.hmh.com.pem # 证书文件
-- 拷贝证书文件到Nginx的指定目录下，然后修改配置文件blog.conf，只要修改证书配置路径即可，修改完成后重启Nginx
ssl_certificate      /usr/share/nginx/html/ssl/blog/blog.hmh.com.pem; # 配置证书
ssl_certificate_key  /usr/share/nginx/html/ssl/blog/blog.hmh.com.key; # 配置证书私钥

-- FreeSSL证书
https://freessl.cn/

-- 使用acme.sh自动申请证书
https://github.com/acmesh-official/acme.sh
acme.sh脚本实现了acme协议, 可以从letsencrypt生成免费的证书。一般我们申请的证书有效期都是1年，过期就要重新申请了，使用acme.sh脚本可以实现到期自动申请，再也不用担心证书过期了
```