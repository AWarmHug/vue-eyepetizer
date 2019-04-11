import HorizontalScrollCard from '../components/HorizontalScrollCard'
import SpecialSquareCardCollection from './SpecialSquareCardCollection'
import ColumnCardList from './ColumnCardList'
import TextCard from './TextCard'
import BriefCard from './BriefCard'
import Banner from './Banner'
import SquareCardCollection from './SquareCardCollection'
import FollowCard from './FollowCard'
import MyVideo from './MyVideo'
import VideoSmallCard from './VideoSmallCard'
import FooterTextCard from './FooterTextCard'

const horizontalScrollCard = 'horizontalScrollCard'
const specialSquareCardCollection = 'specialSquareCardCollection'
const columnCardList = 'columnCardList'
const textCard = 'textCard'
const briefCard = 'briefCard'
const banner = 'banner'
const squareCardCollection = 'squareCardCollection'
const followCard = 'followCard'
const video = 'video'
const videoSmallCard = 'videoSmallCard'

export function item2widget (item) {
  return { name: item2WidgetName(item), json: item }
}

export function item2WidgetName (item) {
  switch (item.type) {
    case horizontalScrollCard:
      return 'HorizontalScrollCard'
    case specialSquareCardCollection:
      return 'SpecialSquareCardCollection'
    case columnCardList:
      return 'ColumnCardList'
    case textCard:
      if (item.data.type.indexOf('footer') !== -1) {
        console.log('FooterTextCard')
        return 'FooterTextCard'
      } else {
        console.log('TextCard')
        return 'TextCard'
      }
    case briefCard:
      return 'BriefCard'
    case banner:
      return 'Banner'
    case squareCardCollection:
      return 'SquareCardCollection'
    case followCard:
      return 'FollowCard'
    case video:
      return 'MyVideo'
    case videoSmallCard:
      return 'VideoSmallCard'
  }
}

export function itemList2Widgets (itemList) {
  let values = []
  for (let i = 0; i < itemList.length; i++) {
    values.push(item2widget(itemList[i]))
  }
  return values
}

let widgets = {
  BriefCard,
  FooterTextCard,
  TextCard,
  ColumnCardList,
  SpecialSquareCardCollection,
  HorizontalScrollCard,
  Banner,
  SquareCardCollection,
  FollowCard,
  MyVideo,
  VideoSmallCard
}

export { widgets }
