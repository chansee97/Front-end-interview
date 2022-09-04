## 简述data-*属性的用法（如何设置，如何获取），有何优势？

```
data-*定义：
    1.是用于储存页面或应用程序的私有自定义数据
    2.赋予我们在所有html元素上嵌入自定义data属性的能力

data-*用法：
    1.属性名不应该包含任何大写字母，并且在前缀 "data-" 之后必须有至少一个字符
    2.属性值可以是任意字符串
    3.一个元素可以拥有任意数量的data属性
    4.data属性无法储存对象，如需储存，可通过对象序列化

data-*如何设置、获取：
    1.如何设置
        通过JavaScript内置的setAttribute('data属性名','新内容')即可设置
        通过该数据类型的(dataset) API设置data值，IE10以上才支持；
            var button = document.queryselector('button')
            button.dataset.data属性名 = '新内容' ; 这里的data属性名是指data-后面的名字

    2.如何获取
        通过JavaScript内置的getAttribute('data属性名') 即可获取
        通过该数据类型的(dataset) API设置data值，IE10以上才支持；
            var button = document.queryselector('button')
            data = button.dataset.data属性名 ; 这里的data属性名是指data-后面的名字

data-*优势：
    1.其储存的自定义数据能够被页面的JavaScript利用，可以创建更好的用户体验
    2.可以通过JavaScript来构造数据、填充数据
    3.代码体积小、较为灵活
    4.解决网站的外观和实用性之间产生的冲突

```