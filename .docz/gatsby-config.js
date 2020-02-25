const { mergeWith } = require('lodash/fp')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Discovery App Learning',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: true,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root:
          'C:\\Users\\cesn4\\Documents\\Projects\\discovery-app-learning\\.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Discovery App Learning',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\Users\\cesn4\\Documents\\Projects\\discovery-app-learning',
          templates:
            'C:\\Users\\cesn4\\Documents\\Projects\\discovery-app-learning\\node_modules\\docz-core\\dist\\templates',
          docz:
            'C:\\Users\\cesn4\\Documents\\Projects\\discovery-app-learning\\.docz',
          cache:
            'C:\\Users\\cesn4\\Documents\\Projects\\discovery-app-learning\\.docz\\.cache',
          app:
            'C:\\Users\\cesn4\\Documents\\Projects\\discovery-app-learning\\.docz\\app',
          appPackageJson:
            'C:\\Users\\cesn4\\Documents\\Projects\\discovery-app-learning\\package.json',
          gatsbyConfig:
            'C:\\Users\\cesn4\\Documents\\Projects\\discovery-app-learning\\gatsby-config.js',
          gatsbyBrowser:
            'C:\\Users\\cesn4\\Documents\\Projects\\discovery-app-learning\\gatsby-browser.js',
          gatsbyNode:
            'C:\\Users\\cesn4\\Documents\\Projects\\discovery-app-learning\\gatsby-node.js',
          gatsbySSR:
            'C:\\Users\\cesn4\\Documents\\Projects\\discovery-app-learning\\gatsby-ssr.js',
          importsJs:
            'C:\\Users\\cesn4\\Documents\\Projects\\discovery-app-learning\\.docz\\app\\imports.js',
          rootJs:
            'C:\\Users\\cesn4\\Documents\\Projects\\discovery-app-learning\\.docz\\app\\root.jsx',
          indexJs:
            'C:\\Users\\cesn4\\Documents\\Projects\\discovery-app-learning\\.docz\\app\\index.jsx',
          indexHtml:
            'C:\\Users\\cesn4\\Documents\\Projects\\discovery-app-learning\\.docz\\app\\index.html',
          db:
            'C:\\Users\\cesn4\\Documents\\Projects\\discovery-app-learning\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
