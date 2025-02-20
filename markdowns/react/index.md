![React](../../public/images/logo_light.svg)

# React

## 组件纯粹性

1. 组件都是纯函数 （啥是纯函数）

2. 局部 mutation
3. 副作用通常属于 事件处理程序

### UI 视为树

## 添加交互

### 响应事件

1. 添加事件处理函数
2. 在事件处理函数中读取 props
3. 把事件处理函数当作 props 传递
4. 命名事件处理函数 prop
5. 事件传播和阻止传播 阻止默认行为

### 组件的记忆 state

1. 如何使用 useState Hook 添加 state 变量 （局部变量无法在多次渲染中持久保存；更改局部变量不会触发渲染。）
2. useState Hook 返回哪一对值
3. 如何添加多个 state 变量
4. 为什么 state 被称作是局部的 state 完全私有于声明它的组件

### 渲染和提交

1. 在 React 中渲染的含义是什么
2. 为什么以及什么时候 React 会渲染一个组件
3. 在屏幕上显示组件所涉及的步骤
4. 为什么渲染并不一定会导致 DOM 更新

### state 如同一张快照

1.  state 如何导致重新渲染
2.  state 在何时以何种方式更新
3.  为什么 state 不在设置后立即更新
4.  事件处理函数如何获取 state 的一张“快照”

### 状态更新函数

1. 如何更新一个 state 对象
2. 更新一个嵌套对象的值 Immer
3. 更新 state 中的数组

## 状态管理

### 用 state 响应输入

1. 声明式 UI 编程与命令式 UI 编程有何不同、
2. 如何列举组件可能处于的不同视图状态
3. 如何在代码中触发不同视图状态的变化

### 组件间共享状态

1. 如何使用状态提升在组件之间共享状态
2. 什么是受控组件和非受控组件
3. 状态与渲染树中的位置相关
4. 在相同位置渲染不同的组件时，组件的整个子树都会被重置

### 迁移状态逻辑至 Reducer 中

1. 什么是 reducer 函数
2. 如何将 useState 重构成 useReducer
3. 什么时候使用 reducer
4. 如何编写一个好的 reducer
5. 使用 immer 来优化 reducer

### 使用 Context 深层传递参数

1. 什么是 “prop 逐级透传”
2. 如何使用 context 代替重复的参数传递
3. Context 的常见用法
4. Context 的常见替代方案

### Reducer 和 Context 拓展你的应用

1. 如何结合使用 reducer 和 context
2. 如何去避免通过 props 传递 state 和 dispatch
3. 如何将 context 和状态逻辑保存在一个单独的文件中

## 脱围机制

### 使用 ref 引用值

1. 如何向组件添加 ref
2. 如何更新 ref 的值
3. ref 与 state 有何不同
4. 如何安全地使用 ref

### 使用 ref 操作 DOM

1. 如何使用 ref 属性访问由 React 管理的 DOM 节点
2. ref JSX 属性如何与 useRef Hook 相关联
3. 如何访问另一个组件的 DOM 节点
4. 在哪些情况下修改 React 管理的 DOM 是安全的

### 使用 Effect 进行同步

1. 什么是 Effect
2. Effect 与事件（event）有何不同
3. 如何在组件中声明 Effect
4. 如何避免不必要地重新运行 Effect
5. 为什么 Effect 在开发环境中会运行两次以及如何解决这个问题

### 你可能不需要 Effect

1. 为什么以及如何从你的组件中移除 Effect
2. 如何在没有 Effect 的情况下缓存昂贵的计算
3. 如何在没有 Effect 的情况下重置和调整组件的 state
4. 如何在事件处理函数之间共享逻辑
5. 应该将哪些逻辑移动到事件处理函数中
6. 如何将发生的变动通知到父组件

### 响应式 Effect 的生命周期

1. Effect 的生命周期与组件的生命周期有何不同
2. 如何独立地考虑每个 Effect
3. 什么时候以及为什么 Effect 需要重新同步
4. 如何确定 Effect 的依赖项
5. 值是响应式的含义是什么
6. 空依赖数组意味着什么
7. React 如何使用检查工具验证依赖关系是否正确
8. 与代码检查工具产生分歧时，该如何处理

### 将事件从 Effect 中分开

1. 怎么在事件处理函数和 Effect 之间做选择
2. 为什么 Effect 是响应式的，而事件处理函数不是
3. 当你想要 _Effect_ 的部分代码变成非响应式时要做些什么
4. Effect Event 是什么，以及怎么从 Effect 中提取
5. 怎么使用 **_Effect Event_** 读取最新的 props 和 state

### 你可能不需要 effect

-   为什么以及如何从你的组件中移除 _Effect_
    -   如果一个值可以基于现有的 props 或 state 计算得出，不要把它作为一个 state，而是在渲染期间直接计算这个值

*   如何在没有 **Effect** 的情况下缓存昂贵的计算
    -   useMemo

-   ## 如何在没有 **Effect** 的情况下重置和调整组件的 state

*   如何在事件处理函数之间共享逻辑
    ---

-   应该将哪些逻辑移动到事件处理函数中
    > 块引用

*   如何将发生的变动通知到父组件
*   订阅尾部 store
    -   useSyncExternalStore

### 响应式 Effect 的生命周期

-   Effect 的生命周期与组件的生命周期有何不同
-   如何独立地考虑每个 Effect
-   什么时候以及为什么 Effect 需要重新同步
-   如何确定 Effect 的依赖项
-   值是响应式的含义是什么
-   空依赖数组意味着什么
-   React 如何使用检查工具验证依赖关系是否正确
-   与代码检查工具产生分歧时，该如何处理

### Hooks

-   useCallback
    + 跳过组件的重新渲染
    + 从记忆化回调中更新state
    + 防止频繁触发effect
    + 优化自定义hook
-   useContext
-   useEffect
-   useMemo
-   useReducer
-   useRef
-   useState
