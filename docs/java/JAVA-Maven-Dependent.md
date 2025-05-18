# Maven依赖

## maven-gpg-plugin

maven-gpg-plugin 是 Maven 插件的一部分，主要用于对 Maven 构建的工件（例如 JAR 文件、POM 文件等）进行签名。签名的作用是验证这些工件的来源和完整性，确保它们没有在传输过程中被篡改。通常，在发布到公共 Maven 仓库（如 Maven Central）时，需要对工件进行签名，以便其他用户可以验证下载的工件是由你创建的，并且未被篡改。

主要功能

1. **签名工件**：`maven-gpg-plugin` 能够在 Maven 的构建生命周期中自动为生成的工件添加 GPG 签名。这些签名文件通常以 `.asc` 扩展名存在，并与工件一起部署到仓库中。
2. **验证签名**：在发布工件到中央仓库时，中央仓库可以使用这些签名文件验证工件的完整性和来源。

典型使用场景

- **发布到 Maven Central**：当你要发布工件到 Maven Central 仓库时，必须对所有的工件进行签名。
- **内部仓库**：即使是在私有或内部 Maven 仓库中，签名工件也是一种最佳实践，以确保构件的来源和完整性。

基本配置

通常，在 `pom.xml` 中配置 `maven-gpg-plugin` 插件时，可以像这样：

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-gpg-plugin</artifactId>
            <version>3.0.1</version>
            <executions>
                <execution>
                    <id>sign-artifacts</id>
                    <phase>verify</phase> <!-- 签名发生在 verify 阶段 -->
                    <goals>
                        <goal>sign</goal> <!-- 指定签名目标 -->
                    </goals>
                </execution>
            </executions>
            <configuration>
                <gpgExecutable>gpg</gpgExecutable> <!-- GPG 可执行文件 -->
                <passphraseServerId>gpg.passphrase</passphraseServerId> <!-- 从 settings.xml 中读取密钥密码 -->
            </configuration>
        </plugin>
    </plugins>
</build>
```

关键参数

- **`gpgExecutable`**：指定用于签名的 GPG 可执行文件的路径。通常情况下，它会自动检测。
- **`passphraseServerId`**:：用于从 `settings.xml` 中读取 GPG 密钥的密码。如果你设置了密码短语，那么需要在 Maven 的 `settings.xml` 文件中设置一个服务器条目来提供这个密码。
- **`skip`**:：如果设置为 `true`，那么签名步骤将被跳过。这对于调试或者不需要签名的环境非常有用。

工作原理

当你运行 Maven 的 `install` 或 `deploy` 目标时，`maven-gpg-plugin` 会在 `verify` 阶段执行，自动为你配置的工件生成 `.asc` 文件。这些 `.asc` 文件包含了工件的 GPG 签名，并且可以被使用者验证。

签名过程

1. **生成密钥**：使用 GPG 工具生成一个密钥对，包括公钥和私钥。
2. **配置 GPG**：将生成的密钥与 `maven-gpg-plugin` 关联，通常通过 `settings.xml` 提供密钥的密码。
3. **签名**：在构建过程中，Maven 会调用 GPG 来对指定的工件进行签名，并生成相应的 `.asc` 文件。

## maven-javadoc-plugin

maven-javadoc-plugin 是 Maven 中用于生成 Java 文档（Javadoc）的插件。Javadoc 是一种标准的文档格式，用于描述 Java 类、接口、方法、构造函数等 API 的使用。开发者通常会在代码中使用特定的注释语法（如 `/** ... */`）编写文档，然后通过 Javadoc 工具生成 HTML 文档。

主要功能

1. **生成 Javadoc**：
   - `maven-javadoc-plugin` 可以自动从项目源代码中提取 Javadoc 注释，并生成 HTML 格式的文档。
2. **打包 Javadoc**：
   - 插件可以将生成的 Javadoc 文档打包成 JAR 文件，这通常用于将文档与代码一起发布，例如在发布到 Maven 中央仓库时。
3. **配置生成的 Javadoc**：
   - 你可以通过插件配置来控制生成 Javadoc 的方式，包括指定的编码、包含或排除的包、添加链接到外部文档等。
4. **报告生成**：
   - `maven-javadoc-plugin` 可以集成到 Maven 的 `site` 生命周期中，生成的 Javadoc 可以作为项目站点的一部分进行展示。

典型使用场景

- **项目文档生成**：当你需要生成项目的 API 文档时，使用 `maven-javadoc-plugin` 是最便捷的方法。
- **发布到 Maven 仓库**：如果你将项目发布到 Maven 仓库，通常需要生成并发布 Javadoc JAR，供其他开发者参考。
- **集成到项目站点**：将 Javadoc 集成到项目站点，让用户可以在线浏览 API 文档。

基本配置

以下是一个典型的 `pom.xml` 配置示例，用于生成 Javadoc：

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-javadoc-plugin</artifactId>
            <version>3.4.0</version>
            <executions>
                <execution>
                    <id>attach-javadocs</id>
                    <goals>
                        <goal>jar</goal> <!-- 生成并打包 Javadoc -->
                    </goals>
                </execution>
            </executions>
            <configuration>
                <encoding>UTF-8</encoding> <!-- 设置文档编码 -->
                <source>1.8</source> <!-- Java 版本 -->
                <docencoding>UTF-8</docencoding>
                <charSet>UTF-8</charSet>
                <linksource>true</linksource> <!-- 链接到源代码 -->
                <doctitle>My Project API Documentation</doctitle> <!-- 文档标题 -->
                <additionalJOption>-Xdoclint:none</additionalJOption> <!-- 关闭文档Lint检查 -->
            </configuration>
        </plugin>
    </plugins>
</build>
```

