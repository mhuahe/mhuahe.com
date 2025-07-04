---
sidebar_position: 1
---

# JAVA

## 新闻

### 移除Netflix

Netflix的产品组件链 

> Netflix公司是目前微服务落地中最成功的公司。它开源了诸如Eureka、Hystrix、Zuul、Feign、Ribbon等等广大开发者所知微服务套件，统称为Netflix OSS

移除的原因

> 2018 年前后Netflix公司宣布其核心组件Hystrix、Ribbon、Zuul、Eureka等进入维护状态，不再进行新特性开发，只修 BUG
> 这直接影响了Spring Cloud项目的发展路线，在 2019 年的在 SpringOne 2019 大会中，Spring Cloud宣布 Spring Cloud Netflix 项目进入维护模式，并在 2020 年移除相关的Netflix OSS组件

被移除的组件

>  ribbon、hystrix 和 zuul从Spring Cloud 2020.0正式版发布后将不再被Spring Cloud支持。
> 在目前最新的Spring Cloud 2020.0中仅仅剩下了Eureka。但是留给Eureka的时间也不多了。
> Feign虽然是Netflix公司开源的，但从 9.x 版本开始就移交给OpenFeign组织管理，不从属于Netflix OSS范畴。

替换方案

- 微软的Spring Cloud Azure
- 阿里的Spring Cloud Alibaba
- 亚马逊的Spring Cloud for Amazon Web Services
- 谷歌云平台的 Spring Cloud GCP

springcloud服务

- nacos阿里注册中心：官方eureka停止更新，目前比较好的取代者。
- zipkin跟踪服务：分布式跟踪日志,基于内存存储记录。
- gateway网关路由服务：分发请求，统一管理过滤，结合LoadBalancer负载均衡、feign服务调用。
- springboot-admin监控中心服务：统一界面管理，查看各个服务运行状态actuator健康检查。
- sentinel高可用流量管理框架： 以流量为切入点，限流、流量整形、熔断降级、系统负载保护、热点防护。

### 移除oauth2

停止版本

> 旧的Spring Security OAuth项目终止到2.5.2.RELEASE版本

暂时的迁移方案

- 迁移Security 5.7.x

  > Spring Security 5中集成了OAuth2 Client和Resource Server两个模块

  ```java
  <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-security</artifactId>
  </dependency>
  ```

- 集成OAuth2 Client依赖(OAuth2 Client依赖于Spring Security)
  ```java
  <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-oauth2-client</artifactId>
  </dependency>
  ```

- 集成Resource Server依赖(Resource Server依赖于Spring Security)
  ```java
  <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-oauth2-resource-server</artifactId>
  </dependency>
  ```

- 集成OAuth2授权服务器依赖

  > 目前Spring生态中的OAuth2授权服务器是Spring Authorization Server，目前已具备生产就绪能力。最新的0.3.0版本中，官方文档正式在spring.io上线，它必须在Java 11及以上版本才能使用。它也作为一个Spring Security子模块，不能单独使用

  ```java
  <dependency>
      <groupId>org.springframework.security</groupId>
      <artifactId>spring-security-oauth2-authorization-server</artifactId>
      <version>0.3.0</version>
  </dependency>
  ```

### servlet

在 Servlet 3.1 规范之前的版本，请求是只能被 Servlet 同步阻塞处理完成，返回结果给前端。

在 Servlet 3.1 规范开始的版本，请求是允许被 Servlet 丢到线程池中处执行，等到执行完毕，异步回调结果给 Servlet ，最后返回给前端。

### GLIB

CGLIB已经不维护了，建议使用ByteBuddy。

### Tomcat

Tomcat低版本(8.5.x以下)不会检验域名下划线。高版本不支持下划线，会400并报错
```
o.apache.coyote.http11.Http11Processor: The host [api6_test.00008888.cc] is not valid Note: further occurrences of request parsing errors will be logged at DEBUG level.
```

---

## 基础知识点

### 优化

- 多线程
- 减少IO操作
- 减少嵌套循环

### 多态

```sql
-- 强转
只有我们的父类对象本身就是用子类new出来的时候, 才可以在将来被强制转换为子类对象。也就是说父类类型对象引用实际上指向的是子类对象，这种情况下才能将父类类型对象的引用强转为子类类型对象的引用
Animal animal = new Dog();
Dog dog = (Dog) animal;
if(animal instanof Dog){
  Dog dog = (Dog) animal;
}else{
  Animal animal = animal;
}
```

### 时间

```java
/**
 * 将2021-08-29T09:02:25.000Z --> 2021-08-29 17:02:25
 * @param timeStr
 * @return
 */
public static String interceptTime(String timeStr) {
    if (!StringUtils.isEmpty(timeStr)) {
        if (timeStr.contains("T")) {
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSXXX");
            try {
                return new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(simpleDateFormat.parse(timeStr));
            } catch (ParseException e) {
                e.printStackTrace();
            }
        }
    }
    return timeStr;
}

//ISO 8601 "yyyy-MM-dd'T'HH:mm:ss.SSSXXX"
```

```sql
-- LocalDateTime 转 LocalDate
LocalDateTime localDateTime = LocalDateTime.now();
LocalDate localDate = localDateTime.toLocalDate();

-- LocalDate 转 Date
LocalDate localDate = LocalDate.now();
ZoneId zoneId = ZoneId.systemDefault();
Date date = Date.from(localDate.atStartOfDay().atZone(zoneId).toInstant());
```

```sql
-- 获取当前日期
LocalDate today = LocalDate.now();
-- 获取今年的天数
int daysInYear = today.lengthOfYear();
-- 判断今年是不是闰年
boolean isLeapYear = today.isLeapYear();

-- 计算相差天数
ChronoUnit.DAYS.between(buyDate, settlementDateEndDay)

-- 大于小于
LocalDate.isAfter(LocalDate localDate);
LocalDate.isBefore(LocalDate localDate);

-- 时间计算
LocalDate.minus()
```

时区转换

```java
// UTC
public static final String UTC_ZONE_ID = "Etc/GMT";
// UTC-3
public static final String UTC_MINUS_3_ZONE_ID = "Etc/GMT+3";
// UTC-4
public static final String UTC_MINUS_4_ZONE_ID = "Etc/GMT+4";
// UTC+8
public static final String UTC_PLUS_8_ZONE_ID = "Etc/GMT-8";
/**
 * 转换时区（自定义格式）
 *
 * @param localDateTime 时间
 * @param fromZone      原始时区ID
 * @param toZone        目标时区ID
 * @param outputFormat  输出格式
 * @return 转换后的日期时间字符串
 * @throws DateTimeParseException 如果日期格式不匹配
 */
public static String convertTimeZone(
        LocalDateTime localDateTime,
        String fromZone,
        String toZone,
        String outputFormat) {
    // 应用原始时区
    ZonedDateTime fromZonedDateTime = localDateTime.atZone(ZoneId.of(fromZone));
    // 转换到目标时区
    ZonedDateTime toZonedDateTime = fromZonedDateTime.withZoneSameInstant(ZoneId.of(toZone));
    // 格式化为字符串
    DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern(outputFormat);
    return toZonedDateTime.format(outputFormatter);
}
/**
 * 获取当前系统默认时区ID
 *
 * @return 系统默认时区ID
 */
public static String getSystemDefaultZoneId() {
    return ZoneId.systemDefault().toString();
}
```

---
### 集合

#### List

> List实现类

- ArrayList 底层数组，插入是什么顺序，取出就是什么顺序，**注意如果按索引插入，如插入3处，则本来的3及后面的都会后移一位索引**
- Vector 同ArrayList，是ArrayList的安全集合
- LinkedList 底层链表

> 注意点1
```java
List<IdNameVo> list = new ArrayList<>();
IdNameVo idNameVo = new IdNameVo();
idNameVo.setId(1);
idNameVo.setName("1");
list.add(0, idNameVo);
// new不会覆盖原有对象，不重新new会覆盖
idNameVo = new IdNameVo();
idNameVo.setId(2);
idNameVo.setName("2");
list.add(0, idNameVo);
System.out.println("list = " + list);
```

#### Set

> Set实现类

```
1.HashSet 底层哈希表，先判断hashCode()值是否相等，不相等则直接添加，若相等则再判断equals()是否相等，结果为TRUE说明元素重复不添加，FALSE则添加
2.LinkedHashSet 底层链表和哈希表，链表保证有序，哈希表保证唯一
3.TreeSet 底层红黑树，唯一，有序。可实现Comparable进行元素自然排序。集合接收Comparator实现类对象进行集合比较器排序
```

#### Map

> [!tip]
>
> 在需要获取value情况下，`entrySet`遍历比`keySet`更高效。减少了查找的次数并提高了代码的整体效率

> Map实现类

```sql
1.HashMap 底层哈希表
2.LinkedHashMap 底层链表和哈希表，链表保证有序，哈希表保证元素唯一
3.Hashtable 底层哈希表，线程安全
4.TreeMap 底层红黑树，唯一，有序。可实现Comparable进行元素自然排序。集合接收Comparator实现类对象进行集合比较器排序
```

> Map，key倒序

```java
Map<String, IndustryBondHeadVO.StockStatisticalChartVO> map = new TreeMap<>(Comparator.reverseOrder());
```

> 在迭代一个集合（如 Map）时，如果尝试修改该集合，可能会抛出 ConcurrentModificationException 异常。要避免这种情况，可以使用 Iterator 的 remove 方法，而不是直接修改集合。
>
> 确保所有修改操作都在迭代器内部进行，而不是在迭代器外部直接修改 Map

```java
Map<String, String> map = new HashMap<>();
map.put("key1", "value1");
map.put("key2", "value2");
Iterator<Map.Entry<String, String>> iterator = map.entrySet().iterator();
while (iterator.hasNext()) {
    Map.Entry<String, String> entry = iterator.next();
    if (entry.getKey().equals("key1")) {
        iterator.remove(); // 正确的移除方法
    }
}
```

> 如果需要在多线程环境下并发修改 Map，可以使用 `ConcurrentHashMap`，它允许并发的修改和迭代。

```java
Map<String, String> map = new ConcurrentHashMap<>();
map.put("key1", "value1");
map.put("key2", "value2");
for (Map.Entry<String, String> entry : map.entrySet()) {
    if (entry.getKey().equals("key1")) {
        map.remove(entry.getKey()); // 并发安全的移除方法
    }
}
```

> 在增强 for 循环中修改 Map 会导致 `ConcurrentModificationException`。应使用显式迭代器来避免这个问题。

```java
Map<String, String> map = new HashMap<>();
map.put("key1", "value1");
map.put("key2", "value2");
for (Iterator<Map.Entry<String, String>> it = map.entrySet().iterator(); it.hasNext(); ) {
    Map.Entry<String, String> entry = it.next();
    if (entry.getKey().equals("key1")) {
        it.remove(); // 正确的移除方法
    }
}
```

#### 集合API

```sql
-- 数组排序
Arrays.sort(?) 

-- 从整个数组中查询指定值的索引(需要排序)
Arrays.binarySearch(Object[] a,Object key)

-- 数组
a数组赋值给b数组,a数组后续改变,b数组也会改变

-- 数组转成字符串输出
Arrays.toString(arr)

-- 获取集合的最大值
Collections.max(List)

-- 判断是否在数组中
String[] strList = {"AB", "AC", "AD", "AE"};
boolean contains = Arrays.asList(strList).contains("A");

-- String[] --> Integer[]
Integer[] intArray = Convert.toIntArray(new String[3])
Integer[] intArray = (Integer[]) ConvertUtils.convert(customerId, Integer.class);

-- 将逗号分隔的字符串转换为List
List<String> list = Arrays.asList(str.split(","));
List<String> list = Arrays.asList(StringUtils.split(str, ","));

-- 将list转化为逗号分割的字符串
String str = String.join(",", list);
String str = StringUtils.json(list.toArray(), ",");

-- int数组转集合(steam的装箱boxed()方法)
List<Integer> collect = Arrays.stream(arr).boxed().collect(Collectors.toList());
```
---
### BigDecimal

| 字段              | 字段详情                                                     |
| :---------------- | :----------------------------------------------------------- |
| ROUND_UP          | 截断的小数>0时进一位                                         |
| ROUND_DOWN        | 直接舍弃截断的小数,不在小数位上进一位,不管舍弃的数值有多大   |
| ROUND_HALF_UP     | 四舍五入                                                     |
| ROUND_HALF_DOWN   | 当截取掉的小数位的值>=5,且5后面还有>0的值,就会进一位         |
| ROUND_CEILING     | 向正无限大方向舍入                                           |
| ROUND_FLOOR       | 向负无限大方向舍入                                           |
| ROUND_HALF_EVEN   | 如果舍弃部分左边的数字为奇数，则舍入行为同 HALF_UP；如果为偶数，则舍入行为同HALF_DOWN |
| ROUND_UNNECESSARY | 计算结果是精确的，不需要舍入，否则抛出 ArithmeticException。 |

---

### 函数式接口

> 使用注解 `@FunctionalInterface` 标识，并且只包含一个抽象方法的接口是函数式接口。

- Supplier：供给型函数，无参有返回。
- Consumer：消费型函数，接收一个参数，无返回。
- Runnable：无参无返回。
- Function：接收一个参数，并返回一个值。

---

### lambda

```java
//无参
Supplier<ElfWeapon> elfWeaponSupplier = ElfWeapon::new;
//等价于
Supplier<ElfWeapon> elfWeaponSupplier = () -> new ElfWeapon();
//等价于
Supplier<ElfWeapon> elfWeaponSupplier = new Supplier<Weapon>() {
    @Override
    public Weapon get() {
        return new ElfWeapon();
    }
};

//有参
Function<String, ElfWeapon> elfWeaponFunction = ElfWeapon::new;
//等价于
Function<String, ElfWeapon> elfWeaponFunction = type -> new ElfWeapon(type);
//等价于
Function<String, Weapon> elfWeaponFunction = new Function<String, Weapon>() {
    @Override
    public Weapon apply(String type) {
        return new ElfWeapon(type);
    }
};
```

---

### 代码规范

```sql
-- MVC分层可以分四层
controller 层
service 层
manager 层
dao 层

--  @Transactional 事务注解
1.@Transactional 注解内的 rollbackFor 值必须使用异常 Exception.class
2.spring 遇到该注解时，会自动从数据库连接池中获取 connection，并开启事务然后绑定到 ThreadLocal 上，如果业务并没有进入到最终的操作数据库环节，那么就没有必要获取连接并开启事务，应该直接将 connection 返回给数据库连接池，供其他使用。即将增删改操作的业务代码提取到mananger进行注解。
注：================
注解 @Transactional 事务在类的内部方法调用是不会生效的
Spring 采用动态代理(AOP)实现对 bean 的管理和切片，它为我们的每个 class 生成一个代理对象。只有在代理对象之间进行调用时，可以触发切面逻辑。而在同一个 class 中，方法 A 调用方法 B，调用的是原对象的方法，而不通过代理对象。所以 Spring 无法拦截到这次调用，也就无法通过注解保证事务了。简单来说，在同一个类中的方法调用，不会被方法拦截器拦截到，因此事务不会起作用。
解决方案：
1、可以将方法放入另一个类，如新增 manager层，通过 spring 注入，这样符合了在对象之间调用的条件。
2、启动类添加@EnableAspectJAutoProxy(exposeProxy = true)，方法内使用AopContext.currentProxy()获得代理类，使用事务。

-- controller 每个方法要保持简洁
controller 在mvc中负责协同和委派业务，充当路由的角色，所以要保持代码少量和清晰，要做到如下要求：
不做任何的业务逻辑操作
不做任何的参数、业务校验，参数校验只允许使用@Valid 注解做简单的校验
不做任何的数据组合、拼装、赋值等操作

-- 只能在controller层获取当前请求用户
只能在controller层获取当前请求用户，并传递给service层。因为获取当前请求用户是从ThreadLocal里获取取的，在service、manager、dao层极有可能是其他非request线程调用，会出现null的情况，尽量避免

-- 使用mybatis-plus的要求
1、所有 Dao 继承自 BaseMapper
2、禁止使用 Mybatis-plus 的 Wrapper 条件构建器
3、禁止直接在 mybatis xml 中写死常量，应从 dao 中传入到 xml 中
4、建议在xml中的 join 关联写法使用表名的全称，而不是用别名，对于关联表太多的话，在xml格式中，其实很难记住别名是什么意思

-- javabean 名字划分
XxxEntity 数据库持久对象
XxxVO 返回前端对象 （一些大厂用 Resp结尾，比如 XxxxResp）
XxxForm 前端请求对象 （一些大厂用 Req结尾，比如 XxxxReq）
XxxDTO 数据传输对象
XxxBO 内部处理对象
都不可以继承自 Entity

-- boolean 类型的属性命名规范
类中布尔类型的变量，都不要加 is，否则部分框架解析会引起序列化错误。反例：定义为基本数据类型 Boolean isDeleted；的属性，它的方法也是 isDeleted()，RPC 在反向解析的时候，“以为”对应的属性名称是 deleted，导致属性获取不到，进而抛出异常。boolean 类型的类属性和数据表字段都统一使用 flag 结尾。

-- 建表规范
表必备三字段：id, create_time, update_time
id 字段 Long 类型，单表自增，自增长度为 1
create_time 字段 datetime 类型，默认值 CURRENT_TIMESTAMP
update_time 字段 datetime 类型，默认值 CURRENT_TIMESTAMP, On update CURRENT_TIMESTAMP
```

---

### active配置

```sql
-- 可查看类Environment加载的配置详情

-- spring.profiles.active属性
spring.profiles.active=dev：启用application-dev.properties
spring.profiles.active=test：启用application-test.properties
spring.profiles.active=prod：启用application-prod.properties
-- 启动时指定(优先级最高)
java -jar xx.jar --spring.profiles.active=prod

-- spring.profiles.include属性
-- 配置方法
若是properties文件：spring.profiles.include=dev1,dev2
若是yaml文件中，
spring.profiles.include:
-dev1
-dev2
或者：spring.profiles.include:dev1,dev2
-- 配置位置
方式一：application.properties中，配置spring.profiles.active=dev的同时指定spring.profiles.include=dev1,dev2
方式二：application.properties中，配置spring.profiles.active=dev，application-dev.properties中，配置spring.profiles.include=dev1,dev2。使用application-dev.properties时自动就激活了dev1、dev2两个文件，不用再次指定。
-- 区别
第一种方式启动时，控制台打印The following profiles are active:dev1,dev2,dev
第二种方式启动时，控制台打印The following profiles are active:dev, dev1,dev2
按照顺序，后面的覆盖前面的。
```

### 全局处理日期

