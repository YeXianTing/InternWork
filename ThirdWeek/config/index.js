'use strict'
// Template version: 1.2.6
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

/* 开发环境代理 */
const devEv = {
  '/omp_pri': {
    target: 'http://172.16.6.132:98',
    changeOrigin: true,
    pathRewrite: {
      '^/omp_pri': '/omp_pri'
    }
  },
  '/omp_pub': {
    target: 'http://172.16.6.132:96',
    changeOrigin: true,
    pathRewrite: {
      '^/omp_pub': '/omp_pub'
    }
  },
  '/omp': {
    target: 'http://172.16.6.132:98',
    changeOrigin: true,
    pathRewrite: {
      '^/omp': '/omp'
    }
  },
  '/dap': {
    target: 'http://172.16.6.132:9996',
    changeOrigin: true,
    pathRewrite: {
      '^/dap': '/dap'
    }
  },
  '/itp': {
    target: 'http://172.16.6.132:9998',
    changeOrigin: true,
    pathRewrite: {
      '^/itp': '/itp'
    }
  },
  '/rack': {
    target: 'http://172.16.6.132:9999',
    changeOrigin: true,
    pathRewrite: {
      '^/rack': '/rack'
    }
  },
  '/filestatic': {
    target: 'http://172.16.6.132:98',
    changeOrigin: true,
    pathRewrite: {
      '^/filestatic': '/filestatic'
    }
  },
  '/stack': { //机架相关
    target: 'http://172.16.6.132:9995',
    changeOrigin: true,
    pathRewrite: {
      '^/stack': '/stack'
    }
  }
}
/*   测试环境代理   */
const testEv = {
  '/omp_pri': {
    target: 'http://172.16.6.121:86',
    changeOrigin: true,
    pathRewrite: {
      '^/omp_pri': '/omp_pri'
    }
  },
  '/omp_pub': {
    target: 'http://172.16.6.124:85',
    changeOrigin: true,
    pathRewrite: {
      '^/omp_pub': '/omp_pub'
    }
  },
  '/omp': {
    target: 'http://172.16.6.121:86',
    changeOrigin: true,
    pathRewrite: {
      '^/omp': '/omp'
    }
  },
  '/dap': {
    target: 'http://172.16.6.121:86',
    changeOrigin: true,
    pathRewrite: {
      '^/dap': '/dap'
    }
  },
  '/itp': {
    target: 'http://172.16.6.121:86',
    changeOrigin: true,
    pathRewrite: {
      '^/itp': '/itp'
    }
  },
  '/rack': {
    target: 'http://172.16.6.121:86',
    changeOrigin: true,
    pathRewrite: {
      '^/rack': '/rack'
    }
  },
  '/filestatic': {
    target: 'http://172.16.6.121:86',
    changeOrigin: true,
    pathRewrite: {
      '^/filestatic': '/filestatic'
    }
  },
  '/stack': { //机架相关
    target: 'http://172.16.6.121:86',
    changeOrigin: true,
    pathRewrite: {
      '^/stack': '/stack'
    }
  }
} 

module.exports = {
  dev: {
    // Paths  
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // proxyTable: testEv,  //测试
    proxyTable: devEv,    //开发 
    // Various Dev Server settings
    // host: 'localhost', // can be overwritten by process.env.HOST
    host: '127.0.0.1', // 默认
    // host: '172.16.4.146', // 王文勤 
    // host: '172.16.4.19', // 黄伟锋
    port: 9522, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: false,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */ 

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-source-map',
 
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',

    /**
     * You can set by youself according to actual condition
     * You will need to set this if you plan to deploy your site under a sub path,
     * for example GitHub pages. If you plan to deploy your site to https://foo.github.io/bar/,
     * then assetsPublicPath should be set to "/bar/".
     * In most cases please use '/' !!!
     */
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: 'source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report || false,

    // `npm run build:prod --generate_report`
    generateAnalyzerReport: process.env.npm_config_generate_report || false
  }
}