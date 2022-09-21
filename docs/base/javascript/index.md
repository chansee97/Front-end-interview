## typeof 区分类型的原理

不同的对象在底层都表示为二进制，在Javascript中二进制前（低）三位存储其类型信息。

- 000: 对象
- 010: 浮点数
- 100:字符串
- 110: 布尔
- 1: 整数
> typeof null 为"object", 原因是因为 不同的对象在底层都表示为二进制，在Javascript中二进制前（低）三位都为0的话会被判断为Object类型，null的二进制表示全为0，自然前三位也是0，所以执行typeof时会返回"object"

## JavaScript 的作用域和作用域链

在 JavaScript 中有两种**作用域类型**：

1. 局部作用域:只能在函数内部访问它们
2. 全局作用域:网页的所有脚本和函数都能够访问它
JavaScript 拥有函数作用域：每个函数创建一个新的作用域。

作用域决定了这些变量的可访问性（可见性）。

函数内部定义的变量从函数外部是不可访问的（不可见的）。

**作用域链：**
当查找变量的时候，会先从当前上下文的变量对象中查找，
如果没有找到，就会从父级(词法层面上的父级)执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。
这样由多个执行上下文的变量对象构成的链表就叫做作用域链

## let 和 const 的块级作用域

**let:**
1. let声明的仅在块级作用域内有效，
2. let不会发生变量提升的现象，所以一定要在定义后使用，否则报错。
3. 暂时性死区：只要块级作用域内存在let命令，它所声明的变量就绑定这个区域，不再受外部影响。
4. 不允许重复声明，let不允许在相同作用域内，重复声明同一个变量：
   
**const:**
1. 声明一个只读的常量。一旦声明，常量的值就不能改变。
2. 一旦声明，就要立即初始化，否则也报错。
3. const命令声明的常量也不提升，同样存在暂时性死区，只能在声明的位置后使用。
4. 也不可以重复声明。

## 执行上下文

执行上下文有且只有三类，全局执行上下文，函数上下文，与eval上下文(eval一般不会使用)
1. 全局执行上下文：
   全局执行上下文只有一个，也就是我们熟知的window对象，我们能在全局作用域中通过this直接访问到它
2. 函数执行上下文
   函数执行上下文可存在无数个，每当一个函数被调用时都会创建一个函数上下文；
   需要注意的是，同一个函数被多次调用，都会创建一个新的上下文。

3. 执行上下文栈(下文简称执行栈)也叫调用栈，
执行栈用于存储代码执行期间创建的所有上下文，具有LIFO（Last In First Out后进先出，也就是先进后出）的特性。

JS代码首次运行，都会先创建一个全局执行上下文并压入到执行栈中，之后每当有函数被调用，都会创建一个新的函数执行上下文并压入栈内；由于执行栈LIFO的特性，所以可以理解为，JS代码执行完毕前在执行栈底部永远有个全局执行上下文。

## 闭包的问题以及优化


闭包的缺点：占用内层空间 大量使用闭包会造成 栈溢出

由于闭包会一直占用内存空间，直到页面销毁，我们可以主动将已使用的闭包销毁：
将闭包函数赋值为null 可以销毁闭包

## 如何确定 this 指向？改变 this 指向的方式有哪些？

 this 指向：
1. 方法调用模式下，this 总是指向调用它所在方法的对象，this 的指向与所在方法的调用位置有关，而与方法的声明位置无关（箭头函数特殊）；
2. 函数调用下，this 指向 window ,调用方法没有明确对象的时候，this 指向 window，如 setTimeout、匿名函数等；
3. 构造函数调用模式下，this 指向被构造的对象；
4. apply,call,bind 调用模式下，this 指向第一个参数；
5. 箭头函数，在声明的时候绑定this，它会捕获其所在（即定义的位置）上下文的this值， 作为自己的this值
6. 严格模式下，如果 this 没有被执行环境（execution context）定义，那 this是 为undefined；

改变this指向的方式：