```java
// 局部配置
@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
private LocalDateTime createTime;

// 全局配置
@Configuration
public class JacksonConfig {
    @Value("${prop.local-date-time-format:yyyy-MM-dd HH:mm:ss}")
    private String localDateTimeFormat;
    /**
     * 配置Jackson对枚举序列化/反序列化的支持
     *
     * @return
     */
    @Bean
    public Jackson2ObjectMapperBuilderCustomizer customizer() {
        return builder -> builder.featuresToEnable(SerializationFeature.WRITE_ENUMS_USING_TO_STRING)
                .serializerByType(LocalDateTime.class,
                        new LocalDateTimeSerializer(DateTimeFormatter.ofPattern(localDateTimeFormat)))
                .deserializerByType(LocalDateTime.class,
                        new LocalDateTimeDeserializer(DateTimeFormatter.ofPattern(localDateTimeFormat)));
    }
}
```

### StringFormat

`String.format` 是 Java 中用于格式化字符串的方法，它的第一个参数是 **格式字符串**（format string），用于定义输出的格式。格式字符串中可以包含 **普通文本** 和 **格式说明符**（format specifiers），格式说明符以 `%` 开头，用于指定如何格式化后续的参数。

---

#### 格式字符串的结构

格式字符串由以下部分组成：
- **普通文本**：直接输出的文本。
- **格式说明符**：以 `%` 开头，用于格式化参数。

示例：

```java
String result = String.format("Hello, %s! Today is %tF.", "World", new Date());
System.out.println(result);
```

输出：

```
Hello, World! Today is 2023-10-15.
```

- `"Hello, %s! Today is %tF."` 是格式字符串。
- `%s` 和 `%tF` 是格式说明符。

---

#### 格式说明符的语法

格式说明符的通用语法如下：

```
%[argument_index$][flags][width][.precision]conversion
```

参数说明：
- **`argument_index$`**（可选）：指定使用第几个参数（从 1 开始）。例如，`1$` 表示第一个参数，`2$` 表示第二个参数。
- **`flags`**（可选）：格式化标志，用于控制输出的对齐、填充等。
- **`width`**（可选）：输出的最小宽度。
- **`.precision`**（可选）：对于浮点数，表示小数位数；对于字符串，表示最大字符数。
- **`conversion`**（必需）：转换类型，指定如何格式化参数。

---

#### 常用转换类型
| 转换类型 | 说明                                                                 |
|----------|----------------------------------------------------------------------|
| `%s`     | 格式化字符串。                                                       |
| `%d`     | 格式化整数（十进制）。                                               |
| `%f`     | 格式化浮点数。                                                       |
| `%t`     | 格式化日期/时间（需配合日期/时间转换符，如 `%tF`、`%tT` 等）。       |
| `%b`     | 格式化布尔值（`true` 或 `false`）。                                  |
| `%c`     | 格式化字符。                                                         |
| `%x`     | 格式化整数（十六进制）。                                             |
| `%o`     | 格式化整数（八进制）。                                               |
| `%e`     | 格式化浮点数（科学计数法）。                                         |
| `%n`     | 插入平台相关的换行符。                                               |
| `%%`     | 插入百分号 `%`。                                                     |

---

#### 常用标志
| 标志 | 说明                                                                 |
|------|----------------------------------------------------------------------|
| `-`  | 左对齐（默认右对齐）。                                               |
| `0`  | 用零填充宽度。                                                       |
| `+`  | 显示正数的符号（`+`）。                                              |
| ` `  | 在正数前添加空格。                                                   |
| `,`  | 使用千位分隔符（适用于数字）。                                       |
| `(`  | 将负数用括号括起来。                                                 |

---

#### 示例

##### 格式化字符串
```java
String name = "Alice";
int age = 25;
String result = String.format("Name: %s, Age: %d", name, age);
System.out.println(result);
```
输出：
```
Name: Alice, Age: 25
```

##### 格式化浮点数
```java
double pi = Math.PI;
String result = String.format("Pi: %.2f", pi);
System.out.println(result);
```
输出：
```
Pi: 3.14
```

##### 格式化日期
```java
Date now = new Date();
String result = String.format("Today is %tF, Time is %tT", now, now);
System.out.println(result);
```
输出：
```
Today is 2023-10-15, Time is 14:30:45
```

##### 使用宽度和填充
```java
int number = 123;
String result = String.format("Number: %08d", number);
System.out.println(result);
```
输出：
```
Number: 00000123
```

##### 使用千位分隔符
```java
int population = 1234567;
String result = String.format("Population: %,d", population);
System.out.println(result);
```
输出：
```
Population: 1,234,567
```

---

##### 日期/时间格式化
`%t` 是日期/时间的转换类型，需要配合以下后缀使用：

| 后缀 | 说明                             | 示例                |
|------|----------------------------------|---------------------|
| `F`  | ISO 8601 格式的日期（`yyyy-MM-dd`） | `2023-10-15`        |
| `T`  | 24 小时制时间（`HH:mm:ss`）       | `14:30:45`          |
| `D`  | 美国格式的日期（`MM/dd/yyyy`）    | `10/15/2023`        |
| `r`  | 12 小时制时间（`hh:mm:ss AM/PM`） | `02:30:45 PM`       |
| `c`  | 完整日期和时间                   | `Sun Oct 15 14:30:45 CST 2023` |


## JSqlParser

> 依赖了JSqlParser
>
> - mybatis-plus-boot-starter
> - pagehelper

```xml
<dependency>
    <groupId>com.github.jsqlparser</groupId>
    <artifactId>jsqlparser</artifactId>
    <version>4.6</version>
</dependency>
```

```sql
-- JSqlParser是一个与RDBMS（关系数据库管理系统）无关的SQL语句解析器。它将SQL语句转换为可遍历的Java类次结构
-- 原SQL
SELECT 1 FROM dual WHERE a = b
-- 转换
Statement statement = CCJSqlParserUtil.parse(sqlStr);
-- 转换后结构
 SQL Text
  └─Statements: net.sf.jsqlparser.statement.select.Select
     └─selectBody: net.sf.jsqlparser.statement.select.PlainSelect
        ├─selectItems -> Collection<SelectExpressionItem>
        │  └─selectItems: net.sf.jsqlparser.statement.select.SelectExpressionItem
        │     └─LongValue: 1
        ├─Table: dual
        └─where: net.sf.jsqlparser.expression.operators.relational.EqualsTo
           ├─Column: a
           └─Column: b
-- 转换后简单使用
Statement statement = CCJSqlParserUtil.parse(sqlStr);
if (statement instanceof Select) {
    Select select = (Select) statement;
    PlainSelect plainSelect = (PlainSelect) select.getSelectBody();
    SelectExpressionItem selectExpressionItem =
            (SelectExpressionItem) plainSelect.getSelectItems().get(0);
    Table table = (Table) plainSelect.getFromItem();
    EqualsTo equalsTo = (EqualsTo) plainSelect.getWhere();
    Column a = (Column) equalsTo.getLeftExpression();
    Column b = (Column) equalsTo.getRightExpression();
}
```

## IO

> [!tip]
>
> Windows平台使用`\`作为路径分隔符，在Java字符串中需要用`\\`表示一个`\`。Linux平台使用`/`作为路径分隔符：

### File

> `File`对象既可以表示文件，也可以表示目录。特别要注意的是，构造一个`File`对象，即使传入的文件或目录不存在，代码也不会出错，因为构造一个`File`对象，并不会导致任何磁盘操作。只有当我们调用`File`对象的某些方法的时候，才真正进行磁盘操作。

文件和目录

- isFile()：判断该`File`对象是否是一个已存在的文件；
- isDirectory()：判断该`File`对象是否是一个已存在的目录；
- boolean canRead()：是否可读；
- boolean canWrite()：是否可写；
- boolean canExecute()：是否可执行；对目录，表示能否列出它包含的文件和子目录。
- long length()：文件字节大小；

创建和删除文件

- createNewFile()：如果不存在，则创建一个新文件；
- delete()：删除该文件；
- createTempFile()：静态方法，创建一个临时文件；
- deleteOnExit()：JVM退出时自动删除该文件；

遍历文件和目录

- list() ：列出目录下的文件名和子目录名;
- listFiles()：列出目录下的文件和目录，提供了一系列重载方法，可以过滤不想要的文件和目录；
- boolean mkdir()：创建当前File对象表示的目录；
- boolean mkdirs()：创建当前File对象表示的目录，并在必要时将不存在的父目录也创建出来；
- boolean delete()：删除当前File对象表示的目录，当前目录必须为空才能删除成功；

Path

> Java标准库还提供了一个`Path`对象，它位于`java.nio.file`包。`Path`对象和`File`对象类似，但操作更加简单：

```java
public static void main(String[] args) throws IOException {
    // 构造一个Path对象，即拼接路径./project/study
    Path p1 = Paths.get("D:\\hayes\\db-code", "sdzx", "sdzx-240611");
    System.out.println(p1);
    Path p2 = p1.toAbsolutePath(); // 转换为绝对路径
    System.out.println(p2);
    Path p3 = p2.normalize(); // 转换为规范路径
    System.out.println(p3);
    File f = p3.toFile(); // 转换为File对象
    System.out.println(f);
    for (Path p : p1.toAbsolutePath()) { // 可以直接遍历Path
        System.out.println("  " + p);
    }
}
```

### InputStream

> `InputStream`并不是一个接口，而是一个抽象类，它是所有输入流的超类。

- read()：这个方法会读取输入流的下一个字节，并返回字节表示的`int`值（0~255）。如果已读到末尾，返回`-1`表示不能继续读取了。

关闭流

> 用`try ... finally`来编写会感觉比较复杂，更好的写法是利用Java 7引入的新的`try(resource)`的语法，只需要编写`try`语句，让编译器自动为我们关闭资源。
>
> 实际编译器并不会特别地为`InputStream`加上自动关闭。编译器只看`try(resource = ...)`中的对象是否实现了`java.lang.AutoCloseable`接口，如果实现了，就自动加上`finally`语句并调用`close()`方法。`InputStream`和`OutputStream`都实现了这个接口，因此，都可以用在`try(resource)`中。

```java
public void readFile() throws IOException {
    try (InputStream input = new FileInputStream("src/readme.txt")) {
        int n;
        while ((n = input.read()) != -1) {
            System.out.println(n);
        }
    } // 编译器在此自动为我们写入finally并调用close()
}
```

缓冲

> 在读取流的时候，一次读取一个字节并不是最高效的方法。很多流支持一次性读取多个字节到缓冲区，对于文件和网络流来说，利用缓冲区一次性读取多个字节效率往往要高很多。

- `int read(byte[] b)`：读取若干字节并填充到`byte[]`数组，返回读取的字节数
- `int read(byte[] b, int off, int len)`：指定`byte[]`数组的偏移量和最大填充数

```java
public void readFile() throws IOException {
    try (InputStream input = new FileInputStream("src/readme.txt")) {
        // 定义1000个字节大小的缓冲区:
        byte[] buffer = new byte[2048];
        int n;
        while ((n = input.read(buffer)) != -1) { // 读取到缓冲区
            System.out.println("read " + n + " bytes.");
        }
    }
}
```

### OutputStream

> 和`InputStream`类似，`OutputStream`也是抽象类，它是所有输出流的超类。

- write()：这个方法会写入一个字节到输出流。虽然传入的是`int`参数，但只会写入一个字节，即只写入`int`最低8位表示字节的部分（相当于`b & 0xff`）。

关闭流

> 和`InputStream`类似，`OutputStream`也提供了`close()`方法关闭输出流，以便释放系统资源。
>
> 注意：`OutputStream`还提供了一个`flush()`方法，它的目的是将缓冲区的内容真正输出到目的地。对于很多IO设备来说，一次写一个字节和一次写1000个字节，花费的时间几乎是完全一样的，所以有个`flush()`方法，能强制把缓冲区（byte[]）内容输出。
>
> 通常情况下，我们不需要调用这个`flush()`方法，因为缓冲区写满了`OutputStream`会自动调用它，并且，在调用`close()`方法关闭`OutputStream`之前，也会自动调用`flush()`方法。

缓冲

- `void write(byte[])`：一次性写入若干字节
- `void write(buffer, 0, bytesRead)`：将缓冲区中的数据写入目标文件。`write` 方法的第一个参数是缓冲区数组，第二个参数是起始位置，第三个参数是写入的字节数。

```java
public void writeFile() throws IOException {
    try (OutputStream output = new FileOutputStream("out/readme.txt")) {
        output.write("Hello".getBytes("UTF-8")); // Hello
    } // 编译器在此自动为我们写入finally并调用close()
}
```

### Filter模式

> 通过一个“基础”组件再叠加各种“附加”功能组件的模式，称之为Filter模式（或者装饰器模式：Decorator）

Java的IO标准库使用Filter模式为`InputStream`和`OutputStream`增加功能：

- 可以把一个`InputStream`和任意个`FilterInputStream`组合；
- 可以把一个`OutputStream`和任意个`FilterOutputStream`组合。

### Zip

读取zip包

> 我们要创建一个`ZipInputStream`，通常是传入一个`FileInputStream`作为数据源，然后，循环调用`getNextEntry()`，直到返回`null`，表示zip流结束。
>
> 一个`ZipEntry`表示一个压缩文件或目录，如果是压缩文件，我们就用`read()`方法不断读取，直到返回`-1`：

```java
try (ZipInputStream zip = new ZipInputStream(new FileInputStream(...))) {
    ZipEntry entry = null;
    while ((entry = zip.getNextEntry()) != null) {
        String name = entry.getName();
        if (!entry.isDirectory()) {
            int n;
            while ((n = zip.read()) != -1) {
                ...
            }
        }
    }
}
```

写入zip包

> `ZipOutputStream`是一种`FilterOutputStream`，它可以直接写入内容到zip包。我们要先创建一个`ZipOutputStream`，通常是包装一个`FileOutputStream`，然后，每写入一个文件前，先调用`putNextEntry()`，然后用`write()`写入`byte[]`数据，写入完毕后调用`closeEntry()`结束这个文件的打包。
>
> 下面的代码没有考虑文件的目录结构。如果要实现目录层次结构，`new ZipEntry(name)`传入的`name`要用相对路径。

```java
try (ZipOutputStream zip = new ZipOutputStream(new FileOutputStream(...))) {
    File[] files = ...
    for (File file : files) {
        zip.putNextEntry(new ZipEntry(file.getName()));
        zip.write(Files.readAllBytes(file.toPath()));
        zip.closeEntry();
    }
}
```

```mdx-code-block
import inputStream from '/img/docs/java/java/JAVA-InputStream.png';

<img src={inputStream} alt="JAVA-InputStream" width="50%" />
```

### 读取classpath

> 从classpath读取文件就可以避免不同环境下文件路径不一致的问题：如果我们把`default.properties`文件放到classpath中，就不用关心它的实际存放路径。
>
> 在classpath中的资源文件，路径总是以`／`开头，我们先获取当前的`Class`对象，然后调用`getResourceAsStream()`就可以直接从classpath读取任意的资源文件：

```java
try (InputStream input = getClass().getResourceAsStream("/default.properties")) {
    if (input != null) {
        // TODO:
    }
}
```

> 如果我们把默认的配置放到jar包中，再从外部文件系统读取一个可选的配置文件，就可以做到既有默认的配置文件，又可以让用户自己修改配置：

```java
Properties props = new Properties();
props.load(Files.newInputStream(Paths.get("/default.properties")));
props.load(Files.newInputStream(Paths.get("./conf.properties")));
```

### 序列化

> 序列化是指把一个Java对象变成二进制内容，本质上就是一个`byte[]`数组。
>
> 为什么要把Java对象序列化呢？因为序列化后可以把`byte[]`保存到文件中，或者把`byte[]`通过网络传输到远程，这样，就相当于把Java对象存储到文件或者通过网络传输出去了。
>
> 有序列化，就有反序列化，即把一个二进制内容（也就是`byte[]`数组）变回Java对象。有了反序列化，保存到文件中的`byte[]`数组又可以“变回”Java对象，或者从网络上读取`byte[]`并把它“变回”Java对象。
>
> 一个Java对象要能序列化，必须实现一个特殊的`java.io.Serializable`接口。

序列化

> 把一个Java对象变为`byte[]`数组，需要使用`ObjectOutputStream`。它负责把一个Java对象写入一个字节流：

```java
ByteArrayOutputStream buffer = new ByteArrayOutputStream();
try (ObjectOutputStream output = new ObjectOutputStream(buffer)) {
    // 写入int:
    output.writeInt(12345);
    // 写入String:
    output.writeUTF("Hello");
    // 写入Object:
    output.writeObject(Double.valueOf(123.456));
}
System.out.println(Arrays.toString(buffer.toByteArray()));
```

反序列化

> 和`ObjectOutputStream`相反，`ObjectInputStream`负责从一个字节流读取Java对象：
>
> 反序列化时，由JVM直接构造出Java对象，不调用构造方法。

```java
try (ObjectInputStream input = new ObjectInputStream(...)) {
    int n = input.readInt();
    String s = input.readUTF();
    Double d = (Double) input.readObject();
}
```

> Java的序列化允许class定义一个特殊的`serialVersionUID`静态变量，用于标识Java类的序列化“版本”，通常可以由IDE自动生成。如果增加或修改了字段，可以改变`serialVersionUID`的值，这样就能自动阻止不匹配的class版本：

```java
public class Person implements Serializable {
    private static final long serialVersionUID = 2709425275741743919L;
}
```

注意

- 在 Java 中，序列化对象通常保存为 `.ser` 扩展名的文件。
- 因为Java的序列化机制可以导致一个实例能直接从`byte[]`数组创建，而不经过构造方法，因此，它存在一定的安全隐患。一个精心构造的`byte[]`数组被反序列化后可以执行特定的Java代码，从而导致严重的安全漏洞。
- 实际上，Java本身提供的基于对象的序列化和反序列化机制既存在安全性问题，也存在兼容性问题。更好的序列化方法是通过JSON这样的通用数据结构来实现，只输出基本类型（包括String）的内容，而不存储任何与代码相关的信息。
- Java的序列化机制仅适用于Java，如果需要与其它语言交换数据，必须使用通用的序列化方法，例如JSON。
- 在序列化过程中，构造函数不会被调用。序列化是直接将对象的字段状态写入字节流，而不需要通过构造函数来创建对象。这意味着对象的构造逻辑不会参与序列化。
- 在反序列化过程中，对象的构造函数同样不会被调用。Java 的反序列化机制通过反射创建对象实例，并直接从字节流中恢复对象的字段状态，而不经过构造函数。
- **继承层次中的非可序列化父类**：如果一个类实现了 `Serializable` 接口，但它的父类没有实现 `Serializable` 接口，那么在反序列化过程中，会调用该非可序列化父类的无参构造函数。如果该父类没有无参构造函数，则会抛出 `InvalidClassException`。
- **自定义反序列化**：如果一个类定义了 `private void readObject(ObjectInputStream ois) throws IOException, ClassNotFoundException` 方法，则可以在反序列化过程中执行自定义逻辑，包括调用构造函数或者初始化对象状态。

### Reader

> `Reader`是Java的IO库提供的另一个输入流接口。和`InputStream`的区别是，`InputStream`是一个字节流，即以`byte`为单位读取，而`Reader`是一个字符流，即以`char`为单位读取。
>
> 如果我们读取一个纯ASCII编码的文本文件，上述代码工作是没有问题的。但如果文件中包含中文，就会出现乱码，因为`FileReader`默认的编码与系统相关。要避免乱码问题，我们需要在创建`FileReader`时指定编码。

```java
try (Reader reader = new FileReader("src/readme.txt", StandardCharsets.UTF_8)) {
    // TODO
}
```

InputStreamReader

- 除了特殊的`CharArrayReader`和`StringReader`，普通的`Reader`实际上是基于`InputStream`构造的，因为`Reader`需要从`InputStream`中读入字节流（`byte`），然后，根据编码设置，再转换为`char`就可以实现字符流。如果我们查看`FileReader`的源码，它在内部实际上持有一个`FileInputStream`。

- 既然`Reader`本质上是一个基于`InputStream`的`byte`到`char`的转换器，那么，如果我们已经有一个`InputStream`，想把它转换为`Reader`，是完全可行的。`InputStreamReader`就是这样一个转换器，它可以把任何`InputStream`转换为`Reader`。示例代码如下：

```java
// 持有InputStream:
InputStream input = new FileInputStream("src/readme.txt");
// 变换为Reader:
Reader reader = new InputStreamReader(input, "UTF-8");

