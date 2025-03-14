# MybatisPlus

## Mybatis

### `<include>`

```xml
<sql id="testSQL">
    ${tablename}.id,${tablename}.name
</sql>
<select id="selectSome" >
    select
    <include refid="testSQL"> 
        <property name="tablename" value="user"></property>
    </include> 
    from user
 </select>
```

### mybatis.typeAliasesPackage

`mybatis.typeAliasesPackage` 是 MyBatis 配置中的一个属性，主要用于简化全限定类名的书写，通过为指定包下的所有实体类创建别名。这使得在映射文件（如 XML 映射文件）或注解中引用这些实体类时更加简洁方便。

#### 作用

当你配置了 `mybatis.typeAliasesPackage` 属性后，MyBatis 会自动扫描该包及其子包下的所有类，并将其短类名（即不包含包名的类名）作为别名注册到 MyBatis 的类型别名机制中。这意味着你可以在不需要使用完整的类路径的情况下引用这些类，从而减少代码量并提高可读性。

例如，如果你有一个实体类 `com.example.model.User`，设置了 `typeAliasesPackage=com.example.model` 后，你就可以直接使用 `"User"` 来代替 `"com.example.model.User"`。

#### 使用场景

如果没有设置 `typeAliasesPackage`，在 MyBatis 映射文件中你需要这样引用实体类：

```xml
<resultMap id="userResultMap" type="com.example.model.User">
    <!-- 结果映射配置 -->
</resultMap>
```

但是，一旦设置了 `typeAliasesPackage="com.example.model"`，你可以简化为：

```xml
<resultMap id="userResultMap" type="User">
    <!-- 结果映射配置 -->
</resultMap>
```

#### 注意事项

1. **区分大小写**：默认情况下，MyBatis 对类型别名是区分大小写的。也就是说，如果实体类名为 `User`，则别名为 `"User"` 而不是 `"user"`。
   
2. **覆盖默认别名**：如果需要自定义某个类的别名，而不是使用默认的短类名，可以使用 `<typeAlias>` 标签单独定义。例如：

   ```xml
   <typeAliases>
       <typeAlias alias="UserEntity" type="com.example.model.User"/>
   </typeAliases>
   ```

3. **性能考虑**：虽然使用类型别名可以使代码更简洁，但在某些情况下，过度依赖别名可能会导致混淆或错误。因此，在大型项目中合理规划和管理别名是非常重要的。

## 快速测试


> mybatis-plus-boot-starter-test


添加测试依赖


```xml

<dependency>

    <groupId>com.baomidou</groupId>

    <artifactId>mybatis-plus-boot-starter-test</artifactId>

    <version>3.5.3.2</version>

</dependency>

```


编写测试用例


```java

import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;

import static org.assertj.core.api.Assertions.assertThat;


@MybatisPlusTest

class MybatisPlusSampleTest {

    @Autowired

    private SampleMapper sampleMapper;

    @Test

    void testInsert() {

        Sample sample = new Sample();

        sampleMapper.insert(sample);

        assertThat(sample.getId()).isNotNull();

    }

}

```


## 插件


### 插件功能说明


> 核心插件 MybatisPlusInterceptor

>

> > 属性 `private List<InnerInterceptor> interceptors = new ArrayList<>()`;


> 基于 InnerInterceptor的已有插件

>

> > - 自动分页: PaginationInnerInterceptor

> > - 多租户: TenantLineInnerInterceptor

> > - 动态表名: DynamicTableNameInnerInterceptor

> > - 乐观锁: OptimisticLockerInnerInterceptor

> > - sql 性能规范: IllegalSQLInnerInterceptor

> > - 防止全表更新与删除: BlockAttackInnerInterceptor

>

> > 插件顺序注意：对 sql 进行单次改造的优先放入,不对 sql 进行改造的最后放入

> >

> > - 多租户,动态表名

> > - 分页,乐观锁

> > - sql 性能规范,防止全表更新与删除


插件使用


```java

@Configuration

@MapperScan("scan.your.mapper.package")

public class MybatisPlusConfig {

    /**

     * 添加分页插件

     */

    @Bean

    public MybatisPlusInterceptor mybatisPlusInterceptor() {

        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();

        interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.H2));

        return interceptor;

    }

}

```


插件拦截忽略


> 注解@InterceptorIgnore

>

> > 该注解作用于 xxMapper.java 方法之上 各属性代表对应的插件 各属性不给值则默认为 false 设置为 true 忽略拦截


