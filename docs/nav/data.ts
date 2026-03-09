import type { NavData } from '../.vitepress/theme/types'

const icon = (url: string) =>
  `https://www.google.com/s2/favicons?domain=${url}&sz=64`

export const NAV_DATA: NavData[] = [

  {
    title: '🌐 社区',
    items: [
      { title: 'Github', link: 'https://github.com', icon: { svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>' }, badge: '社区', desc: '全球最大代码托管平台' },
      { title: '知乎', link: 'https://www.zhihu.com/', icon: 'https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png', badge: '社区', desc: '高质量中文问答社区' },
      { title: '微博', link: 'https://weibo.com/hot/search', icon: 'https://weibo.com/favicon.ico', badge: '资讯', desc: '实时热点与社交平台' },
      { title: '小红书', link: 'https://www.xiaohongshu.com', icon: 'https://www.xiaohongshu.com/favicon.ico', badge: '内容', desc: '生活方式分享平台' },
      { title: '什么值得买', link: 'https://www.smzdm.com/', icon: 'https://www.smzdm.com/favicon.ico', badge: '导购', desc: '购物推荐与优惠信息平台' },
      { title: '微信公众平台', link: 'https://mp.weixin.qq.com/', icon: 'https://mp.weixin.qq.com/favicon.ico', badge: '运营', desc: '公众号管理后台' },
      { title: 'Apple', link: 'https://www.apple.com.cn/', icon: 'https://www.apple.com.cn/favicon.ico', badge: '品牌', desc: '苹果官网' },
      { title: '稀土掘金', link: 'https://juejin.cn', icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png', badge: '社区', desc: '中文开发者技术社区' },
      { title: 'V2EX', link: 'https://www.v2ex.com', icon: 'https://www.v2ex.com/static/icon-192.png', badge: '社区', desc: '创意工作者社区' },
      { title: 'Stack Overflow', link: 'https://stackoverflow.com', icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a', badge: '问答', desc: '全球程序员问答社区' },
    ]
  },

  {
    title: '🎬 娱乐',
    items: [
      { title: '抖音', link: 'https://www.douyin.com/', icon: 'https://www.douyin.com/favicon.ico', badge: '视频', desc: '短视频娱乐平台' },
      { title: 'Bilibili', link: 'https://www.bilibili.com', icon: '/icons/bilibili-com.png', badge: '视频', desc: '年轻人文化社区与视频平台' },
      { title: 'YouTube', link: 'https://www.youtube.com', icon: '/icons/youtube.svg', badge: '视频', desc: '全球最大视频平台' },
      { title: 'Instagram', link: 'https://www.instagram.com/', icon: '/icons/instagram.svg', badge: '社交', desc: '图片与短视频社交平台' },
      { title: 'TikTok', link: 'https://www.tiktok.com/', icon: 'https://www.tiktok.com/favicon.ico', badge: '视频', desc: '国际版短视频平台' }
    ]
  },

  {
    title: '🤖 AI 工具',
    items: [
      { title: 'DeepSeek', link: 'https://chat.deepseek.com/', icon: 'https://www.deepseek.com/favicon.ico', badge: 'AI', desc: '国产大模型对话助手' },
      { title: 'Cursor', link: 'https://cursor.sh/', icon: '//cursor.com/marketing-static/favicon-light.ico', badge: 'AI', desc: 'AI 驱动的代码编辑器' }
    ]
  },

  {
    title: '💻 开发环境',
    items: [
      { title: 'VS Code', link: 'https://code.visualstudio.com/', icon: 'https://code.visualstudio.com/favicon.ico', badge: 'IDE', desc: '主流轻量级代码编辑器' },
      { title: 'JetBrains', link: 'https://www.jetbrains.com/', icon: 'https://www.jetbrains.com/favicon.ico', badge: 'IDE', desc: '专业开发工具套件' },
      { title: 'Sublime Text', link: 'https://www.sublimetext.com/', icon: 'https://www.sublimetext.com/favicon.ico', badge: '编辑器', desc: '轻量快速文本编辑器' },
      { title: 'phpStudy', link: 'https://www.xp.cn/phpstudy', icon: 'https://www.xp.cn/favicon.ico', badge: '环境', desc: '本地 PHP 开发环境集成工具' }
    ]
  },

  {
    title: '⚛️ 前端',
    items: [
      { title: 'Vite', link: 'https://cn.vitejs.dev', icon: 'https://cn.vitejs.dev/logo.svg', badge: '构建', desc: '下一代前端构建工具' },
      { title: 'React', link: 'https://zh-hans.reactjs.org', icon: 'https://zh-hans.reactjs.org/favicon.ico', badge: '框架', desc: '用于构建 UI 的前端框架' },
      { title: 'Vue 3', link: 'https://cn.vuejs.org', icon: 'https://cn.vuejs.org/logo.svg', badge: '框架', desc: '渐进式 JavaScript 框架' },
      { title: 'Webpack', link: 'https://www.webpackjs.com', icon: 'https://www.webpackjs.com/icon_180x180.png', badge: '构建', desc: '模块打包工具' },
      { title: 'TailwindCSS', link: 'https://tailwind.org.cn/', icon: '/icons/tailwindcss.png', badge: 'CSS', desc: '原子化 CSS 框架' },
      { title: 'PostCSS', link: 'https://postcss.org', icon: '/icons/postcss.svg', badge: 'CSS', desc: 'CSS 转换工具链' },
      { title: 'Sass', link: 'https://sass-lang.com', icon: '/icons/sass.svg', badge: 'CSS', desc: 'CSS 预处理器' }
    ]
  },
  {
    title: '🗄️ 后端',
    items: [
      { title: 'Node.js', link: 'https://nodejs.org/zh-cn', icon: 'https://nodejs.org/static/images/favicons/favicon.png', badge: '后端', desc: 'JavaScript 运行时环境' },
      { title: 'PHP', link: 'https://www.php.net/', icon: 'https://www.php.net/favicon.ico', badge: '后端', desc: '经典服务端语言' },
      { title: 'Python', link: 'https://www.python.org/', icon: 'https://www.python.org/favicon.ico', badge: '后端', desc: '通用编程语言' },
      { title: 'ThinkPHP', link: 'https://www.thinkphp.cn/', icon: 'https://www.thinkphp.cn/favicon.ico', badge: '框架', desc: 'PHP 开发框架' }
    ]
  },

  {
    title: '🗃️ 数据库',
    items: [
      { title: 'MySQL', link: 'https://www.mysql.com/', icon: 'https://labs.mysql.com/common/themes/sakila/favicon.ico', badge: '数据库', desc: '主流关系型数据库' },
      { title: 'Navicat', link: 'https://www.navicat.com.cn/products/navicat-premium-lite', icon: 'https://www.navicat.com.cn/images/Navicat_16_Premium_win_256x256.ico', badge: '工具', desc: '数据库管理工具' }
    ]
  },

  {
    title: '🌉 跨端开发',
    items: [
      { title: 'Electron', link: 'https://www.electronjs.org/zh/', icon: '/icons/electron.svg', badge: '框架', desc: '桌面应用开发框架' },
      { title: 'Tauri', link: 'https://tauri.app/zh-cn/', icon: '/icons/tauri.png', badge: '框架', desc: '轻量级桌面应用框架' },
      { title: 'Taro', link: 'https://taro.jd.com', icon: '/icons/taro.svg', badge: '跨端', desc: '多端统一开发框架' },
      { title: 'uni-app', link: 'https://uniapp.dcloud.net.cn', icon: 'https://web-assets.dcloud.net.cn/unidoc/zh/icon.png', badge: '跨端', desc: '一套代码多端发布框架' },
      { title: 'Mpx', link: 'https://mpxjs.cn', icon: 'https://mpxjs.cn/favicon.ico', badge: '跨端', desc: '增强型小程序开发框架' }
    ]
  },

  {
    title: '🚀 运维',
    items: [
      { title: '阿里云', link: 'https://www.aliyun.com/', icon: 'https://img.alicdn.com/tfs/TB1_ZXuNcfpK1RjSZFOXXa6nFXa-32-32.ico', badge: '云', desc: '云计算服务平台' },
      { title: '宝塔', link: 'https://www.bt.cn/', icon: 'https://www.bt.cn/favicon.ico', badge: '运维', desc: '服务器管理面板' },
      { title: '1Panel', link: 'https://1panel.cn/', icon: 'https://1panel.cn/favicon.png', badge: '运维', desc: '开源 Linux 面板' },
      { title: '站长之家', link: 'https://tool.chinaz.com/', icon: 'https://csstools.chinaz.com/favicon.ico', badge: '工具', desc: '站长工具集合' },
      { title: '51LA', link: 'https://www.51.la/', icon: '/icons/51la.ico', badge: '统计', desc: '网站流量统计工具' },
      { title: '易名中国', link: 'https://www.ename.com/', icon: 'https://www.ename.com/favicon.ico', badge: '域名', desc: '域名注册与交易平台' },
      { title: '公网安备', link: 'https://beian.mps.gov.cn/#/', icon: 'https://beian.mps.gov.cn/favicon.ico', badge: '备案', desc: '网站备案服务入口' }
    ]
  },

  {
    title: '📚 学习 & 文档',
    items: [
      { title: 'MDN', link: 'https://developer.mozilla.org/zh-CN', icon: 'https://developer.mozilla.org/favicon.ico', badge: '文档', desc: '权威 Web 技术文档' },
      { title: 'TypeScript', link: 'https://www.typescriptlang.org/zh/', icon: 'https://www.typescriptlang.org/icons/icon-72x72.png?v=8944a05a8b601855de116c8a56d3b3ae', badge: '文档', desc: 'JS 类型系统官方文档' },
      { title: '菜鸟教程', link: 'https://www.runoob.com', icon: 'https://www.runoob.com/favicon.ico', badge: '教程', desc: '编程入门教程平台' },
      { title: 'ES6 教程', link: 'http://es6.ruanyifeng.com', icon: '/icons/es6.svg', badge: '教程', desc: 'ES6 系统教程' },
      { title: 'Markdown 教程', link: 'https://markdown.com.cn/', icon: 'https://markdown.com.cn/favicon.ico', badge: '文档', desc: 'Markdown 使用指南' },
      { title: 'Frontend Weekly', link: 'https://frontender-ua.medium.com', icon: '/icons/frontender-ua.png', badge: '资讯', desc: '前端技术周刊' },
      { title: '鸟哥 Linux', link: 'https://man.niaoge.com/', icon: 'https://man.niaoge.com/public/img/favicon.ico', badge: '教程', desc: '经典 Linux 学习资料' },
      { title: 'Python 教程', link: 'https://github.com/qiwsir/PythonBook', icon: 'https://lqlab.readthedocs.io/en/latest/_static/icon.ico', badge: '教程', desc: 'Python 入门书籍' }
    ]
  },

  {
    title: '📝 协作 & 笔记',
    items: [
      { title: 'Notion', link: 'https://www.notion.so', icon: 'https://www.notion.com/front-static/favicon.ico', badge: '笔记', desc: '一体化知识管理工具' },
      { title: '石墨文档', link: 'https://shimo.im/', icon: 'https://shimo.im/favicon.ico', badge: '文档', desc: '在线文档协作工具' },
      { title: '腾讯文档', link: 'https://docs.qq.com/', icon: 'https://docs.idqqimg.com/tim/docs/desktop/favicon.ico', badge: '文档', desc: '腾讯在线文档工具' },
      { title: '金山文档', link: 'https://www.kdocs.cn/', icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACH1BMVEUAAAA9kP8mpv9Fv/8QT94TXeQAfv8trP0xr/0VUdoAcv8LgPs1sf4AgP4QUuURTuEVl/ksq/wAg/84tf4NUt80sf0bnPsPUuAAYfsAgP4UTtYAY/8GXPQRkv1Jxv8AZP86tv9Bvv9Gv/9Atv8KiPUOVesAZ+wbS8wUl/kjo/sAYv8PVekjovxBu/8AY/8trPxCu/8AW/AAcvAxsP0npvsYTdElo/oQT9o+uP8AYv8KVOIHdugAYfwAfPwbfe49uf4XmfkcdOopo/oAYv86tf4AYf8TT9cZaeYVTdUJVOUcnvsAYv8Agv9Iwv8AYv9Jwf8bSs0gofoAY/8Ag/9Gv/8en/oAYf9Fv/8AWuQZS80AdO5BvP8AYv9DvP8Umfo9uv8LVOUAgf8amfk/uf8AY/8Ag/8Ahf8TUdgVT9UNWOknov8trPwxr/wmpvspqfs1sv0io/s5tf0AgP8bnfoMV+4AYPoAYv8AYf4AYfwAe/sen/oAd/gAXvYAff0LW/MLWfEOUN0PT9oSTtZAu/49uP0qqfweoPoXmvkAdPUAXPIAcfEKUuIWTNIXS88KXPYAWusOVeoPVOkPUuYQUeQQT+IMUeAUTdMZSs09uP4Aa+kAWOgAaeQIVOQIU+QAV+MRTd8STd0RTtgSl/kAW+8NWO8Abu0AbuwBZNsAg/8AYPwAc/MIVecAZuEAVeAAWt8AZN0JgvAIfOsJV+sTVuIAU9qil9AQAAAAa3RSTlMAAwb++A3+bkkkGxL8+Pf36tnTubCYjol4dmVjRjEvLysZFA7+/Pv6+fj39/b19fPw8O/u7Ovq6Ofn5+Xj4uDa2trZ1dPS0s/Ny7+9vLi4trapoqGgoJ2XkI+KgoJycGRhX1BNS0pHQj06IcCB3jkAAAIBSURBVDjLdZCHctpAFEWfCMU1ce8tTu+99957770nJFGwkE1sgyMTAginYbkAIQSD494+0G+ltTAacWZnNLt7dO/Og3Tqzl2og8wsvroAudEI+iy5s+6LzMZ7Bp1r5sFOQegRenAJwoEnoCXr6Mc0ihvSrhuK32vJK21Mva00760OWyz0KZYNbzJQmKXUF1o7rZ24rGngweETIGOwbH2nw/ZDUaM6grJVHzSs3R+NoqDy+lKLuwWX2618r03/QRalhNzbewo+qZyuZX4TVMFQubm3f3xy5VeZg49xsL8IC+mUH+1zeLyJ3pHkRCwWK7hvIGc/CYrwvIhtbXZ4hgYwJLm0LFf56QdhDRAq8wdZMypD3kT/SBJo6nfCMmWTc2WQlUO8GDIn2GSAUnuWGERJpIS4LR4HlWdFNITua9pl5s3h5vJ81tzscAAhuyTc3kZQ51CxqasvMmDGENyZyo1BX2iqLRAI0L7qvU2fv6Ex5mVbgana4XIGfb7QsI0KNcc4O4/Gv67I6Jjn5cmOvy4nGuFwaFipqFjN2YlBQkZn/N0dxAhiSfjUKzqHyxwq/0lIX0T0d6OAGb7dD0Gl/gzH8UqN6JcNp7HcBPN5esTO8U2oSCIpcZVkgwamepedxxpJROP4C9DBdHc9vlWSxG1VDOiTc53jpRW3TJCZ+vMXNeWzDz4DoNZyqecAAAAASUVORK5CYII=', badge: '文档', desc: 'WPS 在线文档' },
      { title: '飞书', link: 'https://www.feishu.cn/', icon: 'https://www.feishu.cn/favicon.ico', badge: '协作', desc: '企业协作平台' },
      { title: '语雀', link: 'https://www.yuque.com/', icon: 'https://mdn.alipayobjects.com/huamei_0prmtq/afts/img/A*vMxOQIh4KBMAAAAAAAAAAAAADvuFAQ/original', badge: '笔记', desc: '知识管理与文档平台' }
    ]
  },

  // {
  //   title: '🧰 其他',
  //   items: [

  //   ]
  // },

  {
    title: '💰 变现',
    items: [
      { title: '京东联盟', link: 'https://union.jd.com/', icon: '/icons/jd.svg', badge: '联盟', desc: '京东推广联盟平台' },
      { title: '淘宝联盟', link: 'https://pub.alimama.com/', icon: 'https://www.taobao.com/favicon.ico', badge: '联盟', desc: '阿里电商推广平台' },
      { title: '多多进宝', link: 'https://jinbao.pinduoduo.com/', icon: 'https://pinduoduo.com/favicon.png', badge: '联盟', desc: '拼多多推广平台' }
    ]
  }
]