try (Reader reader = new InputStreamReader(new FileInputStream("src/readme.txt"), "UTF-8")) {
    // TODO:
}
```

### Writer

```java
try (Writer writer = new FileWriter("readme.txt", StandardCharsets.UTF_8)) {
    writer.write('H'); // 写入单个字符
    writer.write("Hello".toCharArray()); // 写入char[]
    writer.write("Hello"); // 写入String
}
```

OutputStreamWriter

```java
try (Writer writer = new OutputStreamWriter(new FileOutputStream("readme.txt"), "UTF-8")) {
    // TODO:
}
```

:::tip

如果你读取的是字节流文件，如pdf，图片等，使用InputStream和OutputStream；

:::

### PrintStream和PrintWriter

> `PrintStream`是一种`FilterOutputStream`，它在`OutputStream`的接口上，额外提供了一些写入各种数据类型的方法：

- 写入`int`：`print(int)`
- 写入`boolean`：`print(boolean)`
- 写入`String`：`print(String)`
- 写入`Object`：`print(Object)`，实际上相当于`print(object.toString())`
- 以及对应的一组`println()`方法，它会自动加上换行符。

我们经常使用的`System.out.println()`实际上就是使用`PrintStream`打印各种数据。其中，`System.out`是系统默认提供的`PrintStream`，表示标准输出：

`System.err`是系统默认提供的标准错误输出。

`PrintStream`和`OutputStream`相比，除了添加了一组`print()`/`println()`方法，可以打印各种数据类型，比较方便外，它还有一个额外的优点，就是不会抛出`IOException`，这样我们在编写代码的时候，就不必捕获`IOException`。

PrintWriter

>  `PrintStream`最终输出的总是byte数据，而`PrintWriter`则是扩展了`Writer`接口，它的`print()`/`println()`方法最终输出的是`char`数据。两者的使用方法几乎是一模一样的：

```java
StringWriter buffer = new StringWriter();
try (PrintWriter pw = new PrintWriter(buffer)) {
    pw.println("Hello");
    pw.println(12345);
    pw.println(true);
}
System.out.println(buffer.toString());
```

### Files

Java 7开始，提供了`Files`这个工具类，能极大地方便我们读写文件。

虽然`Files`是`java.nio`包里面的类，但他俩封装了很多读写文件的简单方法，例如，我们要把一个文件的全部内容读取为一个`byte[]`，可以这么写：

```java
byte[] data = Files.readAllBytes(Path.of("/path/to/file.txt"));
```

如果是文本文件，可以把一个文件的全部内容读取为`String`：

```java
// 默认使用UTF-8编码读取:
String content1 = Files.readString(Path.of("/path/to/file.txt"));
// 可指定编码:
String content2 = Files.readString(Path.of("/path", "to", "file.txt"), StandardCharsets.ISO_8859_1);
// 按行读取并返回每行内容:
List<String> lines = Files.readAllLines(Path.of("/path/to/file.txt"));
```

写入文件也非常方便：

```java
// 写入二进制文件:
byte[] data = ...
Files.write(Path.of("/path/to/file.txt"), data);
// 写入文本并指定编码:
Files.writeString(Path.of("/path/to/file.txt"), "文本内容...", StandardCharsets.ISO_8859_1);
// 按行写入文本:
List<String> lines = ...
Files.write(Path.of("/path/to/file.txt"), lines);
```

此外，`Files`工具类还有`copy()`、`delete()`、`exists()`、`move()`等快捷方法操作文件和目录。

最后需要特别注意的是，`Files`提供的读写方法，受内存限制，只能读写小文件，例如配置文件等，不可一次读入几个G的大文件。读写大型文件仍然要使用文件流，每次只读写一部分文件内容。

### 读取本地文件内容

```java
import java.io.*;

public class FileReaderExample {

    public static void main(String[] args) {
        // 定义文件路径
        String filePath = "src/readme.txt";

        // 使用 try-with-resources 确保资源被正确关闭
        try (Reader reader = new InputStreamReader(new FileInputStream(filePath), "UTF-8");
             BufferedReader bufferedReader = new BufferedReader(reader)) {

            // 逐行读取文件内容
            String line;
            while ((line = bufferedReader.readLine()) != null) {
                // 打印每一行内容
                System.out.println(line);
            }

        } catch (UnsupportedEncodingException e) {
            System.err.println("不支持的编码格式: " + e.getMessage());
        } catch (FileNotFoundException e) {
            System.err.println("找不到指定的文件: " + e.getMessage());
        } catch (IOException e) {
            System.err.println("读取文件时发生错误: " + e.getMessage());
        }
    }
}
```

### 读取URL文件内容

要从一个URL读取文件内容，而不是本地文件系统中的文件，你需要使用Java中的`HttpURLConnection`或更现代的`java.net.http.HttpClient`（适用于Java 11及以上版本）。这里，我将展示如何使用这两种方法来读取指定URL的内容。

- `HttpURLConnection`

对于较老版本的Java或者如果你偏好使用传统的`HttpURLConnection`类，可以这样做：

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class HttpUrlConnectionExample {

    public static void main(String[] args) {
        String url = "https://quartz688.cc//data//1_2025-03-13.txt";
        
        try {
            URL obj = new URL(url);
            HttpURLConnection connection = (HttpURLConnection) obj.openConnection();
            
            // 设置请求属性
            connection.setRequestMethod("GET");
            
            // 获取响应码
            int responseCode = connection.getResponseCode();
            System.out.println("GET Response Code :: " + responseCode);
            
            if (responseCode == HttpURLConnection.HTTP_OK) { // success
                BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                String inputLine;
                StringBuilder response = new StringBuilder();

                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                in.close();

                // 打印结果
                System.out.println(response.toString());
            } else {
                System.out.println("GET request not worked");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

- 使用 `HttpClient`（Java 11及以上）

对于Java 11及更高版本，推荐使用`java.net.http.HttpClient`，因为它提供了更加现代化和易用的API：

```java
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.io.IOException;

public class HttpClientExample {

    public static void main(String[] args) throws IOException, InterruptedException {
        String url = "https://quartz688.cc//data//1_2025-03-13.txt";

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        // 检查响应状态码
        if (response.statusCode() == 200) {
            // 成功获取内容
            System.out.println(response.body());
        } else {
            System.out.println("Failed to fetch the content. Status code: " + response.statusCode());
        }
    }
}
```

### 读取xml

#### DOM解析

```java
public static String downloadXml() {
    String epgData = "";
    try {
        // 创建一个URL对象
        URL url = new URL(EpgBestXmlConstant.EPG_URL);
        // 获取URL连接，open方法返回一个URLConnection类的对象
        URLConnection conn = url.openConnection();
        // 伪装成浏览器访问
        conn.addRequestProperty(EpgBestXmlConstant.USER_AGENT, EpgBestXmlConstant.USER_AGENT_VALUE);
        // conn.setConnectTimeout(15000);//设置连接主机超时(单位：毫秒)
        // conn.setReadTimeout(60000);//设置从主机读取数据超时(单位：毫秒)
        StringBuilder sb = new StringBuilder();
        try (final InputStream inStream = conn.getInputStream();
                final GZIPInputStream gzip = new GZIPInputStream(inStream);
                final InputStreamReader reader = new InputStreamReader(gzip);
                final BufferedReader in = new BufferedReader(reader);) {

            sb = new StringBuilder();
            String read;
            while ((read = in.readLine()) != null) {
                sb.append(read);
            }
        } catch (IOException e) {
            log.error("「downloadXml」「读取xml」失败", e);
        }
        log.info(">>>>>>>>");
        epgData = sb.toString();
    } catch (Exception e) {
        log.error("「downloadXml」失败", e);
    }
    return epgData;
}

/**
 * xml数据处理
 */
public static void domXml(String epgData, Map<String, List<ProgrammeBean>> ppBeanListMap) {
    DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
    try {
        DocumentBuilder db = dbf.newDocumentBuilder();
        Document document = db.parse(new InputSource(new ByteArrayInputStream(epgData.getBytes(StandardCharsets.UTF_8))));
        // programme节点集
        NodeList proList = document.getElementsByTagName("programme");
        for (int i = 0; i < proList.getLength(); i++) {
            // 每个programme对象
            Node proBean = proList.item(i);
            String startTime = proBean.getAttributes().getNamedItem("start").getTextContent();
            String stopTime = proBean.getAttributes().getNamedItem("stop").getTextContent();
            //*****当开始时间与结束时间一样时，跳过
            if (startTime.equals(stopTime)) {
                continue;
            }
            // 实例化本地存储对象
            ProgrammeBean ppBean = new ProgrammeBean();
            ppBean.setName(proBean.getAttributes().getNamedItem("channel").getTextContent());
            ppBean.setStart(DateUtils.covertDate(startTime));
            ppBean.setStop(DateUtils.covertDate(stopTime));
            // programme对象下的子节点
            NodeList childNodes = proBean.getChildNodes();
            for (int k = 0; k < childNodes.getLength(); k++) {
                if (childNodes.item(k).getNodeType() == Node.ELEMENT_NODE) {
                    if ("title".equals(childNodes.item(k).getNodeName())) {
                        ppBean.setTitle(childNodes.item(k).getTextContent());
                    } else if ("desc".equals(childNodes.item(k).getNodeName())) {
                        ppBean.setDesc(childNodes.item(k).getTextContent());
                    } else if ("category".equals(childNodes.item(k).getNodeName())) {
                        ppBean.setCategory(childNodes.item(k).getTextContent());
                    } else if ("icon".equals(childNodes.item(k).getNodeName())) {
                        ppBean.setIcon(childNodes.item(k).getAttributes().getNamedItem("src").getTextContent());
                    } else if ("sub-title".equals(childNodes.item(k).getNodeName())) {
                        ppBean.setSub_title(childNodes.item(k).getTextContent());
                    } else if ("episode-num".equals(childNodes.item(k).getNodeName())) {
                        ppBean.setEpisode_num(childNodes.item(k).getTextContent());
                    }
                }
            }
            // 填充Map对象
            ppBeanListMap.computeIfAbsent(ppBean.getName(), k -> new ArrayList<>());
            ppBeanListMap.get(ppBean.getName()).add(ppBean);
        }
    } catch (Exception e) {
        log.error("「domXml」「解析xml」失败", e);
    }
}
```

#### StAX解析

```java
public static void downloadXml(Map<String, List<ProgrammeBean>> ppBeanListMap) {
    try {
        URL url = new URL(EpgBestXmlConstant.EPG_URL);
        URLConnection conn = url.openConnection();
        conn.addRequestProperty(EpgBestXmlConstant.USER_AGENT, EpgBestXmlConstant.USER_AGENT_VALUE);
        // 使用临时文件存储
        File tempFile = File.createTempFile("epg", ".xml");
        try (InputStream inStream = conn.getInputStream()) {
            // 直接解析流
            log.info("-->parse xml start...");
            domXml(inStream, ppBeanListMap);
            log.info("-->parse xml finish...");
        }
        // 如果需要返回String，可以这样读取（但大文件仍可能有问题）
        Files.readAllBytes(tempFile.toPath());
    } catch (Exception e) {
        log.error("「downloadXml」失败", e);
    }
}

public static void domXml(InputStream inputStream, Map<String, List<ProgrammeBean>> ppBeanListMap) {
    try {
        XMLInputFactory factory = XMLInputFactory.newInstance();
        XMLStreamReader reader = factory.createXMLStreamReader(new GZIPInputStream(inputStream));
        // 临时存储当前节目的数据
        ProgrammeBean currentProgramme = null;
        // 记录当前处理的节点名（如title、desc）
        String currentElement = "";

        while (reader.hasNext()) {
            // 获取下一个事件类型
            int eventType = reader.next();

            switch (eventType) {
                // 开始标签（如<programme>）
                case XMLStreamReader.START_ELEMENT:
                    currentElement = reader.getLocalName();
                    if ("programme".equals(currentElement)) {
                        currentProgramme = new ProgrammeBean();
                        // 解析programme属性
                        String channel = reader.getAttributeValue(null, "channel");
                        String start = reader.getAttributeValue(null, "start");
                        String stop = reader.getAttributeValue(null, "stop");
                        if (start.equals(stop)) {
                            // 跳过无效数据
                            currentProgramme = null;
                            break;
                        }
                        currentProgramme.setName(channel);
                        currentProgramme.setStart(DateUtils.covertDate(start));
                        currentProgramme.setStop(DateUtils.covertDate(stop));
                    } else if ("icon".equals(currentElement) && currentProgramme != null) {
                        // 特殊处理icon的src属性
                        String src = reader.getAttributeValue(null, "src");
                        currentProgramme.setIcon(src);
                    }
                    break;
                // 文本内容（如<title>新闻联播</title>中的"新闻联播"）
                case XMLStreamReader.CHARACTERS:
                    if (currentProgramme == null) {
                        break;
                    }
                    if (currentElement == null) {
                        break;
                    }
                    String text = reader.getText().trim();
                    if (text.isEmpty()) {
                        break;
                    }
                    switch (currentElement) {
                        case "title":
                            currentProgramme.setTitle(text);
                            break;
                        case "desc":
                            currentProgramme.setDesc(text);
                            break;
                        case "category":
                            currentProgramme.setCategory(text);
                            break;
                        case "sub-title":
                            currentProgramme.setSub_title(text);
                            break;
                        case "episode-num":
                            currentProgramme.setEpisode_num(text);
                            break;
                    }
                    break;
                // 结束标签（如</programme>）
                case XMLStreamReader.END_ELEMENT:
                    if ("programme".equals(reader.getLocalName()) && currentProgramme != null) {
                        // 添加到Map
                        ppBeanListMap.computeIfAbsent(
                                currentProgramme.getName(),
                                k -> new ArrayList<>()
                        ).add(currentProgramme);
                        currentProgramme = null;
                    }
                    currentElement = null;
                    break;
            }
        }
    } catch (Exception e) {
        log.error("「parseXmlFromStream」解析失败", e);
    }
}
```

以下是这段 **StAX（Streaming API for XML）解析代码** 的详细解析，从**执行流程**、**关键设计**到**优化点**逐步说明：

**1. 代码核心目标**
- **直接解析GZIP压缩的XML流**，避免将整个XML加载到内存（解决`OutOfMemoryError`）。
- 提取`<programme>`节点的属性（如`channel`、`start`、`stop`）和子节点（如`title`、`desc`等），填充到`ProgrammeBean`对象中。
- 按`channel`分组存储到`Map<String, List<ProgrammeBean>>`。

---

**2. 关键组件**
| 组件                   | 作用                                                                 |
|------------------------|----------------------------------------------------------------------|
| `XMLStreamReader`      | StAX解析器核心类，以流式方式逐节点读取XML。                          |
| `GZIPInputStream`      | 自动解压GZIP压缩的输入流。                                           |
| `ProgrammeBean`        | 存储单个节目的数据模型（如标题、时间、描述等）。                      |
| `ppBeanListMap`        | 按频道名分组的节目列表，结构：`Map<频道名, List<ProgrammeBean>>`。    |

**3. 执行流程分步解析**

**步骤1：初始化解析器**
```java
XMLInputFactory factory = XMLInputFactory.newInstance();
XMLStreamReader reader = factory.createXMLStreamReader(new GZIPInputStream(inputStream));
```
- 创建`XMLStreamReader`，绑定到解压后的输入流。
- **注意**：StAX是“拉模式”解析器（由代码主动控制读取进度，不同于SAX的“推模式”）。

**步骤2：逐节点解析**
通过`while (reader.hasNext())`循环处理每个XML事件：
```java
int eventType = reader.next(); // 获取下一个事件类型
```
- **事件类型**：
  - `START_ELEMENT`：开始标签（如`<programme>`）。
  - `CHARACTERS`：文本内容（如`<title>新闻联播</title>`中的"新闻联播"）。
  - `END_ELEMENT`：结束标签（如`</programme>`）。

**步骤3：处理`<programme>`节点**
当遇到`START_ELEMENT`且标签名为`programme`时：
```java
if ("programme".equals(currentElement)) {
    currentProgramme = new ProgrammeBean();
    String channel = reader.getAttributeValue(null, "channel");
    String start = reader.getAttributeValue(null, "start");
    String stop = reader.getAttributeValue(null, "stop");

    if (start.equals(stop)) {
        currentProgramme = null; // 跳过无效数据
        break;
    }
    currentProgramme.setName(channel);
    currentProgramme.setStart(DateUtils.covertDate(start));
    currentProgramme.setStop(DateUtils.covertDate(stop));
}
```
- **关键操作**：
  1. 创建`ProgrammeBean`实例。
  2. 从属性中提取`channel`、`start`、`stop`。
  3. 若`start == stop`，跳过该节目（`currentProgramme = null`）。

**步骤4：处理子节点（如`<title>`、`<desc>`）**
在`CHARACTERS`事件中，根据当前节点名（`currentElement`）填充数据：
```java
String text = reader.getText().trim();
if (text.isEmpty()) break;

