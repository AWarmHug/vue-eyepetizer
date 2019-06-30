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

let Tag = {
  'id': 796,
  'name': '迷影放映室',
  'actionUrl': 'eyepetizer://tag/796/?title=%E8%BF%B7%E5%BD%B1%E6%94%BE%E6%98%A0%E5%AE%A4',
  'adTrack': null,
  'desc': '电影、剧集、戏剧抢先看',
  'bgPicture': 'http://img.kaiyanapp.com/64f2b2ed039bd92c3be10d003d6041bf.jpeg?imageMogr2/quality/60/format/jpg',
  'headerImage': 'http://img.kaiyanapp.com/56a8818adb038c59ab04ffc781db2f50.jpeg?imageMogr2/quality/60/format/jpg',
  'tagRecType': 'IMPORTANT',
  'childTagList': null,
  'childTagIdList': null,
  'communityIndex': 0
}

let Author = {
  'id': 4225,
  'icon': 'http://img.kaiyanapp.com/774df8c9c6e0836be5c9a24ec4951313.png?imageMogr2/quality/60/format/jpg',
  'name': '努力的高十二',
  'description': '用丰富的脑洞，对电影视频进行二次创作，主要方向为影视混剪及创意配音解说。',
  'link': '',
  'latestReleaseTime': 1554089648000,
  'videoNum': 4,
  'adTrack': null,
  'follow': {
    'itemType': 'author',
    'itemId': 4225,
    'followed': false
  },
  'shield': {
    'itemType': 'author',
    'itemId': 4225,
    'shielded': false
  },
  'approvedNotReadyVideoCount': 0,
  'ifPgc': true,
  'recSort': 0,
  'expert': false
}

let Cover = {
  'feed': 'http://img.kaiyanapp.com/7c1533c406db1ff359906732ca9455c0.jpeg?imageMogr2/quality/60/format/jpg',
  'detail': 'http://img.kaiyanapp.com/7c1533c406db1ff359906732ca9455c0.jpeg?imageMogr2/quality/60/format/jpg',
  'blurred': 'http://img.kaiyanapp.com/321ee34be6984b7ee184065f534d2107.jpeg?imageMogr2/quality/60/format/jpg',
  'sharing': null,
  'homepage': 'http://img.kaiyanapp.com/7c1533c406db1ff359906732ca9455c0.jpeg?imageView2/1/w/720/h/560/format/jpg/q/75|watermark/1/image/aHR0cDovL2ltZy5rYWl5YW5hcHAuY29tL2JsYWNrXzMwLnBuZw==/dissolve/100/gravity/Center/dx/0/dy/0|imageslim'
}

let Consumption = {
  'collectionCount': 476,
  'shareCount': 290,
  'replyCount': 21
}
let PlayInfo = {
  'height': 270,
  'width': 480,
  'urlList': [
    {
      'name': 'aliyun',
      'url': 'http://baobab.kaiyanapp.com/api/v1/playUrl?vid=155672&resourceType=video&editionType=low&source=aliyun&playUrlType=url_oss',
      'size': 12914150
    },
    {
      'name': 'qcloud',
      'url': 'http://baobab.kaiyanapp.com/api/v1/playUrl?vid=155672&resourceType=video&editionType=low&source=qcloud&playUrlType=url_oss',
      'size': 12914150
    },
    {
      'name': 'ucloud',
      'url': 'http://baobab.kaiyanapp.com/api/v1/playUrl?vid=155672&resourceType=video&editionType=low&source=ucloud&playUrlType=url_oss',
      'size': 12914150
    }
  ],
  'name': '流畅',
  'type': 'low',
  'url': 'http://baobab.kaiyanapp.com/api/v1/playUrl?vid=155672&resourceType=video&editionType=low&source=aliyun&playUrlType=url_oss'
}
let WebUrl = {
  'raw': 'http://www.eyepetizer.net/detail.html?vid=155672',
  'forWeibo': 'http://www.eyepetizer.net/detail.html?vid=155672&resourceType=video&utm_campaign=routine&utm_medium=share&utm_source=weibo&uid=0'
}

