#  React

## setState

::: details 1. React 中 setState 什么时候是同步的，什么时候是异步的？

```
// 输入代码
```

:::
::: details 2. React setState 笔试题，下面的代码输出什么？

```
class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
  }
  
  componentDidMount() {
    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 1 次 log

    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 2 次 log

    setTimeout(() => {
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 3 次 log

      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 4 次 log
    }, 0);
  }

  render() {
    return null;
  }
};
```

:::

::: details 聊聊 Redux 和 Vuex 的设计思想
```
```
:::

::: details 00. redux 为什么要把 reducer 设计成纯函数
```
```
:::