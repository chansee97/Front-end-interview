## 什么是CSS hack

```
CSS hack：CSS hack是通过在CSS样式中加入一些特殊的符号，让不同的浏览器识别不同的符号（什么样的浏览器识别什么样的符号是有标准的，CSS hack就是让你记住这个标准），以达到应用不同的CSS样式的目的。

注：CSS属性Hack、CSS选择符Hack以及IE条件注释Hack， Hack主要针对IE浏览器。

例：margin属性在ie6中显示的距离会比其他浏览器中显示的距离宽2倍，也就是说margin-left:20px;在ie6中距左侧对象的实际显示距离是40px，而在非ie6中显示的距左侧对象的距离是设置的值20px;所以要想设置一个对象距离左侧对象的距离在所有浏览器中都显示是20px的宽度的样式应为：.kwstu{margin-left:20px;_margin-left:20px;}

CSS hack常见的三种形式：
    1. 属性级Hack：比如IE6能识别下划线“_”和星号“*”，IE7能识别星号“*”，但不能识别下划线”_ ”，而firefox两个都不能认识。
    2. 选择符级Hack：比如IE6能识别*html .class{}，IE7能识别*+html .class{}或者*:first-child+html .class{}。
    3. IE条件注释Hack：IE条件注释是微软IE5开始就提供的一种非标准逻辑语句。比如针对所有IE：&lt;!-[if IE]&gt;&lt;!-您的代码-&gt;&lt;![endif]&gt;，针对IE6及以下版本：&lt;!-[if it IE 7]&gt;&lt;!-您的代码-&gt;&lt;![endif]-&gt;，这类Hack不仅对CSS生效，对写在判断语句里面的所有代码都会生效。
    PS：条件注释只有在IE浏览器下才能执行，这个代码在非IE浏览下被当做注释视而不见。可以通过IE条件注释载入不同的CSS、JS、HTML和服务器代码等。

```
## 简述 viewport 所有属性


`width`：控制 viewport 的大小，可以指定的一个值，如 600，或者特殊的值，如 device-width 为设备的宽度（单位为缩放为 100% 时的 CSS 的像素）。

`height`：和 width 相对应，指定高度。

`initial-scale`：初始缩放比例，也即是当页面第一次 load 的时候缩放比例（调整页面缩放比例）。

`maximum-scale`：允许用户缩放到的最大比例。

`minimum-scale`：允许用户缩放到的最小比例。

`user-scalable`：用户是否可以手动缩放

### 42. ★★★ 手机端上图片长时间点击会选中图片，如何处理？


`img{ pointer-events:none }`禁止事件，但会把整个标签的事件都禁用掉，不建议使用

`img{ -webkit-user-select:none }`
用户选中状态

推荐：
```css
img{
    -webkit-touch-callout: none; //触摸
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
```

