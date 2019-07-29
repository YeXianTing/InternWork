const isProduct = process.env.NODE_ENV !== 'production'

const updws = 'ws://172.16.6.63:9091/omp_pri/updWs'

const baseUrl = isProduct ? '/omp' : '/omp'// 公有云模块
const baseFileUrl = '/filestatic/' // 图片前缀
const pdfFileUrl = '/static/plugin/generic/web/viewer.html?file=/omp/safety/' // 文件预览前缀
const videoUrl = '/omp/safety/' // 文件预览前缀
export const apiUrl = {
  omp: isProduct ? 'omp' : 'omp', // 运营模块
  config: isProduct ? 'config' : 'config', // 元数据配置
  trmp: isProduct ? 'trmp' : 'trmp', // 教学资源
  log: isProduct ? 'log' : 'log', // 日志模块
  rack: isProduct ? 'rack' : 'rack', // 机架基础模块/机架模块
  uums: isProduct ? 'uums' : 'uums', // 用户模块
  itp: isProduct ? 'itp' : 'itp', // 教学授课
  dap: isProduct ? 'dap' : 'dap', // 数据分析
  stack: isProduct ? 'stack' : 'stack' // 虚拟机，机架
}

export function getBaseUrl() {
  return baseUrl
}

export function getUpDws() {
  return updws
}

// 图片前缀
export function getBaseFileUrl() {
  return baseFileUrl
}

// pdf前缀  调用pdf.js
export function getPdfFileUrl(sign) {
  return pdfFileUrl + sign + '/preview.pdf'
}

// video前缀
export function getVideoFileUrl(sign) {
  return videoUrl + sign + '/preview.mp4'
}

// video前缀
export function getHtmlFileUrl(sign) {
  return videoUrl + sign + '/preview.pdf'
}

