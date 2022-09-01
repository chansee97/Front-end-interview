module.exports = {
  // 网站标题
  title: '前端面试题库',
  titleTemplate: '前端面试题',
  // 网站描述
  description: '助力前端面试的题库',
  // 打包目录
  dest: './dist',
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: '/favicon.ico' }]
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
    nav: [{
      text: 'html',
      items: [
        {
          text: 'Changelog',
          link: '/html/'
        },
        {
          text: 'Contributing',
          link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
        }
      ]
    },
    { text: 'html', link: '/html/' },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/iam-see" }],
    // 大纲头部说明
    outlineTitle: '本页内容',
    // 边栏配置
    sidebar: {
      '/html/': [
        {
          text: 'HTML',
          collapsible: true,
          items: [
            { text: '基础', link: '/html/' },
            { text: '进阶', link: '/html/advanced' },
            { text: '高级', link: '/html/advanced' },
          ],
        },
        {
          text: 'HTML',
          items: [
            { text: '基础', link: '/html/' },
            { text: '进阶', link: '/html/advanced' },
          ],
        },
      ]
    },
    // 编辑说明
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: '在GitHub上编辑此页面'
    },
    // 尾部说明
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
}
