# Guava

Google Guava 是 Google 推出的 Java 核心工具包，提供了集合扩展、不可变集合、函数式编程、缓存、字符串操作、并发工具、I/O、哈希、基础类型等大量实用工具，极大简化 Java 开发。

开源地址: https://github.com/google/guava
官方文档: https://guava.dev
官方文档: https://github.com/google/guava/wiki/GuavaExplained
中文文档: https://wizardforcel.gitbooks.io/guava-tutorial/content/

## 依赖引入

### Maven
```xml
<dependency>
    <groupId>com.google.guava</groupId>
    <artifactId>guava</artifactId>
    <version>33.5.0-jre</version> <!-- JDK8+ 推荐版本 -->
</dependency>
```
### Gradle
```groovy
dependencies {
    implementation("com.google.guava:guava:33.5.0-jre")
}
```

---

## 常用功能分类与典型用法

### 集合扩展（com.google.common.collect）

#### 典型用法
```java
// Multimap(一个Key对应多个Value)
Multimap<String, String> multimap = ArrayListMultimap.create();
multimap.put("fruit", "apple");
multimap.put("fruit", "banana");
System.out.println(multimap.get("fruit")); // [apple, banana]

// ImmutableList（不可变List）
ImmutableList<String> list = ImmutableList.of("a", "b", "c");
// list.add("d"); // 不可变集合add会抛出异常

// BiMap（双向Map，值唯一且可反查key）
BiMap<String, String> biMap = HashBiMap.create();
biMap.put("foo", "bar");
System.out.println(biMap.inverse().get("bar")); // foo
```

### 字符串工具（com.google.common.base）

```java
// 字符串连接（Joiner）
String joinRes = Joiner.on(",").skipNulls().join("a", null, "b"); // "a,b"

// 分割字符串（Splitter）
Iterable<String> splitRes = Splitter.on(",").omitEmptyStrings().split("a,,b, ");

// 字符串判空/处理（Strings）
Strings.isNullOrEmpty(""); // true
Strings.nullToEmpty(null); // ""
```

### 缓存工具（com.google.common.cache）

```java
// 本地缓存（自动过期/回收/刷新）
Cache<String, Integer> cache = CacheBuilder.newBuilder()
        .maximumSize(100)
        .expireAfterWrite(10, TimeUnit.MINUTES)
        .build();
cache.put("count", 1);
Integer value = cache.getIfPresent("count");
```

### 并发工具（com.google.common.util.concurrent）
```java
// ListenableFuture + 线程池
ListeningExecutorService service = MoreExecutors.listeningDecorator(Executors.newFixedThreadPool(2));
ListenableFuture<Integer> future = service.submit(() -> 123);
future.addListener(() -> System.out.println("done"), service);
```

### I/O工具（com.google.common.io）

```java
// 文件读写
Files.asCharSource(new File("/tmp/file.txt"), StandardCharsets.UTF_8).readLines();
Files.write("内容", new File("/tmp/file2.txt"), StandardCharsets.UTF_8);
```

### 哈希工具（com.google.common.hash）

```java
// 哈希计算（MD5, SHA256等）、布隆过滤器
HashFunction md5 = Hashing.md5();
HashCode code = md5.hashString("abc", Charsets.UTF_8);
System.out.println(code.toString());

// 布隆过滤器
BloomFilter<String> filter = BloomFilter.create(Funnels.stringFunnel(Charsets.UTF_8), 500);
filter.put("user1");
filter.mightContain("user1"); // 预判存在
```

### 原生类型工具（Primitives）

```java
// Ints, Longs, Doubles等基础类型集合/转换简化
int[] arr = {1,2,3};
List<Integer> intList = Ints.asList(arr); // [1,2,3]
```

---

## 常用工具类功能表（部分节选）

| 类全名                                 | 说明                                               |
|----------------------------------------|----------------------------------------------------|
| com.google.common.collect.Lists        | List相关工具类，快速创建等                         |
| com.google.common.collect.Maps         | Map相关工具类，Map构建、过滤                       |
| com.google.common.collect.Sets         | Set相关工具类                                      |
| com.google.common.collect.Multimap     | 一对多Map接口及实现                                |
| com.google.common.collect.ImmutableList| 不可变List                                         |
| com.google.common.collect.BiMap        | 键值唯一、支持反查的Map                            |
| com.google.common.collect.Table        | 二维Map；行列式数据模型                            |
| com.google.common.base.Joiner          | 字符串拼接工具                                     |
| com.google.common.base.Splitter        | 字符串分割工具                                     |
| com.google.common.base.Strings         | 字符串判空、补齐、操作                             |
| com.google.common.collect.Ordering     | 自定义排序，支持多种排序组合                       |
| com.google.common.io.Files             | 文件常用工具                                       |
| com.google.common.io.ByteStreams       | 字节流操作工具                                     |
| com.google.common.hash.Hashing         | 哈希函数工厂类，支持多种哈希算法                   |
| com.google.common.primitives.Ints      | int数组和List间互转等                              |
| com.google.common.cache.CacheBuilder   | 缓存构建与自定义策略                               |
| com.google.common.util.concurrent.ListenableFuture| 并发可监听Future                   |

---

## 其他常用模块

| 类/模块                       | 说明                        |
|-------------------------------|-----------------------------|
| com.google.common.math         | 数学工具、常见数值运算       |
| com.google.common.net.InternetDomainName | 域名处理          |
| com.google.common.base.Preconditions     | 断言工具，常用于参数校验 |
| com.google.common.reflect.TypeToken      | 泛型类型工具         |

---

## 小结
- Guava专注于集合、缓存、基础类型、字符串处理等高频工具；
- API设计更符号Java原生习惯，强调不可变、安全性及可维护性；
- 适合Java复杂业务/中后台项目快速开发，高性能需求项目广泛采用。


## 参考链接
- 官方文档: https://guava.dev
- GitHub项目: https://github.com/google/guava
- API 中文说明/样例：https://github.com/google/guava/wiki/GuavaExplained
