module.exports = {
  base: './',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性 en-US 英文
      title: '元道后台管理系统',
      description: 'VuePress template, theme, and plugin Demo. The purpose is that users can directly clone this repository as a startup project for initializing a VuePress website, and then add custom configurations and functions based on this project.'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '元道后台管理系统',
      description: ''
    }
  },
  plugins: [
    '@vuepress/back-to-top',
    ['qrcode', {
      // "/" and "/zh/" correspond to the path set by locales
      labelText: {
        "/": "QRCode",
        "/zh/": "二维码",
      },
      size: 'small',
      channel: true
    }]
  ],
  themeConfig: {

    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [
          // { text: 'Guide', link: '/guide/', ariaLabel: 'Guide' },
          // { text: 'Study', link: 'https://lwebapp.com', ariaLabel: 'Study' },
          // { text: 'Github', link: 'https://github.com/openHacking/vuepress-template' }
        ],
        sidebar: {
          '/guide/': [
            '',
            'theme',
            'plugin'
          ],
          '/components/': [
            '',
            'theme',
            'plugin'
          ],
          '/resource/': [],
        }
      },
      '/zh/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [
          { text: '入门', link: '/zh/guide/', ariaLabel: '入门' },

          {
            text: '组件', ariaLabel: '入门', items: [
              { text: '介绍', link: '/zh/components/chinese' },
              { text: '全局组件', link: '/components/japanese' },
              { text: '常用组件', link: '/zh/components/' }
            ]
          },

          // { text: '学习', link: 'https://lwebapp.com', ariaLabel: '学习' },
          // { text: 'Github', link: 'https://github.com/openHacking/vuepress-template' }
        ],
        sidebar: {
          '/zh/guide/': [
            '',
            'theme',
            'plugin'
          ],
          '/zh/components/': [
            ''
          ],
          '/zh/resource/': [],
        }
      }
    }
  },

}