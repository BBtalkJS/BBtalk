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
      // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
      repo: 'BBtalkJS/BBtalk',
      nav:[ // 导航栏配置
        {text: '示例页面', link: 'https://github.com/BBtalkJS/BBtalk'},
        {text: 'Github', link: 'https://github.com/BBtalkJS/BBtalk'},
        {text: 'NPM',link: 'https://www.npmjs.com/package/bbtalk' }  
      ],
      editLinks: true,
      sidebar: [
        ['/', '简介'],
        '/quick-start'
      ],
      logo: 'https://7.dusays.com/2021/01/06/fa6c411a0c660.png'
    },
    socialLinks: [     // 信息栏展示社交信息
        {link: 'https://github.com/BBtalkJS/BBtalk' },
        {link: 'https://www.npmjs.com/package/bbtalk' }
      ]
  };