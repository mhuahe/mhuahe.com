# Maven

## Maven

Maven 是 Apache 软件基金会组织维护的一款专门为 Java 项目提供**构建**和**依赖**管理支持的工具。

使用Maven前，同样的jar包重复的出现在不同的项目工程中，你需要做不停的复制粘贴的重复工作（想到之前被lib目录支配的恐惧了吗）。

借助于maven使用统一的规范方式下载jar包，会将jar包保存在本地meven“仓库”中，不管在哪个项目只要使用引用即可就行。

### 目录

Maven自动化构建是通过约定目录结构，如自动编译时，Maven需要先找到 Java 源文件，然后才能编译，而编译之后也需要有位置放字节码文件。 开发中如果需要让第三方工具或框架知道我们自己创建的资源在哪，那么基本上就是两种方式：

1. 通过配置的形式明确告诉它
2. 基于第三方工具或框架的约定 Maven 对工程目录结构的要求

```mdx-code-block
import mavenDirectoryStructure from '/img/docs/java/maven/Maven-目录结构.png';

<img src={mavenDirectoryStructure} alt="Maven-目录结构" width="50%" />
```

### 构建

Java 项目开发过程中，构建指的是使用『**原材料生产产品**』的过程。

Thymeleaf 是一个现代服务器端 Java 模板引擎，用于渲染 HTML 页面。

```mdx-code-block
import mavenBuild from '/img/docs/java/maven/Maven-构建.png';

<img src={mavenBuild} alt="Maven-构建" width="50%" />
```

构建过程主要包含以下环节：

```mdx-code-block
import mavenBuildProcess from '/img/docs/java/maven/Maven-构建环节.png';

<img src={mavenBuildProcess} alt="Maven-构建环节" width="50%" />
```

### 依赖

Maven 中最关键的部分，我们使用 Maven 最主要的就是使用它的依赖管理功能。当 A jar 包用到了 B jar 包中的某些类时，A 就对 B 产生了依赖，那么我们就可以说 A 依赖 B。

依赖管理中要解决的具体问题：

- jar 包的下载：使用 Maven 之后，jar 包会从规范的远程仓库下载到本地
- jar 包之间的依赖：通过依赖的传递性自动完成
- jar 包之间的冲突：通过对依赖的配置进行调整，让某些 jar 包不会被导入

---

## Maven-环境配置

