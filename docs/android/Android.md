---
sidebar_position: 1
---

# Android

## 常用命令

### **设备管理 & ADB**
1. **查看已连接设备**  
   ```bash
   adb devices
   ```
   - 列出当前连接的 Android 设备（包括模拟器和真机）。

2. **安装/卸载 APK**  
   ```bash
   adb install app-debug.apk  # 安装
   adb install -r app-debug.apk  # 覆盖安装
   adb uninstall com.example.app  # 卸载
   ```
   - `-r` 用于保留数据重新安装。

3. **文件传输**  
   ```bash
   adb push local.txt /sdcard/  # 电脑 → 设备
   adb pull /sdcard/file.txt ~/Downloads/  # 设备 → 电脑
   ```
   - 适用于快速传输调试文件。

4. **进入设备 Shell**  
   ```bash
   adb shell
   ```
   - 可执行 Linux 命令（如 `ls`、`cd`、`pm`、`am`）。

5. **无线调试（免 USB 连接）**  
   ```bash
   adb tcpip 5555  # 开启 TCP/IP 模式
   adb connect <设备IP>:5555  # 连接设备
   adb disconnect  # 断开
   ```
   - 适用于远程调试。

---

### **调试 & 日志**
1. **查看实时日志**  
   ```bash
   adb logcat  # 完整日志
   adb logcat -s TAG  # 过滤特定 TAG
   adb logcat -v time > log.txt  # 保存带时间戳的日志
   ```
   - `-s` 过滤关键日志（如 `ActivityManager`）。

2. **查看当前 Activity**  
   ```bash
   adb shell dumpsys activity top  # 当前顶层 Activity
   adb shell dumpsys package com.example.app  # 查看应用详情
   ```
   - 适用于调试界面栈。

3. **Monkey 压力测试**  
   ```bash
   adb shell monkey -p com.example.app -v 1000  # 随机点击 1000 次
   ```
   - 测试应用稳定性。

4. **屏幕截图 & 录屏**  
   ```bash
   adb shell screencap -p /sdcard/screen.png  # 截图
   adb shell screenrecord /sdcard/video.mp4  # 录屏（默认 3 分钟）
   ```
   - 需手动 `adb pull` 导出文件。

---

### **应用管理**
1. **启动 Activity/发送广播**  
   ```bash
   adb shell am start -n com.example.app/.MainActivity  # 启动 Activity
   adb shell am broadcast -a "com.example.CUSTOM_ACTION"  # 发送广播
   ```
   - 适用于测试深层链接或广播接收器。

2. **查看已安装应用**  
   ```bash
   adb shell pm list packages  # 所有应用
   adb shell pm list packages -f | grep "example"  # 过滤应用
   ```
   - `pm`（Package Manager）管理应用。

3. **清除应用数据**  
   ```bash
   adb shell pm clear com.example.app  # 重置应用数据
   ```
   - 相当于“清除缓存和数据”。

---

### **模拟器 & 构建**
1. **管理 AVD（Android 虚拟设备）**  
   ```bash
   avdmanager list avd  # 列出 AVD
   emulator -avd Pixel_5_API_30  # 启动模拟器
   ```
   - 需提前通过 `avdmanager create` 创建 AVD。

2. **Gradle 构建**  
   ```bash
   ./gradlew assembleDebug  # 构建 Debug APK
   ./gradlew installDebug  # 构建并安装
   ./gradlew lint  # 代码检查
   ```
   - 适用于项目构建。

3. **APK 签名 & 对齐**  
   ```bash
   apksigner sign --ks keystore.jks app.apk  # 签名
   zipalign -v 4 input.apk output.apk  # 优化 APK
   ```
   - 发布前必备步骤。

---

### **高级调试**
1. **查看内存/CPU 占用**  
   ```bash
   adb shell dumpsys meminfo com.example.app  # 内存
   adb shell top -n 1 | grep "app"  # CPU
   ```
   - 分析性能问题。

2. **端口转发（调试数据库）**  
   ```bash
   adb forward tcp:8080 tcp:8080  # 转发端口
   ```
   - 适用于 Chrome 调试 WebView 或数据库。

3. **查看系统属性**  
   ```bash
   adb shell getprop  # 所有属性
   adb shell getprop ro.build.version  # Android 版本
   ```
   - 获取设备信息。

--- 

## MainActivity 方法详解

这个 `MainActivity` 继承了 `Activity` 并实现了多个接口，因此需要重写这些接口中的方法。下面我将详细介绍这些方法的作用和典型使用场景：

