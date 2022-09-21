module.exports = {
  // 网站标题
  title: '前端知识库',
  titleTemplate: '前端知识库',
  // 网站描述
  description: '积累知识，形成体系',
  // 打包目录
  outDir: '../dist',
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: '/favicon.svg' }]
  ],
  // 使用插件
  plugins: [
    '@vuepress/active-header-links',   // 页面滚动时自动激活侧边栏链接的插件
    '@vuepress/back-to-top',          // 返回顶部插件
    '@vuepress/medium-zoom',          // 图片预览插件
    '@vuepress/nprogress',        //页面顶部进度条
  ],
  // 主题配置
  themeConfig: {
    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    lastUpdated: 'Last Updated', // string | boolean
    // 启动页面丝滑滚动
    smoothScroll: true,
    // 导航栏配置
    nav: [
      { text: '基础知识', link: '/base/html/elementary' },
      {
        text: '开发配置',
        items: [
          {
            text: '开发环境/工具',
            link: '/devEnv/dev/vscode'
          }
        ]
      },
      {
        text: '常用文档',
        items: [
          {
            text: 'Vue3',
            link: 'https://cn.vuejs.org/'
          },
          {
            text: 'Vue2',
            link: 'https://v2.cn.vuejs.org/'
          }
        ]
      },

    ],
    socialLinks: [{ icon: "github", link: "https://github.com/iam-see" }],
    // 大纲头部说明
    outlineTitle: '本页内容',
    // 边栏配置
    sidebar: {
      '/base/': [
        {
          text: 'HTML',
          collapsible: true,
          items: [
            { text: '基础', link: '/base/html/elementary' },
            { text: '中等', link: '/base/html/medium' },
            { text: '进阶', link: '/base/html/advanced' },
          ],
        },
        {
          text: 'CSS',
          collapsible: true,
          items: [
            { text: '基础', link: '/base/css/elementary' },
            { text: '中等', link: '/base/css/medium' },
            { text: '进阶', link: '/base/css/advanced' },
          ],
        },
        {
          text: 'JavaScript',
          collapsible: true,
          items: [
            { text: '基础', link: '/base/javascript/' },
          ],
        },
        {
          text: '网络',
          collapsible: true,
          items: [
            { text: '基础', link: '/base/net/' },
          ],
        },
        {
          text: '浏览器',
          collapsible: true,
          items: [
            { text: '基础', link: '/base/browser/' },
          ],
        },
      ],
      '/devEnv/': [
        {
          text: '开发工具',
          collapsible: true,
          items: [
            { text: 'VScode', link: '/devEnv/dev/vscode' },
            { text: 'Git', link: '/devEnv/dev/git' },
            { text: 'typora', link: '/devEnv/dev/typora' },
            { text: 'PicGo', link: '/devEnv/dev/PicGo' },
            { text: 'ApiFox', link: '/devEnv/dev/apifox' },
            { text: 'massCode', link: '/devEnv/dev/massCode' },
            { text: 'Responsively', link: '/devEnv/dev/Responsively' },
          ],
        },
        {
          text: '开发环境',
          collapsible: true,
          items: [
            { text: 'NodeJs', link: '/devEnv/env/nodejs' },
            { text: 'MySQL', link: '/devEnv/env/mySQL' },
            { text: 'phpstudy', link: '/devEnv/env/phpstudy' },
            { text: 'docker', link: '/devEnv/env/docker' },
          ],
        }
      ],
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
}