1. new关键字改变this指向
```js
//构造函数版this
function Fn(){
    this.user = "李某";
}
var a = new Fn();
console.log(a.user); //李某
```
2. call()
```js
// 把b添加到第一个参数的环境中，简单来说，this就会指向那个对象
var a = {
    user:"李某",
    fn:function(){
        console.log(this.user); //李某
    }
}
var b = a.fn;
b.call(a);  //若不用call，则b()执行后this指的是Window对象
```
3. apply()
```js
// apply方法和call方法有些相似，它也可以改变this的指向，也可以有多个参数，但是不同的是，第二个参数必须是一个数组
var a = {
    user:"李某",
    fn:function(){
        console.log(this.user); //李某
    }
}
var b = a.fn;
b.apply(a);
```
4. bind()
```js
// bind方法返回的是一个修改过后的函数,
// bind也可以有多个参数，并且参数可以执行的时候再次添加，但是要注意的是，参数是按照形参的顺序进行的。
var a = {
    user:"李某",
    fn:function(){
        console.log(this.user); //李某
    }
}
var b = a.fn;
var c = b.bind(a);
c();

```
## 原型链的理解，原型链图示


原型链:
因为每个对象和原型都有原型，对象的原型指向原型对象，
而父的原型又指向父的父，这种原型层层连接起来的就构成了原型链。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/84d8810caa3349e989a3a6c1de44f52a~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

## ES5/ES6 的继承除写法以外还有什么区别？

1. ES5 的继承实质上是先创建子类的实例对象，然后再将父类的方法添加 到 this 上(Parent.apply(this)).
2. ES6 的继承机制完全不同，实质上是先创建父类的实例对象 this(所以必 须先调用父类的super()方法)，然后再用子类的构造函数修改 this。
3. ES5 的继承时通过原型或构造函数机制来实现。
4. ES6 通过 class 关键字定义类，里面有构造方法，类之间通过 extends 关 键字实现继承。
5. 子类必须在 constructor 方法中调用 super 方法，否则新建实例报错。因 为子类没有自己的 this对象，而是继承了父类的 this 对象，然后对其进行加工。 如果不调用 super 方法，子类得不到 this 对象。
6. 注意 super 关键字指代父类的实例，即父类的 this 对象。 注意:在子类构造函数中，调用 super 后，才可使用 this关键字，否则报错

## 事件循环

Event Loop(事件循环)中，每一次循环称为 tick, 每一次tick的任务如下：

- 执行栈选择最先进入队列的宏任务(通常是`script`整体代码)，如果有则执行
- 检查是否存在 Microtask，如果存在则不停的执行，直至清空 microtask 队列
- 更新render(每一次事件循环，浏览器都可能会去更新渲染)
- 重复以上步骤

宏任务 > 所有微任务 > 宏任务，如下图所示：
![](https://segmentfault.com/img/remote/1460000022805533)

从上图我们可以看出：

1. 将所有任务看成两个队列：执行队列与事件队列。
2. 执行队列是同步的，事件队列是异步的，宏任务放入事件列表，微任务放入执行队列之后，事件队列之前。
3. 当执行完同步代码之后，就会执行位于执行列表之后的微任务，然后再执行事件列表中的宏任务

## 微任务和宏任务有什么区别？

| 谁发起的           | 宿主（Node、浏览器）                                                                                                                               | JS引擎                                                                                                   |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 具体事件           | 1. script (可以理解为外层同步代码) 2. setTimeout/setInterval 3. UI rendering/UI事件 4. postMessage，MessageChannel 5. setImmediate，I/O（Node.js） | 1. Promise 2. MutaionObserver 3. Object.observe（已废弃；Proxy 对象替代） 4. process.nextTick（Node.js） |
| 谁先运行           | 后运行                                                                                                                                             | 先运行                                                                                                   |
| 会触发新一轮Tick吗 | 会                                                                                                                                                 | 不会                                                                                                     |

## 浏览器和 Node 事件循环的区别？

Node.js：microtask 在事件循环的各个阶段之间执行；

浏览器：microtask 在事件循环的 macrotask 执行完之后执行；

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c556ffd21edb47579088a6eaebf34c54~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)
Nodejs和浏览器的事件循环流程对比如下：

