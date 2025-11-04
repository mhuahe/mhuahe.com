# Next.js

## 定义接口

Next.js App Router 使用文件系统路由：路由由目录结构自动映射。

### Next.js App Router 路由规则

在 Next.js 13+ 的 App Router 中：

1. **目录结构 = URL 路径**
   - `src/app/api/auth/getutc/route.ts` → `/api/auth/getutc`
   - 每个目录层级对应 URL 的一个段

2. **`route.ts` 文件的作用**
   - `route.ts` 定义 API 路由处理函数
   - 可以导出 `GET`、`POST`、`PUT`、`DELETE` 等 HTTP 方法

3. **路由映射示例**
   ```
   文件路径                              →  URL 路径
   src/app/api/auth/route.ts            →  /api/auth
   src/app/api/auth/getutc/route.ts     →  /api/auth/getutc
   src/app/api/auth/user/[id]/route.ts  →  /api/auth/user/:id
   ```

这是 Next.js App Router 的核心特性：基于文件系统的路由，让路由组织更直观。

### 示例

文件路径: src/api/auth/route.ts

```js
export async function POST(req: NextRequest) {
    // ... 认证逻辑
}
```

这个文件只导出了 `POST` 函数，所以：

- ✅ **POST `/api/auth`** → 可以调用（需要 `key` 和 `utctime` 参数）
- ❌ **GET `/api/auth`** → 不支持（会返回 405 Method Not Allowed）
