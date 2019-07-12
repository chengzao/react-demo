import { formatDateTime } from './tools'

// defined env
const SENTRY_PUBLIC_KEY = process.env.REACT_APP_SENTRY_PUBLIC_KEY || ''
const SENTRY_SECRET_KEY = process.env.REACT_APP_SENTRY_SECRET_KEY || ''
const SENTRY_URL = process.env.REACT_APP_SENTRY_URL || ''
const SENTRY_PROJECT_ID = process.env.REACT_APP_SENTRY_PROJECT_ID || ''
const SENTRY_PROJECT_NAME = process.env.REACT_APP_SENTRY_PROJECT_NAME || ''

// 自建sentry服务的dsn组成部分
// dsn: PROTOCOL://PUBLIC_KEY:SECRET_KEY@localhost:9000/PROJECT_ID
export default {
  dsn: `http://${SENTRY_PUBLIC_KEY}:${SENTRY_SECRET_KEY}@${SENTRY_URL}/${SENTRY_PROJECT_ID}`,
  release: `${SENTRY_PROJECT_NAME}@${formatDateTime(new Date(), 'YYYYMMDD')}`,
  environment: process.env.NODE_ENV
}
