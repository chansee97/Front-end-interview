## 数据库
[MySQL下载地址](https://dev.mysql.com/downloads/mysql/)

[NavicatPremium 16 破解](https://20201501.lanzouv.com/irAVP0b0phla)

[NavicatPremium 15 破解](https://20201501.lanzouv.com/ixQ3e0b0pjcd)

## Windows 上安装 MySQL
Windows 上安装 MySQL 相对来说会较为简单，最新版本可以在 MySQL 下载 中下载中查看 (更详细安装：Windows 上安装 MySQL)。

![](https://www.runoob.com/wp-content/uploads/2014/03/330405-20160709174318905-664331194.png)

![](https://www.runoob.com/wp-content/uploads/2014/03/20DBD7BA-A653-4AE3-887E-2A16E6EBB2E3.png)

点击 **Download** 按钮进入下载页面，点击下图中的 **No thanks, just start my download.** 就可立即下载：

![](https://www.runoob.com/wp-content/uploads/2014/03/330405-20160709174941374-1821908969.png)

下载完后，我们将 zip 包解压到相应的目录，这里我将解压后的文件夹放在 **C:\mysql-8.0.30-winx64** 下。

### 配置下 MySQL 的配置文件

打开刚刚解压的文件夹 C:\mysql-8.0.30-winx64 ，在该文件夹下创建 my.ini 配置文件，编辑 my.ini 配置以下基本信息：
**注意：修改本地文件目录**
```ini
[client]
# 设置mysql客户端默认字符集
default-character-set=utf8
[mysqld]
# 设置3306端口
port = 3306
# 设置mysql的安装目录
basedir=C:\\mysql-8.0.30-winx64
# 设置 mysql数据库的数据的存放目录，MySQL 8+ 不需要以下配置，系统自己生成即可，否则有可能报错
# datadir=C:\\web\\sqldata
# 允许最大连接数
max_connections=20
# 服务端使用的字符集默认为8比特编码的latin1字符集
character-set-server=utf8
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
```
### 添加环境变量
win11：我的电脑=>属性=>高级系统设置=>高级=>环境变量 
添加变量名：MYSQL_HOME，变量值：C:\mysql-8.0.30-winx64
![](https://www.runoob.com/wp-content/uploads/2019/10/1571831320-7374-41-20170722232031684-1843508.png)
修改变量名：PATH，添加变量值：%MYSQL_HOME%\bin
![](https://www.runoob.com/wp-content/uploads/2019/10/1571831320-5015-20170722232044090-1304683536.png)

### 启动 MySQL 数据库：

以管理员身份打开 cmd 命令行工具，切换目录：
```
cd C:\mysql-8.0.30-winx64\bin
```

初始化数据库：

```
mysqld --initialize --console
```

执行完成后，会输出 root 用户的初始默认密码，如：

```
2018-04-20T02:35:05.464644Z 5 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: APWCY5ws&hjQ
```
APWCY5ws&hjQ 就是初始密码，后续登录需要用到，你也可以在登陆后修改密码。

输入以下安装命令：
`mysqld install`

启动输入以下命令即可：
`net start mysql`

> 注意: 在 5.7 需要初始化 data 目录：
cd C:\mysql-8.0.30-winx64\bin 
mysqld --initialize-insecure 


初始化后再运行 net start mysql 即可启动 mysql。

### 登录 MySQL
当 MySQL 服务已经运行时, 我们可以通过 MySQL 自带的客户端工具登录到 MySQL 数据库中, 首先打开命令提示符, 输入以下格式的命名:

`mysql -h 主机名 -u 用户名 -p`
参数说明：

-h : 指定客户端所要登录的 MySQL 主机名, 登录本机 (localhost 或 127.0.0.1) 该参数可以省略;
-u : 登录的用户名;
-p : 告诉服务器将会使用一个密码来登录, 如果所要登录的用户名密码为空, 可以忽略此选项。
如果我们要登录本机的 MySQL 数据库，只需要输入以下命令即可：

mysql -u root -p
按回车确认, 如果安装正确且 MySQL 正在运行, 会得到以下响应:

Enter password:
若密码存在, 输入密码登录, 不存在则直接按回车登录。登录成功后你将会看到 Welcome to the MySQL monitor... 的提示语。

然后命令提示符会一直以 mysql> 加一个闪烁的光标等待命令的输入, 输入 exit 或 quit 退出登录。

## NavicatPremium 破解教程
Navicat premium是一款数据库管理工具.将此工具连接数据库，你可以从中看到各种数据库的详细信息.包括报错，等等.当然，你也可以通过他，登陆数据库，进行各种操作.Navicat Premium是一个可多重连线资料库的管理工具，它可以让你以单一程式同时连线到 MySQL、SQLite、Oracle 及 PostgreSQL 资料库，让管理不同类型的资料库更加的方便。

NavicatPremium15/16破解说明：

1、程序安装完成彻底退出，将注册机复制到安装目录运行，选择Navicat v15，Language选择Simplified Chinese，然后点击Patch按钮

2、然后点击Generate按钮，获取注册码

3、打开Navicat Premium 15，运行软件后，弹出提示框，点击Registration注册，在注册窗口键处填入上一步生成的注册码，然后点击激活Activate

4、点击手动激活Manual Activate；出现请求码

5、将Navicat手动激活窗口的请求码框中内容复制到注册机请求码框中，点击最底下的Generate按钮获取激活码

6、将注册机激活码框中生成的激活码内容复制到Navicat手动激活窗口的激活码框中，然后点击激活按钮，即可破解

[NavicatPremium16破解视频教学](https://www.bilibili.com/video/BV1aN4y1g7TD)