switch (currentElement) {
    case "title":
        currentProgramme.setTitle(text);
        break;
    case "desc":
        currentProgramme.setDesc(text);
        break;
    // ...其他子节点处理
}
```
- **为什么用`CHARACTERS`事件？**  
  XML中文本内容（如`<title>文本</title>`）通过`CHARACTERS`事件触发。

**步骤5：处理`<icon>`节点**
`<icon>`需要特殊处理，因为它的值在属性`src`中：
```java
else if ("icon".equals(currentElement) && currentProgramme != null) {
    String src = reader.getAttributeValue(null, "src");
    currentProgramme.setIcon(src);
}
```

**步骤6：保存完成的`ProgrammeBean`**
当遇到`</programme>`结束标签时，将对象存入Map：
```java
if ("programme".equals(reader.getLocalName()) && currentProgramme != null) {
    ppBeanListMap.computeIfAbsent(
        currentProgramme.getName(), 
        k -> new ArrayList<>()
    ).add(currentProgramme);
    currentProgramme = null; // 重置当前节目
}
```
- **`computeIfAbsent`作用**：  
  如果`channel`不存在，自动创建`ArrayList`；否则直接获取现有List。

**4. 关键设计技巧**
1. **状态跟踪**  
   - `currentProgramme`：临时存储当前节目的数据。  
   - `currentElement`：记录当前处理的节点名（如`title`、`desc`）。

2. **懒加载**  
   仅在遇到有效`<programme>`时创建`ProgrammeBean`，无效数据（如`start == stop`）直接跳过。

3. **内存优化**  
   - 流式解析不依赖DOM树，内存占用恒定（与XML大小无关）。
   - 及时释放已完成的对象（`currentProgramme = null`）。

**5. 异常处理**
- 捕获所有异常并日志记录（`log.error`），避免程序中断。
- 使用`try-with-resources`确保流自动关闭（在调用方处理）。

**6. 性能对比（原DOM vs StAX）**
| 指标                | DOM解析                          | StAX解析（本代码）               |
|---------------------|----------------------------------|----------------------------------|
| 内存占用            | 高（整个XML加载到内存）           | 低（仅缓存当前节点数据）          |
| 速度                | 慢（需构建DOM树）                 | 快（直接流式读取）                |
| 适用场景            | 小文件或需要频繁随机访问          | 大文件或顺序处理                  |

---

## stream

```sql
-- Stream（流）是一个来自数据源的元素队列，它可以支持聚合操作。
数据源：流的数据来源，构造Stream对象的数据源，比如通过一个List来构造Stream对象，这个List就是数据源；
聚合操作：对Stream对象进行处理后使得Stream对象返回指定规则数据的操作称之为聚合操作，比如filter、map、limit、sorted等都是聚合操作
```

### Stream对象的创建

```sql
-- Stream对象分为两种，一种串行的流对象(顺序单线程)，一种并行的流对象（多线程）

-- 为集合创建串行流对象
Stream<UmsPermission> stream = permissionList.stream();
-- 为集合创建并行流对象
tream<UmsPermission> parallelStream = permissionList.parallelStream();
```

### filter

```sql
-- 对Stream中的元素进行过滤操作，当设置条件返回true时返回相应元素
-- 获取权限类型为目录的权限
List<UmsPermission> dirList = permissionList.stream()
    .filter(permission -> permission.getType() == 0)
    .collect(Collectors.toList());
```

### map

```sql
-- 对Stream中的元素进行转换处理后获取。比如可以将UmsPermission对象转换成Long对象。 我们经常会有这样的需求：需要把某些对象的id提取出来，然后根据这些id去查询其他对象，这时可以使用此方法
-- 获取所有权限的id组成的集合
List<Long> idList = permissionList.stream()
    .map(permission -> permission.getId())
    .collect(Collectors.toList());
```

### flatMap

### limit

```sql
-- 从Stream中获取指定数量的元素
-- 获取前5个权限对象组成的集合
List<UmsPermission> firstFiveList = permissionList.stream()
    .limit(5)
    .collect(Collectors.toList());
```

### count

```sql
-- 仅获取Stream中元素的个数
-- count操作：获取所有目录权限的个数
long dirPermissionCount = permissionList.stream()
    .filter(permission -> permission.getType() == 0)
    .count();
```

### sorted

```sql
-- 对Stream中元素按指定规则进行排序
-- 将所有权限按先目录后菜单再按钮的顺序排序
List<UmsPermission> sortedList = permissionList.stream()
    .sorted((permission1,permission2)->{return permission1.getType().compareTo(permission2.getType());})
    .collect(Collectors.toList());
```

### skip

```sql
-- 跳过指定个数的Stream中元素，获取后面的元素
-- 跳过前5个元素，返回后面的
List<UmsPermission> skipList = permissionList.stream()
    .skip(5)
    .collect(Collectors.toList());
```

### List转成map

```sql
-- 有时候我们需要反复对List中的对象根据id进行查询，我们可以先把该List转换为以id为key的map结构，然后再通过map.get(id)来获取对象，这样比较方便
-- 将权限列表以id为key，以权限对象为值转换成map
Map<Long, UmsPermission> permissionMap = permissionList.stream()
    .collect(Collectors.toMap(permission -> permission.getId(), permission -> permission));
    
Map<Long, UmsPermission> permissionMap = permissionList.stream()
    .collect(Collectors.toMap(permission -> permission.getId(), Function.identity(), BinaryOperator.maxBy()));
```

```java
1.
List<ClientProjectUserTypeVo> userTypeList = projectUserType.getResult();
List<ClientProjectUserTypeResponse> userTypeList = userTypeList.stream().map(item ->{
    ClientProjectUserTypeResponse response = new ClientProjectUserTypeResponse();
    BeanUtils.copyProperties(item,response);
    return response;
}).collect(Collectors.toList())
    
2. List<String> roomNameList = machineRooms.stream().map(SvMachineRoomEntity::getRoomName).collect(Collectors.toList());

3.将对象集成转成以对象某字段为key的map
Map<String, List<Device>> groupByTime = list.stream()             .collect(Collectors.groupingBy(Device::getDeviceName));
```

```java
//list流
```

### parallelStream

```sql
-- 与stream流区别
stream是顺序流，由主线程按顺序对流执行操作，而parallelStream是并行流，内部以多线程并行执行的方式对流进行操作，但前提是流中的数据处理没有顺序要求。
```

---

## 泛型

> [!tip]
>
> - 类的泛型类型`<T>`不能用于静态方法。
>
>   ```java
>   public class Pair<T> {
>       // 编译错误
>       public static Pair<T> create(T first, T last) {
>           return new Pair<T>(first, last);
>       }
>   }
>   //对于静态方法，我们可以单独改写为“泛型”方法，只需要使用另一个类型即可
>   public class Pair<T> {
>       public static <K> Pair<K> create(K first, K last) {
>           return new Pair<K>(first, last);
>       }
>   }
>   ```

### 擦拭法

> 泛型是一种类似”模板代码“的技术，不同语言的泛型实现方式不一定相同。Java语言的泛型实现方式是擦拭法（Type Erasure）。所谓擦拭法是指，虚拟机对泛型其实一无所知，所有的工作都是编译器做的。

```java
//这是编译器看到的代码
public class Pair<T> {
    private T first;
    private T last;
}
//而虚拟机根本不知道泛型。这是虚拟机执行的代码：
public class Pair {
    private Object first;
    private Object last;
}
```

因此，Java使用擦拭法实现泛型，导致了：

- 编译器把类型`<T>`视为`Object`。
- 编译器根据`<T>`实现安全的强制转型。

```java
//使用泛型的时候，我们编写的代码也是编译器看到的代码
Pair<String> p = new Pair<>("Hello", "world");
String first = p.getFirst();
String last = p.getLast();
//而虚拟机执行的代码并没有泛型
Pair p = new Pair("Hello", "world");
String first = (String) p.getFirst();
String last = (String) p.getLast();
```

所以，Java的泛型是由编译器在编译时实行的，编译器内部永远把所有类型`T`视为`Object`处理，但是，在需要转型的时候，编译器会根据`T`的类型自动为我们实行安全地强制转型。

了解了Java泛型的实现方式——擦拭法，我们就知道了Java泛型的局限：

> - 局限一：`<T>`不能是基本类型，例如`int`，因为实际类型是`Object`，`Object`类型无法持有基本类型
>
>   ```java
>   Pair<int> p = new Pair<>(1, 2); // compile error!
>   ```
>
> - 局限二：无法取得带泛型的`Class`。观察以下代码：
>
>   > 因为 `T` 是 `Object`，我们对 `Pair<String>`和 `Pair<Integer>`类型获取的都是 `Pair`类的 `Class`。
>
>   ```java
>   Pair<String> p1 = new Pair<>("Hello", "world");
>   Pair<Integer> p2 = new Pair<>(123, 456);
>   Class c1 = p1.getClass();
>   Class c2 = p2.getClass();
>   System.out.println(c1==c2); // true
>   System.out.println(c1==Pair.class); // true
>   ```
>
> - 局限三：无法判断带泛型的类型：
>
>   > 原因和前面一样，并不存在`Pair<String>.class`，而是只有唯一的`Pair.class`。
>
>   ```java
>   Pair<Integer> p = new Pair<>(123, 456);
>   // Compile error:
>   if (p instanceof Pair<String>) {
>   }
>   ```
>
> - 局限四：不能实例化`T`类型：
>
>   > 这样一来，创建`new Pair<String>()` 和创建 `new Pair<Integer>()`就全部成了`Object`，显然编译器要阻止这种类型不对的代码。
>
>   ```java
>   first = new T();
>   last = new T();
>   //擦拭后实际上变成了：
>   first = new Object();
>   last = new Object();
>   ```
>
>   > 要实例化`T`类型，我们必须借助额外的`Class<T>`参数并通过反射来实例化`T`类型：
>
>   ```java
>   public class Pair<T> {
>       public Pair(Class<T> clazz) {
>           first = clazz.newInstance();
>           last = clazz.newInstance();
>       }
>   }
>   ```

泛型继承：一个类可以继承自一个泛型类。例如：父类的类型是`Pair<Integer>`，子类的类型是`IntPair`，可以这么继承

```java
public class IntPair extends Pair<Integer> {
}
```

> 在继承了泛型类型的情况下，子类可以获取父类的泛型类型。例如：`IntPair`可以获取到父类的泛型类型`Integer`：

```java
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;

public class Main {
    public static void main(String[] args) {
        Class<IntPair> clazz = IntPair.class;
        Type t = clazz.getGenericSuperclass();
        if (t instanceof ParameterizedType) {
            ParameterizedType pt = (ParameterizedType) t;
            Type[] types = pt.getActualTypeArguments(); // 可能有多个泛型类型
            Type firstType = types[0]; // 取第一个泛型类型
            Class<?> typeClass = (Class<?>) firstType;
            System.out.println(typeClass); // Integer
        }
    }
}
```

> 因为Java引入了泛型，所以，只用`Class`来标识类型已经不够了。实际上，Java的类型系统结构如下：

```mdx-code-block
import typeSystem from '/img/docs/java/java/JAVA-TypeSystem.png';

<img src={typeSystem} alt="JAVA-TypeSystem" width="50%" />
```

### 上界通配符（? extends T）

> [!important]
>
> `<? extends Number>` 通配符的限制：方法 `setFirst(? extends Number)` 无法传递任何 `Number` 的子类型给`setFirst(? extends Number)`。因为编译器不知道具体类型，无法确保类型安全。
>
> **总结：使用extends通配符表示可以读，不能写。**

> `? extends T` 表示一个未知的具体类型，但它一定是 `T` 或 `T` 的某个子类型。这允许你处理一个不确定具体类型的集合，但你知道该集合中的元素至少实现了 `T` 接口或继承自 `T` 类。

> 使用`<? extends Integer>`通配符表示：
>
> - 允许调用`get()`方法获取`Integer`的引用；
> - 不允许调用`set(? extends Integer)`方法并传入任何`Integer`的引用（`null`除外）。

#### 下界通配符（? super T）

> [!important]
>
> `<? super Integer>`通配符的限制：方法参数签名`? super Integer getFirst()`无法传递任何`Integer`的父类型给`? super Integer getFirst()`。因为如果传入的实际类型是`Pair<Number>`，编译器无法将`Number`类型转型为`Integer`。唯一可以接收`getFirst()`方法返回值的是`Object`类型。
>
> **总结：使用super通配符表示可以写，不能读。**

> `? super T` 则表示一个未知的具体类型，但它一定是 `T` 或 `T` 的某个父类型。这意味着你可以在方法中向一个类型未知但至少是 `T` 的父类型的集合添加 `T` 类型的元素。
>
> 使用`<? super Integer>`通配符表示：
>
> - 允许调用`set(? super Integer)`方法传入`Integer`的引用；
> - 不允许调用`get()`方法获得`Integer`的引用。

> [!note]
>
> 对比extends和super通配符：
>
> - `<? extends T>`允许调用读方法`T get()`获取`T`的引用，但不允许调用写方法`set(T)`传入`T`的引用（传入`null`除外）；
> - `<? super T>`允许调用写方法`set(T)`传入`T`的引用，但不允许调用读方法`T get()`获取`T`的引用（获取`Object`除外）。
>
> 例子，Java标准库的`Collections`类定义的`copy()`方法：
>
> ```java
> public class Collections {
>     // 把src的每个元素复制到dest中:
>     public static <T> void copy(List<? super T> dest, List<? extends T> src) {
>         for (int i=0; i<src.size(); i++) {
>             T t = src.get(i);
>             dest.add(t);
>         }
>     }
> }
> ```

### 无限定通配符

Java的泛型还允许使用无限定通配符（Unbounded Wildcard Type），即只定义一个`?`：`void sample(Pair<?> p);`。

因为`<?>`通配符既没有`extends`，也没有`super`，因此：

- 不允许调用`set(T)`方法并传入引用（`null`除外）；
- 不允许调用`T get()`方法并获取`T`引用（只能获取`Object`引用）。

换句话说，既不能读，也不能写，那只能做一些`null`判断：

 ```java
 static boolean isNull(Pair<?> p) {
     return p.getFirst() == null || p.getLast() == null;
 }
 ```

大多数情况下，可以引入泛型参数`<T>`消除`<?>`通配符：

```java
static <T> boolean isNull(Pair<T> p) {
    return p.getFirst() == null || p.getLast() == null;
}
```

`<?>`通配符有一个独特的特点，就是：`Pair<?>`是所有`Pair<T>`的超类：

```java
//可以正常编译运行的，因为Pair<Integer>是Pair<?>的子类，可以安全地向上转型
public static void main(String[] args) {
    Pair<Integer> p = new Pair<>(123, 456);
    Pair<?> p2 = p; // 安全地向上转型
    System.out.println(p2.getFirst() + ", " + p2.getLast());
}
```

### 示例

> 如果类本身不能使用泛型（例如，如果你正在使用一个不允许泛型的旧Java版本，或者是出于设计上的考虑），但是你仍然希望 `calculateYoy` 方法能够灵活地处理不同类型的列表，你可以将泛型放在方法级别。
>
> 这意味着方法将成为泛型方法，而类本身保持非泛型。

```java
private <T> void calculateYoy(List<? extends T> list, Function<? super T, String> valueGetter, BiConsumer<? super T, String> yoySetter) {
    for (int i = 1; i < list.size(); i++) {
        T previousYearVO = list.get(i);
        T currentYearVO = list.get(i - 1);
        if (ObjectUtil.isAllNotEmpty(valueGetter.apply(previousYearVO), valueGetter.apply(currentYearVO))) {
            BigDecimal currentYearValue = Convert.toBigDecimal(valueGetter.apply(currentYearVO), BigDecimal.ZERO);
            if (currentYearValue.compareTo(BigDecimal.ZERO) != 0) {
                BigDecimal previousYearValue = Convert.toBigDecimal(valueGetter.apply(previousYearVO), BigDecimal.ZERO);
                BigDecimal yoyChange = (currentYearValue.subtract(previousYearValue)).divide(previousYearValue, 4, RoundingMode.HALF_UP);
                yoySetter.accept(currentYearVO, yoyChange.toString());
            }
        }
    }
}
```

### 泛型和反射

Java的部分反射API也是泛型。例如：`Class<T>`就是泛型：

```java
// compile warning:
Class clazz = String.class;
String str = (String) clazz.newInstance();
// no warning:
Class<String> clazz = String.class;
String str = clazz.newInstance();
```

调用`Class`的`getSuperclass()`方法返回的`Class`类型是`Class<? super T>`：

```java
Class<? super String> sup = String.class.getSuperclass();
```

构造方法`Constructor<T>`也是泛型：

```java
Class<Integer> clazz = Integer.class;
Constructor<Integer> cons = clazz.getConstructor(int.class);
Integer i = cons.newInstance(123);
```

我们可以声明带泛型的数组，但不能用`new`操作符创建带泛型的数组，必须通过强制转型实现带泛型的数组：

```java
Pair<String>[] ps = null; // ok
Pair<String>[] ps = new Pair<String>[2]; // compile error!

@SuppressWarnings("unchecked")
Pair<String>[] ps = (Pair<String>[]) new Pair[2]; //compile success
```

带泛型的数组实际上是编译器的类型擦除：

```java
Pair[] arr = new Pair[2];
Pair<String>[] ps = (Pair<String>[]) arr;
System.out.println(ps.getClass() == Pair[].class); // true
String s1 = (String) arr[0].getFirst();
String s2 = ps[0].getFirst();
```

不能直接创建泛型数组`T[]`，因为擦拭后代码变为`Object[]`。必须借助`Class<T>`来创建泛型数组或利用可变参数创建泛型数组：

```java
// compile error:
public class Abc<T> {
    T[] createArray() {
        return new T[5];
    }
}
// compile success
T[] createArray(Class<T> cls) {
    return (T[]) Array.newInstance(cls, 5);
}
// compile success
public class ArrayHelper {
    @SafeVarargs
    static <T> T[] asArray(T... objs) {
        return objs;
    }
}
String[] ss = ArrayHelper.asArray("a", "b", "c");
Integer[] ns = ArrayHelper.asArray(1, 2, 3);
```

似乎可以安全地创建一个泛型数组。但实际上，这种方法非常危险。原因还是因为擦拭法，在`pickTwo()`方法内部，编译器无法检测`K[]`的正确类型，因此返回了`Object[]`。以下代码来自《Effective Java》的示例：

```java
public class Main {
    public static void main(String[] args) {
        String[] arr = asArray("one", "two", "three");
        System.out.println(Arrays.toString(arr));
        // ClassCastException:
        String[] firstTwo = pickTwo("one", "two", "three");
        System.out.println(Arrays.toString(firstTwo));
    }
    static <K> K[] pickTwo(K k1, K k2, K k3) {
        return asArray(k1, k2);
    }
    //编译器对所有可变泛型参数都会发出警告，可以用`@SafeVarargs`消除警告。
    static <T> T[] asArray(T... objs) {
        return objs;
    }
}
```

示例一：解析字符串，格式: "key1=value1,key2=value2"

```java
public static <T> T parseKey(String deKey, Class<T> clazz) {
    T instance = null;
    try {
        // 创建对象（带默认值）
        instance = clazz.getDeclaredConstructor().newInstance();
        String[] keyArray = deKey.split(",");
        for (String map : keyArray) {
            // 限制 split 次数，避免异常
            String[] keyValue = map.split("=", 2);
            // 跳过不合法的键值对
            if (keyValue.length < 2) {
                continue;
            }
            String fieldName = keyValue[0].trim();
            String fieldValue = keyValue[1].trim();

            if (fieldValue.isEmpty() || "null".equalsIgnoreCase(fieldValue)) {
                // 传入的是空值或 "null"，不修改默认值
                continue;
            }
            // 递归查找字段（包括父类）
            Field field = findField(clazz, fieldName);
            if (field != null) {
                field.setAccessible(true);
                // 获取字段类型并进行转换
                field.set(instance, convertType(field.getType(), fieldValue));
            } else {
                logger.warn("Field '{}' not found in class {}", fieldName, clazz.getName());
            }
        }
    } catch (Exception e) {
        logger.info("Failed to parse key: {}", deKey, e);
    }
    return instance;
}
private static Field findField(Class<?> clazz, String fieldName) {
    try {
        // 尝试获取当前类的字段
        return clazz.getDeclaredField(fieldName);
    } catch (NoSuchFieldException e) {
        // 如果当前类没有该字段，尝试从父类查找
        Class<?> superClass = clazz.getSuperclass();
        if (superClass != null) {
            return findField(superClass, fieldName);
        }
        // 如果父类也没有，返回 null
        return null;
    }
}
```

示例二：拼接字段 "field1=1,field2=2"

```java
/**
 * 不需要获取继承父类字段的情况下
 */
