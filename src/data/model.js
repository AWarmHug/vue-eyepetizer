import { itemList2Widgets } from '../components/data2widget'

// {
// "dataType": "ItemCollection",
// "header": {},
// "itemList": [],
// "count": 5,
// "adTrack": null,
// "footer": null
// }

class BaseData {
  constructor (dataType) {
    this.dataType = dataType
  }
}

let Item = {
  'type': 'banner',
  'data': BaseData,
  'tag': null,
  'id': 0,
  'adIndex': -1
}

let Header = {
  'id': 5,
  'title': '开眼编辑精选',
  'font': 'bigBold',
  'subTitle': 'FRIDAY, APRIL 5',
  'subTitleFont': 'lobster',
  'textAlign': 'left',
  'cover': null,
  'label': null,
  'actionUrl': 'eyepetizer://homepage/selected?tabIndex=2&newTabIndex=-3',
  'labelList': null,
  'rightText': '查看往期'
}
let SquareCard = {
  'dataType': 'SquareCard',
  'id': 1219,
  'title': '开眼周末计划',
  'image': 'http://img.kaiyanapp.com/15b82791d204eefa71246792fc1aefa2.jpeg?imageMogr2/quality/60/format/jpg',
  'actionUrl': 'eyepetizer://webview/?title=%E5%BC%80%E7%9C%BC%E5%91%A8%E6%9C%AB%E8%AE%A1%E5%88%92&url=http%3A%2F%2Fwww.eyepetizer.net%2Farticle.html%3Fnid%3D1274%26shareable%3Dtrue',
  'shade': true,
  'adTrack': null,
  'description': '你的周末指南'
}

let ItemCollection = {
  'dataType': 'ItemCollection',
  'header': Header,
  'itemList': [Item],
  'count': 5,
  'adTrack': null,
  'footer': null
}

export { Header, ItemCollection, SquareCard }
