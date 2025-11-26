---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 浮舱笔记
  text: Jonas 的成长之路
  tagline: 好记性不如烂键盘 Notes to Self.
  image:
    src: /logo.webp
    alt: 浮舱笔记
  actions:
    - text: 网址导航
      link: /nav
    - text: 日常笔记
      link: /daily-notes/
      theme: alt
features:
  - icon: 📖
    title: 前端学习
    details: 整理前端常用知识点<small> </small>
    link: /fe/javascript/types
    linkText: 前端常用知识
  - icon: 💡
    title: Workflow
    details: 在工作中学到的一切<small>（奇淫技巧）</small>
    link: /workflow/utils/library
    linkText: 常用工具库
  - icon: 🧰
    title: 提效工具
    details: 记录开发和日常使用中所用到一切
    link: /efficiency/online-tools
    linkText: 提效工具
  - icon: 👻
    title: 好记性不如烂键盘
    details: '<small class="bottom-small">Notes to Self.</small>'
    link: /about
---


<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .item:last-child .details {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
</style>
