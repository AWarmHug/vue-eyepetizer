(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)s=o[d],i[s]&&m.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0518":function(t,e,a){},"0c8f":function(t,e,a){"use strict";var n=a("5c72"),i=a.n(n);i.a},"15dd":function(t,e,a){"use strict";var n=a("15e2"),i=a.n(n);i.a},"15e2":function(t,e,a){},1721:function(t,e,a){},"21e5":function(t,e,a){"use strict";var n=a("23ef"),i=a.n(n);i.a},"23ef":function(t,e,a){},2460:function(t,e,a){"use strict";var n=a("3120"),i=a.n(n);i.a},"29c8":function(t,e,a){},"303e":function(t,e,a){"use strict";var n=a("8de1"),i=a.n(n);i.a},3120:function(t,e,a){},"323b":function(t,e,a){},"36be":function(t,e,a){"use strict";var n=a("c776"),i=a.n(n);i.a},"45da":function(t,e,a){},"4b4d":function(t,e,a){"use strict";var n=a("a71c"),i=a.n(n);i.a},5576:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],s={name:"App"},o=s,c=a("2877"),l=Object(c["a"])(o,i,r,!1,null,"e8df0bba",null),u=l.exports,d=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},t._l(t.values,function(t,e){return a(t.name,{key:e,tag:"component",attrs:{item:t.json}})}),1)},f=[],p=(a("ac6a"),a("a481"),a("795b")),v=a.n(p),h=a("bc3a"),g=a.n(h),b=a("2ef0"),_=a.n(b),C="?udid=5c3cd125c0ba45858bf82a70899d1334328c544e&vc=472&vn=5.2&size=1080X2340&deviceModel=JSN-AL00a&first_channel=eyepetizer_zhihuiyun_market&last_channel=eyepetizer_zhihuiyun_market&system_version_code=27",y="/v7/index/tab/discovery"+C;function x(){return g.a.get(y).then(function(t){return v.a.resolve(t.data)})}var O="/v5/index/tab/allRec"+C;function j(){return g.a.get(O).then(function(t){return v.a.resolve(t.data)})}var I="/v5/index/tab/feed"+C;function k(){return g.a.get(I).then(function(t){return v.a.resolve(t.data)})}var S="/v4/video/related"+C;function T(t){return g.a.get(S,{params:{id:t}}).then(function(t){return v.a.resolve(t.data)})}var w="/v6/tag/index"+C;function E(t){return g.a.get(w,{params:{id:t}}).then(function(t){return v.a.resolve(t.data)})}function L(t){return t=t.replace("http://baobab.kaiyanapp.com/api",""),-1!==t.indexOf("?")?t+=C.replace("?","&"):t+=C,console.log(t),g.a.get(t).then(function(t){return v.a.resolve(t.data)})}function $(t){var e=Math.floor(t/3600)<10?"0"+Math.floor(t/3600):Math.floor(t/3600),a=Math.floor(t/60%60)<10?"0"+Math.floor(t/60%60):Math.floor(t/60%60),n=Math.floor(t%60)<10?"0"+Math.floor(t%60):Math.floor(t%60),i="";return"00"!==e&&(i+=e+":"),"00"!==a&&(i+=a+":"),i+=n,i}console.log($(200));var M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("my-banner",{style:{height:"10rem"},attrs:{itemList:t.item.data.itemList},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.it;return[a(t.getName(n),{tag:"component",attrs:{item:n.data}})]}}])})],1)},N=[],F=(a("7f7f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("swipe",{staticClass:"my-swipe",attrs:{auto:0}},t._l(t.itemList,function(e,n){return a("swipe-item",{key:n,class:"my-swipe-item"+n},[t._t("default",[t._v(t._s(e.data.title))],{it:e})],2)}),1)],1)}),A=[],V={name:"MyBanner",props:{itemList:Array,hi:String},methods:{getName:function(t){return"Banner"}}},q=V,z=(a("ab32"),Object(c["a"])(q,F,A,!1,null,"3e9f4f54",null)),B=z.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("img",{staticClass:"pic-cover",attrs:{src:t.item.image||t.item.data.image}})])},D=[],R={name:"Banner",props:{item:Object}},H=R,U=(a("7685"),Object(c["a"])(H,P,D,!1,null,"cb87e4ae",null)),J=U.exports,W={name:"HorizontalScrollCard",components:{MyBanner:B,Banner:J},props:{item:Object},methods:{getName:function(t){return Ye(t).name}}},X=W,Y=Object(c["a"])(X,M,N,!1,null,"a8eed416",null),G=Y.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("my-header",{staticClass:"header",attrs:{header:t.item.data.header}}),a("div",{staticClass:"list",style:t.gridStyle},t._l(t.item.data.itemList,function(t,e){return a("square-card-of-category",{key:e,attrs:{item:t}})}),1)],1)},Q=[],Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",[t.subTitleIsNull?t._e():a("p",{staticClass:"subTitle"},[t._v(t._s(t.header.subTitle))]),a("p",{staticClass:"titleText",style:t.titleStyle},[t._v(t._s(t.header.title))])]),t.rightTextIsNull?t._e():a("span",{staticClass:"rightText",class:{to_right:!t.rightTextIsNull}},[t._v(t._s(t.header.rightText))])])},tt=[],et=a("d225"),at=function t(e){Object(et["a"])(this,t),this.dataType=e},nt={type:"banner",data:at,tag:null,id:0,adIndex:-1},it={id:5,title:"开眼编辑精选",font:"bigBold",subTitle:"FRIDAY, APRIL 5",subTitleFont:"lobster",textAlign:"left",cover:null,label:null,actionUrl:"eyepetizer://homepage/selected?tabIndex=2&newTabIndex=-3",labelList:null,rightText:"查看往期"},rt={dataType:"ItemCollection",header:it,itemList:[nt],count:5,adTrack:null,footer:null},st={name:"MyHeader",props:{header:it},computed:{subTitleIsNull:function(){return _.a.isEmpty(this.header.subTitle)},rightTextIsNull:function(){return _.a.isEmpty(this.header.rightText)},titleStyle:function(){var t={fontSize:"1rem"};switch(this.header.font){case"bigBold":t.fontSize="1.2rem",t.fontWeight="bold";break;case"bold":t.fontWeight="bold";break}return t}}},ot=st,ct=(a("8390"),Object(c["a"])(ot,Z,tt,!1,null,"b3a6c50c",null)),lt=ct.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",style:{backgroundImage:"url('"+t.item.data.image+"')"},on:{click:t.goTagIndex}},[a("div",[a("p",{staticClass:"title"},[t._v("\n      "+t._s(t.item.data.title)+"\n    ")]),t.descriptionIsEmpty(t.item)?t._e():a("p",{staticClass:"description"},[t._v("\n      "+t._s(t.item.data.description)+"\n    ")])])])},dt=[],mt=(a("6b54"),{name:"SquareCardOfCategory",props:{item:Object},methods:{descriptionIsEmpty:function(t){return _.a.isEmpty(t.data.description)},goTagIndex:function(){this.$router.push({name:"tag",params:{id:this.item.data.id.toString()}})}}}),ft=mt,pt=(a("bca1"),Object(c["a"])(ft,ut,dt,!1,null,"6c945a87",null)),vt=pt.exports,ht={name:"SpecialSquareCardCollection",components:{SquareCardOfCategory:vt,MyHeader:lt},props:{item:rt},data:function(){return{gridStyle:{"grid-template-columns":"repeat(".concat(Math.ceil(this.item.data.itemList.length/2),", 5rem)")}}}},gt=ht,bt=(a("de65"),Object(c["a"])(gt,K,Q,!1,null,"7d0a255e",null)),_t=bt.exports,Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("my-header",{attrs:{header:t.item.data.header}}),a("div",{staticClass:"list",style:t.gridStyle},t._l(t.item.data.itemList,function(t,e){return a("square-card-of-column",{key:e,attrs:{item:t}})}),1)],1)},yt=[],xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",style:{backgroundImage:"url('"+t.item.data.image+"')"},on:{click:t.click}},[a("div",[a("p",{staticClass:"title"},[t._v("\n      "+t._s(t.item.data.title)+"\n    ")]),t.descriptionIsEmpty(t.item)?t._e():a("p",{staticClass:"description"},[t._v("\n      "+t._s(t.item.data.description)+"\n    ")])])])},Ot=[],jt={name:"SquareCardOfColumn",props:{item:Object},methods:{descriptionIsEmpty:function(t){return _.a.isEmpty(t.data.description)},click:function(){var t=this.item.data.actionUrl;if(-1!==t.indexOf("url=",0)){var e=this.decodeUnicode(t.substring(t.indexOf("url=",0)+4,t.length));console.log(e),window.location.href=e}else alert("原生功能")},decodeUnicode:function(t){return t=t.replace(/\\/g,"%"),unescape(t)}}},It=jt,kt=(a("2460"),Object(c["a"])(It,xt,Ot,!1,null,"624c1668",null)),St=kt.exports,Tt={name:"ColumnCardList",components:{SquareCardOfColumn:St,MyHeader:lt},props:{item:Object},data:function(){return{gridStyle:{"grid-template-columns":"repeat(".concat(Math.ceil(this.item.data.itemList.length/2),", ").concat(2/this.item.data.itemList.length*100,"%)")}}}},wt=Tt,Et=(a("21e5"),Object(c["a"])(wt,Ct,yt,!1,null,"30790c36",null)),Lt=Et.exports,$t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("span",{staticClass:"titleText",style:t.titleStyle},[t._v(t._s(t.item.data.text))]),t.rightTextIsNull?t._e():a("span",{staticClass:"rightText",class:{to_right:!t.rightTextIsNull}},[t._v(t._s(t.item.data.rightText))])])},Mt=[],Nt={name:"TextCard",props:{item:Object},data:function(){return{titleStyle:{color:"#2b2b2b",fontSize:"1.1rem"}}},computed:{rightTextIsNull:function(){return _.a.isEmpty(this.item.data.rightText)}}},Ft=Nt,At=(a("ed06"),Object(c["a"])(Ft,$t,Mt,!1,null,"725c270b",null)),Vt=At.exports,qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("img",{staticClass:"pic",attrs:{src:t.item.data.icon}}),a("div",{staticClass:"content"},[a("p",{staticClass:"title"},[t._v(t._s(t.item.data.title))]),a("p",{staticClass:"desc"},[t._v(t._s(t.item.data.description))])]),t._m(0)])},zt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{staticClass:"btn"},[t._v("+ 关注")])])}],Bt={name:"BriefCard",props:{item:Object}},Pt=Bt,Dt=(a("d78f"),Object(c["a"])(Pt,qt,zt,!1,null,"06285ec3",null)),Rt=Dt.exports,Ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("my-header",{attrs:{header:t.item.data.header}}),a("my-banner",{style:{height:"14rem"},attrs:{itemList:t.item.data.itemList},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.it;return[a(t.getName(n),{tag:"component",attrs:{item:n}})]}}])})],1)},Ut=[],Jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a(t.getName(),{tag:"component",attrs:{item:t.getContent()}}),a("div",{staticClass:"info"},[a("img",{staticClass:"header",attrs:{src:t.getItem().header.icon}}),a("div",{staticClass:"content"},[a("div",{staticClass:"title"},[t._v(t._s(t.getItem().header.title))]),a("div",{staticClass:"desc"},[t._v(t._s(t.getItem().header.description))])]),a("div",{staticClass:"share"})])],1)},Wt=[],Xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",on:{click:function(e){return t.goVideo()}}},[a("div",{staticClass:"cover",style:{backgroundImage:"url('"+t.item.data.cover.feed+"')"}},[a("span",{staticClass:"time"},[t._v(t._s(t._s2t(t.item.data.duration)))])])])},Yt=[],Gt={name:"MyVideo",props:{item:Object},methods:{_s2t:function(t){return $(t)},goVideo:function(){this.$router.push({name:"video",params:{item:this.item}})}}},Kt=Gt,Qt=(a("abac"),Object(c["a"])(Kt,Xt,Yt,!1,null,"ae820e2e",null)),Zt=Qt.exports,te={name:"FollowCard",components:{MyVideo:Zt},props:{item:Object},methods:{getItem:function(){return this.item.data},getName:function(){return Ge(this.getItem().content)},getContent:function(){return this.getItem().content}}},ee=te,ae=(a("303e"),Object(c["a"])(ee,Jt,Wt,!1,null,"8bf09582",null)),ne=ae.exports,ie={name:"SquareCardCollection",components:{MyBanner:B,MyHeader:lt,FollowCard:ne},props:{item:Object},methods:{getName:function(t){return Ge(t)}}},re=ie,se=Object(c["a"])(re,Ht,Ut,!1,null,"635f3d61",null),oe=se.exports,ce=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",on:{click:function(e){return t.goVideo()}}},[a("div",{staticClass:"cover",style:{backgroundImage:"url('"+t.item.data.cover.feed+"')"}},[a("span",{staticClass:"time"},[t._v(t._s(t._s2t(t.item.data.duration)))])]),a("p",{staticClass:"title"},[t._v(t._s(t.item.data.title))]),a("p",{staticClass:"category"},[t._v(t._s("#"+t.item.data.category))])])},le=[],ue={name:"VideoSmallCard",props:{item:Object},methods:{_s2t:function(t){return $(t)},goVideo:function(){console.log("dianj le "),this.$router.push({name:"video",params:{item:this.item}})}}},de=ue,me=(a("36be"),Object(c["a"])(de,ce,le,!1,null,"6a263ac4",null)),fe=me.exports,pe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"titleText"},[t._v(t._s(t.item.data.text))])])},ve=[],he={name:"FooterTextCard",props:{item:Object},data:function(){return{titleStyle:{color:"#2b2b2b",fontSize:"1.1rem"}}},computed:{}},ge=he,be=(a("e6bb"),Object(c["a"])(ge,pe,ve,!1,null,"4a342bc6",null)),_e=be.exports,Ce=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"info"},[a("div",{staticClass:"header"},[a("img",{staticClass:"headerPic",attrs:{src:t.getItem().header.icon}}),a("div",{staticClass:"author"},[a("div",{staticClass:"name"},[t._v(t._s(t.getContent().data.author.name))]),a("div",{staticClass:"title"},[a("span",{staticClass:"left"},[t._v("发布: ")]),t._v(t._s(t.getContent().data.title))])])]),a("div",{staticClass:"desc"},[t._v(t._s(t.getContent().data.description))]),a("div",{staticClass:"tags"},t._l(t.getContent().data.tags,function(e,n){return a("span",{key:n,staticClass:"tag",on:{click:function(a){return t.clickTag(e)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])}),0)]),a(t.getName(),{tag:"component",attrs:{item:t.getContent()}})],1)},ye=[],xe={name:"AutoPlayFollowCard",components:{MyVideo:Zt},props:{item:Object},methods:{getItem:function(){return this.item.data},getName:function(){return Ge(this.getItem().content)},getContent:function(){return this.getItem().content},clickTag:function(t){console.log(t.id),this.$router.push({name:"tag",params:{id:t.id.toString()}})}}},Oe=xe,je=(a("4b4d"),Object(c["a"])(Oe,Ce,ye,!1,null,"705ae2e7",null)),Ie=je.exports,ke=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container bg",style:"background-image:url('"+t.tagInfo.bgPicture+"')"},[a("h3",{staticClass:"name"},[t._v(t._s(t.tagInfo.name))]),a("p",{staticClass:"description"},[t._v(t._s(t.tagInfo.description))]),a("p",{staticClass:"follow"},[t._v(t._s(t.tagInfo.tagVideoCount+"个视频 | "+t.tagInfo.tagFollowCount+"人关注 | "+t.tagInfo.lookCount+"人看过"))]),a("button",{staticClass:"btn"},[t._v("+ 关注")])])},Se=[],Te={name:"TagInfo",props:{tagInfo:Object}},we=Te,Ee=(a("0c8f"),Object(c["a"])(we,ke,Se,!1,null,"526099b9",null)),Le=Ee.exports,$e=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("ul",{staticClass:"list",style:t.gridStyle},t._l(t.tabList,function(e,n){return a("li",{key:n,staticClass:"tab",on:{click:function(e){return t.clickItem(n)}}},[t._v("\n      "+t._s(e.name)+"\n    ")])}),0)])},Me=[],Ne=(a("c5f6"),{name:"TabList",props:{tabList:Array,click:Function},created:function(){},data:function(){return{gridStyle:{"grid-template-columns":"repeat(".concat(this.tabList.length,", ").concat(this.toPercent(1/this.tabList.length),")")}}},methods:{toPercent:function(t){var e=Number(100*t).toFixed();return e+="%",e},clickItem:function(t){this.click(t)}}}),Fe=Ne,Ae=(a("bb3c"),Object(c["a"])(Fe,$e,Me,!1,null,"53450eef",null)),Ve=Ae.exports,qe="horizontalScrollCard",ze="specialSquareCardCollection",Be="columnCardList",Pe="textCard",De="briefCard",Re="banner",He="squareCardCollection",Ue="followCard",Je="video",We="videoSmallCard",Xe="autoPlayFollowCard";function Ye(t){return{name:Ge(t),json:t}}function Ge(t){switch(t.type){case qe:return"HorizontalScrollCard";case ze:return"SpecialSquareCardCollection";case Be:return"ColumnCardList";case Pe:return-1!==t.data.type.indexOf("footer")?(console.log("FooterTextCard"),"FooterTextCard"):(console.log("TextCard"),"TextCard");case De:return"BriefCard";case Re:return"Banner";case He:return"SquareCardCollection";case Ue:return"FollowCard";case Xe:return Ie;case Je:return"MyVideo";case We:return"VideoSmallCard"}}function Ke(t){for(var e=[],a=0;a<t.length;a++)e.push(Ye(t[a]));return e}var Qe={BriefCard:Rt,FooterTextCard:_e,TextCard:Vt,ColumnCardList:Lt,SpecialSquareCardCollection:_t,HorizontalScrollCard:G,Banner:J,SquareCardCollection:oe,FollowCard:ne,MyVideo:Zt,VideoSmallCard:fe,TagInfo:Le,TabList:Ve},Ze={name:"Discover",components:Qe,created:function(){this._getDiscover()},data:function(){return{values:[]}},methods:{_getDiscover:function(){var t=this;x().then(function(e){console.log(e),t.values=Ke(e.itemList),console.log(t.values)}).catch(function(t){console.log(t)})}}},ta=Ze,ea=Object(c["a"])(ta,m,f,!1,null,"24a688da",null),aa=ea.exports,na=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},t._l(t.values,function(t,e){return a(t.name,{key:e,tag:"component",attrs:{item:t.json}})}),1)},ia=[],ra={name:"EyeRecommend",components:Qe,created:function(){this._getAllRec()},data:function(){return{values:[]}},methods:{_getAllRec:function(){var t=this;j().then(function(e){console.log(e),t.values=Ke(e.itemList),console.log(t.values)}).catch(function(e){console.log(t.reason)})}}},sa=ra,oa=Object(c["a"])(sa,na,ia,!1,null,"16343f60",null),ca=oa.exports,la=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"container",staticClass:"container"},t._l(t.values,function(t,e){return a(t.name,{key:e,tag:"component",attrs:{item:t.json}})}),1)},ua=[],da={name:"EyeDaily",components:Qe,created:function(){this._getFeed()},mounted:function(){this.window.addEventListener("scroll",this.scroll(),!0)},data:function(){return{values:[]}},methods:{_getFeed:function(){var t=this;k().then(function(e){console.log(e),t.values=Ke(e.itemList),console.log(t.values)}).catch(function(t){console.log(t)})},scroll:function(){console.log(11111)}}},ma=da,fa=Object(c["a"])(ma,la,ua,!1,null,"21294d92",null),pa=fa.exports,va=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container blurred",style:"background-image:url('"+t.item.data.cover.blurred+"')"},[a("div",[a("video",{attrs:{id:"video",width:"100%",controls:"controls",preload:"auto"}},[t._v("您的浏览器不支持video标签>\n      "),a("source",{attrs:{src:t.item.data.playUrl,type:"video/mp4"}})])]),a("div",{staticClass:"info"},[a("p",{staticClass:"title"},[t._v(t._s(t.item.data.title))]),a("p",{staticClass:"category"},[t._v(t._s("#"+t.item.data.category))]),a("p",{staticClass:"description"},[t._v(t._s(t.item.data.description))])]),a("author",{staticClass:"author",attrs:{author:t.item.data.author}}),t._l(t.values,function(t,e){return a(t.name,{key:e,tag:"component",attrs:{item:t.json}})})],2)},ha=[],ga=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("img",{staticClass:"pic",attrs:{src:t.author.icon}}),a("div",{staticClass:"content"},[a("p",{staticClass:"title"},[t._v(t._s(t.author.name))]),a("p",{staticClass:"desc"},[t._v(t._s(t.author.description))])]),t._m(0)])},ba=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{staticClass:"btn"},[t._v("+ 关注")])])}],_a={name:"Author",props:{author:Object}},Ca=_a,ya=(a("c1b4"),Object(c["a"])(Ca,ga,ba,!1,null,"3800ecd4",null)),xa=ya.exports,Oa={name:"VideoDetail",components:{Author:xa,VideoSmallCard:fe,TextCard:Vt},props:{item:Object},created:function(){this._getRelated()},data:function(){return{bg:{backgroundImage:"url('".concat(this.item.data.cover.blurred,"')")},values:[]}},methods:{_getRelated:function(){var t=this;T(this.item.data.id).then(function(e){console.log(e),t.values=Ke(e.itemList),console.log(t.values)}).catch(function(e){console.log(t.reason)})}}},ja=Oa,Ia=(a("15dd"),Object(c["a"])(ja,va,ha,!1,null,"f09b16ec",null)),ka=Ia.exports,Sa=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"nav"},[a("router-link",{staticClass:"tab-item",attrs:{tag:"a",to:"/"}},[a("span",{staticClass:"tab-item-text"},[t._v("发现")])]),a("router-link",{staticClass:"tab-item",attrs:{tag:"a",to:"/recommend"}},[a("span",{staticClass:"tab-item-text"},[t._v("推荐")])]),a("router-link",{staticClass:"tab-item",attrs:{tag:"a",to:"/daily"}},[a("span",{staticClass:"tab-item-text"},[t._v("日报")])])],1),a("keep-alive",[a("router-view")],1)],1)},Ta=[],wa={name:"Main"},Ea=wa,La=(a("e17c"),Object(c["a"])(Ea,Sa,Ta,!1,null,"18093f10",null)),$a=La.exports,Ma=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t.tag.tagInfo?a("TagInfo",{attrs:{"tag-info":t.tag.tagInfo}}):t._e(),t.tag.tabInfo?a("TabList",{attrs:{tabList:t.tag.tabInfo.tabList,click:t.click}}):t._e(),t._l(t.values,function(t,e){return a(t.name,{key:e,tag:"component",attrs:{item:t.json}})})],2)},Na=[],Fa={name:"TagIndex",components:Qe,props:{id:String},created:function(){this.fetchData()},data:function(){return{tag:Object,values:Array}},watch:{$route:"fetchData"},methods:{_getTagIndex:function(){var t=this;E(this.id).then(function(e){t.tag=e,t.click(0)}).catch(function(t){console.log(t.toString())})},fetchData:function(){this.id=this.$route.params.id,this._getTagIndex()},click:function(t){var e=this;L(this.tag.tabInfo.tabList[t].apiUrl).then(function(t){e.values=Ke(t.itemList)})}}},Aa=Fa,Va=Object(c["a"])(Aa,Ma,Na,!1,null,"1b76f1da",null),qa=Va.exports;n["a"].use(d["a"]);var za=new d["a"]({mode:"history",routes:[{path:"/",name:"main",component:$a,children:[{path:"/",name:"discover",component:aa},{path:"/recommend",name:"recommend",component:ca},{path:"/daily",name:"daily",component:pa}],meta:{keepAlive:!0}},{path:"/video",name:"video",component:ka,props:!0,meta:{keepAlive:!0}},{path:"/tag/:id",name:"tag",component:qa,props:!0,meta:{keepAlive:!0}}],scrollBehavior:function(t,e,a){return a||{x:0,y:0}}}),Ba=a("2f62");n["a"].use(Ba["a"]);var Pa=new Ba["a"].Store({state:{},mutations:{},actions:{}}),Da=a("ada1");a("8eac"),n["a"].component("swipe",Da["Swipe"]),n["a"].component("swipe-item",Da["SwipeItem"]),n["a"].prototype.$axios=g.a,g.a.defaults.baseURL="/api",n["a"].config.productionTip=!1,new n["a"]({router:za,store:Pa,render:function(t){return t(u)}}).$mount("#app")},"5c72":function(t,e,a){},"5da6":function(t,e,a){},7685:function(t,e,a){"use strict";var n=a("77ab"),i=a.n(n);i.a},"77ab":function(t,e,a){},8390:function(t,e,a){"use strict";var n=a("0518"),i=a.n(n);i.a},"8de1":function(t,e,a){},"9ec5":function(t,e,a){},a71c:function(t,e,a){},ab32:function(t,e,a){"use strict";var n=a("29c8"),i=a.n(n);i.a},abac:function(t,e,a){"use strict";var n=a("b920"),i=a.n(n);i.a},ae1b:function(t,e,a){},b920:function(t,e,a){},bb3c:function(t,e,a){"use strict";var n=a("45da"),i=a.n(n);i.a},bca1:function(t,e,a){"use strict";var n=a("5576"),i=a.n(n);i.a},c1b4:function(t,e,a){"use strict";var n=a("fd3a"),i=a.n(n);i.a},c776:function(t,e,a){},d78f:function(t,e,a){"use strict";var n=a("5da6"),i=a.n(n);i.a},de65:function(t,e,a){"use strict";var n=a("9ec5"),i=a.n(n);i.a},e17c:function(t,e,a){"use strict";var n=a("1721"),i=a.n(n);i.a},e6bb:function(t,e,a){"use strict";var n=a("ae1b"),i=a.n(n);i.a},ed06:function(t,e,a){"use strict";var n=a("323b"),i=a.n(n);i.a},fd3a:function(t,e,a){}});
//# sourceMappingURL=app.a4719bfc.js.map