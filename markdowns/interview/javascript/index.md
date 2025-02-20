# interview Javascript

## 防抖节流


::: details 什么是防抖和节流？有什么区别？如何实现？
```
1. xxx
```
:::


::: details 1. ['1', '2', '3'].map(parseInt) what & why ?

```
结果：[1,NaN,NaN]

parseInt('1',0)   
parseInt('2',1) 
parseInt('1',2) 

parseInt(string, radix) 接收两个参数，第一个表示被处理的值（字符串），第二个表示为解析时的基数。
radix的值位于2-36整数 ,默认为10。表示上述字符串的基数。 否则返回NaN

在radix为 undefined，或者radix为 0 或者没有指定的情况下，JavaScript 作如下处理：

如果字符串 string 以"0x"或者"0X"开头, 则基数是16 (16进制).
如果字符串 string 以"0"开头, 基数是8（八进制）或者10（十进制），那么具体是哪个基数由实现环境决定。ECMAScript 5 规定使用10，但是并不是所有的浏览器都遵循这个规定。因此，永远都要明确给出radix参数的值。
如果字符串 string 以其它任何值开头，则基数是10 (十进制)。

注 parseInt('5', 4) 返回NaN，因为5 不是合法的4进制数字

```
:::


::: details 3. 介绍下 Set、Map、WeakSet 和 WeakMap 的区别？
```
1. xxx
```
:::


::: details 4. ES5/ES6 的继承除了写法以外还有什么区别？
```
1. xxx
```
:::

::: details 5. setTimeout、Promise、Async/Await 的区别
```
1. xxx
```
:::

::: details 6. Async/Await 如何通过同步的方式实现异步
```
1. xxx
```
:::

::: details 7. Promise 构造函数是同步执行还是异步执行，那么 then 方法呢？
```
1. xxx
```
:::

::: details 8. 如何实现一个new
```
1. xxx
```
:::

::: details 9. 有以下 3 个判断数组的方法，请分别介绍它们之间的区别和优劣
```
1. xxx
```
:::
::: details 10. 全局作用域中，用 const 和 let 声明的变量不在 window 上，那到底在哪里？如何去获取别和优劣
```
1. xxx
```
:::

::: details 11. cookie 和 token 都存放在 header 中，为什么不会劫持 token？
```
1. xxx
```
:::

::: details 12. 实现一个 sleep 函数
```
1. 比如 sleep(1000) 意味着等待1000毫秒，可从 Promise、Generator、Async/Await 等角度实现 
```
:::


::: details 13. call 和 apply 的区别是什么，哪个性能更好一些
```
1. xxx
```
:::
::: details 00. 箭头函数与普通函数（function）的区别是什么？构造函数（function）可以使用 new 生成实例，那么箭头函数可以吗？为什么？
```
1. xxx
```
:::

::: details 00. 模拟实现一个 Promise.finally
```
1. xxx
```
:::

::: details 00. a.b.c.d 和 a['b']['c']['d']，哪个性能更高？
```
1. xxx
```
:::


::: details 00.  使用 JavaScript Proxy 实现简单的数据绑定
```
1. xxx
```
:::
::: details 00. 数组里面有10万个数据，取第一个元素和第10万个元素的时间相差多少
```
1. xxx
```
:::

::: details 00. 介绍下 Promise.all 使用、原理实现及错误处理
```
1. xxx
```
:::

::: details 00. var、let 和 const 区别的实现原理是什么
```
1. xxx
```
:::


::: details 00. 设计并实现 Promise.race()
```
1. xxx
```
:::
::: details 00. 实现 Promise.retry，成功后 resolve 结果，失败后重试，尝试超过一定次数才真正的 reject
```
1. xxx
```
:::

::: details 00. vue 在 v-for 时给每项元素绑定事件需要用事件代理吗？为什么？
```
1. xxx
```
:::
::: details 00. 模拟实现一个深拷贝，并考虑对象相互引用以及 Symbol 拷贝的情况
```
1. xxx
```
:::

::: details 00. 用最精炼的代码实现数组非零非负最小值 index
```
1. xxx
```
:::



