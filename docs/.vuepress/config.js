module.exports = {
  title: 'BBtalk 中文文档',
  description: '利用手机微信随时随地发布碎片化思想，基于 Leancloud。',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    //  ['link', { rel: 'icon', href: '/logo.jpg' }],  增加一个自定义的 favicon(网页标签的图标)
  ],
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    lastUpdated: true,
    nav: [ // 导航栏配置
      { text: '更新日志', link: '/release' },
      { text: '鸣谢', link: '/thanks' },
      { text: '示例页面', link: 'https://www.heson10.com/bb/' }
    ],
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    sidebar: [
      ['/quick-start', '快速上手']

    ],
    logo: 'https://7.dusays.com/2021/01/06/fa6c411a0c660.png',
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'BBtalkJS/BBtalk',
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'main'
    // 默认是 false, 设置为 true 来启用
  }
};