关键参数

- **`source`**: 指定 Javadoc 文档的 Java 版本，例如 `1.8` 或 `11`。
- **`encoding`**: 设置源文件的编码格式，如 `UTF-8`。
- **`docencoding`**: 设置生成的 Javadoc HTML 文件的编码。
- **`charSet`**: 指定生成的 Javadoc HTML 文档的字符集。
- **`linksource`**: 如果设置为 `true`，Javadoc 将包含源代码的链接。
- **`additionalJOption`**: 你可以在这里添加任何 Javadoc 工具的额外选项，例如 `-Xdoclint:none` 用于关闭 Java 8+ 的 Javadoc 严格检查。

## maven-source-plugin

maven-source-plugin 是 Maven 中用于生成项目源代码的插件。它可以将项目的源代码打包成 JAR 文件，并将其附加到构建过程中的其他工件（如主 JAR 文件、Javadoc JAR 文件等）中，通常在发布和分发项目时使用。

主要功能

1. **生成源码 JAR 文件**：
   - `maven-source-plugin` 的主要功能是将项目的源代码打包成一个 JAR 文件。这对于分发开源项目或者共享代码库非常有用，因为其他开发者可以下载和查看源代码。
2. **附加源代码**：
   - 当你将项目发布到 Maven 仓库时，通常会附带源码 JAR 文件，以便其他开发者在使用时可以参考源代码。这对调试和理解库的工作原理特别有帮助。
3. **多模块项目支持**：
   - 在多模块项目中，`maven-source-plugin` 可以为每个模块生成对应的源码 JAR 文件。

典型使用场景

- **开源项目发布**：在发布到 Maven 中央仓库或者其他仓库时，通常需要附带源代码 JAR 文件，以便其他开发者可以查看、参考和调试。
- **内部项目管理**：即使在私有项目中，生成和维护源码 JAR 文件也可以帮助团队成员更好地理解代码库。

配置示例

在 `pom.xml` 中，`maven-source-plugin` 的配置通常如下所示：

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-source-plugin</artifactId>
            <version>3.2.1</version>
            <executions>
                <execution>
                    <id>attach-sources</id>
                    <goals>
                        <goal>jar</goal> <!-- 生成并打包源码 JAR 文件 -->
                    </goals>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