1. 执行全局的 Script 代码（与浏览器无差）；
2. 把微任务队列清空：注意，Node 清空微任务队列的手法比较特别。在浏览器中，我们只有一个微任务队列需要接受处理；但在 Node 中，有两类微任务队列：next-tick 队列和其它队列。其中这个 next-tick 队列，专门用来收敛 process.nextTick 派发的异步任务。在清空队列时，优先清空 next-tick 队列中的任务，随后才会清空其它微任务；
3. 开始执行 macro-task（宏任务）。注意，Node 执行宏任务的方式与浏览器不同：在浏览器中，我们每次出队并执行一个宏任务；而在 Node 中，我们每次会尝试清空当前阶段对应宏任务队列里的所有任务（除非达到系统限制）；
4. 步骤3开始，会进入 3 -> 2 -> 3 -> 2…的循环。

## async 和 await 、promise的区别和本质

Promise概念：

`Promise` 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大，简单地说，Promise好比容器，里面存放着一些未来才会执行完毕（异步）的事件的结果，而这些结果一旦生成是无法改变的

async await概念：

`async` `await`也是异步编程的一种解决方案，他遵循的是Generator 函数的语法糖，他拥有内置执行器，不需要额外的调用直接会自动执行并输出结果，它返回的是一个Promise对象。

两者的区别：
Promise的出现解决了传统callback函数导致的“地域回调”问题，但它的语法导致了它向纵向发展行成了一个回调链，遇到复杂的业务场景，这样的语法显然也是不美观的。而async await代码看起来会简洁些，使得异步代码看起来像同步代码，await的本质是可以提供等同于”同步效果“的等待异步返回能力的语法糖，只有这一句代码执行完，才会执行下一句。

async await与Promise一样，是非阻塞的。

async await是基于Promise实现的，可以说是改良版的Promise，它不能用于普通的回调函数。

## 移动端点击事件 300ms 延迟问题

300ms原因：

当用户第一次点击屏幕后，需要判断用户是否要进行双击操作，于是手机会等待300毫秒，

解决方法：FastClick.js

FastClick 是 FT Labs 专门为解决移动端浏览器 300 毫秒点击延迟问题所开发的一个轻量级的库。FastClick的实现原理是在检测到touchend事件的时候，会通过DOM自定义事件立即出发模拟一个click事件，并把浏览器在300ms之后的click事件阻止掉。

## 跨域是什么？有哪些解决跨域的方法和方案？

什么是跨域?

所谓的同源是指，域名、协议、端口均为相同。
所谓的跨域，不同的域名、协议、端口皆为不同域

一个域与另一个域名、协议或者端口不同的域的之间访问都叫跨域

解决跨域的方法和方案：
1. 通过服务端代理请求。如PHP，服务端语言php是没有跨域限制的，让服务器去别的网站获取内容然后返回给页面。

2. 第二种：jsonp跨域
    1. jsonp跨域就是利用script标签的跨域能力请求资源
    2. jsonp与ajax没有半毛钱关系！！
    3. 浏览器的同源策略限制了js的跨域能力，但没有限制link img iframe script 的跨域行为
    实现方式：
    1. 利用js创建一个script标签，把json的url赋给script的scr属性，
    2. 把这个script插入到页面里，让浏览器去跨域获取资源
    3. JS先声明好回调函数，插入页面后会代为执行该函数，并且传入json对象为其参数。
    注意：
    1. jsonp只针对get请求
    2. script标签加载回来的资源会被当成js在全局执行

3. CORS 跨域资源共享(xhr2)
    CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）
    它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制
    整个CORS通信过程，都是浏览器自动完成，不需要用户参与
    对于开发者来说，CORS通信与同源的AJAX通信没有差别，代码完全一样
    实现CORS通信的关键是服务器，只要服务器实现了CORS接口，就可以跨源通信