### 生命周期方法

1. **`protected void onCreate(Bundle savedInstanceState)`**
   - **作用**：Activity创建时调用的第一个方法，用于初始化基本组件
   - **典型使用**：设置布局(`setContentView`)、初始化视图、绑定数据、设置监听器等
   - **参数**：`savedInstanceState` 保存了Activity被销毁前的状态（如旋转屏幕时）

2. **`protected void onStart()`**
   - **作用**：Activity变为可见时调用（但可能还未获得焦点）
   - **典型使用**：注册广播接收器、启动动画等

3. **`protected void onResume()`**
   - **作用**：Activity获得焦点，可与用户交互时调用
   - **典型使用**：恢复动画、继续视频播放、更新UI等

4. **`protected void onPause()`**
   - **作用**：Activity失去焦点时调用（另一个Activity获得焦点）
   - **典型使用**：暂停动画、保存临时数据、释放占用资源等

5. **`protected void onStop()`**
   - **作用**：Activity完全不可见时调用
   - **典型使用**：注销广播接收器、停止后台任务等

6. **`protected void onDestroy()`**
   - **作用**：Activity被销毁前调用的最后一个方法
   - **典型使用**：释放所有资源、取消网络请求、关闭数据库连接等

### 按键事件处理方法

7. **`public boolean onKeyDown(int keyCode, KeyEvent event)`**
   - **作用**：处理物理按键按下事件
   - **典型使用**：处理遥控器按键、游戏手柄按键等
   - **返回值**：返回true表示已处理该事件，不再传递

8. **`public boolean onKey(View v, int keyCode, KeyEvent event)`**
   - **作用**：`OnKeyListener`接口方法，处理视图上的按键事件
   - **典型使用**：处理EditText等视图的特殊按键输入
   - **参数**：`v`是触发事件的视图，`keyCode`是按键代码

9. **`public boolean dispatchKeyEvent(KeyEvent event)`**
   - **作用**：分发按键事件，比`onKeyDown`更早拦截按键
   - **典型使用**：全局按键监听，如处理返回键的特定逻辑

### 点击事件处理方法

10. **`public void onClick(View v)`**
    - **作用**：`OnClickListener`接口方法，处理视图点击事件
    - **典型使用**：按钮点击、图片点击等交互处理
    - **参数**：`v`是被点击的视图

11. **`public void OnItemClick(View view, int position)`**
    - **作用**：`OnItemClickListener`接口方法，处理列表项点击
    - **典型使用**：RecyclerView或ListView的item点击事件
    - **参数**：`view`是被点击的item视图，`position`是位置索引

12. **`public void setOnItemClick(int position)`**
    - **作用**：自定义方法，处理特定位置的item点击
    - **典型使用**：可能是对`OnItemClick`的封装或特定逻辑处理

### 回调方法

13. **`public void onCallBack()`**
    - **作用**：`OnCallBackListener`接口方法，自定义回调
    - **典型使用**：异步操作完成后的通知，或组件间的通信

14. **`public void onStaBarListener()`**
    - **作用**：`StaBarListener`接口方法，状态栏相关回调
    - **典型使用**：处理状态栏变化或交互事件

### 其他重要方法

15. **`protected void onActivityResult(int requestCode, int resultCode, Intent data)`**
    - **作用**：处理从其他Activity返回的结果
    - **典型使用**：拍照后获取图片、选择文件后获取URI等
    - **参数**：
      - `requestCode`：启动Activity时设置的请求码
      - `resultCode`：返回结果的状态（如RESULT_OK）
      - `data`：携带返回数据的Intent

### 类实现分析

`MainActivity` 实现了多个接口：
- `SimpleRecycleView.OnCallBackListener`：提供`onCallBack()`方法
- `View.OnKeyListener`：提供`onKey()`方法
- `AppBeanAdapter.OnItemClickListener` 和 `CollectAdapter.OnItemClickListener`：提供`OnItemClick()`方法
- `StaBarListener`：提供`onStaBarListener()`方法
- `View.OnClickListener`：提供`onClick()`方法

这种设计表明`MainActivity`是一个功能复杂的主界面，需要处理：
1. 多种用户交互（点击、按键）
2. 列表项选择
3. 状态栏交互
4. 组件间通信
5. 完整的生命周期管理

典型应用场景可能是Android TV应用的首页或智能设备的主控制界面，需要处理遥控器按键和复杂的界面交互。