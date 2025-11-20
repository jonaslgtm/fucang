---
title: vitepress 配置 algolia 指南
description: Pvitepress 配置 algolia 指南 (2025 最新)
date: 2025-11-19 16:35:01
tags: ["vitepress", "algolia"]
---

# vitepress 配置 algolia 指南 (2025 最新)

::: tip 背景

最近折腾 VitePress，想给自己的博客添加一个 algolia 搜索，测试了很多次都搜索不到。

记录这次成功的实操经验。

:::

## 注册 Algolia

- 打开官网：[DocSearch X Algolia](https://docsearch.algolia.com/)

![DocSearch 首页](https://cdn.jsdelivr.net/gh/jonaslgtm/fucang-imgs@latest/vitepress-algolia-deploy-01.webp)

- 点击 **[Sign up]**

第一次使用需注册登录，使用 Google 或 GitHub 账号直接登录，或者使用邮箱注册，根据自身需求选即可。

![Algolia 注册/登录页](https://cdn.jsdelivr.net/gh/jonaslgtm/fucang-imgs@latest/vitepress-algolia-deploy-02.webp)

我这里使用 GitHub 直接登录。

登录成功后不需要操作，直接关闭也可以；

然后直接点击：[创建一个新的 DocSearch 应用](https://dashboard.algolia.com/account/application/new/configure?plan=v8.5-docsearch)

会打开一个如下页面：

![DocSearch 应用创建页](https://cdn.jsdelivr.net/gh/jonaslgtm/fucang-imgs@latest/vitepress-algolia-deploy-03.webp)

::: info 说明：

Name：应用的名称，自己取一个有意义的即可。

其它默认配置即可。

:::

点击 **[Next: Apply to DocSearch]**，右下角会有创建状态，成功后会跳转到验证域名的页面：

![DocSearch 应用创建页](https://cdn.jsdelivr.net/gh/jonaslgtm/fucang-imgs@latest/vitepress-algolia-deploy-04.png)

> 根据要求操作即可。

完成之后就会跳转到 dashboard 控制面版：

![algolia dashboard ](https://cdn.jsdelivr.net/gh/jonaslgtm/fucang-imgs@latest/vitepress-algolia-deploy-05.webp)

到这里就可以获取到两个关键的参数：

- **Application ID**
- **Search API Key**

然后点击侧边栏的 **[Data sources]** 创建第三个关键参数 <font color="red">**indexName**</font>

![algolia dashboard ](https://cdn.jsdelivr.net/gh/jonaslgtm/fucang-imgs@latest/vitepress-algolia-deploy-06.webp)

为了区分，建议取个有意义的名称，方便后面自己查看。

确定后会自动跳转，不要管，点击侧边栏的 **[Data sources]** ，选择 Crawler 来配置爬虫(略)。
