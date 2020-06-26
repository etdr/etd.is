
// import markdownIt from 'markdown-it'
const markdownIt = require('markdown-it')
const markdownItSub = require('markdown-it-sub')
const markdownItSup = require('markdown-it-sup')
const markdownItFootnote = require('markdown-it-footnote')
const markdownItDeflist = require('markdown-it-deflist')
// import markdownItAbbr from 'markdown-it-abbr'
const markdownItEmoji = require('markdown-it-emoji')
// import markdownItContainer from 'markdown-it-container'
// import markdownItIns from 'markdown-it-ins'
const markdownItMark = require('markdown-it-mark')
const markdownItAttrs = require('markdown-it-attrs')

const fm = require('front-matter')

// const markdown = markdownIt({
//   html: true,
//   breaks: false,
//   typographer: true,
//   // quotes: '“”‘’'
//   wrapper: 'article'
// })

// markdown.use(markdownItSub)
//   .use(markdownItSup)
//   .use(markdownItFootnote)
//   .use(markdownItDeflist)
//   .use(markdownItEmoji)
//   .use(markdownItMark)

module.exports = {
  chainWebpack: config => {
    config.module.rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      // .options({
      //   raw: true,
      //   wrapper: 'article'
      // })
      // .options(markdown)
      // .options({
      //   markdown,
      //   raw: true,
      //   wrapper: 'article'
      // })
      .options({
        raw: true,
        wrapper: 'article',
        typographer: true,
        breaks: false,
        use: [
          markdownItSub, markdownItSup, markdownItFootnote, markdownItDeflist,
          markdownItEmoji, markdownItMark, markdownItAttrs
        ],
        preprocess: function (markdownIt, source) {
          return fm(source)
        }
      })
      .end()
      .end()

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()

    svgRule
      // .include.add(process.cwd() + '/src/assets/icons').end()
      .use('svgicon-loader')
      .loader('@yzfe/vue-svgicon-loader')
      .options({
        idSeparator: '_',
        svgFilePath: process.cwd() + '/src/assets/icons'
      })
      // .end()

    config.module
      .rule('vue')
      // .test(/\.vue$/)
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.transformAssetUrls = options.transformAssetUrls || {}
        options.transformAssetUrls.icon = ['data']
        return options
        // transformAssetUrls: {
        //   icon: 'data'
        // }
      })
    // console.log(config.module)
  }
}