4. nginx代理跨域
    通过nginx服务器转发跨域请求，达到跨域的目的. 

## 图片懒加载


原理：随着滚轮滚动，底部的图片会被不断地加载，从而显示在页面上，按需加载，当页面需要显示图片的时候才进行加载，否则不加载

1. 页面加载完成时记录每个img标签的src值的字符串，
2. 用鼠标滚轮判断图片是否出现在屏幕，如果是，则把记录的src值赋值给src属性
3. 然后让image的src来发起请求，获取对应的图片放置到DOM树的这个位置上，从而实现图片的页面渲染！
于是就可以知道，当进入页面的时候，其实我们已经把所有的图片的这个地址信息拿到了，图片懒加载的作用就是让这个图片的src按需发起请求，获取图片。

## ES6 箭头函数和普通函数有什么差异？

1. 相比普通函数更简洁的语法
2. 没有this,捕获其所在上下文的 this 值，作为自己的 this 值
3. 不能使用new,箭头函数作为匿名函数,是不能作为构造函数的,不能使用new
4. 不绑定arguments，用rest参数...解决
    let test3=(...a)=>{console.log(a[1])} //22
5. 使用call()和apply()调用:由于 this 已经在词法层面完成了绑定，通过 call() 或 apply() 方法调用一个函数时，只是传入了参数而已，对 this 并没有什么影响：
6. 箭头函数没有原型属性
7. 不能简单返回对象字面量
    let fun5 = ()=>({ foo: x })   //如果x => { foo: x }  //则语法出错
8. 箭头函数不能当做Generator函数,不能使用yield关键字
9. 箭头函数不能换行
```JS
let a = ()
          =>1; //SyntaxError: Unexpected token =>
```
## 禁止事件冒泡，禁止默认事件

```
/*-----禁止事件冒泡:-----*/
function stopBubble(e) {
//如果提供了事件对象，则这是一个非IE浏览器
if ( e && e.stopPropagation )
    //因此它支持W3C的stopPropagation()方法
    e.stopPropagation();
else
    //否则，我们需要使用IE的方式来取消事件冒泡
    window.event.cancelBubble = true;
}

/*-----阻止浏览器的默认行为-----*/
function stopDefault( e ) {
    //阻止默认浏览器动作(W3C)
    if ( e && e.preventDefault )
        e.preventDefault();
    //IE中阻止函数器默认动作的方式
    else
        window.event.returnValue = false;
    return false;
}

```
## JS的基本数据类型判断有什么方法？

```
1.typeof：
    typeof'';// string 有效
    typeof 1;// number 有效
    typeof Symbol();// symbol 有效
    typeof true;//boolean 有效
    typeof undefined;//undefined 有效
    typeof null;//object 无效
    typeof [] ;//object 无效
    typeof new Function();// function 有效
    typeof new Date();//object 无效
    typeof new RegExp();//object 无效
2.instanceof
    instanceof 是用来判断 A 是否为 B 的实例，表达式为：A instanceof B，如果 A 是 B 的实例，则返回 true,否则返回 false。        在这里需要特别注意的是：instanceof 检测的是原型
3.constructor
当一个函数 F被定义时，JS引擎会为F添加 prototype 原型，然后再在 prototype上添加一个 constructor 属性
4.toString
toString() 是 Object 的原型方法，调用该方法，默认返回当前对象的 [[Class]] 。这是一个内部属性，其格式为 [object Xxx] ，其中 Xxx 就是对象的类型。

对于 Object 对象，直接调用 toString()  就能返回 [object Object] 。而对于其他对象，则需要通过 call / apply 来调用才能返回正确的类型信息。
    Object.prototype.toString.call('') ;  // [object String]
    Object.prototype.toString.call(1) ;   // [object Number]
    Object.prototype.toString.call(true) ;// [object Boolean]
    Object.prototype.toString.call(Symbol());//[object Symbol]
    Object.prototype.toString.call(undefined) ;// [object Undefined]
    Object.prototype.toString.call(null) ;// [object Null]
    Object.prototype.toString.call(newFunction()) ;// [object Function]
    Object.prototype.toString.call(newDate()) ;// [object Date]
    Object.prototype.toString.call([]) ;// [object Array]
    Object.prototype.toString.call(newRegExp()) ;// [object RegExp]
    Object.prototype.toString.call(newError()) ;// [object Error]
    Object.prototype.toString.call(document) ;// [object HTMLDocument]
    Object.prototype.toString.call(window) ;//[object global] window 是全局对象 global 的引用

```
## 异步函数的解决方案
1. 回调函数callback
2. 事件发布订阅
3. Promise
4. Generator
5. async/await