[Maven下载地址](https://maven.apache.org/download.cgi)

### 指定本地仓库

```xml
<!--/conf/settings.xml-->
<localRepository>D:\mavenRepository</localRepository>
```

### 配置镜像仓库

```xml
<!--/conf/settings.xml:中证仓库-->
<mirrors>
    <mirror>
      <id>maven-public</id>
      <mirrorOf>*</mirrorOf> 
      <url>http://172.16.79.33:8081/repository/maven-public/</url>
    </mirror>
    <mirror>
      <id>maven-release</id>
      <mirrorOf>*</mirrorOf> 
    <url>http://172.16.79.33:8081/repository/maven-release/</url>
    </mirror>
    <mirror>
      <id>maven-snapshots</id>
      <mirrorOf>*</mirrorOf> 
      <url>http://172.16.79.33:8081/repository/maven-snapshots/</url>
    </mirror>
</mirrors>
<!-- 私服禁用了匿名访问需要配置 -->
<server>
  <id>maven-public</id>
  <username>admin</username>
  <password>@123456</password>
</server>
```

```xml
<!--阿里云仓库-->
<mirrors>
    <mirror>
     <id>nexus-aliyun</id>
     <mirrorOf>central</mirrorOf>
     <name>Nexus aliyun</name>
     <url>http://maven.aliyun.com/nexus/content/groups/public</url>
    </mirror>
</mirrors>
```

### 仓库搜索顺序

在 `settings.xml` 文件中，你可以配置多个仓库。每个仓库由 `<repository>` 元素表示，并且包含 `id`、`name` 和 `url` 属性。

```xml
<!--在这个例子中，aliyunmaven 镜像用于中央仓库，而 my-private-mirror 镜像用于私有仓库。-->
<!--/conf/settings.xml-->
<mirrors>
    <mirror>
        <id>aliyunmaven</id>
        <name>阿里云公共仓库</name>
        <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
        <mirrorOf>central</mirrorOf>
    </mirror>
    <mirror>
        <id>my-private-mirror</id>
        <name>My Private Mirror</name>
        <url>http://private-maven-repo.example.com/repository/maven-public</url>
        <mirrorOf>my-private-repo</mirrorOf>
    </mirror>
</mirrors>

<repositories>
    <repository>
        <id>central</id>
        <url>https://repo.maven.apache.org/maven2</url>
    </repository>
    <repository>
        <id>my-private-repo</id>
        <url>http://private-maven-repo.example.com/repository/maven-public</url>
    </repository>
</repositories>
```

Maven 会按照 `<repositories>` 元素中列出的顺序搜索依赖项。这意味着 Maven 会先尝试从第一个仓库查找依赖，如果没有找到，则会继续在下一个仓库中查找，依此类推，直到所有仓库都被搜索过。

### 配置基础JDK版本

```xml
<!--/conf/settings.xml-->
<profile>
    <id>jdk-1.8</id>
    <activation>
        <activeByDefault>true</activeByDefault>
        <jdk>1.8</jdk>
    </activation>
    <properties>
        <maven.compiler.source>1.8</maven.compiler.source>
        <maven.compiler.target>1.8</maven.compiler.target>
       <maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion>
    </properties>
</profile>
```

### 配置环境变量

Maven 是一个用 Java 语言开发的程序，它必须基于 JDK 来运行，需要通过 JAVA_HOME 来找到 JDK 的安装位置：

- 配置JAVA_HOME和PATH

- 配置MAVEN_HOME和PATH

### mirrors和repositories 

- **`repositories` 定义源**：`repositories` 指定了 Maven 应该从哪里获取构件。如果没有配置 `mirrors`，Maven 将直接访问这些仓库。
- **`mirrors` 定义代理**：`mirrors` 定义了代理仓库，当 Maven 访问某个仓库时，会首先检查是否有相应的镜像配置。如果有，Maven 将通过镜像的 URL 访问仓库，而不是直接访问 `repositories` 中定义的 URL。
- **优化下载和访问速度**：通过配置镜像，你可以优化构件的下载速度，减少构件的下载时间，尤其是在网络连接不佳的情况下。

---

## Maven-使用

### 坐标

Maven使用三个『向量』坐标在『Maven 的仓库』中定位到唯一的『jar』包：

- **groupId**：公司或组织的 id，即公司或组织域名的倒序，通常也会加上项目名称
- **artifactId**：一个项目或者是项目中的一个模块的 id，即模块的名称，将来作为 Maven 工程的工程名
- **version**：版本号

```xml
<!--Maven本地仓库目录：\com\hmh\hmh-parent\1.0-SNAPSHOT\hmh-paren-1.0-SNAPSHOT.jar-->
<artifactId>hmh-parent</artifactId>
<groupId>com.hmh</groupId>
<version>1.0-SNAPSHOT</version>
```

### pom基础配置

Project Object Model，项目对象模型，模型化思想的具体体现。

POM 表示将工程抽象为一个模型，再用程序中的对象来描述这个模型。这样我们就可以用程序来管理项目了。

```xml
<!-- 当前Maven工程的坐标 -->
<groupId>com.example</groupId>
<artifactId>demo</artifactId>
<version>0.0.1-SNAPSHOT</version>
<name>demo</name>
<description>Demo project for Spring Boot</description>
<!-- 当前Maven工程的打包方式，可选值有下面三种： -->
<!-- jar：表示这个工程是一个Java工程  -->
<!-- war：表示这个工程是一个Web工程 -->
<!-- pom：表示这个工程是“管理其他工程”的工程 -->
<packaging>jar</packaging>
<properties>
    <!-- 工程构建过程中读取源码时使用的字符集 -->
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <!-- 自定义标签，维护版本数据 -->
    <junit.version>5.3.19</junit.version>
</properties>
<!-- 当前工程所依赖的jar包 -->
<dependencies>
    <!-- 使用dependency配置一个具体的依赖 -->
    <dependency>
        <!-- 在dependency标签内使用具体的坐标依赖我们需要的一个jar包 -->
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <version>${junit.version}</version>
        <!-- scope标签配置依赖的范围 -->
        <scope>test</scope>
    </dependency>
</dependencies>
```

### 依赖范围

引入依赖存在一个范围，在实际开发中，我们常用的就是 `compile`、`test`、`provided` 。

- **compile**：默认；表示编译范围，指 A 在编译时依赖 B。编译范围的依赖会用在编译，测试，运行，由于运行时需要，所以编译范围的依赖会被打包。
- **provided**：provied 依赖只有当 jdk 或者一个容器已提供该依赖之后才使用。provide 依赖在编译和测试时需要，在运行时不需要。例如：servlet api 被 Tomcat 容器提供了。
- **runtime**：runtime 依赖在运行和测试系统时需要，但在编译时不需要。例如：jdbc 的驱动包。由于运行时需要，所以 runtime 范围的依赖会被打包。
- **test**：test 范围依赖在编译和运行时都不需要，只在测试编译和测试运行时需要。例如：Junit。由于运行时不需要，所以 test 范围依赖不会被打包。
- **system**：system 范围依赖与 provide 类似，但是必须显示的提供一个对于本地系统中 jar 文件的路径。一般不推荐使用。

| 依赖范围 | 编译 | 测试 | 运行时 | 是否会被打入jar包 |
| :------- | :--- | :--- | :----- | :---------------- |
| compile  | √    | √    | √      | √                 |
| provided | √    | √    | ×      | ×                 |
| runtime  | ×    | √    | √      | √                 |
| test     | ×    | √    | ×      | ×                 |
| system   | √    | √    | ×      | √                 |

### 依赖传递

A 依赖 B，B 依赖 C， A 没有配置对 C 的依赖。在这前提下，C 是否能够传递到 A，取决于 B 依赖 C 时使用的依赖范围：

- B 依赖 C 时使用 compile 范围：可以传递
- B 依赖 C 时使用 test 或 provided 范围：不能传递，所以需要这样的 jar 包时，就必须在需要的地方明确配置依赖才可以。

### 依赖排除

 A 依赖 B，B 依赖 C 并且 C 可以传递到 A 时，A 不想要 C，需要在 A 里面把 C 排除掉。这种情况一般是为了避免 jar 包之间的冲突：

```xml
<dependency>
  <groupId>net.javatv.maven</groupId>
  <artifactId>auth</artifactId>
  <version>1.0.0</version>
  <scope>compile</scope>
  <exclusions>
    <exclusion>
      <!-- 指定要排除的依赖的坐标（不需要写version） -->
      <groupId>commons-logging</groupId>
      <artifactId>commons-logging</artifactId>
    </exclusion>
  </exclusions>
</dependency>
```

### 继承和聚合

继承是在 Maven 项目之间共享配置的机制。通过继承，子项目可以继承父项目的配置，从而避免重复配置和保持一致性。使用继承的特点：

- 继承通过 `parent` 元素指定父项目。
- 子项目可以覆盖或扩展父项目的配置。
- 继承的主要目的是共享依赖管理、插件配置和其他构建设置。

```xml
<!--子项目继承父项目-->
<parent>
    <artifactId>hmh-parent</artifactId>
    <groupId>com.hmh</groupId>
    <version>1.0-SNAPSHOT</version>
</parent>
```

聚合是在 Maven 中管理多模块项目的方式。聚合项目包含多个子模块，这些子模块被视为一个整体进行构建。使用聚合的特点：

- 聚合通过 `modules` 元素指定子模块。
- 聚合项目的 `pom.xml` 文件的 `packaging` 类型通常为 `pom`。
- 聚合项目可以一次性构建所有子模块。

```xml
<!--父模块聚合子模块-->
<modules>
    <module>module1</module>
    <module>module2</module>
</modules>
```

继承和聚合的区别总结

- **继承** 是在父子项目之间共享配置。子项目继承父项目的配置，但不一定是同一个构建的一部分。
- **聚合** 是将多个子模块作为一个整体进行构建。聚合项目可以包含多个子模块，并在构建时一同处理。

两者可以结合使用，例如，一个聚合项目（父项目）同时也是一个父 POM 项目，子模块既是聚合项目的一部分，也继承了父项目的配置。

```mdx-code-block
import mavenInheritanceAndAggregation from '/img/docs/java/maven/Maven-继承和聚合.png';

<img src={mavenInheritanceAndAggregation} alt="Maven-继承和聚合" width="50%" />
```

---

## Maven依赖传递

- 父 POM 继承 (`<parent>`)：当你在一个模块中使用 `<parent>` 标签时，该模块直接继承了父模块的 POM 配置，包括依赖管理、插件管理、属性等。
- 依赖 (`<dependency>`)：当你在一个模块中声明对另一个模块的依赖时，你只是引入了那个模块作为依赖项，并不会自动继承那个模块的父 POM。

### `<scope>`元素

1. `compile`（默认值）

- **描述**：这是默认的作用范围，意味着该依赖在项目的编译、测试、运行时都可用。
- **使用场景**：适用于大多数情况下需要直接使用的库，例如 Apache Commons 库。
- **打包**：会被打包进最终的构建输出（如 JAR 或 WAR 文件）中。

2. `provided`

- **描述**：表示该依赖由运行环境提供，比如 Tomcat 或者 Jetty 等容器提供的 Servlet API。这意味着，在编译和测试阶段需要该依赖，但在运行时不需要将其包含在最终的包中，因为运行环境已经提供了这些依赖。
- **使用场景**：典型的例子包括 Servlet API 或 JSP API，它们通常由应用服务器提供。
- **打包**：不会被打包到最终的构建输出中。

3. `runtime`

- **描述**：表示该依赖在运行时和测试时需要用到，但编译时并不需要。例如 JDBC 驱动程序，它不需要在编译时出现，但在运行时必须存在以便与数据库通信。
- **使用场景**：适用于那些仅在运行时才需要的库，如数据库驱动。
- **打包**：会被打包进最终的构建输出中。

4. `test`

- **描述**：表示该依赖只在测试编译和执行阶段有效。它不会被包含在生产环境中使用的包中。
- **使用场景**：适用于单元测试框架或工具，如 JUnit。
- **打包**：不会被打包到最终的构建输出中。

5. `system`

- **描述**：类似于 `provided`，但是你必须显式地指定该依赖的位置。这种方式不推荐使用，因为它打破了 Maven 的可移植性原则，使得构建过程依赖于本地文件系统上的特定路径。
- **使用场景**：几乎不应使用，除非有非常特殊的需求。
- **打包**：不会被打包到最终的构建输出中。

总结

- **`compile`**：最常用的范围，适用于大多数情况下的依赖项，它们在编译、测试和运行时都需要。
- **`provided`**：当依赖由运行环境提供时使用，如 Servlet API。它在编译和测试时需要，但不在最终的构建输出中。
- **`runtime`**：对于那些仅在运行时才需要的依赖项，如 JDBC 驱动程序。
- **`test`**：专门用于测试代码的依赖项，如单元测试框架。
- **`system`**：应避免使用，除非有特殊情况需要直接引用本地文件系统的依赖项。

---

## Maven-Build标签

build 标签有默认相关配置，我们可以通过配置 build 标签覆盖默认值或补充配置。通过打印有效 POM 查看：

```cmd
mvn help:effective-pom
```

build 标签的子标签大致包含三个主体部分：

- 定义约定的目录结构
- 备用插件管理
- 生命周期插件

### 定义约定的目录结构

```xml
<!-- 指定项目的主源码目录 -->
<sourceDirectory>D:\...\src\main\java</sourceDirectory>
<!-- 指定项目的脚本源码的目录 -->
<scriptSourceDirectory>D:\...\src\main\scripts</scriptSourceDirectory>
<!-- 指定项目的测试源码目录 -->
<testSourceDirectory>D:\...\src\test\java</testSourceDirectory>
<!-- 指定主源码输出目录的路径 -->
<outputDirectory>D:\...\target\classes</outputDirectory>
<!-- 指定测试输出目录的路径 -->
<testOutputDirectory>D:\...\target\test-classes</testOutputDirectory>
<!-- 配置资源文件，包括资源文件所在目录、包含和排除的文件模式。资源文件会被复制到输出目录中 -->
<resources>
    <resource>
      <filtering>true</filtering>
      <directory>D:\...\src\main\resources</directory>
    </resource>
    <resource>
      <directory>D:\...\src\main\java</directory>
      <includes>
        <include>**/*.xml</include>
        <include>**/*.json</include>
        <include>**/*.ftl</include>
      </includes>
    </resource>
    <resource>
      <directory>D:\...\src\main\resources</directory>
      <includes>
        <include>**/*.*</include>
      </includes>
    </resource>
</resources>
<!-- 配置测试资源文件，与 <resources> 类似，但用于测试资源 -->
<testResources>
    <testResource>
      <directory>D:\...\src\test\resources</directory>
    </testResource>
</testResources>
<!-- 指定生成的构建输出目录的路径 -->
<directory>D:\...\target</directory>
<!-- 指定生成的构建输出文件的最终名称。
如项目的版本是1.0.0，那么生成的JAR文件名就是hmh-system-1.0.0.jar -->
<finalName>hmh-system</finalName>
```

### 备用插件管理

通过 pluginManagement 标签管理起来的插件就像 dependencyManagement 一样，子工程使用时可以省略版本号，起到在父工程中统一管理版本的效果。

### 生命周期插件

plugins 标签存放的是默认生命周期中实际会用到的插件。结构如下：

```xml
<!-- maven-compiler-plugin插件在default-compile编译阶段，执行编译操作 -->
<plugins>
    <plugin>
        <!-- artifactId和version标签定义了插件的坐标，作为Maven自带插件这里省略了groupId -->
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.1</version>
        <!-- 执行部分 -->
        <executions>
            <execution>
                <!-- 指定唯一标识 -->
                <id>default-compile</id>
                <!-- 关联的生命周期阶段 -->
                <phase>compile</phase>
                <!-- 关联指定生命周期的目标 -->
                <goals>
                    <goal>compile</goal>
                </goals>
            </execution>
            <execution>
                <id>default-testCompile</id>
                <phase>test-compile</phase>
                <goals>
                    <goal>testCompile</goal>
                </goals>
            </execution>
        </executions>
    </plugin>
</plugins>
```

### 示例

#### 典型应用：指定 JDK 版本

```xml
<!-- build 标签：意思是告诉 Maven，你的构建行为，我要开始定制了！ -->
<build>
    <!-- plugins 标签：Maven 你给我听好了，你给我构建的时候要用到这些插件！ -->
    <plugins>
        <!-- plugin 标签：这是我要指定的一个具体的插件 -->
        <plugin>
            <!-- 插件的坐标。此处引用的 maven-compiler-plugin 插件不是第三方的，是一个 Maven 自带的插件。 -->
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.1</version>
            
            <!-- configuration 标签：配置 maven-compiler-plugin 插件 -->
            <configuration>
                <!-- 具体配置信息会因为插件不同、需求不同而有所差异 -->
                <source>1.8</source>
                <target>1.8</target>
                <encoding>UTF-8</encoding>
                <!-- 用于显式地定义注解处理器的依赖项和路径。这些处理器会在编译过程中被加载和执行 -->
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
    </plugins>
</build>
```

- settings.xml 中配置：仅在本地生效，如果脱离当前 settings.xml 能够覆盖的范围，则无法生效。
- 在当前 Maven 工程 pom.xml 中配置：无论在哪个环境执行编译等构建操作都有效。

AnnotationProcessorPaths标签作用

1. **指定注解处理器的依赖**：用于显式地定义注解处理器的依赖项和路径。这些处理器会在编译过程中被加载和执行。
2. **控制注解处理器的版本**：你可以通过这个标签指定具体版本的注解处理器依赖，从而确保编译过程使用正确的注解处理器版本。
3. **避免类路径污染**：通过指定注解处理器路径，可以避免将注解处理器的依赖加入到编译器的类路径中，从而减少不必要的类路径污染。

AnnotationProcessorPaths工作机制

1. **加载注解处理器**：在编译期间，Maven 编译插件会根据标签中的配置，加载并使用这些注解处理器。
2. **执行注解处理**：注解处理器会扫描源代码中的注解，根据注解的定义执行相应的处理逻辑，比如生成额外的源文件、验证注解使用等。
3. **生成输出**：注解处理器可以生成源代码或其他文件，这些生成的文件会被编译插件继续处理。

#### 典型应用：SpringBoot 定制化打包

很显然 spring-boot-maven-plugin 并不是 Maven 自带的插件，而是 SpringBoot 提供用来改变 Maven 默认的构建行为，具体来说是改变打包的行为。默认情况下 Maven 调用 maven-jar-plugin 插件的 jar 目标，生成普通的 jar 包。

普通 jar 包没法使用 java -jar xxx.jar 这样的命令来启动、运行，但是 SpringBoot 的设计理念就是每一个『**微服务**』导出为一个 jar 包，这个 jar 包可以使用 java -jar xxx.jar 这样的命令直接启动运行。

这样一来，打包的方式肯定要进行调整。所以 SpringBoot 提供了 spring-boot-maven-plugin 这个插件来定制打包行为。

```xml
<build>
  <plugins>
    <plugin>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-maven-plugin</artifactId>
      <version>2.5.5</version>
    </plugin>
  </plugins>
</build>
```

#### 典型应用：资源插件

```xml
<build>
    <!--把src/main/java目录中的.xml文件包含到输出结果中，输出到classes目录中-->
    <resources>
        <resource>
            <directory>src/main/java</directory> <!--所在的目录-->
            <includes> <!--包括目录下的.properties.xml文件都会扫描到-->
                <include>**/*.properties</include>
                <include>**/*.xml</include>
            </includes>
            <!--表示不用过滤器，因为.property已经起到过滤的作用了-->
            <filtering>false</filtering>
        </resource>
    </resources>
</build>
```

### 依赖配置补充

import

- 打包类型必须是 pom
- 必须放在 dependencyManagement 中

管理依赖最基本的办法是继承父工程，但是和 Java 类一样，Maven 也是单继承的。如果不同体系的依赖信息封装在不同 POM 中了，没办法继承多个父工程怎么办？这时就可以使用 import 依赖范围。典型案例，引入 SpringBoot、SpringCloud 依赖：

```xml
<dependencyManagement>
    <dependencies>
        <!-- SpringCloud 微服务 -->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-dependencies</artifactId>
            <version>${spring-cloud.version}</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
        
        <!-- SpringCloud Alibaba 微服务 -->
        <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-alibaba-dependencies</artifactId>
            <version>${spring-cloud-alibaba.version}</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```

## Maven-profile 配置

project标签下除了modelVersion和坐标标签之外，其它标签都可以配置到 profile中。

由于 profile 标签覆盖了 pom.xml 中的默认配置，所以 profiles 标签通常是 pom.xml 中的最后一个标签。

每个 profile 都必须有一个 id 标签，指定该 profile 的唯一标识。这个 id 标签的值会在命令行调用 profile 时被用到。这个命令格式是：

```xml
<id>demo</id>
```

### 激活 profile

一个 profile 一旦被激活，那么它定义的所有配置都会覆盖原来 POM 中对应层次的元素。可参考下面的标签结构：

```xml
<profile>
    <id>dev</id>
    <properties>
        <spring.profiles.active>dev</spring.profiles.active>
    </properties>
    <activation>
        <!-- 配置是否默认激活 -->
        <activeByDefault>true</activeByDefault>
    </activation>
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>com.csci.china</groupId>
                <artifactId>csci-ibmp-spring-boot-starter</artifactId>
                <version>${ibmp.version}</version>
            </dependency>
            <dependency>
                <groupId>com.csci.china</groupId>
                <artifactId>csci-activiti-spring-boot-starter</artifactId>
                <version>${csci.activiti.version}</version>
            </dependency>
        </dependencies>
    </dependencyManagement>
</profile>
```

多个激活条件：

- Maven **3.2.2 之前**：遇到第一个满足的条件即可激活——**或**的关系。
- Maven **3.2.2 开始**：各条件均需满足——**且**的关系。

### 多环境管理

利用 Maven 的 profile 来进行定义多个 profile，然后每个 profile 对应不同的激活条件和配置信息，从而达到不同环境使用不同配置信息的效果。

```xml
<build>
    <!-- profile对资源的操作 -->
    <resources>
        <resource>
            <directory>src/main/resources</directory>
            <!-- 先排除所有环境相关的配置文件 -->
            <excludes>
                <exclude>application*.yml</exclude>
            </excludes>
        </resource>
        <resource>
            <directory>src/main/resources</directory>
            <!-- 是否替换 @xx@ 表示的maven properties属性值 -->
            <!--通过开启 filtering，maven 会将文件中的 @xx@ 替换 profile 中定义的 xx 变量/属性-->
            <filtering>true</filtering>
            <includes>
                <include>application.yml</include>
                <include>application-${profileActive}.yml</include>
            </includes>
        </resource>
    </resources>
</build>
<!--多环境文件配置-->
<profiles>
    <!--开发环境-->
    <profile>
        <id>dev</id>
        <activation>
            <!--默认激活-->
            <activeByDefault>true</activeByDefault>
        </activation>
        <properties>
            <profileActive>dev</profileActive>
        </properties>
    </profile>
    <!--测试环境-->
    <profile>
        <id>test</id>
        <properties>
            <profileActive>test</profileActive>
        </properties>
    </profile>
    <!--正式环境-->
    <profile>
        <id>prod</id>
        <properties>
            <profileActive>prod</profileActive>
        </properties>
    </profile>
</profiles>
```

在 idea 中可以看到，因此，当你需要打包哪一个环境的就勾选即可：

```mdx-code-block
import mavenProfile from '/img/docs/java/maven/Maven-profile.png';

<img src={mavenProfile} alt="Maven-profile" width="50%" />
```

同时，SpringBoot 天然支持多环境配置，一般来说，`application.yml`存放公共的配置，`application-dev.yml`、`application-test.yml`、`application.prod.yml`分别存放三个环境的配置。

`application.yml` 中配置`spring.profiles.active=prod`（或者 dev、test）指定使用的配置文件，如下：

```mdx-code-block
import mavenProfileActive from '/img/docs/java/maven/Maven-profileActive.png';

<img src={mavenProfileActive} alt="Maven-profileActive" width="50%" />
```

注：`profileActive`，就是上面我们自定义的标签。

然后当我们勾选哪一个环境，打包的配置文件就是那一个环境：

```mdx-code-block
import mavenProfileProd from '/img/docs/java/maven/Maven-profile-prod.png';

<img src={mavenProfileProd} alt="Maven-profileProd" width="50%" />
```

同时我们再在 resource 标签下看到 includes 和 excludes 标签。它们的作用是：

- includes：指定执行 resource 阶段时要包含到目标位置的资源
- excludes：指定执行 resource 阶段时要排除的资源

---

## Maven-依赖冲突

『冲突』体现在：若4.3.6 和 4.4 这两个版本的 jar 包都被框架所依赖的 jar 包给传递进来了，但是假设 Maven 根据**『版本仲裁』**规则实际采纳的是 4.3.6，而我们需要使用的是4.4特有的方法：

- java.lang.**ClassNotFoundException**：编译过程中找不到类
- java.lang.**NoClassDefFoundError**：运行过程中找不到类
- java.lang.**LinkageError**：不同类加载器分别加载的多个类有相同的全限定名

版本仲裁

Maven 的版本仲裁机制只是在没有人为干预的情况下，自主决定 jar 包版本的一个办法：

- **最短路径优先**

```mdx-code-block
import mavenShortestPathFirst from '/img/docs/java/maven/Maven-最短路径优先.png';

<img src={mavenShortestPathFirst} alt="Maven-最短路径优先" width="50%" />
```

- **路径相同时先声明者优先**

```mdx-code-block
import mavenPathSameFirst from '/img/docs/java/maven/Maven-路径相同时先声明者优先.png';

<img src={mavenPathSameFirst} alt="Maven-路径相同时先声明者优先" width="50%" />
```

---

## Maven-私服Nexus

---

## Maven-IDEA配置

### DarchetypeCatalog

用于指定在创建新 Maven 项目时使用的原型（Archetype）目录的来源。原型是 Maven 项目模板，它们提供了一种快速创建项目结构的方式。

当你运行 `mvn archetype:generate` 命令创建一个新项目时，Maven 会查找可用的原型列表。`-DarchetypeCatalog` 参数用于指定这个列表的来源。

配置选项：

- **internal**：只使用本地安装的原型列表，不从远程仓库获取。这通常用于速度较快且不需要从远程获取最新原型的情况。
- **remote**：从远程仓库获取原型列表。这会下载并列出最新的原型，适用于需要最新模板的情况。
- **local**：使用本地 Maven 仓库中的原型列表。这与 `internal` 类似，但范围扩大到本地仓库中的所有原型。
- **none**：不使用任何预定义的原型目录，需要手动输入原型的详细信息。

实际应用场景：

- **开发与测试**：在开发或测试环境中，通常需要频繁创建新项目，使用 `internal` 可以避免每次都从远程仓库下载原型，提高效率。
- **离线工作**：在网络访问受限或没有网络连接的情况下，使用 `internal` 可以确保能够创建新项目。
- **特定版本控制**：当你需要确保使用特定版本的原型而不想被远程仓库中的更新干扰时，使用 `internal` 是一个好选择。

```mdx-code-block
import mavenDarchetypeCatalog from '/img/docs/java/maven/Maven-DarchetypeCatalog配置.png';

<img src={mavenDarchetypeCatalog} alt="Maven-DarchetypeCatalog配置" width="50%" />
```

## application读取

```xml
spring boot支持外部application.yml  读取优先级为：
  1、file: ./config/（当前目录下的config文件夹）
  2、file: ./（当前目录）
  3、classpath:/config/（classpath下的config目录）
  4、classpath:/（classpath根目录）
<!-- resources资源配置项 -->
<resources>
    <!-- 通用资源文件 -->
    <resource>
        <directory>src/main/resources</directory>
        <includes>
            <include>**/*.*</include>
        </includes>
    </resource>
    <!-- 放置通用配置yml文件， 开发时仅配置一套参数即可。   实际生产环境下应在每个项目下 与jar同级目录下新建application.yml覆写对应参数。  -->
    <resource>
        <directory>../conf/devCommons</directory>
        <includes>
            <include>**/*.yml</include>
        </includes>
    </resource>
</resources>
```

```mdx-code-block
import mavenSpringBootConfig from '/img/docs/java/maven/Maven-SpringBoot-配置文件加载优先级.png';

<img src={mavenSpringBootConfig} alt="Maven-SpringBoot-配置文件加载优先级" width="50%" />
```

## Maven-配置预览

```xml
<?xml version="1.0" encoding="utf-8"?>

<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0http://maven.apache.org/maven-v4_0_0.xsd">
    <!--
        父项目的坐标。如果项目中没有规定某个元素的值，
        那么父项目中的对应值即为项目的默认值。
        坐标包括group ID，artifact ID和 version。
	-->
    <parent>
        <!--被继承的父项目的构件标识符-->
        <artifactId/>
        <!--被继承的父项目的全球唯一标识符-->
        <groupId/>
        <!--被继承的父项目的版本-->
        <version/>
    </parent>
    <!--
        声明项目描述符遵循哪一个POM模型版本。模型本身的版本很少改变，虽然如此，
        但它仍然是必不可少的，这是为了当Maven引入了新的特性或者其他模型变更的时候，
        确保稳定性。
    -->
    <modelVersion>4.0.0</modelVersion>
    <!--
        项目的全球唯一标识符，通常使用全限定的包名区分该项目和其他项目。
        并且构建时生成的路径也是由此生成， 如com.mycompany.app生成的相对路径为：
        /com/mycompany/app 
    -->
    <groupId>cn.missbe.web</groupId>
    <!-- 
        构件的标识符，它和group ID一起唯一标识一个构件。换句话说，
        你不能有两个不同的项目拥有同样的artifact ID和groupID；在某个
        特定的group ID下，artifact ID也必须是唯一的。构件是项目产生的或使用的一个东西，
        Maven为项目产生的构件包括：JARs，源码，二进制发布和WARs等。
	-->
    <artifactId>search-resources</artifactId>
    <!--
        项目产生的构件类型，例如jar、war、ear、pom。插件可以创建
        他们自己的构件类型，所以前面列的不是全部构件类型
	-->
    <packaging>war</packaging>
    <!--项目当前版本，格式为:主版本.次版本.增量版本-限定版本号-->
    <version>1.0-SNAPSHOT</version>
    <!--项目的名称, Maven产生的文档用-->
    <name>search-resources</name>
    <!--项目主页的URL, Maven产生的文档用-->
    <url>http://www.missbe.cn</url>
    <!-- 
        项目的详细描述, Maven 产生的文档用。当这个元素能够用HTML格式描述时
        （例如，CDATA中的文本会被解析器忽略，就可以包含HTML标签），
        不鼓励使用纯文本描述。如果你需要修改产生的web站点的索引页面，
        你应该修改你自己的索引页文件，而不是调整这里的文档。
	-->
    <description>A maven project to study maven.</description>
    <!--描述了这个项目构建环境中的前提条件。-->
    <prerequisites>
        <!--构建该项目或使用该插件所需要的Maven的最低版本-->
        <maven/>
    </prerequisites>
    <!--构建项目需要的信息-->
    <build>
        <!--
            该元素设置了项目源码目录，当构建项目的时候，
            构建系统会编译目录里的源码。该路径是相对于pom.xml的相对路径。
		-->
        <sourceDirectory/>
        <!--
            该元素设置了项目脚本源码目录，该目录和源码目录不同：
            绝大多数情况下，该目录下的内容 会被拷贝到输出目录(因为脚本是被解释的，而不是被编译的)。
		-->
        <scriptSourceDirectory/>
        <!--
            该元素设置了项目单元测试使用的源码目录，当测试项目的时候，
            构建系统会编译目录里的源码。该路径是相对于pom.xml的相对路径。
		-->
        <testSourceDirectory/>
        <!--被编译过的应用程序class文件存放的目录。-->
        <outputDirectory/>
        <!--被编译过的测试class文件存放的目录。-->
        <testOutputDirectory/>
        <!--使用来自该项目的一系列构建扩展-->
        <extensions>
            <!--描述使用到的构建扩展。-->
            <extension>
                <!--构建扩展的groupId-->
                <groupId/>
                <!--构建扩展的artifactId-->
                <artifactId/>
                <!--构建扩展的版本-->
                <version/>
            </extension>
        </extensions>
        <!--
            这个元素描述了项目相关的所有资源路径列表，例如和项目相关的属性文件，
            这些资源被包含在最终的打包文件里。
        -->
        <resources>
            <!--这个元素描述了项目相关或测试相关的所有资源路径-->
            <resource>
                <!-- 
                    描述了资源的目标路径。该路径相对target/classes目录
					（例如${project.build.outputDirectory}）。
                    举个例 子，如果你想资源在特定的包里(org.apache.maven.messages)，
                    你就必须该元素设置为org/apache/maven /messages。
                    然而，如果你只是想把资源放到源码目录结构里，就不需要该配置。
                -->
                <targetPath/>
                <!--
                    是否使用参数值代替参数名。参数值取自properties元素或者文件里配置的属性，
                    文件在filters元素里列出。
				-->
                <filtering/>
                <!--描述存放资源的目录，该路径相对POM路径-->
                <directory/>
                <!--包含的模式列表，例如**/*.xml.-->
                <includes/>
                <!--排除的模式列表，例如**/*.xml-->
                <excludes/>
            </resource>
        </resources>
        <!--这个元素描述了单元测试相关的所有资源路径，例如和单元测试相关的属性文件。-->
        <testResources>
            <!--这个元素描述了测试相关的所有资源路径，参见build/resources/resource元素的说明-->
            <testResource>
                <targetPath/>
                <filtering/>
                <directory/>
                <includes/>
                <excludes/>
            </testResource>
        </testResources>
        <!--构建产生的所有文件存放的目录-->
        <directory/>
        <!--产生的构件的文件名，默认值是${artifactId}-${version}。-->
        <finalName/>
        <!--当filtering开关打开时，使用到的过滤器属性文件列表-->
        <filters/>
        <!--
            子项目可以引用的默认插件信息。该插件配置项直到被引用时才会被解析或绑定到生命周期。
            给定插件的任何本地配置都会覆盖这里的配置
        -->
        <pluginManagement>
            <!--使用的插件列表 。-->
            <plugins>
                <!--plugin元素包含描述插件所需要的信息。-->
                <plugin>
                    <!--插件在仓库里的group ID-->
                    <groupId/>
                    <!--插件在仓库里的artifact ID-->
                    <artifactId/>
                    <!--被使用的插件的版本（或版本范围）-->
                    <version/>
                    <!--
                        是否从该插件下载Maven扩展（例如打包和类型处理器），由于性能原因，
                        只有在真需要下载时，该元素才被设置成enabled。
					-->
                    <extensions/>
                    <!--在构建生命周期中执行一组目标的配置。每个目标可能有不同的配置。-->
                    <executions>
                        <!--execution元素包含了插件执行需要的信息-->
                        <execution>
                            <!--
                                执行目标的标识符，用于标识构建过程中的目标，
                                或者匹配继承过程中需要合并的执行目标
                            -->
                            <id/>
                            <!--
                                绑定了目标的构建生命周期阶段，
                                如果省略，目标会被绑定到源数据里配置的默认阶段
                            -->
                            <phase/>
                            <!--配置的执行目标-->
                            <goals/>
                            <!--配置是否被传播到子POM-->
                            <inherited/>
                            <!--作为DOM对象的配置-->
                            <configuration/>
                        </execution>
                    </executions>
                    <!--项目引入插件所需要的额外依赖-->
                    <dependencies>
                        <!--参见dependencies/dependency元素-->
                        <dependency>......</dependency>
                    </dependencies>
                    <!--任何配置是否被传播到子项目-->
                    <inherited/>
                    <!--作为DOM对象的配置-->
                    <configuration/>
                </plugin>
            </plugins>
        </pluginManagement>
        <!--使用的插件列表-->
        <plugins>
            <!--参见build/pluginManagement/plugins/plugin元素-->
            <plugin>
                <groupId/>
                <artifactId/>
                <version/>
                <extensions/>
                <executions>
                    <execution>
                        <id/>
                        <phase/>
                        <goals/>
                        <inherited/>
                        <configuration/>
                    </execution>
                </executions>
                <dependencies>
                    <!--参见dependencies/dependency元素-->
                    <dependency>......</dependency>
                </dependencies>
                <goals/>
                <inherited/>
                <configuration/>
            </plugin>
        </plugins>
    </build>
    <!--
        模块（有时称作子项目） 被构建成项目的一部分。
        列出的每个模块元素是指向该模块的目录的相对路径
    -->
    <modules/>
    <!--发现依赖和扩展的远程仓库列表。-->
    <repositories>
        <!--包含需要连接到远程仓库的信息-->
        <repository>
            <!--如何处理远程仓库里发布版本的下载-->
            <releases>
                <!--true或者false表示该仓库是否为下载某种类型构件（发布版，快照版）开启。-->
                <enabled/>
                <!--
                    该元素指定更新发生的频率。Maven会比较本地POM和远程POM的时间戳。
                    这里的选项是：always（一直），daily（默认，每日），
                    interval：X（这里X是以分钟为单位的时间间隔），或者never（从不）。
                -->
                <updatePolicy/>
                <!--
                    当Maven验证构件校验文件失败时该怎么做：
                    ignore（忽略），fail（失败），或者warn（警告）。
                -->
                <checksumPolicy/>
            </releases>
            <!-- 
                如何处理远程仓库里快照版本的下载。有了releases和snapshots这两组配置，
                POM就可以在每个单独的仓库中，为每种类型的构件采取不同的 策略。
                例如，可能有人会决定只为开发目的开启对快照版本下载的支持。
                参见repositories/repository/releases元素 
            -->
            <snapshots>
                <enabled/>
                <updatePolicy/>
                <checksumPolicy/>
            </snapshots>
            <!--远程仓库唯一标识符。可以用来匹配在settings.xml文件里配置的远程仓库-->
            <id>banseon-repository-proxy</id>
            <!--远程仓库名称-->
            <name>banseon-repository-proxy</name>
            <!--远程仓库URL，按protocol://hostname/path形式-->
            <url>http://192.168.1.169:9999/repository/</url>
            <!-- 
                用于定位和排序构件的仓库布局类型-可以是default（默认）或者legacy（遗留）。
                Maven 2为其仓库提供了一个默认的布局；然 而，Maven 1.x有一种不同的布局。
                我们可以使用该元素指定布局是default（默认）还是legacy（遗留）。
            -->
            <layout>default</layout>
        </repository>
    </repositories>
    <!--发现插件的远程仓库列表，这些插件用于构建和报表-->
    <pluginRepositories>
        <!--包含需要连接到远程插件仓库的信息.参见repositories/repository元素-->
        <pluginRepository>......</pluginRepository>
    </pluginRepositories>
    <!--
        该元素描述了项目相关的所有依赖。 这些依赖组成了项目构建过程中的一个个环节。
        它们自动从项目定义的仓库中下载。
        要获取更多信息，请看项目依赖机制。
    -->
    <dependencies>
        <dependency>
            <!--依赖的group ID-->
            <groupId>org.apache.maven</groupId>
            <!--依赖的artifact ID-->
            <artifactId>maven-artifact</artifactId>
            <!--依赖的版本号。 在Maven 2里, 也可以配置成版本号的范围。-->
            <version>3.8.1</version>
            <!-- 
                依赖类型，默认类型是jar。它通常表示依赖的文件的扩展名，但也有例外。
                一个类型可以被映射成另外一个扩展名或分类器。类型经常和使用的打包方式对应，尽管这也有例外。
                一些类型的例子：jar，war，ejb-client和test-jar。
                如果设置extensions为 true，就可以在 plugin里定义新的类型。所以前面的类型的例子不完整。
            -->
            <type>jar</type>
            <!-- 
                依赖的分类器。分类器可以区分属于同一个POM，但不同构建方式的构件。
                分类器名被附加到文件名的版本号后面。例如，如果你想要构建两个单独的构件成 JAR，
                一个使用Java 1.4编译器，一个使用Java 6编译器，就能使用分类器来生成两个单独的JAR构件。
            -->
            <classifier/>
            <!--
                依赖范围。在项目发布过程中，帮助决定哪些构件被包括进来。欲知详情请参考依赖机制。
                - compile ：默认范围，用于编译
                - provided：类似于编译，但支持你期待jdk或者容器提供，类似于classpath
                - runtime: 在执行时需要使用
                - test:    用于test任务时使用
                - system: 需要外在提供相应的元素。通过systemPath来取得
                - systemPath: 仅用于范围为system。提供相应的路径
                - optional:   当项目自身被依赖时，标注依赖是否传递。用于连续依赖时使用
            -->
            <scope>test</scope>
            <!--
                仅供system范围使用。注意，不鼓励使用这个元素，
                并且在新的版本中该元素可能被覆盖掉。该元素为依赖规定了文件系统上的路径。
                需要绝对路径而不是相对路径。推荐使用属性匹配绝对路径，例如${java.home}。
            -->
            <systemPath/>
            <!--
                当计算传递依赖时， 从依赖构件列表里，列出被排除的依赖构件集。
                即告诉maven你只依赖指定的项目，不依赖项目的依赖。
                此元素主要用于解决版本冲突问题
            -->
            <exclusions>
                <exclusion>
                    <artifactId>spring-core</artifactId>
                    <groupId>org.springframework</groupId>
                </exclusion>
            </exclusions>
            <!--
                可选依赖，如果你在项目B中把C依赖声明为可选，
                你就需要在依赖于B的项目（例如项目A）中显式的引用对C的依赖。
                可选依赖阻断依赖的传递性。
            -->
            <optional>true</optional>
        </dependency>
    </dependencies>
    <!-- 
        继承自该项目的所有子项目的默认依赖信息。这部分的依赖信息不会被立即解析,
        而是当子项目声明一个依赖（必须描述group ID和 artifact ID信息），
        如果group ID和artifact ID以外的一些信息没有描述，
        则通过group ID和artifact ID 匹配到这里的依赖，并使用这里的依赖信息。
    -->
    <dependencyManagement>
        <dependencies>
            <!--参见dependencies/dependency元素-->
            <dependency>......</dependency>
        </dependencies>
    </dependencyManagement>
    <!--
        项目分发信息，在执行mvn deploy后表示要发布的位置。
        有了这些信息就可以把网站部署到远程服务器或者把构件部署到远程仓库。
    -->
    <distributionManagement>
        <!--部署项目产生的构件到远程仓库需要的信息-->
        <repository>
            <!--
                是分配给快照一个唯一的版本号（由时间戳和构建流水号）？
                还是每次都使用相同的版本号？参见repositories/repository元素
            -->
            <uniqueVersion/>
            <id>banseon-maven2</id>
            <name>banseon maven2</name>
            <url>file://${basedir}/target/deploy</url>
            <layout/>
        </repository>
        <!--
            构件的快照部署到哪里？如果没有配置该元素，默认部署到repository元素配置的仓库，
            参见distributionManagement/repository元素
        -->
        <snapshotRepository>
            <uniqueVersion/>
            <id>banseon-maven2</id>
            <name>Banseon-maven2 Snapshot Repository</name>
            <url>scp://svn.baidu.com/banseon:/usr/local/maven-snapshot</url>
            <layout/>
        </snapshotRepository>
        <!--部署项目的网站需要的信息-->
        <site>
            <!--部署位置的唯一标识符，用来匹配站点和settings.xml文件里的配置-->
            <id>banseon-site</id>
            <!--部署位置的名称-->
            <name>business api website</name>
            <!--部署位置的URL，按protocol://hostname/path形式-->
            <url>scp://svn.baidu.com/banseon:/var/www/localhost/banseon-web</url>
        </site>
        <!--
            项目下载页面的URL。如果没有该元素，用户应该参考主页。
            使用该元素的原因是：帮助定位那些不在仓库里的构件（由于license限制）。
        -->
        <downloadUrl/>
        <!-- 
            给出该构件在远程仓库的状态。
			不得在本地项目中设置该元素，因为这是工具自动更新的。
            有效的值有：
            none（默认），
            converted（仓库管理员从 Maven 1 POM转换过来），
            partner（直接从伙伴Maven 2仓库同步过来），
            deployed（从Maven 2实例部 署），
            verified（被核实时正确的和最终的）。
        -->
        <status/>
    </distributionManagement>
    <!--
        以值替代名称，Properties可以在整个POM中使用，
        也可以作为触发条件（见settings.xml配置文件里activation元素的说明）。
        格式是<name>value</name>。
    -->
    <properties/>
</project>
```

## Maven-Gradle

Gradle官方文档：https://docs.gradle.org

项目创建完成后，一个非常简单的Gradle项目目录结构如下，需要注意的是`build.gradle`和`settings.gradle`这两个文件。

```mdx-code-block
import gradleStart from '/img/docs/java/maven/Maven-Gradle-start.png';

<img src={gradleStart} alt="Maven-Gradle-start" width="50%" />
```

Maven项目转Gradle非常简单，只需要把`pom.xml`中的依赖转为`build.gradle`中的依赖即可：

```java
plugins {
    /*
        SpringBoot官方提供的Gradle插件，方便我们使用SpringBoot，
        通过修改version可以控制使用的SpringBoot版本。
    */
    id 'org.springframework.boot' version '2.3.0.RELEASE'
    id 'io.spring.dependency-management' version '1.0.11.RELEASE'
    //Java插件将Java编译、测试等常用功能添加到项目中，它是许多其他JVM语言Gradle插件的基础。
    id 'java'
}

group = 'com.macro.mall.tiny'
version = '1.0.0-SNAPSHOT'
sourceCompatibility = '1.8'

repositories {
    maven { url 'https://maven.aliyun.com/repository/public' }
    mavenCentral()
}

dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web'
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
    implementation 'org.springframework.boot:spring-boot-starter-actuator'
    implementation 'org.springframework.boot:spring-boot-starter-aop'
    implementation 'org.springframework.boot:spring-boot-starter-validation'
    implementation 'org.springframework.boot:spring-boot-starter-data-redis'
    implementation 'org.springframework.boot:spring-boot-starter-security'
    implementation 'org.springframework.boot:spring-boot-configuration-processor'
    implementation 'org.projectlombok:lombok'
    annotationProcessor 'org.projectlombok:lombok'
    implementation 'com.alibaba:druid-spring-boot-starter'
    implementation 'mysql:mysql-connector-java'
    implementation 'io.springfox:springfox-swagger2'
    implementation 'io.springfox:springfox-swagger-ui'
    implementation 'io.swagger:swagger-models'
    implementation 'io.swagger:swagger-annotations'
    implementation 'cn.hutool:hutool-all'
    implementation 'io.jsonwebtoken:jjwt'
    implementation 'com.baomidou:mybatis-plus-boot-starter'
    implementation 'com.baomidou:mybatis-plus-generator'
    implementation 'org.apache.velocity:velocity-engine-core'
}

dependencyManagement {
    dependencies {
        dependency 'com.alibaba:druid-spring-boot-starter:1.1.10'
        dependency 'mysql:mysql-connector-java:8.0.16'
        dependency 'io.springfox:springfox-swagger2:2.9.2'
        dependency 'io.springfox:springfox-swagger-ui:2.9.2'
        dependency 'io.swagger:swagger-models:1.6.0'
        dependency 'io.swagger:swagger-annotations:1.6.0'
        dependency 'cn.hutool:hutool-all:4.5.7'
        dependency 'io.jsonwebtoken:jjwt:0.9.0'
        dependency 'com.baomidou:mybatis-plus-boot-starter:3.3.2'
        dependency 'com.baomidou:mybatis-plus-generator:3.3.2'
        dependency 'org.apache.velocity:velocity-engine-core:2.2'
    }
}

test {
    useJUnitPlatform()
}
```

## Maven详细日志

```sh
mvn clean compile install -X
# 或
mvn clean compile install -e
```