```

关键配置

- **`jar` 目标**:
  - 这个目标用于生成源码 JAR 文件，并将其附加到构建中。这个 JAR 文件通常包含项目的 `.java` 文件。
- **`test-jar` 目标**:
  - 用于生成测试源码的 JAR 文件，包含 `src/test/java` 目录下的测试源代码。这个目标可以在需要发布测试代码时使用。

## maven-surefire-plugin

在 Maven 的构建生命周期中，插件 maven-surefire-plugin 是一个非常重要的插件，它专门用于运行单元测试。
主要功能：

- 运行单元测试：该插件在 Maven 的 test 阶段运行，执行项目中的单元测试。

- 报告生成：生成测试报告，显示测试结果，包括成功、失败和跳过的测试用例。

- 并行执行：支持并行执行测试以加速测试过程。

- JUnit 5 支持：支持 JUnit 5、JUnit 4 和 TestNG 等流行的测试框架。


主要配置参数

- includes：指定要包含的测试文件的模式。默认情况下，它会运行所有符合 **/*Test.java 和 **/*Tests.java 模式的测试类。
- excludes：指定要排除的测试文件的模式。例如，可以排除以 Abstract 开头的测试类。
- forkCount：指定并行执行测试的线程数。可以加快测试过程。
- reuseForks：指示是否重用同一 JVM 进程以运行多个测试。
-  parallel：指定测试的并行化策略。可以是 methods、classes 或 both，分别表示方法级并行、类级并行或两者并行。
- testFailureIgnore：指定测试失败是否中断构建。默认为 false，表示测试失败将导致构建失败。

## nexus-staging-maven-plugin

nexus-staging-maven-plugin 是一个 Maven 插件，用于将构建好的 Maven 项目发布到 Nexus Repository Manager 中的 Maven 仓库，并且能够管理和控制项目的发布生命周期。它在发布流程中起到了“分阶段发布”的作用，允许用户先将项目上传到临时存储（staging repository），然后进行一系列验证，最后再发布到正式的 Maven 仓库（release repository）。

主要作用

1. **发布管理**：
   - 插件支持从一个临时仓库（staging repository）开始发布，将构建好的工件上传到临时仓库中，进行验证和审批之后，再发布到正式的仓库中。这对于控制项目发布的流程，确保发布版本的质量至关重要。
2. **自动化发布流程**：
   - `nexus-staging-maven-plugin` 能够简化和自动化 Maven 项目从构建到发布的流程，包括上传、验证、关闭、发布或删除临时仓库等一系列操作。它可以与持续集成（CI）工具集成，实现无人工干预的自动发布。
3. **验证和审批**：
   - 在发布到正式仓库之前，可以在临时仓库中进行多种验证，比如检查签名、元数据验证、依赖性检查等。如果验证失败，可以选择不发布，避免将有问题的版本发布到正式仓库。
4. **撤销发布**：
   - 如果在某个阶段发现问题，可以通过该插件撤销已经上传到临时仓库的工件，避免错误版本进入正式仓库。

典型使用场景

- **分阶段发布**：需要将构建的项目工件上传到临时仓库进行测试和验证，只有在所有检查通过后，才会发布到正式仓库。
- **团队开发**：大团队协作开发时，多个开发者可以先将工件上传到临时仓库，由其他团队成员进行评审，通过后再进行正式发布。
- **自动化构建**：与 Jenkins 等 CI/CD 工具结合，自动完成构建、上传、验证、发布的全过程。

配置示例

在 `pom.xml` 中，`nexus-staging-maven-plugin` 的典型配置如下：

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.sonatype.plugins</groupId>
            <artifactId>nexus-staging-maven-plugin</artifactId>
            <version>1.6.8</version>
            <extensions>true</extensions>
            <configuration>
                <serverId>nexus</serverId> <!-- 配置在 settings.xml 中的服务器ID -->
                <nexusUrl>https://your-nexus-repository/repository</nexusUrl> <!-- Nexus Repository URL -->
                <autoReleaseAfterClose>true</autoReleaseAfterClose> <!-- 关闭临时仓库后自动发布 -->
            </configuration>
        </plugin>
    </plugins>
</build>
```

关键配置说明

- **`serverId`**:
  - 这个是 Maven settings.xml 文件中配置的服务器 ID，用于指定上传的凭据。
- **`nexusUrl`**:
  - Nexus Repository Manager 的 URL，用于指定要发布的仓库地址。
- **`autoReleaseAfterClose`**:
  - 是否在关闭临时仓库后自动发布工件到正式仓库。如果设置为 `true`，一旦关闭临时仓库，插件将自动将工件发布到正式仓库。

常用命令

1. **上传工件到临时仓库**:
   - `mvn clean deploy`：将构建好的工件上传到 Nexus 的 staging 仓库。
2. **关闭临时仓库**:
   - `mvn nexus-staging:close`：关闭临时仓库并验证内容，验证通过后准备发布。
3. **发布到正式仓库**:
   - `mvn nexus-staging:release`：将已关闭的临时仓库内容发布到正式仓库。
4. **撤销临时仓库**:
   - `mvn nexus-staging:drop`：如果发现问题，可以删除临时仓库，避免错误发布。

## byte-buddy

CGLIB已经停止维护，建议使用ByteBuddy。

Byte Buddy 是一个强大的 Java 库，专门用于在运行时创建和操作 Java 类及其字节码。它允许开发者在不需要直接处理字节码的情况下，动态生成、修改和操作 Java 类。Byte Buddy 在许多框架和工具中得到广泛应用，如 AOP（面向切面编程）、代理模式、测试框架、以及其他需要动态生成代码的场景中。

主要作用

1. **动态生成和修改类**：
   - `Byte Buddy` 可以在运行时生成新的类，或在现有类的基础上修改或增强其功能，而不需要在编译时对源代码进行更改。