public static String objectToStringNoExtends(Object obj) {
    return Arrays.stream(obj.getClass().getDeclaredFields())
            .peek(field -> field.setAccessible(true))
            .map(field -> {
                try {
                    return field.getName() + "=" + field.get(obj);
                } catch (IllegalAccessException e) {
                    return field.getName() + "=";
                }
            })
            .collect(Collectors.joining(","));
}
/**
 * 获取继承父类字段的情况下
 */
public static String objectToString(Object obj) {
    Class<?> clazz = obj.getClass();
    List<String> fieldValues = new ArrayList<>();

    while (clazz != null) {
        for (Field field : clazz.getDeclaredFields()) {
            field.setAccessible(true);
            try {
                fieldValues.add(field.getName() + "=" + field.get(obj));
            } catch (IllegalAccessException e) {
                fieldValues.add(field.getName() + "=");
            }
        }
        clazz = clazz.getSuperclass();
    }
    return String.join(",", fieldValues);
}
```

### 扫描指定包中的所有类

```java
// 扫描指定包中的所有类
Reflections reflections = new Reflections(
        new ConfigurationBuilder()
                // 显式指定包路径
                .setUrls(ClasspathHelper.forPackage("com.example.api.task"))
                .setScanners(Scanners.MethodsAnnotated)
);
// 获取所有带有 @TaskMethod 注解的方法
Set<Method> methods = reflections.getMethodsAnnotatedWith(TaskMethod.class);
```

## 注解 

### @Inherited

```sql
-- 元注解
类A继承类B，类B有一个自定义注解，如果想要A继承B的注解，则需要在B自定义注解上加上@Inherited表示元注解，用于指示注解是否应该被子类继承。默认情况下，自定义注解是不继承给子类的

-- @Retention
RUNTIME：确保它可以在运行时被反射访问
```

### @Intercepts @Signature

```sql
-- mybatis拦截器可以拦截如下4中类型
Executor：sql的内部执行器
ParameterHandler：拦截参数的处理
StatementHandler：拦截sql的构建
ResultSetHandler：拦截结果的处理
-- @Signature 注解参数说明
type：就是指定拦截器类型（ParameterHandler ，StatementHandler，ResultSetHandler ）
method：是拦截器类型中的方法，不是自己写的方法
args：是method中方法的入参
-- eg
@Intercepts(value = {
@Signature(type = ResultSetHandler.class, method = "handleResultSets", args = Statement.class),
})
@Component
public class MybatisResultSetHandler implements Interceptor {
    @Override
    public Object intercept(Invocation invocation) throws Throwable {
        //这里不管几个结果都是返回一个list，强转成list即可
        Object proceed = invocation.proceed();
        System.out.println(proceed);
        return proceed;
    }
}
-- type就是拦截结果的处理（ResultSetHandler ）的拦截器，method是ResultSetHandler接口的某一个方法,args就是这个方法中的参数
public interface ResultSetHandler {
    <E> List<E> handleResultSets(Statement var1) throws SQLException;
    <E> Cursor<E> handleCursorResultSets(Statement var1) throws SQLException;
    void handleOutputParameters(CallableStatement var1) throws SQLException;
}

-- Interceptor 接口
intercept方法：interceptor能够拦截的四种类型对象，此处入参invocation便是指拦截到的对象
plugin方法：让mybatis判断，是否要进行拦截，然后做出决定是否生成一个代理（@Intercepts注解来决定是否进行拦截处理）
setProperties方法：拦截器需要一些变量对象，而且这个对象是支持可配置的
```

### @Conditional

```java
//简单使用
在java中这种情况，调用系统的cmd命令，但是在window和linux下命令有些有些时候是不一样的

public class LinuxCondition implements Condition {
	public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) {
        return context.getEnvironment().getProperty("os.name").contains("Linux");
	}
}

public class WindowsCondition implements Condition {
	/*
	 * ConditionContext context: spring容器上下文环境
	 * AnnotatedTypeMetadata metadata ：@Conditional修饰类型信息
	 */
	public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) {
        return context.getEnvironment().getProperty("os.name").contains("Windows");
	}
}
```

```java
public interface CmdService {
    public void print();
}

public class WindowCmdService implements CmdService{
    @Override
    public void print() {
        System.out.println("Window cmd...");
    }  
}
 
public class LinuxCmdService implements CmdService{
    @Override
    public void print() {
        System.out.println("Linux cmd...");
    }
}

@Configuration
public class CmdServiceConditionConfig {
    /**
     * 当WindowCondition方法中的matches返回true的时候，
     * WindowCmdService会被注入，否则不注入。
     */
    @Bean("cmdService")
    @Conditional(WindowCondition.class)
    public CmdService windowCmdService(){
        return new WindowCmdService();
    }
    /**
     * 当LinuxCondition方法中的matches返回true的时候，
     * LinuxCmdService会被注入，否则不注入。
     */
    @Bean("cmdService")
    @Conditional(LinuxCondition.class)
    public CmdService LinuxCmdService(){
        return new LinuxCmdService();
    }
}
```

```sql
-- 衍生注解
-- @ConditionalOnBean
仅仅在当前上下文中存在某个对象时，才会实例化一个Bean
-- @ConditionalOnClass
某个class位于类路径上，才会实例化一个Bean
-- @ConditionalOnExpression
当表达式为true的时候，才会实例化一个Bean。
比如：
@ConditionalOnExpression("true")
@ConditionalOnExpression("${my.controller.enabled:false}")
-- @ConditionalOnMissingBean
仅仅在当前上下文中不存在某个对象时，才会实例化一个Bean
-- @ConditionalOnMissingClass
某个class类路径上不存在的时候，才会实例化一个Bean
-- @ConditionalOnNotWebApplication
不是web应用
```

### @RequestMapping

```sql
-- produces 指定Accept标头（指定返回类型）
@RequestMapping(
  value = "/ex/foos", 
  method = GET,
  produces = { "application/json", "application/xml" }
)
-- consumes（指定处理请求的提交内容类型（Content-Type））
@RequestMapping(
    value = "/pets",
    method = RequestMethod.POST, 
    consumes="application/json")  
```

### @DependsOn

```sql
可以定义在类和方法上，意思是我这个组件要依赖于另一个组件，也就是说被依赖的组件会比该组件先注册到IOC容器中
```

### @PostConstruct 

```mysql
服务启动时执行该注解方法
@PostConstruct注解的⽅法在加载类的构造函数之后执⾏，也就是在加载了构造函数之后
```

### @Async

```mysql
1.异步线程
2.@Async与@Transactional一起使用，子线程不影响主线程，线程间事务相互隔离
3.启动类使用@EnableAsync启用异步
源码入口：@EnableAsync --> 重要类AsyncConfigurationSelector
@EnableAsync最终是向容器内注入了ProxyAsyncConfiguration

注意：
在Spring里面，不论是事务注解还是异步注解，通通都是依靠AOP注入逻辑的，而内部方法调用是走不了代理的，所以这里的@Async压根就没生效，所以说这叫假想异步（同个类不生效）
```

### @Value

```mysql
private static String appKey;
@Value("${third.hikvision.appKey}")
public static void setAppKey(String appKey) {
    HKApiUtil.appKey = appKey;
}
```

### @PreAuthorize

```mysql
@PreAuthorize 注解，顾名思义是进入方法前的权限验证，@PreAuthorize 声明这个方法所需要的权限表达式，例如：@PreAuthorize("hasAuthority('sys:dept:delete')")，
根据这个注解所需要的权限，再和当前登录的用户角色所拥有的权限对比，如果用户的角色权限集Set中有这个权限，则放行；没有，拒绝
```

### @Builder

```sql
@Builder 注解为类生成相对略微复杂的构建器 API
它作用于类，将其变成建造者模式
可以以链的形式调用
初始化实例对象生成的对象是不可以变的，可以在创建对象的时候进行赋值
如果需要在原来的基础上修改可以加 set 方法，final 字段可以不需要初始化
它会生成一个全参的构造函数
```

### @within @target

```sql
@within() 和 @target的“作用域”有点像清朝的爵位和官位的“有效期”：
@within() ，类似于爵位，是可以世袭的
@target()，类似于官位，是不能世袭的
-- ================================================================
@Before("@target(com.javatpoint.jjk.A1)")
public void execute2() {
    System.out.println("@target --- A1");
}
上述代码可以形象地理解为，谁的官位是A1，就在他的所有方法执行前进行增强，即打印@target — A1，显然，只有Human被封了官。这种官位是不能世袭的，所以，对Man和Boy无效。
-- ================================================================
@Before("@within(com.javatpoint.jjk.A2)")
public void execute3() {
    System.out.println("@within --- A2");
}
上述代码可以形象地理解为，谁是A2爵位的受益者，就在他自己的方法，或者继承的方法执行前增强，即打印@within — A2，显然，Man、Boy都收益。Boy重写的方法不会增强，这不是世袭的，也好理解！
```

```mdx-code-block
import withinAndtarget from '/img/docs/java/java/JAVA-withinAndtarget.png';

<img src={withinAndtarget} alt="withinAndtarget" width="50%" />
```

### @Validated @Valid

```sql
-- 说明
springboot2.3版本后，web中不包含Validated校验依赖，需要手动添加依赖
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
-- 属性校验注解
@NotBlank：只用在String上，表示传进来的值不能为null，而且调用trim()后，长度必须大于0
@NotNull：不能为null，但可以为empty(分配了内存空间，但值为空)
@NotEmpty：不能为null，而且长度必须大于0
-- 注解位置
@Validated：用在类型、方法和方法参数上。但不能用于成员属性
@Valid：可以用在方法、构造函数、方法参数和成员属性上(所以可以用@Valid实现嵌套验证)
-- 异常
如果校验失败，会抛出MethodArgumentNotValidException或者ConstraintViolationException异常
```

#### 分组校验

```java
-- 分组校验
-- 在分组EditUser时，验证id不能为空，其他情况下不做验证
@NotNull(groups={EditUser.class})
private Long id;
-- 此处不填分组消息表示所有分组都需要校验
@NotNull(groups = {AddUser.class, EditUser.class})
private UserIdCardVo userIdCardVo;
@RequestBody @Validated({EditUser.class})
-- @Valid
不支持分组，所以对于所有校验标签里面添加了groups字段的都不会校验会跳过
```

#### 嵌套校验

```java
/*
DTO类里面的字段都是基本数据类型和String类型。但是实际场景中，有可能某个字段也是一个对象，这种情况先，可以使用嵌套校验。比如，上面保存User信息的时候同时还带有Job信息。需要注意的是，此时DTO类的对应字段必须标记@Valid注解
*/
@NotNull(groups = {Save.class, Update.class})
@Valid
private Job job;
public static class Job {
   @Min(value = 1, groups = Update.class)
   private Long jobId;
   @NotNull(groups = {Save.class, Update.class})
   @Length(min = 2, max = 10, groups = {Save.class, Update.class})
   private String jobName;
}
```

#### 集合校验

```java
/*
如果请求体直接传递了json数组给后台，并希望对数组中的每一项都进行参数校验。此时，如果我们直接使用java.util.Collection下的list或者set来接收数据，参数校验并不会生效！我们可以使用自定义list集合来接收参数
*/
public class ValidationList<E> implements List<E> {
    @Delegate // @Delegate是lombok注解
    @Valid // 一定要加@Valid注解
    public List<E> list = new ArrayList<>();
    // 一定要记得重写toString方法
    @Override
    public String toString() {
        return list.toString();
    }
}
@RequestBody @Validated(UserDTO.Save.class) ValidationList<UserDTO> userList
```

#### 自定义校验

```java
/* 
业务需求总是比框架提供的这些简单校验要复杂的多，我们可以自定义校验来满足我们的需求。自定义spring validation非常简单，假设我们自定义加密id（由数字或者a-f的字母组成，32-256长度）校验，主要分为两步
*/
@Target({METHOD, FIELD, ANNOTATION_TYPE, CONSTRUCTOR, PARAMETER})
@Retention(RUNTIME)
@Documented
@Constraint(validatedBy = {EncryptIdValidator.class})
public @interface EncryptId {

    // 默认错误消息
    String message() default "加密id格式错误";

    // 分组
    Class<?>[] groups() default {};

    // 负载
    Class<? extends Payload>[] payload() default {};
}
public class EncryptIdValidator implements ConstraintValidator<EncryptId, String> {
    private static final Pattern PATTERN = Pattern.compile("^[a-f\d]{32,256}$");
    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        // 不为null才进行校验
        if (value != null) {
            Matcher matcher = PATTERN.matcher(value);
            return matcher.find();
        }
        return true;
    }
}
//这样我们就可以使用@EncryptId进行参数校验了
```

#### 编程式校验

```sql
@Autowired
private javax.validation.Validator globalValidator;

// 编程式校验
@PostMapping("/saveWithCodingValidate")
public Result saveWithCodingValidate(@RequestBody UserDTO userDTO) {
    Set<ConstraintViolation<UserDTO>> validate = globalValidator.validate(userDTO, UserDTO.Save.class);
    	// 如果校验通过，validate为空；否则，validate包含未校验通过项
    if (validate.isEmpty()) {
        // 校验通过，才会执行业务逻辑处理

    } else {
        for (ConstraintViolation<UserDTO> userDTOConstraintViolation : validate) {
            // 校验失败，做其它逻辑
            System.out.println(userDTOConstraintViolation);
        }
    }
    return Result.ok();
}
```

#### 快速失败

```java
/*
Spring Validation默认会校验完所有字段，然后才抛出异常。可以通过一些简单的配置，开启Fali Fast模式，一旦校验失败就立即返回
*/
@Bean
public Validator validator() {
    ValidatorFactory validatorFactory = Validation.byProvider(HibernateValidator.class)
            .configure()
            // 快速失败模式
            .failFast(true)
            .buildValidatorFactory();
    return validatorFactory.getValidator();
}
```

## 敏感词脱敏

https://mp.weixin.qq.com/s/vVhB8uJBz4WMlOZHJ2Zbog

## Jenkins自动化部署

```sql
-- 部署后端
https://www.macrozheng.com/mall/reference/jenkins.html
-- 部署前端
https://www.macrozheng.com/mall/reference/jenkins_vue.html
```

## SPI机制

```java
//SPI ，全称为 Service Provider Interface，是一种服务发现机制。它通过在ClassPath路径下的META-INF/services文件夹查找文件，自动加载文件里所定义的类。
//1.首先，我们需要定义一个接口，SPIService
public interface SPIService {
    void execute();
}
//2.然后，定义两个实现类
public class SpiImpl1 implements SPIService{
    public void execute() {
        System.out.println("SpiImpl1.execute()");
    }
}
public class SpiImpl2 implements SPIService{
    public void execute() {
        System.out.println("SpiImpl2.execute()");
    }
}
//3.最后呢，要在ClassPath路径下配置添加一个文件。文件名字是接口的全限定类名，内容是实现类的全限定类名，多个实现类用换行符分隔。com.viewscenes.netsupervisor.spi.SPIService。内容：
com.viewscenes.netsupervisor.spi.SpiImpl1
com.viewscenes.netsupervisor.spi.SpiImpl2
//4.然后我们就可以通过ServiceLoader.load或者Service.providers方法拿到实现类的实例。其中，Service.providers包位于sun.misc.Service，而ServiceLoader.load包位于java.util.ServiceLoader。
public class Test {
    public static void main(String[] args) {    
        Iterator<SPIService> providers = Service.providers(SPIService.class);
        ServiceLoader<SPIService> load = ServiceLoader.load(SPIService.class);

        while(providers.hasNext()) {
            SPIService ser = providers.next();
            ser.execute();
        }
        System.out.println("--------------------------------");
        Iterator<SPIService> iterator = load.iterator();
        while(iterator.hasNext()) {
            SPIService ser = iterator.next();
            ser.execute();
        }
    }
}
//5.输出结果
SpiImpl1.execute()
SpiImpl2.execute()
--------------------------------
SpiImpl1.execute()
SpiImpl2.execute()

