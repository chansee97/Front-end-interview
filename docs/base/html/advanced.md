## HTML5有哪些缓存方式？

1. localstorege缓存，将数据储存在本地客户端，只有用户手动清除才能清除缓存
    API：1.localstorege.setItem(key,value)，键值对的形式缓存
        2.localstorege.getItem(key)，根据键名来缓存值
        3.localstorege.length ，获取总缓存数量

2. sessionStorege 会话缓存，会话机制是指从打开浏览器开始访问页面的时候，到关闭这个页面的过程成为一个会话，sessionStorege储存的数据会随着页面关闭而销毁
    API: 1. sessionStorage.setItem(key,val)，localStorage是以键值对的形式创建的；
         1. sessionStorage.getItem(key)，根据键名来获取缓存的值；
         2. sessionStorage.length；获取总共缓存值得数量， localStoarge返回的是个对象；

3. 离线缓存机制(Application Cache)
    1. 配置manifest文件，manifest 文件是简单的文本文件，它告知浏览器被缓存的内容（以及不缓存的内容）
    2. manifest 文件可分为三个部分：
        1、CACHE MANIFEST - 在此标题下列出的文件将在首次下载后进行缓存
        2、NETWORK - 在此标题下列出的文件需要与服务器的连接，且不会被缓存
        3、FALLBACK - 在此标题下列出的文件规定当页面无法访问时的回退页面（比如 404 页面）
    3. API： 0（UNCACHED） : 无缓存， 即没有与页面相关的应用缓存
            1（IDLE） : 闲置，即应用缓存未得到更新
            2 （CHECKING） : 检查中，即正在下载描述文件并检查更新
            3 （DOWNLOADING） : 下载中，即应用缓存正在下载描述文件中指定的资源
            4 （UPDATEREADY） : 更新完成，所有资源都已下载完毕
            5 （IDLE） : 废弃，即应用缓存的描述文件已经不存在了，因此页面无法再访问应用缓存
4. web SQL
    1. 关系数据库，通过SQL语句访问
    2. Web SQL 数据库API并不是HTML5 规范的一部分，但是它是一个独立的规范，引入了一组使用SQL操作客户端数据库的APIs
    3. 支持情况：Web SQL 数据库可以在最新版的 Safari, Chrome 和 Opera 浏览器中工作。
    4. API：1. openDatabase：这个方法使用现有的数据库或者新建的数据库创建一个数据库对象。
            2. transaction：这个方法让我们能够控制一个事务，以及基于这种情况执行提交或者回滚。
            3. executeSql：这个方法用于执行实际的 SQL 查询。

5. IndexDB
    1.索引数据库 (IndexedDB) API（作为 HTML5 的一部分）对创建具有丰富本地存储数据的数据密集型的离线 HTML5 Web 应用程序很有用。同时它还有助于本地缓存数据，使传统在线 Web 应用程序（比如移动 Web 应用程序）能够更快地运行和响应。
