:::  details TCP三次握手和四次挥手
 [TCP三次握手和四次挥手](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/15)

三次握手

1. 客户端发送一个SYN=1 seq=x 
2. 服务端接收后回复  ACK=1 SYN=1 seq=y  ack= x+1
3. 客户端收到回复，确认连接 再次发送包 ACK=1  seq=x+1  ack=y+1

四次挥手
1. 客户端请求断开连接 发送：FIN=1 seq=x的包
2. 服务端收到断开请求 发送：ACK=1 ack=x+1,在此期间可能尚有数据响应传输
3. 服务器确认数据传输完毕，发送：FIND=1 seq=y 表示同意端开
4. 客户端接收到同意端口的请求 发送ACK=1 ack=y+1表示确认断开连接
5. 服务端接收最后一个包断开连接，客户端发送最后一个包后等带2 MSL（两个最大生命周期）直接断开


:::

:::  details http2的多路复用

[解析](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/14)
:::

:::  details https握手过程

[解析](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/70)
:::

:::  details cookie 和 token 都存放在 header 中，为什么不会劫持 token

```

```
:::

:::  details 浏览器缓存读取规则

[http缓存](https://juejin.cn/post/6844903747357769742?utm_source=gold_browser_extension)
:::