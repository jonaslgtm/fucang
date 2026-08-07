# AGENTS.md

## 项目概述

`fucang`（浮舱笔记）是一个基于 **VitePress 1.x** 的个人中文技术笔记站点，内容全部为中文，托管在 GitHub Pages（`https://blog.fucang.top/`）。

- 包管理：**pnpm 9.15.5**（`packageManager` 已固定），Node 20
- 技术栈：VitePress + Vue 3 + Tailwind CSS 3（`@femm/tailwind-config` preset）+ SCSS
- 所有代码在 `docs/` 下，VitePress 配置在 `docs/.vitepress/`

## 常用命令

| 命令 | 作用 |
|---|---|
| `pnpm dev` | 开发服务器，端口 **8732**（会先运行 generate-index） |
| `pnpm build` | 构建到根目录 `dist/`（outDir 为 `../dist`），会先运行 generate-index |
| `pnpm preview` | 预览构建产物，端口 **8730** |
| `pnpm lint` | prettier --write 格式化（prettier 配置来自 `@femm/prettier`） |
| `pnpm generate-index` | 手动重新生成 `docs/daily-notes/index.md` |

注意：`package.json` 里配置了 husky + lint-staged，但 `.husky/` 下**没有实际 hook**，提交时不会自动格式化，不要依赖它。

## 内容结构

- `docs/daily-notes/{YYYY}/*.md` — 日常笔记，按年份分目录
- `docs/fe/` — 前端学习（javascript / typescript / css / html / es6 / browser / network / concept）
- `docs/workflow/` — 开发工作流（git / node / sass / utils / library / terminal）
- `docs/efficiency/` — 提效工具与软件推荐
- `docs/nav/` — 导航页，数据在 `data.ts`（`NAV_DATA`，类型来自 `.vitepress/theme/types.ts`）
- `docs/home/` — 首页自定义组件与友链数据（`friend-data.ts`）
- `docs/about.md`、`docs/be/index.md` — 单页内容

## 关键机制（最容易踩坑）

### 日常笔记的 frontmatter 驱动一切

新增笔记到 `docs/daily-notes/{YYYY}/` 时，**必须在 frontmatter 里写 `title` 和 `date`**：

```markdown
---
title: 笔记标题
date: 2026-04-12 08:35:00
tags: ["opencode","ai"]
---
```

- `docs/.vitepress/utils/auto-sidebar.ts` — 运行 `dev`/`build` 时自动根据 title+date 生成 `/daily-notes/` 侧边栏（按日期倒序，带 mtime 缓存）
- `docs/.vitepress/utils/generate-index.ts` — 自动生成 `docs/daily-notes/index.md`（按年份分组统计）

**`docs/daily-notes/index.md` 是生成文件，不要手改** —— 直接运行 `pnpm generate-index`（或 dev/build）重新生成。该文件会被提交到 git，但只有重新生成时才更新，可能滞后于新增的笔记。

### 链接格式

`cleanUrls: true` 已开启，所有内部链接**不带 `.md` 扩展名**，例如 `/fe/javascript/types`、`/daily-notes/2026/xxx`。目录链接以 `/` 结尾。

### 主题与自定义配置

- 自定义主题组件统一 `M` 前缀（`MLayout.vue`、`MNavLinks.vue` 等），位于 `.vitepress/theme/components/`
- `env.d.ts` 扩展了 `DefaultTheme.Config`，新增 `visitor`（51LA 统计）和 `comment`（giscus 评论）字段
- 导航页 `docs/nav/data.ts` 的图标支持 URL 或 `{ svg: '...' }`，也支持站内 `/icons/...` 资源
- 站点 `base` 可通过环境变量 `APP_BASE_PATH` 覆盖（默认 `/`），部署时不设置

## 部署

`.github/workflows/deploy.yml`：push 到 `main` 分支且变更涉及 `docs/**` 或 `package.json` 时触发（也支持 `workflow_dispatch`），执行 `pnpm install && pnpm build` 后用 `gh-pages` 分支部署 `dist/`。Node 20 + pnpm。

## 规范与约定

- **所有对话、文档、提交信息使用中文**（提交历史风格如「更新 data.ts」「导航更新」「创建 xxx.md」）
- 修改 `nav.ts` / `sidebar.ts` / `data.ts` 时，注意配置里保留了大量被注释的旧条目，新增条目按现有结构追加即可
- SCSS 预处理使用 `api: 'modern-compiler'`，不要改回旧的 `data` API
- `patches/` 下有 pnpm patch（`vite-plugin-markdown-preview`），该库升级需要同步更新 patch