### new 的原理是什么？和通过字面量创建有什么区别？


new操作符的作用如下：

*   首先创建一个新的空对象
*   然后将空对象的 `__proto__` 指向构造函数的原型
    *   它将新生成的对象的 `__proto__` 属性赋值为构造函数的 `prototype` 属性，使得通过构造函数创建的所有对象可以共享相同的原型。
    *   这意味着同一个构造函数创建的所有对象都继承自一个相同的对象，因此它们都是同一个类的对象。
*   改变 `this` 的指向，指向空对象
*   对构造函数的返回值做判断，然后返回对应的值
    *   一般是返回第一步创建的空对象；
    *   但是当 **构造函数有返回值时** 则需要做判断再返回对应的值，是 **对象类型则返回该对象**，是 **原始类型则返回第一步创建的空对象**。

区别:

字面量创建不会调用 Object构造函数, 简洁且性能更好;

## 造成内存泄露的几个原因

1. 静态集合类，如HashMap、LinkedList等等。如果这些容器为静态的，那么它们的生命周期与程序一致，则容器中的对象在程序结束之前将不能被释放，从而造成内存泄漏。简单而言，长生命周期的对象持有短生命周期对象的引用，尽管短生命周期的对象不再使用，但是因为长生命周期对象持有它的引用而导致不能被回收。
2. 各种连接，如数据库连接、网络连接和IO连接等。在对数据库进行操作的过程中，首先需要建立与数据库的连接，当不再使用时，需要调用close方法来释放与数据库的连接。只有连接被关闭后，垃圾回收器才会回收对应的对象。否则，如果在访问数据库的过程中，对Connection、Statement或ResultSet不显性地关闭，将会造成大量的对象无法被回收，从而引起内存泄漏。
3. 变量不合理的作用域。一般而言，一个变量的定义的作用范围大于其使用范围，很有可能会造成内存泄漏。另一方面，如果没有及时地把对象设置为null，很有可能导致内存泄漏的发生。
4. 内部类持有外部类，如果一个外部类的实例对象的方法返回了一个内部类的实例对象，这个内部类对象被长期引用了，即使那个外部类实例对象不再被使用，但由于内部类持有外部类的实例对象，这个外部类对象将不会被垃圾回收，这也会造成内存泄露。
5. 改变哈希值，当一个对象被存储进HashSet集合中以后，就不能修改这个对象中的那些参与计算哈希值的字段了，否则，对象修改后的哈希值与最初存储进HashSet集合中时的哈希值就不同了，在这种情况下，即使在contains方法使用该对象的当前引用作为的参数去HashSet集合中检索对象，也将返回找不到对象的结果，这也会导致无法从HashSet集合中单独删除当前对象，造成内存泄露
6. 缓存泄漏
内存泄漏的另一个常见来源是缓存，一旦你把对象引用放入到缓存中，他就很容易遗忘，对于这个问题，可以使用WeakHashMap代表缓存，此种Map的特点是，当除了自身有对key的引用外，此key没有其他引用那么此map会自动丢弃此值
7. 监听器和回调
内存泄漏第三个常见来源是监听器和其他回调，如果客户端在你实现的API中注册回调，却没有显示的取消，那么就会积聚。需要确保回调立即被当作垃圾回收的最佳方法是只保存他的若引用，例如将他们保存成为WeakHashMap中的键。