总结：Java中的SPI提供了一种比较特别的服务发现和调用机制，通过接口灵活的将服务调用与服务提供者分离，用于提供给第三方实现扩展时还是很方便的。但是也有缺点，比方说一旦加载一个接口，就会把所有实现类都加载进来，可能会加载到不需要的冗余服务。不过站在整体角度上，还是给我们提供了一种非常不错的框架扩展、集成的思路。
```

## JNA JNI

```sql
-- JNA(Java Native Access "JNA(Java Native Access)"
一个开源的 Java 框架，是 Sun 公司推出的一种调用本地方法的技术，是建立在经典的 JNI 基础之上的一个框架。之所以说它是 JNI 的替代者，是因为 JNA 大大简化了调用本地方法的过程，使用很方便，基本上不需要脱离 Java 环境就可以完成。

-- JNI （Java Native Interface）
即 Java 本地接口，它建立了 Java 与其他编程语言的桥梁，允许 Java 程序调用其他语言（尤其是 C/C++ ）编写的程序或者代码库。并且， JDK 本身的实现也大量用到 JNI 技术来调用本地 C 程序库。
```

## AOP

```sql
-- AOP为Aspect Oriented Programming的缩写
-- 意为：面向切面编程
-- 通过预编译方式和运行期动态代理实现程序功能的统一维护的一种技术
-- 利用AOP可以对业务逻辑的各个部分进行隔离，从而使得业务逻辑各部分之间的耦合度降低，提高程序的可重用性，同时提高了开发的效率
```

### 相关术语

#### 通知（Advice）

通知描述了切面要完成的工作以及何时执行。比如我们的日志切面需要记录每个接口调用时长，就需要在接口调用前后分别记录当前时间，再取差值

- 前置通知（Before）：在目标方法调用前调用通知功能。
- 后置通知（After）：在目标方法调用之后调用通知功能，不关心方法的返回结果；原操作异常也会执行。
- 返回通知（AfterReturning）：在目标方法成功执行之后调用通知功能；原操作异常，不会执行。
- 异常通知（AfterThrowing）：在目标方法抛出异常后调用通知功能。
- 环绕通知（Around）：通知包裹了目标方法，在目标方法调用之前和之后执行自定义的行为；
  需要对原操作调用Object result = proceedingJoinPoint.proceed()；
  如果有返回值，需要return result。

#### 连接点（JoinPoint）

通知功能被应用的时机。比如接口方法被调用的时候就是日志切面的连接点

#### 切点（Pointcut）

 切点定义了通知功能被应用的范围。比如日志切面的应用范围就是所有接口，即所有controller层的接口方法

#### 切面（Aspect）

切面是通知和切点的结合，定义了何时、何地应用通知功能

#### 引入（Introduction）

在无需修改现有类的情况下，向现有的类添加新方法或属性

#### 织入（Weaving）

把切面应用到目标对象并创建新的代理对象的过程

### 相关注解

- @Aspect：用于定义切面
- @Before：通知方法会在目标方法调用之前执行
- @After：通知方法会在目标方法返回或抛出异常后执行
- @AfterReturning：通知方法会在目标方法返回后执行
- @AfterThrowing：通知方法会在目标方法抛出异常后执行
- @Around：通知方法会将目标方法封装起来
- @Pointcut：定义切点表达式

### 切点表达式

```sql
-- 指定了通知被应用的范围，表达式格式
execution(方法修饰符 返回类型 方法所属的包.类名.方法名称(方法参数)
          
-- com.macro.mall.tiny.controller包中所有类的public方法都应用切面里的通知
execution(public * com.macro.mall.tiny.controller.*.*(..))
-- com.macro.mall.tiny.service包及其子包下所有类中的所有方法都应用切面里的通知
execution(* com.macro.mall.tiny.service..*.*(..))
-- com.macro.mall.tiny.service.PmsBrandService类中的所有方法都应用切面里的通知
execution(* com.macro.mall.tiny.service.PmsBrandService.*(..))
```

### 获取请求体参数

```java
@Aspect
@Component
public class ApiLogAspect {
    private static final Logger logger = LoggerFactory.getLogger(ApiLogAspect.class);

    // 切入所有Controller方法
    @Pointcut("execution(* com.example.api.controller..*.*(..))")
    public void controllerPointcut() {
    }

    @Before("controllerPointcut()")
    public void logRequest(JoinPoint joinPoint) {
        try {
            // 获取HttpServletRequest
            HttpServletRequest request =
                    ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();

            // 获取请求体参数
            String requestBody = getRequestBody(request);
            logger.info("\n=== 请求信息 ===\nURL: {}\nMethod: {}\nParams: {}\nBody: {}",
                    request.getRequestURI(),
                    request.getMethod(),
                    request.getParameterMap(),
                    requestBody);

            // 解析请求体中的domain字段（假设请求体是JSON格式）
            if (ObjectUtil.isNotEmpty(requestBody)) {
                Map<String, Object> bodyMap = JSONUtil.toBean(requestBody, Map.class);
                String domain = Convert.toStr(bodyMap.get("domain"), "");
                if (ObjectUtil.isNotEmpty(domain)) {
                    ApiDomainContext.setApiDomain(domain);
                }
            }
        } catch (Exception e) {
            logger.error("\n=== 请求信息 ===\n{}", e.getMessage());
        }
    }
    /**
     * 从HttpServletRequest中读取请求体内容
     */
    private String getRequestBody(HttpServletRequest request) throws IOException {
        StringBuilder requestBody = new StringBuilder();
        try (BufferedReader reader = request.getReader()) {
            String line;
            while ((line = reader.readLine()) != null) {
                requestBody.append(line);
            }
        }
        return requestBody.toString();
    }
}
```

注意事项

1. 请求体只能读取一次：HttpServletRequest 的输入流只能读取一次。如果需要多次读取请求体，可以将其缓存到请求属性中。
2. 性能问题：频繁读取请求体可能会影响性能，建议在必要时使用。
3. JSON 格式：代码假设请求体是 JSON 格式。如果请求体是其他格式（如表单数据），需要调整解析逻辑。

错误：
`getInputStream() has already been called for this request`
原因：
> 你遇到的错误是因为 `HttpServletRequest` 的输入流（`getInputStream()` 或 `getReader()`）**只能读取一次**。如果在其他地方（如 Spring 的 `@RequestBody` 注解）已经读取了请求体，再次调用 `getInputStream()` 或 `getReader()` 就会抛出异常。
解决方案：

方法一：**使用 `ContentCachingRequestWrapper`**

> Spring 提供了 `ContentCachingRequestWrapper`，它可以缓存请求体的内容，允许多次读取。你可以在过滤器中将原始的 `HttpServletRequest` 包装为 `ContentCachingRequestWrapper`，然后在切面中使用它。

1. **创建过滤器**：
   在过滤器中包装请求对象。
   ```java
   import org.springframework.web.filter.OncePerRequestFilter;
   import org.springframework.web.util.ContentCachingRequestWrapper;

   import javax.servlet.FilterChain;
   import javax.servlet.ServletException;
   import javax.servlet.http.HttpServletRequest;
   import javax.servlet.http.HttpServletResponse;
   import java.io.IOException;

   public class CachingRequestBodyFilter extends OncePerRequestFilter {
       @Override
       protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
               throws ServletException, IOException {
           // 包装请求对象
           ContentCachingRequestWrapper wrappedRequest = new ContentCachingRequestWrapper(request);
           filterChain.doFilter(wrappedRequest, response);
       }
   }
   ```

2. **注册过滤器**：
   在 Spring Boot 中注册过滤器。
   ```java
   import org.springframework.boot.web.servlet.FilterRegistrationBean;
   import org.springframework.context.annotation.Bean;
   import org.springframework.context.annotation.Configuration;

   @Configuration
   public class FilterConfig {
       @Bean
       public FilterRegistrationBean<CachingRequestBodyFilter> cachingRequestBodyFilter() {
           FilterRegistrationBean<CachingRequestBodyFilter> registrationBean = new FilterRegistrationBean<>();
           registrationBean.setFilter(new CachingRequestBodyFilter());
           registrationBean.addUrlPatterns("/*"); // 过滤所有请求
           return registrationBean;
       }
   }
   ```

3. **在切面中使用 `ContentCachingRequestWrapper`**：
   修改切面代码，使用 `ContentCachingRequestWrapper` 获取请求体。
   ```java
   import org.aspectj.lang.JoinPoint;
   import org.aspectj.lang.annotation.Aspect;
   import org.aspectj.lang.annotation.Before;
   import org.aspectj.lang.annotation.Pointcut;
   import org.slf4j.Logger;
   import org.slf4j.LoggerFactory;
   import org.springframework.stereotype.Component;
   import org.springframework.web.context.request.RequestContextHolder;
   import org.springframework.web.context.request.ServletRequestAttributes;
   import org.springframework.web.util.ContentCachingRequestWrapper;

   import javax.servlet.http.HttpServletRequest;
   import java.nio.charset.StandardCharsets;
   import java.util.Map;

   @Aspect
   @Component
   public class ApiLogAspect {
       private static final Logger logger = LoggerFactory.getLogger(ApiLogAspect.class);

       // 切入所有Controller方法
       @Pointcut("execution(* com.example.api.controller..*.*(..))")
       public void controllerPointcut() {
       }

       @Before("controllerPointcut()")
       public void logRequest(JoinPoint joinPoint) {
           try {
               // 获取HttpServletRequest
               HttpServletRequest request =
                       ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();

               // 检查是否是ContentCachingRequestWrapper
               if (request instanceof ContentCachingRequestWrapper) {
                   ContentCachingRequestWrapper wrappedRequest = (ContentCachingRequestWrapper) request;

                   // 获取请求体
                   String requestBody = new String(wrappedRequest.getContentAsByteArray(), StandardCharsets.UTF_8);
                   logger.info("\n=== 请求信息 ===\nURL: {}\nMethod: {}\nParams: {}\nBody: {}",
                           request.getRequestURI(),
                           request.getMethod(),
                           request.getParameterMap(),
                           requestBody);

                   // 解析请求体中的domain字段（假设请求体是JSON格式）
                   if (ObjectUtil.isNotEmpty(requestBody)) {
                       Map<String, Object> bodyMap = JSONUtil.toBean(requestBody, Map.class);
                       String domain = Convert.toStr(bodyMap.get("domain"), "");
                       if (ObjectUtil.isNotEmpty(domain)) {
                           ApiDomainContext.setApiDomain(domain);
                       }
                   }
               }
           } catch (Exception e) {
               logger.error("\n=== 请求信息 ===\n{}", e.getMessage());
           }
       }
   }
   ```

方法二：**使用 `RequestContextHolder` 缓存请求体**

> 如果不想使用过滤器，可以在控制器方法中手动缓存请求体，然后在切面中获取。

1. **在控制器中缓存请求体**：
   ```java
   import org.springframework.web.bind.annotation.*;
   import javax.servlet.http.HttpServletRequest;

   @RestController
   public class MyController {
       @PostMapping("/example")
       public String example(@RequestBody String requestBody, HttpServletRequest request) {
           // 缓存请求体
           request.setAttribute("cachedRequestBody", requestBody);
           return "Success";
       }
   }
   ```

2. **在切面中获取缓存的请求体**：
   ```java
   @Before("controllerPointcut()")
   public void logRequest(JoinPoint joinPoint) {
       try {
           // 获取HttpServletRequest
           HttpServletRequest request =
                   ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();

           // 获取缓存的请求体
           String requestBody = (String) request.getAttribute("cachedRequestBody");
           if (ObjectUtil.isNotEmpty(requestBody)) {
               logger.info("\n=== 请求信息 ===\nURL: {}\nMethod: {}\nParams: {}\nBody: {}",
                       request.getRequestURI(),
                       request.getMethod(),
                       request.getParameterMap(),
                       requestBody);

               // 解析请求体中的domain字段
               Map<String, Object> bodyMap = JSONUtil.toBean(requestBody, Map.class);
               String domain = Convert.toStr(bodyMap.get("domain"), "");
               if (ObjectUtil.isNotEmpty(domain)) {
                   ApiDomainContext.setApiDomain(domain);
               }
           }
       } catch (Exception e) {
           logger.error("\n=== 请求信息 ===\n{}", e.getMessage());
       }
   }
   ```

## 接口文档

### springfox

```xml
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger2</artifactId>
    <version>2.2.2</version>
</dependency>
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger-ui</artifactId>
    <version>2.2.2</version>
</dependency>
```

```sql
1. Springfox是一个通过扫描代码提取代码中的信息，生成API文档的工具
2. API文档的格式不止Swagger的OpenAPI Specification，还有RAML，jsonapi，Springfox的目标同样包括支持这些格式。这就能解释那个swagger2的后缀了，这只是Springfox对Swagger的支持
3. 在Swagger的教程中，都会提到@Api、@ApiModel、@ApiOperation这些注解，这些注解其实不是Springfox的，而是Swagger的。springfox-swagger2这个包依赖了swagger-core这个包，而这些注解正是在这里面
4. swagger-core这个包是只支持JAX-RS2的，并不支持常用的Spring MVC。这就是springfox-swagger的作用了，它将上面那些用于JAX-RS2的注解适配到了Spring MVC上
5. 除了Spring MVC外，Springfox还支持Spring Data REST、JSR 303，这项标准的参考实现是Hibernate Validator
```

### swagger

```sql
-- 接口地址：
http://localhost:8080/swagger-ui.html
-- 注释说明
- @Api：用于修饰Controller类，生成Controller相关文档信息
- @ApiOperation：用于修饰Controller类中的方法，生成接口方法相关文档信息
- @ApiParam：用于修饰接口中的参数，生成接口参数相关文档信息
- @ApiModelProperty：用于修饰实体类的属性，当实体类是请求参数或返回结果时，直接生成相关文档信息
```

```xml
<!--Swagger-UI API文档生产工具-->
<dependency>
  <groupId>io.springfox</groupId>
  <artifactId>springfox-swagger2</artifactId>
  <version>2.7.0</version>
</dependency>
<dependency>
  <groupId>io.springfox</groupId>
  <artifactId>springfox-swagger-ui</artifactId>
  <version>2.7.0</version>
</dependency>
```

```java
package com.heminhua.system.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * Swagger2API文档的配置
 * @author hmh
 */
@Configuration
@EnableSwagger2
public class Swagger2Config {
    @Bean
    public Docket createRestApi(){
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .select()
                //为当前包下controller生成API文档
                .apis(RequestHandlerSelectors.basePackage("com.heminhua.system.api"))
                //为有@Api注解的Controller生成API文档
                //.apis(RequestHandlerSelectors.withClassAnnotation(Api.class))
                //为有@ApiOperation注解的方法生成API文档
                //.apis(RequestHandlerSelectors.withMethodAnnotation(ApiOperation.class))
                .paths(PathSelectors.any())
                .build();
    }
    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("SwaggerUI演示")
                .description("接口文档")
                .contact("hmhStart")
                .version("1.0")
                .build();
    }
}
```

### knife4j

```sql
-- 接口地址：
http://localhost:9992/doc.html#/home
```

```xml
<!--整合Knife4j-->
<dependency>
    <groupId>com.github.xiaoymin</groupId>
    <artifactId>knife4j-spring-boot-starter</artifactId>
    <version>2.0.2</version>
</dependency>
```

```java
/**
 * Swagger2API文档的配置
 */
@Configuration
@EnableSwagger2
@EnableKnife4j
public class Swagger2Config {
    
}
```

### swagger新版本

```xml
<!--springfox swagger官方Starter-->
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-boot-starter</artifactId>
    <version>3.0.0</version>
</dependency>
```

```sql
-- 地址
http://localhost:8088/swagger-ui/
```

```yml
springfox:
	documentation:
		enabled: true
```
## 反应式编程

反应式编程是关于非阻塞应用程序的，这些应用程序是异步的、事件驱动的，并且需要少量的线程来垂直伸缩(即在 JVM 中)，而不是水平伸缩(即通过集群)

### Reactor框架

```sql
-- Reactor是一个第四代响应式编程框架，用于构建非阻塞JVM应用程序，基于Reactive Streams Specification实现
-- Reactor是一种基于事件驱动的编程模型，它主要用于网络编程中的高并发场景，能够高效地处理大量的并发连接请求
-- Reactor两个核心组件：Selector和Handler
1. Selector是Java NIO中的一个核心组件，它可以监听多个通道（Channel）的事件，如连接、读写等事件。Selector会不断轮询已经注册的通道，一旦某个通道发生了事件，Selector就会通知相应的Handler来处理这个事件。
2. Handler是一个处理器，它负责具体的业务逻辑，当Selector通知Handler有事件发生时，Handler就会根据事件类型执行相应的操作，例如读取数据、处理数据、写入数据等等。
-- 主要流程
1. Selector监听通道上的事件，当有事件发生时，Selector就会通知相应的Handler来处理事件。
2. Handler处理事件，根据事件类型执行相应的操作。
3. Handler将处理结果返回给客户端。
-- 优缺点
Java类Reactor模型的优点是可以处理大量的并发连接请求，减少了线程的创建和销毁，提高了程序的性能和效率。但同时也需要注意防止Handler的处理逻辑过于复杂，导致阻塞或者耗时过长的情况出现。
```

#### Flux和Mono

```sql
-- Flux
1. 代表的是 0 to N 个响应式序列
2. Flux其实就是一个Publisher，用来产生异步序列
3. Flux提供了非常多的有用的方法，来处理这些序列，并且提供了completion和error的信号通知
4. 相应的会去调用Subscriber的onNext, onComplete, onError方法

-- Mono
1. 代表的是0或者1个响应式序列
2. Mono和Flux一样，也是一个Publisher，用来产生异步序列。
3. Mono因为只有0或者1个序列，所以只会触发Subscriber的onComplete和onError方法，没有onNext
4. Mono和Flux是可以互相转换的，Mono#concatWith(Publisher)返回一个Flux，而 Mono#then(Mono)返回一个Mono.
```

#### Flux

```sql
-- 创建
Flux<String> seq1 = Flux.just("foo", "bar", "foobar");
List<String> iterable = Arrays.asList("foo", "bar", "foobar");
Flux<String> seq2 = Flux.fromIterable(iterable);
Flux<Integer> numbersFromFiveToSeven = Flux.range(5, 3);

-- 打印
创建的Flux调用log()

-- subscribe
Disposable subscribe();
Disposable subscribe(Consumer<? super T> consumer); 
Disposable subscribe(Consumer<? super T> consumer,
          Consumer<? super Throwable> errorConsumer); 
Disposable subscribe(Consumer<? super T> consumer,
          Consumer<? super Throwable> errorConsumer,
          Runnable completeConsumer); 
Disposable subscribe(Consumer<? super T> consumer,
          Consumer<? super Throwable> errorConsumer,
          Runnable completeConsumer,
          Consumer<? super Subscription> subscriptionConsumer);
-- subscribe四个参数
Flux<Integer> ints3 = Flux.range(1, 4);
ints3.subscribe(
    System.out::println,
    error -> System.err.println("Error " + error),
    () -> System.out.println("Done"),
    sub -> sub.request(2));
参数1：表示打印出来
参数2：中间有错误，输出Error
参数3：全部完成，输出Done
参数4：subscriptionConsumer调用request(n)决定这次subscribe获取元素的最大数目
public interface Subscription {
    public void request(long n);
    public void cancel();
}
-- Disposable对象
public interface Disposable {
	void dispose();
	default boolean isDisposed() {
		return false;
	}
}
可通过调用dispose()取消这个subscribe（发出提醒，不能保证马上停止）
-- Disposables工具类
1. Disposables.swap()可创建一个Disposable，用来替换或者取消一个现有的Disposable
2. Disposables.composite(…)可以将多个Disposable合并起来，在后面统一做处理
```

## 事务

### 事务传播

- `PROPAGATION_REQUIRED`（默认）：如果有现有事务：加入到现有事务中；如果没有现有事务：启动一个新的事务。
- `PROPAGATION_REQUIRES_NEW`：无论当前是否存在事务，总是新建一个事务。如果当前存在事务，则把当前事务挂起。
- `PROPAGATION_NOT_SUPPORTED`：无论当前是否存在事务，都以非事务方式执行。如果当前存在事务，则把当前事务挂起。
- `PROPAGATION_NEVER`：无论当前是否存在事务，都以非事务方式执行。如果当前存在事务，则抛出异常。
- `PROPAGATION_SUPPORTS`：如果有现有事务：加入到现有事务中；如果没有现有事务：以非事务方式执行。
- `PROPAGATION_MANDATORY`：如果有现有事务：加入到现有事务中；如果没有现有事务：抛出异常。
- `PROPAGATION_NESTED`：如果有现有事务：创建一个嵌套事务；如果没有现有事务：启动一个新的事务。

在 Spring 中，如果 createProfile 方法没有显式地标明 propagation 属性，默认情况下它将继承父事务的传播行为。默认的传播行为是 `PROPAGATION_REQUIRED`，这意味着如果当前存在一个事务，则 createProfile 将加入到这个事务中；如果没有事务，则会启动一个新的事务。

- 如果 createUserAndProfile 方法已经在事务中：
  - createProfile 方法将加入到同一个事务中。
  - 这意味着 createProfile 方法中的操作将作为 createUserAndProfile 方法的一部分，它们将一起提交或一起回滚。
- 如果 createUserAndProfile 方法不在事务中：
  - createProfile 方法将启动一个新的事务。
  - 这意味着 createProfile 方法中的操作将独立于 createUserAndProfile 方法，它们将分别提交或回滚。

```java
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Transactional
    public void createUserAndProfile(User user, UserProfile userProfile) {
        // 创建用户
        userRepository.save(user);
        
        // 创建用户资料
        createProfile(userProfile);
    }
    @Transactional
    public void createProfile(UserProfile userProfile) {
        // 创建用户资料
        // 这里默认使用 PROPAGATION_REQUIRED，
        // 如果 createUserAndProfile 方法已经在事务中，则 join 同一个事务；
        // 否则，将启动一个新的事务
        userProfileRepository.save(userProfile);
    }
}
```

### 分布式事务

seata写隔离

1. 全局事务t1和t2
2. t1先操作
   开始事务拿到本地锁-->修改表中数据-->提交本地事务前，拿到全局锁-->本地提交释放本地锁
3. t2紧接操作
   开始事务拿到本地锁-->修改表中数据-->提交本地事务前，请求全局锁
4. 如果这个时候，t1进行本地回滚，则不会释放全局锁，而是尝试获取本地锁，
   而t2将一直请求全局锁，直到请求超时，回滚并放弃请求全局锁及释放本地锁，
   t2释放本地锁后，t1获取到本地锁，回滚成功

### 手动提交事务

```java
@Autowired
DataSourceTransactionManager transactionManager;
public void test() {
    //获取事务定义
    DefaultTransactionDefinition def = new DefaultTransactionDefinition();
    //设置事务隔离级别，开启新事务
    def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRES_NEW);
    //获取事务状态，开始事务
    TransactionStatus transactionStatus = transactionManager.getTransaction(def);
    //提交事务
    transactionManager.commit(transactionStatus);
    //回滚事务
    transactionManager.rollback(transactionStatus);
}
```

### JDBC事务

- JDBC 事务是用 Connection 对象控制的。JDBC Connection 接口（ java.sql.Connection ）提供了两种事务模式：自动提交和手工提交。
- java.sql.Connection 提供了以下控制事务的方法：
  `public void setAutoCommit(boolean)`
  `public boolean getAutoCommit()`
  `public void commit()`
  `public void rollback()`
- 使用 JDBC 事务界定时，您可以将多个 SQL 语句结合到一个事务中。
  JDBC 事务的一个缺点是事务的范围局限于一个数据库连接。一个 JDBC 事务不能跨越多个数据库。
- JDBC定义了SavePoint接口，提供在一个更细粒度的事务控制机制。当设置了一个保存点后，可以rollback到该保存点处的状态，而不是rollback整个事务。

## 语言工具

### Hutool

> 拼音工具-PinyinUtil。以下为Hutool支持的拼音库的pom坐标，你可以选择任意一个引入项目中，如果引入多个，Hutool会按照以上顺序选择第一个使用。

```xml
<dependency>
	<groupId>io.github.biezhi</groupId>
	<artifactId>TinyPinyin</artifactId>
	<version>2.0.3.RELEASE</version>
