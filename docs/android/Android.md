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