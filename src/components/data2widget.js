import HorizontalScrollCard from '../components/HorizontalScrollCard'
import SpecialSquareCardCollection from './SpecialSquareCardCollection'
import ColumnCardList from './ColumnCardList'
import TextCard from './TextCard'
import BriefCard from './BriefCard'
import ItemCollection from './ItemCollection'
import Banner from './Banner'

const horizontalScrollCard = 'horizontalScrollCard'
const specialSquareCardCollection = 'specialSquareCardCollection'
const columnCardList = 'columnCardList'
const textCard = 'textCard'
const briefCard = 'briefCard'
const banner = 'banner'

/**
 <my-banner :item="values.itemList[0]"></my-banner>
 <my-item-tag :item="values.itemList[1]"></my-item-tag>
 <my-item-column :item="values.itemList[2]"></my-item-column>
 <my-item-title :item="values.itemList[3]"></my-item-title>
 <tag-brief-card :item="values.itemList[4]"></tag-brief-card>
 **/

export function item2widget (item) {
  switch (item.type) {
    case horizontalScrollCard:
      return { name: 'HorizontalScrollCard', data: item }
    case specialSquareCardCollection:
      return { name: 'SpecialSquareCardCollection', data: item }
    case columnCardList:
      return { name: 'ColumnCardList', data: item }
    case textCard:
      return { name: 'TextCard', data: item }
    case briefCard:
      return { name: 'BriefCard', data: item }
    case banner:
      return { name: 'Banner', data: item }
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
  ItemCollection,
  BriefCard,
  TextCard,
  ColumnCardList,
  SpecialSquareCardCollection,
  HorizontalScrollCard,
  Banner
}

export { widgets }
