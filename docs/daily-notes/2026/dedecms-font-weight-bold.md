---
title: 解决 DedeCMS 文章推荐后列表页标题自动加粗问题
date: 2026-01-20 14:35:40
tags: ["DedeCMS","网站问题"]
---

# 解决 DedeCMS 文章推荐后列表页标题自动加粗问题

::: tip 背景

文章推荐后列表页标题自动加粗，不是我想要的。

记录解决方法备用。

:::

## 方法1：修改 DedeCMS 源文件

编辑站点目录下 include 文件夹中的 arc.listview.class.php 文件（使用记事本或编辑器打开）.

Ctrl + F 搜索：

``` PHP
$row['title'] = "<b>".$row['title']."</b>";

```

修改为：

``` PHP
$row['title'] = $row['title'];

```

保存文件，在后台重新生成栏目即可。

**或者直接注释掉整个 if 语句：**

``` php
//if(preg_match('/c/', $row['flag']))
//  {
//      $row['title'] = "<b>".$row['title']."</b>";
//  }

```

保存文件，在后台重新生成栏目即可解决文章推荐后列表页标题自动加粗问题。

**这个方法简单粗爆，但对于后期维护可能会增加困难（系统更新可能会覆盖等问题），不建议作为首选。**

## 方法2：利用 CSS 控制不加粗

通过查看生成的列表页 html, 有推荐属性的会多一个 `<b></b>`标签，经过测试，可以直接写 CSS 去掉加粗样式。

用到的是 CSS 定义字体粗细的属性：

```CSS
font-weight:normal|bold|bolder|lighter|100-900|inherit;

```

核心代码：`font-weight：normal;`

`normal` 定义字体为正常/标准大小的字符。

去掉加粗 CSS 代码(实例)：

```CSS
.item b{font-weight:normal}
.item strong{font-weight:normal} /* 有的地方可能是 strong 标签 */

```

刷新页面即可。

**个人更倾向于此方法，不需要修改源文件，后续系统升级更新也不影响。**