2. **字节码操作**：
   - 提供简化的 API 来操作字节码，开发者无需直接与 ASM 这样的底层字节码工具打交道。
3. **代理类**：
   - 通过生成代理类来实现拦截器功能，可以在方法调用前后执行自定义逻辑，这在 AOP 场景中非常有用。
4. **测试框架支持**：
   - 可以创建动态的 mock 对象，结合单元测试框架如 Mockito 来增强测试功能。
5. **高性能**：
   - `Byte Buddy` 通过优化的字节码生成和操作，能够高效地执行动态类生成和修改，性能非常优异。

使用场景

1. **面向切面编程 (AOP)**：
   - `Byte Buddy` 可以用于创建动态代理，以实现 AOP 中常见的功能，比如在方法执行之前或之后注入代码逻辑。
2. **Mocking 框架**：
   - 测试框架如 Mockito 使用 `Byte Buddy` 来生成 mock 对象，允许在测试时模拟对象行为。
3. **代理和拦截器**：
   - 在一些 RPC 框架或动态代理框架中，`Byte Buddy` 常用于创建动态代理，拦截方法调用并添加自定义逻辑。
4. **运行时类增强**：
   - 在 Java EE 或 Spring 应用中，可以使用 `Byte Buddy` 在运行时增强类的功能，比如添加注解、方法或字段。
5. **代码生成**：
   - 自动生成符合特定规范的 Java 类，减少开发者手动编写样板代码的工作量。

依赖配置

在 Maven 中使用 `Byte Buddy` 可以通过以下方式添加依赖：

```xml
<dependency>
    <groupId>net.bytebuddy</groupId>
    <artifactId>byte-buddy</artifactId>
    <version>1.12.22</version> <!-- 可以替换为最新版本 -->
</dependency>
```

## Jackson系列

```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-core</artifactId>
</dependency>
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
</dependency>
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-annotations</artifactId>
</dependency>
```

### jackson-core

- 这是 Jackson 的核心包
- 提供了最基础的 JSON 处理功能
- 包含了 JSON 的底层流式处理 API（streaming API）
- 负责 JSON 的解析和生成的基础工作

### jackson-databind

- 提供了数据绑定功能，是最常用的包
- 可以实现 Java 对象与 JSON 之间的互相转换
- 提供了 ObjectMapper 类，这是最常用的 JSON 处理类
- 依赖于 jackson-core 和 jackson-annotations

### jackson-annotations

- 提供了一系列注解，用于控制 JSON 的序列化和反序列化行为
- 常用注解包括：
  - @JsonProperty: 指定字段名
  - @JsonIgnore: 忽略某个字段
  - @JsonFormat: 指定日期等格式
  - @JsonSerialize: 自定义序列化
  - @JsonDeserialize: 自定义反序列化

```java
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.ObjectMapper;

public class User {
    @JsonProperty("user_name")
    private String name;
    
    @JsonIgnore
    private String password;
}

// 使用 ObjectMapper 进行转换
ObjectMapper mapper = new ObjectMapper();
String json = mapper.writeValueAsString(user);
User user = mapper.readValue(json, User.class);
```

> 这三个依赖通常需要一起使用，因为它们相互依赖，共同提供了完整的 JSON 处理功能。如果只需要最基本的 JSON 处理，使用 jackson-core 就够了；但如果需要对象映射功能，则需要使用全部三个依赖。

## bcprov-jdk*

bcprov-jdk 是 Bouncy Castle 提供的加密库，它是一个开源的 Java 实现的安全提供者，可以为 Java 应用程序提供额外的密码算法支持。Bouncy Castle 的 bcprov-jdk 包含了多种加密算法实现，包括但不限于对称加密、非对称加密、哈希函数等。

bcprov-jdk15on 和 bcprov-jdk18on 等不同后缀代表该版本的 Bouncy Castle 库支持的最低 JDK 版本：

- `bcprov-jdk15on`: 支持从 JDK 1.5 到 JDK 8 的版本。这个版本号中的 "on" 指的是 "or newer"，意味着它不仅支持 JDK 1.5，也支持之后的所有版本直到 JDK 8。
- `bcprov-jdk18on`: 支持从 JDK 8 开始及更新的版本（例如 JDK 11, JDK 17 等）。因此如果你正在使用 JDK 8 或更高版本，应该选择此版本或更高版本的支持包。
- `bcprov-jdk15to18`: 这种命名方式表明该版本适用于 JDK 1.5 至 JDK 8 的范围。不过这种特定范围的支持包并不常见，通常你看到的是像 -jdk15on 或 -jdk18on 这样的标记。