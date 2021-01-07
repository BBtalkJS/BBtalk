## 前言
:::tip 什么是BBtalk？
BBtalk 利用手机微信发布碎片化思想同步至博客，基于 Leancloud。
:::

## 开始使用
### Leancloud 创建存储空间
:::warning 提示

**🌍 建议使用国际版的 LeanCloud**

因为国际版的 LeanCloud 不需要绑定**备案域名**，所以推荐使用国际版。
:::

1. 前往 [LeanCloud 国内版](https://LeanCloud.app/)，注册账号。
2. 注册完成之后根据 LeanCloud 的提示绑定手机号和邮箱。
3. 绑定完成之后点击`创建应用`，应用名称随意，接着在`存储`→`结构化数据`中创建 `class`，命名为 `content`。
4. 点击刚刚创建的`content` Class，点击`添加列`并创建名称为`content`的`列`。
5. 在菜单栏中找到`设置`→ `应用 keys`，记下来 `AppID` 、 `MasterKey` 和`Request 域名（api）` ，各个数据一般为以下形式：
    ```html
    AppID: Y5IDwC47czJFXXXXXXSlU44Y-MdYXbMMI
    MasterKey: qgrJ3nRwXXXXXXwwnVfj0uaQ
    Request 域名: https://AppID前八位.api.lncldglobal.com
    ```
### 关注微信公众号
  ![黑石哔哔](https://picup.heson10.com/img/upyun/2020/10/bbbbb.png)
  
  按照公众号的提示的命令进行绑定：

  ```
  //bindCurrentUser:您的AppID,您的MasterKey,https://您的 Request 域名
  ```
:::warning 为什么选择 “黑石哔哔” ？
公众号发文平台可以通过源码直接搭建,具体参考[BBtalk的前世今生](/thanks.html#bbtalk-%E7%9A%84%E5%89%8D%E4%B8%96%E4%BB%8A%E7%94%9F)，“黑石哔哔”当前支持图片直发功能。

如果有更好的发文平台，欢迎[PR](https://github.com/BBtalkJS/BBtalk/edit/main/docs/quick-start.md)推荐。
:::
### CDN引用
::: tip 提示
如果您使用的博客主题不支持 BBtalk，并且您不知道如何引入 BBtalk，您可以[在 Github 提交适配请求](https://github.com/BBtalkJS/BBtalk/issues/new)
:::
```html
<!-- 存放哔哔的容器 -->
<div id="bbtalk"></div>
<!-- 引用 bbtalk -->
<script src="https://cdn.jsdelivr.net/npm/bbtalk@0.1.5/dist/bbtalk.min.js"></script>
<script>
bbtalk.init({
  appId: "Y5IDwC47czJFXXXXXXSlU44Y-MdYXbMMI",
  appKey: "qgrJ3nRwXXXXXXwwnVfj0uaQ",
  serverURLs: 'https://AppID前八位.api.lncldglobal.com'
})
</script>
```
> 建议使用 CDN 引入 BBtalk 的用户在链接地址上锁定版本，以免将来 BBtalk 升级时受到非兼容性更新的影响。

## 可选配置项
### el
类型:`String`

默认值:`bbtalk`

必要性: `false`

> BBtalk 的初始化挂载器。

## 开发计划
BBtalk 现在仍处于开发阶段，这里有一些目前还不支持、但已经在计划中的特性：
- BBtalk 样式优化及多样化可变配置
- 表情转义支持
- 存储基于`腾讯CloudBase`云数据库（2.0版本）
> 需更多功能支持，请[提出需求](https://github.com/BBtalkJS/BBtalk/issues/new)