let VideoBeanForClient = {
  'dataType': 'VideoBeanForClient',
  'id': 155672,
  'title': 'DC 电影大盘点，全程疯狂衔接踩点',
  'description': 'DC 电影超燃片段混剪，不仅包含目前 DCEU 的燃点片段，还有 DC 剧集「绿箭侠」等以及之前的诸多 DC 电影。BGM：「Up All Night」Hinder 封面：Coser Katie Kosova',
  'library': 'DAILY',
  'tags': [Tag],
  'consumption': Consumption,
  'resourceType': 'video',
  'slogan': '你去看「沙赞」了吗？',
  'provider': {
    'name': 'PGC',
    'alias': 'PGC',
    'icon': ''
  },
  'category': '影视',
  'author': Author,
  'cover': Cover,
  'playUrl': 'http://baobab.kaiyanapp.com/api/v1/playUrl?vid=155672&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss',
  'thumbPlayUrl': null,
  'duration': 224,
  'webUrl': WebUrl,
  'releaseTime': 1554089648000,
  'playInfo': [PlayInfo],
  'campaign': null,
  'waterMarks': null,
  'ad': false,
  'adTrack': null,
  'type': 'NORMAL',
  'titlePgc': 'DC电影大盘点 全程疯狂衔接踩点',
  'descriptionPgc': 'DC电影超燃片段混剪，不仅包含目前DCEU的燃点片段，还有DC剧集“绿箭宇宙”以及之前的诸多DC电影BGM: Up All Night-Hinder封面：coser Katie Kosova',
  'remark': '沙赞上映预热  纯DC踩点合集  画面自然过渡 衔接加踩点',
  'ifLimitVideo': false,
  'searchWeight': 0,
  'idx': 0,
  'shareAdTrack': null,
  'favoriteAdTrack': null,
  'webAdTrack': null,
  'date': 1554512400000,
  'promotion': null,
  'label': null,
  'labelList': [],
  'descriptionEditor': 'DC 电影超燃片段混剪，不仅包含目前 DCEU 的燃点片段，还有 DC 剧集「绿箭侠」等以及之前的诸多 DC 电影。BGM：「Up All Night」Hinder 封面：Coser Katie Kosova',
  'collected': false,
  'played': false,
  'subtitles': [],
  'lastViewTime': null,
  'playlists': null,
  'src': null
}

let FollowCard = {
  'dataType': 'FollowCard',
  'header': {
    'id': 155672,
    'title': 'DC 电影大盘点，全程疯狂衔接踩点',
    'font': null,
    'subTitle': null,
    'subTitleFont': null,
    'textAlign': 'left',
    'cover': null,
    'label': null,
    'actionUrl': 'eyepetizer://pgc/detail/4225/?title=%E5%8A%AA%E5%8A%9B%E7%9A%84%E9%AB%98%E5%8D%81%E4%BA%8C&userType=PGC&tabIndex=1',
    'labelList': null,
    'rightText': null,
    'icon': 'http://img.kaiyanapp.com/774df8c9c6e0836be5c9a24ec4951313.png?imageMogr2/quality/60/format/jpg',
    'iconType': 'round',
    'description': '你去看「沙赞」了吗？',
    'time': 1554089648000,
    'showHateVideo': false
  },
  'content': {
    'type': 'video',
    'data': VideoBeanForClient,
    'tag': null,
    'id': 0,
    'adIndex': -1
  },
  'adTrack': null
}

let TagInfo = {
  'dataType': 'TagInfo',
  'id': 1022,
  'name': '运动',
  'description': '冲浪、滑板、健身、跑酷，我过着停不下来的生活',
  'headerImage': 'http://img.kaiyanapp.com/481837cc0b1c52a3a87d6156d52cfdfa.jpeg?imageMogr2/quality/60/format/jpg',
  'bgPicture': 'http://img.kaiyanapp.com/cb87116785473e4064687036b53b5af3.jpeg?imageMogr2/quality/60/format/jpg',
  'actionUrl': null,
  'recType': 0,
  'follow': {
    'itemType': 'TagInfo',
    'itemId': 1022,
    'followed': false
  },
  'tagFollowCount': 51359,
  'tagVideoCount': 5274,
  'tagDynamicCount': 54,
  'childTabList': null,
  'lookCount': 542937,
  'shareLinkUrl': 'http://www.kaiyanapp.com/campaign/tag_square/tag_square.html?tid=1022&utm_campaign=routine&utm_medium=share&pageSource=tagSquare'
}

export { Header, ItemCollection, SquareCard, FollowCard,TagInfo }
