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

- 使用

```bash
# sentry-cli releases -o 组织 -p 项目 files staging@1.0.1 upload-sourcemaps js文件所在目录 --url-prefix 线上资源URI

sentry-cli releases files react-sentry@20190711 upload-sourcemaps ./build/ --url-prefix '~/static/js/'
```