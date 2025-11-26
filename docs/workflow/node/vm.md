---
title: node.js 版本管理
description: node.js 版本管理常用工具及常用命令
---

# Node.js 版本管理

## - fnm

跨平台的 `node` 版本管理工具（Fast Node Manager）

### 安装

> 安装前，需要将已安装的 `node` 卸载

```sh
# 一键安装
curl -fsSL https://fnm.vercel.app/install | bash

# brew 安装
brew install fnm
# 在 ~/.zshrc 中配置
eval "$(fnm env --use-on-cd)"
```

- [fnm | Github](https://github.com/Schniz/fnm)

### 常用命令

```sh
# 查看 fnm 版本
fnm --version

# 安装最新的 LTS 版本
fnm install --lts

# 安装指定版本的 node
fnm install <版本号>

# 使用国内源安装
fnm install 16 --node-dist-mirror=https://npmmirror.com/mirrors/node

# 卸载指定版本的 node
fnm uninstall <版本号>

# 查看已安装的 node 版本
fnm ls

# 查看官方已发布的所有版本
fnm ls-remote

# 在当前 shell 使用指定的 node 版本
fnm use <版本号>

# 设置默认 node 版本
fnm default <版本号>

# 使用指定版本来执行某个全局命令
fnm exec --using=18 node -v
```

### 在特定目录自动切换版本

在应用目录写入文件并指定特定版本

```sh
echo '14' > .node-version
# OR
echo '14' > .nvmrc
```

::: warning .node-version 或 .nvmrc 不生效

检查 `~/.zshrc` 文件是否配置了 `--use-on-cd` 参数

```sh
eval "$(fnm env --use-on-cd)"
```

:::

### 共享 npm 全局模块

`fnm` 会把不同版本的 `Node.js` 安装到特定目录，然后通过 `PATH` 环境变量方式切换，从而会导致切换版本后，全局的命令模块需要重新安装，非常不方便

#### 方案一：配置统一的全局模块安装路径

```sh
# 创建全局包目录
mkdir -p ~/.npm_global

# 配置 prefix
npm config set prefix ~/.npm_global

# 配置 shell 环境变量
echo "export PATH=~/.npm_global/bin:$PATH" >> ~/.zshrc

source ~/.zshrc
```

#### 方案二：使用 `yarn` 或 `pnpm` 安装全局包

> 个人平常使用 `yarn` 安装全局包，后续会切换到 `pnpm`

使用 `yarn` 或 `pnpm` 包管理器安装的全局包都有单独的全局目录，不依赖于 `node` 的安装目录

## - nvm

`node` 版本管理工具

> 安装前，需要将已安装的 `nodejs` 进行卸载

#### 安装和设置 - Mac

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
# OR
curl -o- https://gitee.com/mirrors/nvm/raw/v0.39.2/install.sh | bash
```

[nvm | Github](https://github.com/nvm-sh/nvm)

#### 安装和设置 - Windows

[nvm Windows 版下载地址](https://github.com/coreybutler/nvm-windows/releases)

```sh
# 设置 node 镜像
nvm node_mirror https://npmmirror.com/mirrors/node/

# 设置 npm 镜像
nvm npm_mirror https://npmmirror.com/mirrors/npm/
```

[nvm-windows | Github](https://github.com/coreybutler/nvm-windows)

#### 常用命令

```sh
# 查看 nvm 版本
nvm version

# 安装最新版的 node
nvm install latest

# 安装指定版本的 node
nvm install <版本号>

# 卸载指定版本的 node
nvm uninstall <版本号>

# 查看已安装的 node 版本
nvm ls

# 切换到指定的 node 版本
nvm use <版本号>

# 设置默认 node 版本
nvm alias default <版本号>
```
