---
title: 给 vitepress 配置 51LA 统计
description: 给 vitepress 配置 51LA 统计
date: 2025-11-20 08:58:02
tags: ["vitepress", "51LA"]
---

# 给 vitepress 配置 51LA 统计

::: tip 背景

记录实操经历。

:::

## 51LA 注册

官网：[51LA](https://www.51.la/)

推荐使用：[网站统计V6 版](https://v6.51.la/)

> :warning: 打不开的话先把代理关了。

::: tip 关于 51LA

免费、易用、专业的网站数据统计与营销分析平台

:::

直接手机号注册即可，也可绑定微信。

:bulb: 登录 -  产品中心 - 网站统计V6 - 应用管理 - 添加应用统计 - 查看配置获取参数

都是中文，根据要求操作即可，就不过多描述了。

## 安装 51LA 依赖

安装依赖 pnpm/npm/yarn:

``` shell
pnpm add vitepress-plugin-51la

```

插件地址：[vitepress-plugin-51la](https://www.npmjs.com/package/vitepress-plugin-51la)

## 引入插件

在 .vitepress/config.ts 配置文件中

```js
import { defineConfig } from 'vitepress'
import { La51Plugin } from 'vitepress-plugin-51la'

export default defineConfig({
  vite: {
    // ↓↓↓↓↓
    plugins: [
      La51Plugin({
        id: 'your-id',
        ck: 'your-ck'
      })
    ]
    // ↑↑↑↑↑
  }
})

```

构建后即可生效，自动向页面中注入51.la统计代码。

## 51LA 完整配置详解

```js

export interface LA51PluginOptions {
  /**
   * 动态掩码，防止 SDK 被盗刷
   */
  id: string
  /**
   * 一个网站多个统计 ID 的数据分离标识
   */
  ck: string
  /**
   * 引入方式
   * @default 'sync'
   * @doc 'sync' 同步加载，'async' 异步加载，'old' 旧式安装
   */
  importMode?: 'sync' | 'async' | 'old'
  /**
   * 生效阶段
   * @default 'build'
   * @doc 'build' 构建时生效，'serve' 开发时生效，'all' 所有阶段生效
   */
  apply?: 'build' | 'serve' | 'all'
  /**
   * 开启事件分析功能
   * @default false
   */
  autoTrack?: boolean
  /**
   * 使用单页面应用统计，如使用了Vue / React等框架构建的单页面应用网站
   * @default true
   */
  hashMode?: boolean
  /**
   * 屏幕录制
   * @default false
   */
  screenRecord?: boolean
  /**
   * 统计分析 SDK 地址
   * @default '//sdk.51.la/js-sdk-pro.min.js'
   */
  sdk?: string
  /**
   * 事件分析 SDK Prefix
   *
   * 默认和SDK同域根目录
   * 详细说明见 https://www.yuque.com/dvqnxr/ztsh8g/ysygdp#MK9RJ
   */
  prefix?: string
}

```