</dependency>
```
```xml
<dependency>
	<groupId>com.belerweb</groupId>
	<artifactId>pinyin4j</artifactId>
	<version>2.5.1</version>
</dependency>
```
```xml
<dependency>
	<groupId>com.github.stuxuhai</groupId>
	<artifactId>jpinyin</artifactId>
	<version>1.1.8</version>
</dependency>
```

### 简体繁体

```xml
<dependency>
    <groupId>com.github.houbb</groupId>
    <artifactId>opencc4j</artifactId>
    <version>1.8.1</version>
</dependency>
```

## MinIO

```sql
-- 下载地址
https://min.io/download#/windows
-- 操作文档
https://www.macrozheng.com/mall/reference/minio.html

-- 启动
./minio.exe server D:\hayes\minio
--访问
http://localhost:9000
```

```xml
<dependency>
    <groupId>io.minio</groupId>
    <artifactId>minio</artifactId>
    <version>8.4.6</version>
</dependency>
<dependency>
    <groupId>com.squareup.okhttp3</groupId>
    <artifactId>okhttp</artifactId>
    <version>4.9.0</version>
</dependency>
```

## PageHelper

使用文档：https://github.com/pagehelper/Mybatis-PageHelper/blob/master/wikis/zh/HowToUse.md

```xml
<!-- 物理分页插件 -->
<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper</artifactId>
    <version>5.3.2</version>
</dependency>
```

```java
PageHelper.startPage(pageNum, pageSize);
//之后进行查询操作将自动进行分页
List<PmsBrand> brandList = brandMapper.selectByExample(new PmsBrandExample());
//通过构造PageInfo对象获取分页信息，如当前页码，总页数，总条数
PageInfo<PmsBrand> pageInfo = new PageInfo<>(list);
```
## 跨域

跨域（Cross-Origin Resource Sharing, CORS）是指一个网页发起的请求，其资源位于不同的域、协议或端口。例如，`http://example.com` 的网页试图访问 `http://api.example.com`，这就是一次跨域请求。

浏览器基于安全原因，对跨域请求做了限制，防止恶意网站在未经授权的情况下获取用户数据。这种安全策略被称为“同源策略（Same-Origin Policy）”。同源策略规定，只有在相同的协议、域名和端口下，才能共享数据。

复杂的跨越请求需要先进行一次OPTIONS请求进行预检，我们的应用整合SpringSecurity，对OPTIONS请求需要放开登录认证。

### CORS工作原理

CORS 的核心在于服务器通过设置 HTTP 头来告诉浏览器允许跨域请求。常见的 CORS 相关 HTTP 头包括：

1. **Access-Control-Allow-Origin**：指定允许访问资源的外域 URL。
2. **Access-Control-Allow-Methods**：指定允许的请求方法，如 GET、POST 等。
3. **Access-Control-Allow-Headers**：指定允许的请求头。
4. **Access-Control-Allow-Credentials**：指示是否允许发送 Cookie。
5. **Access-Control-Expose-Headers**：列出哪些响应头可以暴露给前端应用。
6. **Access-Control-Max-Age**：指示在缓存预检请求的结果期间，浏览器可以缓存结果的时间（以秒为单位）。

### 预检请求

对于复杂请求（如包含自定义头的 POST 请求），浏览器会在正式请求之前发送一个 OPTIONS 请求（预检请求）以确定服务器是否允许该请求。服务器在预检请求中设置相应的 CORS 头，以告知浏览器请求是否被允许。

```java
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {
    @CrossOrigin(origins = "http://example.com", methods = {RequestMethod.GET, RequestMethod.POST})
    @RequestMapping("/my-endpoint")
    public String myEndpoint() {
        return "Hello, CORS!";
    }
}
```

### 解决跨域

#### CORS跨域（推荐）

方式一：

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // 允许跨域的路径
                .allowedOrigins("http://example.com") // 允许跨域的域名
                .allowedMethods("GET", "POST", "PUT", "DELETE") // 允许跨域的方法
                .allowedHeaders("*") // 允许所有请求头
                .allowCredentials(true); // 允许携带凭证
    }
}
```

方式二：

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
/**
 * 全局跨域配置
 */
@Configuration
public class GlobalCorsConfig {
    /**
     * 允许跨域调用的过滤器
     */
    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration config = new CorsConfiguration();
        //允许所有域名进行跨域调用
        config.addAllowedOrigin("*");
        //允许跨越发送cookie
        config.setAllowCredentials(true);
        //放行全部原始头信息
        config.addAllowedHeader("*");
        //允许所有请求方法跨域调用
        config.addAllowedMethod("*");
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
```

```sql
-- 设置SpringSecurity允许OPTIONS请求访问
-- 在SecurityConfig类的configure(HttpSecurity httpSecurity)方法中添加如下代码
.antMatchers(HttpMethod.OPTIONS)//跨域请求会先进行一次options请求
.permitAll()
```
#### Gateway跨域

```java
//跨域问题, 核心是需要在请求头带上Access-control-Allow-Origin
protected boolean preHandle(ServletRequest request, ServletResponse response){
    HttpServletRequest httpServletRequest = (HttpServletRequest) request;
    HttpServletResponse httpServletResponse = (HttpServletResponse) response;
    if(allowOrigin){
        httpServletResponse.setHeader("Access-control-Allow-Origin", "*");
        httpServletResponse.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS,PUT,DELETE");
        httpServletResponse.setHeader("Access-Control-Allow-Headers", httpServletRequest.getHeader("Access-Control-Request-Headers"));
        //update-begin-author:scott date:20200907 for:issues/I1TAAP 前后端分离，shiro过滤器配置引起的跨域问题
        // 是否允许发送Cookie，默认Cookie不包括在CORS请求之中。设为true时，表示服务器允许Cookie包含在请求中。
        httpServletResponse.setHeader("Access-Control-Allow-Credentials", "true");
        //update-end-author:scott date:20200907 for:issues/I1TAAP 前后端分离，shiro过滤器配置引起的跨域问题
    }
    // 跨域时会首先发送一个option请求，这里我们给option请求直接返回正常状态
    if (httpServletRequest.getMethod().equals(RequestMethod.OPTIONS.name())) {
        httpServletResponse.setStatus(HttpStatus.OK.value());
        return false;
    }
    //update-begin-author:taoyan date:20200708 for:多租户用到
    String tenant_id = httpServletRequest.getHeader(CommonConstant.TENANT_ID);
    TenantContext.setTenant(tenant_id);
    //update-end-author:taoyan date:20200708 for:多租户用到
    return super.preHandle(request, response);
}
```
#### 同源代理跨域

通过在同源服务器上设置代理，将跨域请求转发给目标服务器，从而绕过浏览器的同源策略。

在 Spring Boot 中，可以使用 `WebClient` 或 `RestTemplate` 作为代理客户端。

```java
@RestController
@RequestMapping("/api")
public class ProxyController {
    @GetMapping("/data")
    public ResponseEntity<String> getData() {
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject("http://example.com/api/data", String.class);
        return ResponseEntity.ok(result);
    }
}
```



## Dubbo+zookeeper

## Gaea实现读写分离

## Charles（抓包工具）

```sql
-- 网络抓包

-- 地址
www.charlesproxy.com/

-- 注册码
https://www.zzzmode.com/mytools/charles/
```

## 任务调度

### Quartz

Quartz是一款功能强大的开源任务调度框架，几乎可以集成到任何Java应用程序中（小到单机应用，大到分布式应用）。

Quartz可用于创建简单或复杂的任务调度，用以执行数以万计的任务。任务被定义为标准化的Java组件，Java编写的任务都可以被执行。

组件角色

- Scheduler（调度器）
  Quartz中的任务调度器，通过Trigger和JobDetail可以用来调度、暂停和删除任务
- Trigger（触发器）
  Quartz中的触发器，可以通过CRON表达式来指定任务执行的时间，时间到了会自动触发任务执行
- JobDetail（任务详情）
  Quartz中需要执行的任务详情，包括了任务的唯一标识和具体要执行的任务，可以通过JobDataMap往任务中传递数据
- Job（任务）
  Quartz中具体的任务，包含了执行任务的具体方法



## HTTP

### 身份认证

HTTP身份认证的方式有很多：Basic、Bearer、Digest、HOBA、Mutual、Negotiate / NTLM、VAPID、SCRAM、AWS4-HMAC-SHA256、OAuth。

#### 基本(Basic)认证

1. 当请求的资源需要 BASIC 认证时，服务器会随状态码 401 Authorization Required，返回带WWW-Authenticate首部字段的响应。该字段内包含认证的方式（BASIC）及Request-URI安全域字符串（realm）。
2. 接收到状态码401的客户端为了通过BASIC 认证，需要将用户ID及密码发送给服务器。发送的字符串内容是由用户ID和密码构成，两者中间以冒号（:）连接后，再经过 Base64 编码处理（如guest:guest）。
3. 接收到包含首部字段 Authorization 请求的服务器，会对认证信息的正确性进行验证。如验证通过，则返回一条包含 Request-URI资源的响应。

缺陷：BASIC 认证虽然采用 Base64 编码方式，但这不是加密处理，由于明文解码后就是用户 ID 和密码，在 HTTP 等非加密通信的线路上进行 BASIC 认证的过程中，如果被人窃听，被盗的可能性极高。另外，除此之外想再进行一次 BASIC 认证时，一般的浏览器却无法实现认证注销操作，这也是问题之一。

#### 摘要(Digest)认证

为弥补 BASIC 认证存在的弱点，从 HTTP/1.1 起就有了 DIGEST 认证。 DIGEST 认证同样使用质询 / 响应的方式（challenge/response），但不会像 BASIC 认证那样直接发送明文密码。所谓质询响应方式是指，一开始一方会先发送认证要求给另一方，接着使用从另一方那接收到的质询码计算生成响应码。最后将响应码返回给对方进行认证的方式。

1. 请求需认证的资源时，服务器会随着状态码 401 Authorization Required，返回带 WWW-Authenticate 首部字段的响应。该字段内包含质问响应方式认证所需的临时质询码（随机数，nonce）。首部字段 WWW-Authenticate 内必须包含 realm 和 nonce 这两个字段的信息。客户端就是依靠向服务器回送这两个值进行认证的。nonce 是一种每次随返回的 401 响应生成的任意随机字符串。该字符串通常推荐由 Base64 编码的十六进制数的组成形式，但实际内容依赖服务器的具体实现。
2. 接收到 401 状态码的客户端，返回的响应中包含 DIGEST 认证必须的首部字段 Authorization 信息。首部字段 Authorization 内必须包含 username、realm、nonce、uri 和 response 的字段信息。其中，realm 和 nonce 就是之前从服务器接收到的响应中的字段。username是realm限定范围内可进行认证的用户名。uri（digest-uri）即 Request-URI 的值，但考虑到经代理转发后 Request-URI 的值可能被修改，因此事先会复制一份副本保存在 uri 内。response 也可叫做 Request-Digest，存放经过 MD5 运算后的密码字符串，形成响应码。
3. 接收到包含首部字段 Authorization 请求的服务器，会确认认证信息的正确性。认证通过后则返回包含 Request-URI 资源的响应。并且这时会在首部字段 Authentication-Info 写入一些认证成功的相关信息。

缺陷：DIGEST 认证提供了高于 BASIC 认证的安全等级，但是和 HTTPS 的客户端认证相比仍旧很弱。DIGEST 认证提供防止密码被窃听的保护机制，但并不存在防止用户伪装的保护机制。DIGEST 认证和 BASIC 认证一样，使用上不那么便捷灵活，且仍达不到多数 Web 网站对高度安全等级的追求标准。因此它的适用范围也有所受限。

#### 基于表单(Form-Based)的SSL客户端认证

从使用用户 ID 和密码的认证方式方面来讲，只要二者的内容正确，即可认证是本人的行为。但如果用户 ID 和密码被盗，就很有可能被第三者冒充。利用 SSL 客户端认证则可以避免该情况的发生。SSL 客户端认证是借由 HTTPS 的客户端证书完成认证的方式。凭借 SSL 客户端证书认证，服务器可确认访问是否来自已登录的客户端。

为达到 SSL 客户端认证的目的，需要事先将客户端证书分发给客户端，且客户端必须安装此证书。

1. 接收到需要认证资源的请求，服务器会发送 Certificate Request 报文，要求客户端提供客户端证书。
2. 用户选择将发送的客户端证书后，客户端会把客户端证书信息以 Client Certificate 报文方式发送给服务器。
3. 服务器验证客户端证书验证通过后方可领取证书内客户端的165公开密钥，然后开始 HTTPS 加密通信
   在多数情况下，SSL 客户端认证不会仅依靠证书完成认证，一般会和基于表单认证组合形成一种双因素认证（Two-factor authentication）来使用。所谓双因素认证就是指，认证过程中不仅需要密码这一个因素，还需要申请认证者提供其他持有信息，从而作为另一个因素，与其组合使用的认证方式。换言之，第一个认证因素的 SSL 客户端证书用来认证客户端计算机，另一个认证因素的密码则用来确定这是用户本人的行为。通过双因素认证后，就可以确认是用户本人正在使用匹配正确的计算机访问服务器。

### HTTP请求

```xml
<!-- http默认超时时间为20s -->
<dependency>
    <groupId>org.apache.httpcomponents</groupId>
    <artifactId>httpclient</artifactId>
    <version>4.5.5</version>
</dependency>
```

#### 常用HTTP请求

1. 创建HttpClient实例

   `HttpClient client = HttpClientBuilder.create().build();`

2. 创建请求方法的实例

   - POST请求

     `HttpPost post = new HttpPost(url);`

   - GET请求，URL中带请求参数

     `HttpGet get = new HttpGet(url);`

3. 添加请求参数

   - 普通形式

   ```java
   List<NameValuePair> list = new ArrayList<>();
   list.add(new BasicNameValuePair("username", "admin"));
   list.add(new BasicNameValuePair("password", "123456"));
   // GET请求方式
   // 由于GET请求的参数是拼装在URL后方，所以需要构建一个完整的URL，再创建HttpGet实例
   URIBuilder uriBuilder = new URIBuilder("http://www.baidu.com");
   uriBuilder.setParameters(list);
   HttpGet get = new HttpGet(uriBuilder.build());
   // POST请求方式
   post.setEntity(new UrlEncodedFormEntity(list, Charsets.UTF_8));
   ```

   - JSON形式

   ```java
   Map<String,String> map = new HashMap<>();
   map.put("username", "admin");
   map.put("password", "123456");
   Gson gson = new Gson();
   String json = gson.toJson(map, new TypeToken<Map<String, String>>() {}.getType());
   post.setEntity(new StringEntity(json, Charsets.UTF_8));
   post.addHeader("Content-Type", "application/json;charset=UTF-8");
   ```

