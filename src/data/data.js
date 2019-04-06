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
