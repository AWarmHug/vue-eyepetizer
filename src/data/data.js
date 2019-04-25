import axios from 'axios'

const commonParameter = '?udid=5c3cd125c0ba45858bf82a70899d1334328c544e&vc=472&vn=5.2&size=1080X2340&deviceModel=JSN-AL00a&first_channel=eyepetizer_zhihuiyun_market&last_channel=eyepetizer_zhihuiyun_market&system_version_code=27'
// const commonParameter = ''
// 列表
// http://baobab.kaiyanapp.com/api/v5/index/tab/list

// 发现
// http://baobab.kaiyanapp.com/api/v7/index/tab/discovery
const discovery = '/v7/index/tab/discovery' + commonParameter

export function getDiscovery () {
  return axios.get(discovery)
    .then((response) => {
      return Promise.resolve(response.data)
    })
}

// 推荐
// http://baobab.kaiyanapp.com/api/v5/index/tab/allRec?page=0&isOldUser=true&udid=5c3cd125c0ba45858bf82a70899d1334328c544e&vc=472&vn=5.2&size=1080X2340&deviceModel=JSN-AL00a&first_channel=eyepetizer_zhihuiyun_market&last_channel=eyepetizer_zhihuiyun_market&system_version_code=27
const allRec = '/v5/index/tab/allRec' + commonParameter

export function getAllRec () {
  return axios.get(allRec)
    .then((response) => {
      return Promise.resolve(response.data)
    })
}

// 日报
// http://baobab.kaiyanapp.com/api/v5/index/tab/feed?udid=5c3cd125c0ba45858bf82a70899d1334328c544e&vc=472&vn=5.2&size=1080X2340&deviceModel=JSN-AL00a&first_channel=eyepetizer_zhihuiyun_market&last_channel=eyepetizer_zhihuiyun_market&system_version_code=27

const feed = '/v5/index/tab/feed' + commonParameter

export function getFeed () {
  return axios.get(feed)
    .then((response) => {
      return Promise.resolve(response.data)
    })
}
// 相关推荐
// http://baobab.kaiyanapp.com/api/v4/video/related?id=157221&udid=5c3cd125c0ba45858bf82a70899d1334328c544e&vc=472&vn=5.2&size=1080X2340&deviceModel=JSN-AL00a&first_channel=eyepetizer_zhihuiyun_market&last_channel=eyepetizer_zhihuiyun_market&system_version_code=27
const video = '/v4/video/related' + commonParameter

export function getRelated (videoId) {
  return axios.get(video, {
    params: { id: videoId }
  }).then((response) => {
    return Promise.resolve(response.data)
  })
}

// 根据id获取详情
// http://baobab.kaiyanapp.com/api/v2/video/158183?udid=5c3cd125c0ba45858bf82a70899d1334328c544e&vc=472&vn=5.2&size=1080X2340&deviceModel=JSN-AL00a&first_channel=eyepetizer_zhihuiyun_market&last_channel=eyepetizer_zhihuiyun_market&system_version_code=27

export function s2t (duration) {
  var h = Math.floor(duration / 3600) < 10 ? '0' + Math.floor(duration / 3600) : Math.floor(duration / 3600)
  var m = Math.floor((duration / 60 % 60)) < 10 ? '0' + Math.floor((duration / 60 % 60)) : Math.floor((duration / 60 % 60))
  var s = Math.floor((duration % 60)) < 10 ? '0' + Math.floor((duration % 60)) : Math.floor((duration % 60))
  let value = ''

  if (h !== '00') {
    value += h + ':'
  }
  if (m !== '00') {
    value += m + ':'
  }

  value += s

  return value
}

console.log(s2t(200))
