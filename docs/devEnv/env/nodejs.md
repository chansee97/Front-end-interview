## NodeJs
> 不推荐原生安装，存在版本管理问题。直接安装nvm来安装node

[Node环境下载](https://nodejs.org/zh-cn/)

### node环境配置

- 设置全局安装包的默认路径

```
// 创建文件夹
 mkdir D:\dev\nodejs\node_global
 // 配置prefix
 npm config set prefix "D:\dev\nodejs\node_global"
 // 写入全局path变量
 setx PATH "%PATH%;D:\dev\nodejs\node_global"
```
- 设置全局缓存的默认路径

```
// 创建文件夹
 mkdir D:\dev\nodejs\node_cache
 // 配置cache 
 npm config set cache  "D:\dev\nodejs\node_cache"
```
- 设置淘宝源
```
npm config set registry https://registry.npmmirror.com
```

简化版
- 创建文件夹
```
mkdir D:\dev\nodejs\node_global
mkdir D:\dev\nodejs\node_cache
```

- 设置全局path变量

```
 // 写入全局path变量
 setx PATH "%PATH%;D:\dev\nodejs\node_global"
```

- 修改`.npmrc`
```
registry=https://registry.npmmirror.com
prefix=D:\dev\nodejs\node_global
cache=D:\dev\nodejs\node_cache
```
## NVM
[Node版本切换工具-nvm](https://github.com/coreybutler/nvm-windows/releases)
在你安装的目录下找到settings.txt文件，打开后加上，不加上无法安装低版本node
```
node_mirror: https://npm.taobao.org/mirrors/node/ 
npm_mirror: https://npm.taobao.org/mirrors/npm/
```
```
NVM常用命令
nvm list 查看已经安装的版本
nvm list installed 查看已经安装的版本
nvm list available 查看网络可以安装的版本
nvm version 查看当前的版本
nvm install 安装最新版本nvm
nvm use <version> ## 切换使用指定的版本node
nvm ls 列出所有版本
nvm current显示当前版本
nvm alias <name> <version> ## 给不同的版本号添加别名
nvm unalias <name> ## 删除已定义的别名
nvm reinstall-packages <version> ## 在当前版本node环境下，重新全局安装指定版本号的npm包
nvm on 打开nodejs控制
nvm off 关闭nodejs控制
nvm proxy 查看设置与代理
nvm node_mirror [url] 设置或者查看setting.txt中的node_mirror，如果不设置的默认是 https://nodejs.org/dist/
nvm npm_mirror [url] 设置或者查看setting.txt中的npm_mirror,如果不设置的话默认的是： https://github.com/npm/npm/archive/.
nvm uninstall <version> 卸载制定的版本
nvm use [version] [arch] 切换制定的node版本和位数
nvm root [path] 设置和查看root路径
```

## PNPM 配置

设置全局变量`%PNPM_HOME%`为`D:\dev\.pnpm-store`

```
// .npmrc
cache-dir=D:\dev\.pnpm-store\cache
g-dir=D:\dev\.pnpm-store
global-bin-dir=D:\dev\.pnpm-store
global-dir=D:\dev\.pnpm-store\global
state-dir=D:\dev\.pnpm-store\state
```
初始化设置
```
pnpm setup
```