# Css

## 区块格式化上下文

::: details 1. 介绍下 BFC、IFC、GFC 和 FFC

```
// 输入代码
```

:::
::: details 2. 介绍下 BFC 及其应用。

```
// 输入代码
```

:::

::: details 3. 怎么让一个 div 水平垂直居中，有多少种方式？

```
// 输入代码
```

:::

::: details 4. 分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景？

```
// 输入代码
```

:::
::: details . 已知如下代码，如何修改才能让图片宽度为 300px ？注意下面代码不可修改

```
// <img src="1.jpg" style="width:480px!important;”>
```

:::

::: details 00. 如何解决移动端 Retina 屏 1px 像素问题
```
1. xxx
```
:::
::: details 00. 求最终 left、right 的宽度
```
<div class="container">
    <div class="left"></div>
    <div class="right"></div>
</div>

<style>
  * {
    padding: 0;
    margin: 0;
  }
  .container {
    width: 600px;
    height: 300px;
    display: flex;
  }
  .left {
    flex: 1 2 500px;
    background: red;
  }
  .right {
    flex: 2 1 400px;
    background: blue;
  }
</style>
```


| ​**场景**​         | 剩余空间（`flex-grow`）                          | 溢出空间（`flex-shrink`）                          |
|------------------|-------------------------------------------------|---------------------------------------------------|
| ​**适用条件**​     | 子元素总宽度 < 容器宽度                         | 子元素总宽度 > 容器宽度                           |
| ​**计算比例**​     | 直接按 `flex-grow` 值的简单比例（如 `1:2`）      | 按 `flex-shrink × flex-basis` 的加权比例（如 `4:3`）|
| ​**设计目标**​     | 公平分配剩余空间                                 | 合理压缩溢出空间，大元素或高收缩系数元素压缩更多   |
| ​**计算步骤**​     | 1. 计算剩余空间<br>2. 按 `flex-grow` 分配比例扩展 | 1. 计算溢出空间<br>2. 按加权比例收缩              |
| ​**公式**​         | `最终宽度 = flex-basis + (剩余空间 × flex-grow比例)` | `最终宽度 = flex-basis - (溢出空间 × 收缩比例)`    |



:::

::: details 00. 弹性盒子中 flex: 0 1 auto 表示什么意思
```
1. xxx
```
:::