```

tenantLine	String	""	行级租户

dynamicTableName	String	""	动态表名

blockAttack	String	""	攻击 SQL 阻断解析器,防止全表更新与删除

illegalSql	String	""	垃圾 SQL 拦截

```


> 手动设置拦截器忽略执行策略

>

> > 该申明权限大于注解权限，相对注解更加灵活。注意，需要手动关闭调用方法! `3.5.3 +` 版本支持


```java

// 设置忽略租户插件

InterceptorIgnoreHelper.handle(IgnoreStrategy.builder().tenantLine(true).build());


// 执行逻辑 ..

        
// 关闭忽略策略

InterceptorIgnoreHelper.clearIgnoreStrategy();

```


本地缓存 SQL 解析


> 缓存 SQL 解析，对分页 SQL 优化、租户等插件有效


```java

// 静态注入缓存处理类

static {

    // 默认支持序列化 FstSerialCaffeineJsqlParseCache，JdkSerialCaffeineJsqlParseCache

    JsqlParserGlobal.setJsqlParseCache(new JdkSerialCaffeineJsqlParseCache(

      (cache) -> cache.maximumSize(1024)

      .expireAfterWrite(5, TimeUnit.SECONDS))

    );

}

```


### 分页插件


1. 配置插件


```java

@Configuration

@MapperScan("scan.your.mapper.package")

public class MybatisPlusConfig {


    /**

     * 添加分页插件

     */

    @Bean

    public MybatisPlusInterceptor mybatisPlusInterceptor() {

        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();

        interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.MYSQL));//如果配置多个插件,切记分页最后添加

        //interceptor.addInnerInterceptor(new PaginationInnerInterceptor()); 如果有多数据源可以不配具体类型 否则都建议配上具体的DbType

        return interceptor;

    }

}

```


2. 使用分页


> 自定义的 mapper#method 使用分页


```java

IPage<UserVo> selectPageVo(IPage<?> page, Integer state);

// or (class MyPage extends Ipage<UserVo>{ private Integer state; })

MyPage selectPageVo(MyPage page);

// or

List<UserVo> selectPageVo(IPage<UserVo> page, Integer state);

```


```xml

<select id="selectPageVo" resultType="xxx.xxx.xxx.UserVo">

    SELECT id,name FROM user WHERE state=#{state}

</select>

```


### 乐观锁插件


> 当要更新一条记录的时候，希望这条记录没有被别人更新

> 乐观锁实现方式：

>

> > - 取出记录时，获取当前 version

> > - 更新时，带上这个 version

> > - 执行更新时， set version = newVersion where version = oldVersion

> > - 如果 version 不对，就更新失败


1. 配置插件


```java

@Bean

public MybatisPlusInterceptor mybatisPlusInterceptor() {

    MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();

    interceptor.addInnerInterceptor(new OptimisticLockerInnerInterceptor());

    return interceptor;

}

```


2. 在实体类的字段上加上`@Version`注解


> 说明:

>

> - 支持的数据类型只有:int,Integer,long,Long,Date,Timestamp,LocalDateTime

> - 整数类型下 `newVersion = oldVersion + 1`

> - `newVersion` 会回写到 `entity` 中

> - 仅支持 `updateById(id)` 与 `update(entity, wrapper)` 方法

> - 在 `update(entity, wrapper)` 方法下, `wrapper` 不能复用!!!


```java

@Version

private Integer version;

```


### 多租户插件


> 属性

>

> > | tenantLineHandler | TenantLineHandler |      | 租户处理器（ TenantId 行级 ） |

> > | ----------------- | ----------------- | ---- | ----------------------------- |


> 说明

>

> > 多租户 != 权限过滤,不要乱用,租户之间是完全隔离的!!!

> > 启用多租户后所有执行的method的sql都会进行处理.

> > 自写的sql请按规范书写(sql涉及到多个表的每个表都要给别名,特别是 inner join 的要写标准的 inner join)


### 防全表更新与删除插件


> 针对 update 和 delete 语句 作用: 阻止恶意的全表更新删除


配置插件


```java

@Configuration

public class MybatisPlusConfig {

  @Bean

  public MybatisPlusInterceptor mybatisPlusInterceptor() {

    MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();

    interceptor.addInnerInterceptor(new BlockAttackInnerInterceptor());

    return interceptor;

  }

}

```


### 数据权限插件


> 插件原理和租户插件类似动态拦截执行 `SQl` 然后拼接权限部分 `SQL片段`