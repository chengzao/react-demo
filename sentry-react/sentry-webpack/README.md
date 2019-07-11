# sentry

- 安装

```bash
npm install @sentry/cli -g

sentry-cli --url http://localhost:9000 login
```

- 配置`.sentryclirc`

```bash
[defaults]
url = http://localhost:9000
org = sentry
project = react-sentry

[auth]
token = 9210e5cccc6344da858beea81994cbf52d7c1770eb8342b5823d8b0f6ebfdbb4
```

- `sentry-cli` 使用

```bash
# sentry-cli releases -o 组织 -p 项目 files staging@1.0.1 upload-sourcemaps js文件所在目录 --url-prefix 线上资源URI

sentry-cli releases files react-sentry@20190711 upload-sourcemaps ./build/ --url-prefix '~/static/js/'
```

- `@sentry/webpack-plugin`

```js
const SentryCliPlugin = require('@sentry/webpack-plugin');
// https://github.com/getsentry/sentry-webpack-plugin
// urlPrefix: 注意配置地址为线上js对应地址
// 例如：http://localhost:5000/static/js/2.9675ae67.chunk.js
// urlPrefix: ~/static/js/
module.exports = function override(config, env) {
  //do stuff with the webpack config...
  if(process.env.NODE_ENV === 'production'){
    config.plugins.push(
      new SentryCliPlugin({
        include: './build',
        urlPrefix: '~/static/js/',
        ignoreFile: '.sentrycliignore',
        ignore: ['node_modules', 'webpack.config.js'],
        configFile: 'sentry.properties',
      })
    )
  }
  return config;
}
```

- 工程目录部分文件

```bash
.
├── .gitignore
├── .sentryclirc # sentry配置文件
├── README.md
├── build # 打包后的文件
│   └── static
│       ├── js
│       │   ├── 2.9675ae67.chunk.js
│       │   ├── 2.9675ae67.chunk.js.map
│       │   ├── main.28cb07aa.chunk.js
│       │   ├── main.28cb07aa.chunk.js.map
│       │   ├── runtime~main.a8a9905a.js
│       │   └── runtime~main.a8a9905a.js.map
├── config-overrides.js # react-app-rewired配置文件
├── package.json
├── public
│   └── index.html
├── src
│   ├── App.js
│   ├── Button.js
│   ├── index.js
│   └── serviceWorker.js
└── yarn.lock
```