4. 发送请求
   `HttpResponse response = client.execute(post);`

5. 获取结果
   `String result = EntityUtils.toString(response.getEntity());`

6. 释放连接
   `post.releaseConnection();`

#### 带证书HTTP请求

```java
public static String sendRedEnvelope(String url, String param) throws Exception {
    //PKCS12的密码
    String PKCS12 = "1340026302";
    //证书地址
    String fileRoute = "E:\\javacore1\\WXYE\\src\\apiclient_cert.p12";
    //指定读取证书格式为PKCS12
    KeyStore keyStore = KeyStore.getInstance("PKCS12");
    //读取本机存放的PKCS12证书文件
    FileInputStream instream = new FileInputStream(new File(fileRoute));
    try {
        //指定PKCS12的密码
        keyStore.load(instream, PKCS12.toCharArray());
    } finally {
        instream.close();
    }
    //指定TLS版本
    SSLContext sslcontext = SSLContexts.custom()
        .loadKeyMaterial(keyStore, PKCS12.toCharArray())
        .build();
    //设置httpclient的SSLSocketFactory
    SSLConnectionSocketFactory sslsf = new SSLConnectionSocketFactory(
        sslcontext,
        //这里无需改动
        new String[]{"TLSv1"},
        null,
        SSLConnectionSocketFactory.BROWSER_COMPATIBLE_HOSTNAME_VERIFIER);
    CloseableHttpClient httpclient = HttpClients.custom()
        .setSSLSocketFactory(sslsf)
        .build();
    StringBuffer stringBuffer = new StringBuffer();
    try {
        HttpPost httpPost = new HttpPost(url);
        InputStream is = new ByteArrayInputStream(param.getBytes("UTF-8"));
        //InputStreamEntity严格是对内容和长度相匹配的。用法和BasicHttpEntity类似
        InputStreamEntity inputStreamEntity = new InputStreamEntity(is, is.available());
        httpPost.setEntity(inputStreamEntity);
        CloseableHttpResponse response = httpclient.execute(httpPost);
        try {
            HttpEntity entity = response.getEntity();
            BufferedReader reader = new BufferedReader(new InputStreamReader(
                entity.getContent(), "UTF-8"));
            String inputLine;
            while ((inputLine = reader.readLine()) != null) {
                stringBuffer.append(inputLine);
                System.out.println(stringBuffer);
            }
        } finally {
            response.close();
        }
    } finally {
        httpclient.close();
    }
    return stringBuffer.toString();
}
```

## JAVA交互JS

### JAVA调用JS方法

```js
// myScript.js
function sayHello(name) {
    return "Hello, " + name + "!";
}
function addNumbers(a, b) {
    return a + b;
}
```

```java
import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import java.io.FileReader;

public class JsInvoker {
    public static void main(String[] args) throws Exception {
        // 创建脚本引擎管理器
        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("JavaScript");

        // 加载并执行 JS 文件
        String jsFilePath = "myScript.js"; // 替换为你的 JS 文件路径
        engine.eval(new FileReader(jsFilePath));

        // 将 ScriptEngine 强转为 Invocable 接口，以便调用函数
        if (engine instanceof Invocable invocableEngine) {
            // 调用 sayHello 函数
            Object result1 = invocableEngine.invokeFunction("sayHello", "Qwen");
            System.out.println(result1);  // 输出: Hello, Qwen!

            // 调用 addNumbers 函数
            Object result2 = invocableEngine.invokeFunction("addNumbers", 5, 7);
            System.out.println(result2);  // 输出: 12
        } else {
            System.out.println("脚本引擎不支持 Invocable 接口");
        }
    }
}
```

注意事项：
- invokeFunction() 可以调用全局函数。
- 如果你要调用的是某个对象上的方法，可以使用 invokeMethod()。
- Java 内置的 JavaScript 引擎是 Nashorn（JDK 8~14），但在 JDK 15+ 已被移除。
  - 如果使用的是 JDK 15 或更高版本，你需要：
    - 单独引入 Nashorn（如通过 Maven）
    - 或者使用 GraalVM 等替代方案。

如果你不想读取文件而是直接写 JS 字符串：
```js
String jsCode = "function sayHello(name) { return 'Hello, ' + name; }";
engine.eval(jsCode);

Object result = ((Invocable) engine).invokeFunction("sayHello", "World");
System.out.println(result);  // 输出: Hello, World
```

### JAVA执行JS代码

```java
public static Object jsRequestHandler(JavascriptExecutor driver, String headers, String body) {
    String script = readJsFile("scripts/apiRequest.js");
    return ((JavascriptExecutor) driver).executeAsyncScript(script, headers, body);
}
```

```js
var callback = arguments[arguments.length - 1];

(function(headersJson, payload) {
    function makeRequest(headersJson, payload) {
        const url = "https://api-h5.uvod.tv/video/info";
        const headers = new Headers(JSON.parse(headersJson));
        return fetch(url, {
            method: 'POST',
            headers,
            body: payload
        }).then(response => response.text());
    }

    makeRequest(arguments[0], arguments[1]).then(callback).catch(function(err) {
        callback("Error: " + err);
    });
})(arguments[0], arguments[1]);
```

如果要在 Java 中获取 fetch 请求的结果，请注意：
- fetch() 返回的是 Promise，而 executeScript() 在 Selenium 中并不等待 Promise 完成。
- 如果希望等待 fetch 完成并返回响应，你需要用 executeAsyncScript() 而不是 executeScript()。

总结：
- 如需同步操作或结果值返回，请记得使用 executeAsyncScript 并在 JS 中使用回调 arguments[arguments.length - 1]。否则 fetch 是异步的，Java 获取不到结果。

## MapStruct

MapStruct是一款基于Java注解的对象属性映射工具

### 插件

MapStruct Support

### 依赖

```xml
<!--MapStruct相关依赖-->
<dependency>
    <groupId>org.mapstruct</groupId>
    <artifactId>mapstruct</artifactId>
    <version>${mapstruct.version}</version>
</dependency>

<!--排查编译的 Lombok、Mapstruct -->
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-compiler-plugin</artifactId>
    <version>3.8.1</version>
    <configuration>
        <source>1.8</source>
        <target>1.8</target>
        <annotationProcessorPaths>
            <path>
                <groupId>org.mapstruct</groupId>
                <artifactId>mapstruct-processor</artifactId>
                <version>${org.mapstruct.version}</version>
            </path>
            <path>
                <groupId>org.projectlombok</groupId>
                <artifactId>lombok</artifactId>
                <version>${lombok.version}</version>
            </path>
            <!-- This is needed when using Lombok 1.18.16 and above -->
            <path>
                <groupId>org.projectlombok</groupId>
                <artifactId>lombok-mapstruct-binding</artifactId>
                <version>0.2.0</version>
            </path>
        </annotationProcessorPaths>
    </configuration>
</plugin>
```

### 使用

#### 基本映射

```java
@Mapper
public interface MemberMapper {
    MemberMapper INSTANCE = Mappers.getMapper(MemberMapper.class);

    @Mapping(source = "phone",target = "phoneNumber")
    @Mapping(source = "birthday",target = "birthday",dateFormat = "yyyy-MM-dd")
    MemberDto toDto(Member member);
}
```

#### 集合映射

```java
@Mapper
public interface MemberMapper {
    MemberMapper INSTANCE = Mappers.getMapper(MemberMapper.class);

    @Mapping(source = "phone",target = "phoneNumber")
    @Mapping(source = "birthday",target = "birthday",dateFormat = "yyyy-MM-dd")
    List<MemberDto> toDtoList(List<Member> list);
}
```

### 子对象映射

```java
@Mapper(uses = {MemberMapper.class,ProductMapper.class})
public interface OrderMapper {
    OrderMapper INSTANCE = Mappers.getMapper(OrderMapper.class);

    @Mapping(source = "member",target = "memberDto")
    @Mapping(source = "productList",target = "productDtoList")
    OrderDto toDto(Order order);
}
```

### 合并映射

```java
//把多个对象属性映射到一个对象中
@Mapper
public interface MemberMapper {
    MemberMapper INSTANCE = Mappers.getMapper(MemberMapper.class);

    @Mapping(source = "member.phone",target = "phoneNumber")
    @Mapping(source = "member.birthday",target = "birthday",dateFormat = "yyyy-MM-dd")
    @Mapping(source = "member.id",target = "id")
    @Mapping(source = "order.orderSn", target = "orderSn")
    @Mapping(source = "order.receiverAddress", target = "receiverAddress")
    MemberOrderDto toMemberOrderDto(Member member, Order order);
}
```

### 使用依赖注入

```java
//想要使用依赖注入，我们只要将@Mapper注解的componentModel参数设置为spring即可，这样在生成接口实现类时，MapperStruct会为其添加@Component注解
@Mapper(componentModel = "spring")
public interface MemberSpringMapper {
    @Mapping(source = "phone",target = "phoneNumber")
    @Mapping(source = "birthday",target = "birthday",dateFormat = "yyyy-MM-dd")
    MemberDto toDto(Member member);
}
```

### 使用常量、默认值和表达式

```java
@Mapper(imports = {UUID.class})
public interface ProductMapper {
    ProductMapper INSTANCE = Mappers.getMapper(ProductMapper.class);

    @Mapping(target = "id",constant = "-1L")
    @Mapping(source = "count",target = "count",defaultValue = "1")
    @Mapping(target = "productSn",expression = "java(UUID.randomUUID().toString())")
    ProductDto toDto(Product product);
}
```

### 在映射前后进行自定义处理

```java
//此时我们需要创建自定义处理方法，创建一个抽象类ProductRoundMapper，通过@BeforeMapping注解自定义映射前操作，通过@AfterMapping注解自定义映射后操作；
@Mapper(imports = {UUID.class},componentModel = "spring")
public abstract class ProductRoundMapper {
    /**
     * 对象映射
     * @param product product对象
     * @return 映射后的对象
     */
    @Mapping(target = "id",constant = "-1L")
    @Mapping(source = "count",target = "count",defaultValue = "1")
    @Mapping(target = "productSn",expression = "java(UUID.randomUUID().toString())")
    public abstract ProductDto toDto(Product product);
    /**
     * 前置操作
     * @param product 映射前的对象
     */
    @BeforeMapping
    public void beforeMapping(Product product){
        //映射前当price<0时设置为0
        if(product.getPrice().compareTo(BigDecimal.ZERO)<0){
            product.setPrice(BigDecimal.ZERO);
        }
    }
    /**
     * 后置操作
     * @param productDto 映射后的对象
     */
    @AfterMapping
    public void afterMapping(@MappingTarget ProductDto productDto){
        //映射后设置当前时间为createTime
        productDto.setCreateTime(new Date());
    }
}
```

### 处理映射异常

```java
//自定义异常类
public class ProductValidatorException extends Exception{
    public ProductValidatorException(String message) {
        super(message);
    }
}
//自定义校验类
public class ProductValidator {
    public BigDecimal validatePrice(BigDecimal price) throws ProductValidatorException {
        if(price.compareTo(BigDecimal.ZERO)<0){
            throw new ProductValidatorException("价格不能小于0！");
        }
        return price;
    }
}
@Mapper(uses = {ProductValidator.class},imports = {UUID.class},componentModel = "spring")
public interface ProductExceptionMapper {

    @Mapping(target = "id",constant = "-1L")
    @Mapping(source = "count",target = "count",defaultValue = "1")
    @Mapping(target = "productSn",expression = "java(UUID.randomUUID().toString())")
    ProductDto toDto(Product product) throws ProductValidatorException;
}
```
> [!Warning]
>
> Mapper-struct存在问题，跟lombok在配合的时候会出现问题，如果mapperStruct的依赖放在lombok的依赖上面就会出现在对象复制的时候，会将原有数据全变为null的情况，所以一定要将lombok的依赖放在mapperStruct上面？

## 本地缓存

### Guava Cache

```xml
<dependency>
	<groupId>com.google.guava</groupId>
	<artifactId>guava</artifactId>
	<version>28.1-jre</version>
</dependency>
```

- LoadingCache build(CacheLoader loader)：缓存加载器。
- CacheBuilder.maximumSize(long size)：配置缓存数量上限。
- expireAfterAccess(long duration, TimeUnit unit)：缓存项在给定时间内没有被读/写访问则回收。
- expireAfterWrite(long duration, TimeUnit unit)：缓存项在给定时间内没有被写访问(创建或覆盖)则回收。
- refreshAfterWrite(long duration, TimeUnit unit)：定时刷新。
- removalListener(RemovalListener  listener)：移除监听器，缓存项被移除时会触发。

```java
removalListener(new RemovalListener <Long, String>() {
	//移除监听器,缓存项被移除时会触发
    @Override
    public void onRemoval(RemovalNotification<Long, String> rn) {
    	//执行逻辑操作
    }
})
```

- recordStats()：开启Guava Cache的统计功能。

```java
LoadingCache<String, RateLimiter> ipRequestCaches = CacheBuilder.newBuilder()
    .maximumSize(1000)// 设置缓存个数
    .expireAfterWrite(1, TimeUnit.MINUTES)
    .build(new CacheLoader<String, Object>() {
        @Override
        public Object load(String s) throws Exception {
            return RateLimiter.create(5);// 新的IP初始化 (限流每秒5个令牌响应,)
     }
});
@Override
public Object getIPLimiter(String ipAddr) throws ExecutionException {
    return ipRequestCaches.get(ipAddr);
}
```

- get(String str)：获取缓存值。
- put(Long key, String value)：设置缓存值。
- remove(Long key)：移除缓存值。

## Java内存模型

内存模型限制的是共享变量，也就是存储在堆内存中的变量，在 Java 语言中，所有的实例变量、静态变量和数组元素都存储在堆内存之中。方法参数、异常处理参数这些局部变量存储在方法栈帧之中，因此不会在线程之间共享，不会受到内存模型影响，也不存在内存可见性问题。

```mdx-code-block
import javaMemoryModel from '/img/docs/java/java/JAVA-内存模型.png';

<img src={javaMemoryModel} alt="JAVA-内存模型" width="50%" />
```

线程 A 把在本地内存更新后的共享变量副本的值，刷新到主内存中。线程 B 在使用到该共享变量时，到主内存中去读取线程 A 更新后的共享变量的值，并更新线程 B 本地内存的值。

## WebClient

### WebClient和RestTemplate

区别

1. RestTemplate阻塞客户端，WebClient非阻塞客户端
2. RestTemplate为每个事件（HTTP 调用）使用调用者线程。WebClient将为每个事件创建类似“任务”的东西。在幕后，Reactive 框架将对这些“任务”进行排队，并仅在适当的响应可用时才执行它们。

使用

```java
public Flux<Tweet> getTweetsNonBlocking() {
    log.info("Starting NON-BLOCKING Controller!");
    Flux<Tweet> tweetFlux = WebClient.create()
      .get()
      .uri(getSlowServiceUri())
      .retrieve()
      .bodyToFlux(Tweet.class);

    tweetFlux.subscribe(tweet -> log.info(tweet.toString()));
    log.info("Exiting NON-BLOCKING Controller!");
    return tweetFlux;
}
```

## jmeter

1. 添加线程组
2. 添加HTTP请求
3. 添加察看结果树
4. HTTP信息头管理器 -- 设置发送application/json请求

## k8s(kubernetes)

## 多线程

### 手动创建线程池

```java
import com.google.common.util.concurrent.ThreadFactoryBuilder;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.TimeUnit;
//引入依赖包，创建线程池
private ThreadFactory namedThreadFactory = new ThreadFactoryBuilder().setNameFormat("thread-call-runner-%d").build();
private ExecutorService taskExe = new ThreadPoolExecutor(10,20,200L,TimeUnit.MILLISECONDS,new LinkedBlockingQueue<Runnable>(),namedThreadFactory);
//使用
taskExe.execute(new Runnable() {
    @Override
    public void run() {
        //业务处理
    }
});
```

### 等待线程执行完成

```java
//调用await()方法的线程会被挂起，它会等待直到count值为0才继续执行
public void await() throws InterruptedException { };   
//和await()类似，只不过等待一定的时间后count值还没变为0的话就会继续执行
public boolean await(long timeout, TimeUnit unit) throws InterruptedException { };  
//将count值减1
public void countDown() { }; 
```

```java
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
public class CountDownLatchTest {
	public static void main(String[] args) {
        final CountDownLatch latch = new CountDownLatch(2);
        System.out.println("主线程开始执行…… ……");
        //第一个子线程执行
        //ExecutorServiceJava提供的线程池方法
        ExecutorService es1 = Executors.newSingleThreadExecutor();
        es1.execute(new Runnable() {
            @Override
            public void run() {
                try {
                    Thread.sleep(3000);
                    System.out.println("子线程："+Thread.currentThread().getName()+"执行");
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                latch.countDown();
            }
        });
        es1.shutdown();
        //第二个子线程执行
        ExecutorService es2 = Executors.newSingleThreadExecutor();
        es2.execute(new Runnable() {
            @Override
            public void run() {
                try {
                    Thread.sleep(3000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println("子线程："+Thread.currentThread().getName()+"执行");
                latch.countDown();
            }
        });
        es2.shutdown();
        System.out.println("等待两个线程执行完毕…… ……");
        try {
            latch.await();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("两个子线程都执行完毕，继续执行主线程");
    }
}
```

## BPMN

### 事件（Events）

指的是在业务流程的运行过程中发生的事情

- 开始：表示一个流程的开始
- 中间：发生的开始和结束事件之间，影响处理的流程
- 结束：表示该过程结束

```mdx-code-block
import events from '/img/docs/java/java/JAVA-BPMN-事件.png';

<img src={events} alt="JAVA-BPMN-事件" width="50%" />
```

### 活动（Activities）

包括任务和子流程两类。子流程在图形的下方中间外加一个小加号（+）来区分。

```mdx-code-block
import activities from '/img/docs/java/java/JAVA-BPMN-活动.png';

<img src={activities} alt="JAVA-BPMN-活动" width="50%" />
```

### 网关（Gateways）

用于表示流程的分支与合并。

- 排他网关：只有一条路径会被选择

- 并行网关：所有路径会被同时选择。一般首尾各设置一个。

- 包容网关：可以同时执行多条线路，也可以在网关上设置条件

- 事件网关：专门为中间捕获事件设置的，允许设置多个输出流指向多个不同的中间捕获事件。

  当流程执行到事件网关后，流程处于等待状态，需要等待抛出事件才能将等待状态转换为活动状态。

```mdx-code-block
import gateways from '/img/docs/java/java/JAVA-BPMN-网关.png';

<img src={gateways} alt="JAVA-BPMN-网关" width="50%" />
```

