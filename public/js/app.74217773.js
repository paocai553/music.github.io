(function(t){function a(a){for(var n,l,c=a[0],r=a[1],o=a[2],p=0,h=[];p<c.length;p++)l=c[p],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&h.push(i[l][0]),i[l]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);u&&u(a);while(h.length)h.shift()();return e.push.apply(e,o||[]),s()}function s(){for(var t,a=0;a<e.length;a++){for(var s=e[a],n=!0,c=1;c<s.length;c++){var r=s[c];0!==i[r]&&(n=!1)}n&&(e.splice(a--,1),t=l(l.s=s[0]))}return t}var n={},i={app:0},e=[];function l(a){if(n[a])return n[a].exports;var s=n[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=n,l.d=function(t,a,s){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)l.d(s,n,function(a){return t[a]}.bind(null,n));return s},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=a,c=c.slice();for(var o=0;o<c.length;o++)a(c[o]);var u=r;e.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"0294":function(t,a,s){t.exports=s.p+"img/点赞.8a93cc60.png"},"034f":function(t,a,s){"use strict";s("85ec")},1908:function(t,a,s){"use strict";s("f00e")},"1e6d":function(t,a){t.exports="data:image/png;base64,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"},"39ee":function(t,a,s){"use strict";s("c9fb")},"3e4e":function(t,a,s){},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"home"},[n("div",{staticClass:"sliders"},[n("div",{staticClass:"slider"},[t._m(0),n("ul",{staticClass:"slider_top"},[n("li",[n("a",{attrs:{href:""}},[n("img",{attrs:{src:s("f019"),alt:""}}),n("span",[n("router-link",{attrs:{to:"/"}},[t._v("首页")])],1)])]),n("li",[n("a",{attrs:{href:""}},[n("img",{attrs:{src:s("fe03"),alt:""}}),n("span",[n("router-link",{attrs:{to:"/find"}},[t._v("最新音乐")])],1)])]),n("li",[n("a",{attrs:{href:""}},[n("img",{attrs:{src:s("58e8"),alt:""}}),n("span",[n("router-link",{attrs:{to:"/allSong"}},[t._v("推荐歌单")])],1)])])]),t._m(1),n("div",{staticClass:"line"}),t._m(2)])]),n("div",{staticClass:"main_top"},[n("div",{staticClass:"icon"},[n("i",{staticClass:"iconfont icon icon-zuo",staticStyle:{"font-size":"40px"},on:{click:function(a){return t.GoBack()}}}),n("i",{staticClass:"iconfont icon icon-you",staticStyle:{"font-size":"40px"}})]),n("div",{staticClass:"search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],attrs:{type:"text",placeholder:"请输入"},domProps:{value:t.inputValue},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.toResult.apply(null,arguments)},input:function(a){a.target.composing||(t.inputValue=a.target.value)}}})])]),n("div",{staticClass:"player"},[n("audio",{attrs:{src:t.musicUrl,controls:"",autoplay:""}})]),n("router-view")],1)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"slider_logo"},[s("h3",[t._v("GET MUSIC")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"slider_mid"},[n("ul",[n("li",[n("a",{attrs:{href:"#"}},[n("img",{attrs:{src:s("1e6d"),alt:""}}),n("span",[t._v("建立播放清单")])])]),n("li",[n("a",{attrs:{href:"#"}},[n("img",{attrs:{src:s("0294"),alt:""}}),n("span",[t._v("已按赞歌曲")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"slider_und"},[s("ul",[s("li",[t._v("我的播放列表")]),s("li",[t._v("我的播放列表")])])])}],l={name:"Home",data:function(){return{musicUrl:[],inputValue:""}},methods:{GoBack:function(){history.back(),console.log(1)},toResult:function(){""==this.inputValue?this.$message.warning("请输入内容"):this.$router.push("/result?q="+this.inputValue)}}},c=l,r=(s("034f"),s("2877")),o=Object(r["a"])(c,i,e,!1,null,null,null),u=o.exports,p=s("bc3a"),h=s.n(p),d=s("8c4f"),m=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container",staticStyle:{"margin-top":"8vh"}},[s("div",{staticClass:"cou_song"},[s("span",{staticClass:"item",class:{active:0==t.tag},attrs:{tabindex:"1"},on:{click:function(a){t.tag=0}}},[t._v(" 全部 ")]),s("span",{staticClass:"item",class:{active:7==t.tag},attrs:{tabindex:"1"},on:{click:function(a){t.tag=7}}},[t._v(" 华语 ")]),s("span",{staticClass:"item",class:{active:96==t.tag},attrs:{tabindex:"1"},on:{click:function(a){t.tag=96}}},[t._v(" 欧美 ")]),s("span",{staticClass:"item",class:{active:8==t.tag},attrs:{tabindex:"1"},on:{click:function(a){t.tag=8}}},[t._v(" 日本 ")]),s("span",{staticClass:"item",class:{active:16==t.tag},attrs:{tabindex:"1"},on:{click:function(a){t.tag=16}}},[t._v(" 韩国 ")])]),s("div",{staticClass:"news_two"},t._l(t.lists,(function(a,n){return s("div",{key:n,staticClass:"news_pic",on:{click:function(s){return t.playmusic(a.id)}}},[s("img",{attrs:{src:a.album.picUrl,alt:""}}),s("div",{staticClass:"news_two_right"},[s("span",{staticStyle:{"margin-top":"30px","font-weight":"bold"}},[t._v(t._s(a.name))]),s("br"),s("span",{},[t._v(t._s(a.album.artists["0"].name))]),s("span",{staticStyle:{float:"right","margin-right":"50px"}},[t._v(t._s(a.duration))])])])})),0)])},f=[],g=(s("99af"),{data:function(){return{lists:[],tag:"0"}},watch:{tag:function(){this.getList()}},created:function(){this.getList()},methods:{getList:function(){var t=this;h()({url:"https://autumnfish.cn/top/song",method:"get",params:{type:this.tag}}).then((function(a){t.lists=a.data.data;for(var s=0;s<t.lists.length;s++){var n=t.lists[s].duration,i=parseInt(n/1e3/60);i<10&&(i="0"+i);var e=parseInt(n/1e3%60);e<10&&(e="0"+e),t.lists[s].duration="".concat(i,":").concat(e)}}))},playmusic:function(t){var a=this;h()({method:"get",url:"https://autumnfish.cn/song/url",params:{id:t}}).then((function(t){var s=t.data.data[0].url;a.$parent.musicUrl=s}))}}}),v=g,C=(s("69bb"),Object(r["a"])(v,m,f,!1,null,"3f2f8937",null)),y=C.exports,k=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container",staticStyle:{"margin-top":"8vh"}},[s("div",{staticClass:"tab-container"},[s("div",{staticClass:"tab-bar"},[s("span",{staticClass:"item",class:{active:"全部"==t.tag},attrs:{tabindex:"1"},on:{click:function(a){t.tag="全部",t.test()}}},[t._v(" 全部 ")]),s("span",{staticClass:"item",class:{active:"欧美"==t.tag},attrs:{tabindex:"1"},on:{click:function(a){t.tag="欧美"}}},[t._v(" 欧美 ")]),s("span",{staticClass:"item",class:{active:"华语"==t.tag},attrs:{tabindex:"1"},on:{click:function(a){t.tag="华语"}}},[t._v(" 华语 ")]),s("span",{staticClass:"item",class:{active:"流行"==t.tag},attrs:{tabindex:"1"},on:{click:function(a){t.tag="流行"}}},[t._v(" 流行 ")]),s("span",{staticClass:"item",class:{active:"说唱"==t.tag},attrs:{tabindex:"1"},on:{click:function(a){t.tag="说唱"}}},[t._v(" 说唱 ")]),s("span",{staticClass:"item",class:{active:"摇滚"==t.tag},attrs:{tabindex:"1"},on:{click:function(a){t.tag="摇滚"}}},[t._v(" 摇滚 ")]),s("span",{staticClass:"item",class:{active:"民谣"==t.tag},attrs:{tabindex:"1"},on:{click:function(a){t.tag="民谣"}}},[t._v(" 民谣 ")]),s("span",{staticClass:"item",class:{active:"电子"==t.tag},attrs:{tabindex:"1"},on:{click:function(a){t.tag="电子"}}},[t._v(" 电子 ")]),s("span",{staticClass:"item",class:{active:"轻音乐"==t.tag},attrs:{tabindex:"1"},on:{click:function(a){t.tag="轻音乐"}}},[t._v(" 轻音乐 ")]),s("span",{staticClass:"item",class:{active:"影视原声"==t.tag},attrs:{tabindex:"1"},on:{click:function(a){t.tag="影视原声"}}},[t._v(" 影视原声 ")]),s("span",{staticClass:"item",class:{active:"ACG"==t.tag},attrs:{tabindex:"1"},on:{click:function(a){t.tag="ACG"}}},[t._v(" ACG ")]),s("span",{staticClass:"item",class:{active:"怀旧"==t.tag},attrs:{tabindex:"1"},on:{click:function(a){t.tag="怀旧"}}},[t._v(" 怀旧 ")]),s("span",{staticClass:"item",class:{active:"治愈"==t.tag},attrs:{tabindex:"1"},on:{click:function(a){t.tag="治愈"}}},[t._v(" 治愈 ")]),s("span",{staticClass:"item",class:{active:"旅行"==t.tag},attrs:{tabindex:"1"},on:{click:function(a){t.tag="旅行"}}},[t._v(" 旅行 ")])]),s("div",{staticClass:"tuijian"},t._l(t.list,(function(a,n){return s("div",{key:n,staticClass:"gedan"},[s("img",{attrs:{src:a.coverImgUrl,title:a.name},on:{click:function(s){return t.toPlaylist(a.id)}}}),s("div",{staticStyle:{width:"100%",height:"50px","font-size":"14px",color:"black"}},[t._v(" "+t._s(a.name)+" ")])])})),0)]),s("div",{staticClass:"test"},[s("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page,"page-size":10},on:{"current-change":t.handleCurrentChange}})],1)])},_=[],b={name:"recommend",data:function(){return{total:0,page:1,topList:{},list:[],tag:"全部"}},watch:{tag:function(){this.topData(),this.listData(),this.page=1}},created:function(){this.topData(),this.listData()},methods:{toPlaylist:function(t){this.$router.push("/playlists?q=".concat(t))},topData:function(){var t=this;h()({url:"https://autumnfish.cn/top/playlist/highquality",method:"get",params:{limit:1,cat:this.tag}}).then((function(a){t.topList=a.data.playlists[0]}))},listData:function(){var t=this;h()({url:"https://autumnfish.cn/top/playlist/",method:"get",params:{limit:12,offset:10*(this.page-1),cat:this.tag}}).then((function(a){t.total=a.data.total,t.list=a.data.playlists}))},handleCurrentChange:function(t){this.page=t,this.listData()}}},Q=b,I=(s("ec10"),Object(r["a"])(Q,k,_,!1,null,"0fc33e72",null)),A=I.exports,E=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"result-container"},[s("div",{staticClass:"con"},[s("div",{staticClass:"title-wrap"},[s("h2",{staticClass:"title"},[t._v(t._s(t.$route.query.q))]),s("span",{staticClass:"sub-title"},[t._v("找到 "+t._s(t.count)+" 个结果")])]),s("el-tabs",{model:{value:t.activeIndex,callback:function(a){t.activeIndex=a},expression:"activeIndex"}},[s("el-tab-pane",{attrs:{label:"歌曲",name:"songs"}},[s("table",{staticClass:"el-table",staticStyle:{"background-color":"#f1f3f4"}},[s("tbody",t._l(t.songList,(function(a,n){return s("tr",{key:n,staticClass:"el-table__row",staticStyle:{"background-color":"#f1f3f4"},on:{click:function(s){return t.playMusic(a.id)}}},[s("td",[s("div",{staticClass:"song-wrap"},[s("div",{staticClass:"name-wrap"},[s("span",[t._v(t._s(a.name))])]),0!=a.alias.length?s("span",[t._v(t._s(a.alias[0]))]):t._e()])]),s("td",[t._v(t._s(a.artists[0].name))]),s("td",[t._v(t._s(a.album.name))]),s("td",[t._v(t._s(a.duration))])])})),0)])]),s("el-tab-pane",{attrs:{label:"歌单",name:"lists"}},t._l(t.playlists,(function(a,n){return s("div",{key:n,staticClass:"songs",on:{click:function(s){return t.toPlaylist(a.id)}}},[s("img",{attrs:{src:a.coverImgUrl,alt:""}}),s("p",{staticClass:"name"},[t._v(t._s(a.name))])])})),0),s("el-tab-pane",{attrs:{label:"MV",name:"mv"}},t._l(t.mv,(function(a,n){return s("div",{key:n,staticClass:"result_MV",on:{click:function(s){return t.toMV(a.id)}}},[s("img",{attrs:{src:a.cover,alt:""}}),s("div",{staticClass:"name"},[t._v(t._s(a.name))]),s("div",{staticClass:"singer"},[t._v(t._s(a.artistName))])])})),0)],1)],1)])},w=[],B={name:"result",data:function(){return{activeIndex:"songs",songList:[],playlists:[],mv:[],count:0}},created:function(){var t=this;h()({url:"https://autumnfish.cn/search",method:"get",params:{keywords:this.$route.query.q,type:1,limit:12}}).then((function(a){console.log(a),t.songList=a.data.result.songs;for(var s=0;s<t.songList.length;s++){var n=parseInt(t.songList[s].duration/1e3/60),i=parseInt(t.songList[s].duration/1e3%60);n<10&&(n="0"+n),i<10&&(i="0"+i),t.songList[s].duration=n+":"+i}t.count=a.data.result.songCount}))},watch:{activeIndex:function(){var t=this,a=1,s=8;switch(this.activeIndex){case"songs":a=1,s=12;break;case"lists":a=1e3,s=10;break;case"mv":a=1004,s=8;break;default:break}h()({url:"https://autumnfish.cn/search",method:"get",params:{keywords:this.$route.query.q,type:a,limit:s}}).then((function(s){if(console.log(s),1==a){t.songList=s.data.result.songs;for(var n=0;n<t.songList.length;n++){var i=parseInt(t.songList[n].duration/1e3/60),e=parseInt(t.songList[n].duration/1e3%60);i<10&&(i="0"+i),e<10&&(e="0"+e),t.songList[n].duration=i+":"+e}t.count=s.data.result.songCount}else if(1e3==a){t.playlists=s.data.result.playlists,t.count=s.data.result.playlistCount;for(var l=0;l<t.playlists.length;l++)t.playlists[l].playCount>1e5&&(t.playlists[l].playCount=parseInt(t.playlists[l].playCount/1e4)+"万")}else{t.mv=s.data.result.mvs,t.count=s.data.result.mvCount;for(var c=0;c<t.mv.length;c++){var r=parseInt(t.mv[c].duration/1e3/60),o=parseInt(t.mv[c].duration/1e3%60);r<10&&(r="0"+r),o<10&&(o="0"+o),t.mv[c].duration=r+":"+o,t.mv[c].playCount>1e5&&(t.mv[c].playCount=parseInt(t.mv[c].playCount/1e4)+"万")}}}))}},methods:{toMV:function(t){this.$router.push("/mv?q=".concat(t))},toPlaylist:function(t){this.$router.push("/playlists?q=".concat(t))},playMusic:function(t){var a=this;h()({url:"https://autumnfish.cn/song/url",method:"get",params:{id:t}}).then((function(t){var s=t.data.data[0].url;a.$parent.musicUrl=s}))}}},x=B,J=(s("7a2b"),Object(r["a"])(x,E,w,!1,null,null,null)),M=J.exports,G=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container",staticStyle:{"margin-top":"8vh"}},[s("div",{staticClass:"play_top"},[s("div",{staticClass:"top_left"},[s("img",{attrs:{src:t.playlist.coverImgUrl,alt:""}})]),s("div",{staticClass:"top_right"},[s("p",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.playlist.name))]),s("div",[s("div",{staticClass:"right_img"},[s("img",{attrs:{src:t.playlist.creator.avatarUrl,alt:""}})]),s("span",[t._v(t._s(t.playlist.creator.nickname))]),s("span",[t._v("创建")])]),s("span",{staticClass:"jianjie"},[t._v("简介： "+t._s(t.playlist.description)+" ")])])]),s("div",{staticClass:"play_container"},[s("el-tabs",[s("el-tab-pane",{attrs:{label:"歌曲列表",name:"first"}},[t._l(t.tracks,(function(a,n){return s("div",{key:n,staticStyle:{height:"40px"}},[s("i",{staticClass:"iconfont icon-bofang",on:{click:function(s){return t.playMusic(a.id)}}}),s("span",{staticStyle:{width:"155px",display:"inline-block","over-flow":"hidden"}},[t._v(t._s(a.name))]),s("span",{staticStyle:{width:"25%",display:"inline-block","text-align":"center"}},[t._v(t._s(a.ar[0].name))]),s("span",{staticStyle:{width:"25%",display:"inline-block","text-align":"center"}},[t._v(t._s(a.al.name))]),s("span",{staticStyle:{width:"25%",display:"inline-block","text-align":"center"}},[t._v(t._s(a.dt))])])})),s("div",{staticStyle:{"margin-bottom":"8vh"}})],2),s("el-tab-pane",{attrs:{label:"最新评论",name:"second"}},[t._l(t.comments,(function(a,n){return s("ul",{key:n,staticClass:"Line"},[s("li",{staticClass:"play_img"},[s("img",{staticStyle:{height:"80%",display:"inline-block"},attrs:{src:a.user.avatarUrl,alt:""}})]),s("li",{staticClass:"play_nick",staticStyle:{"font-weight":"bold"}},[t._v(" "+t._s(a.user.nickname)+": ")]),s("li",{staticClass:"play_ping"},[t._v(t._s(a.content))])])})),s("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page},on:{"current-change":t.handleCurrentChange}}),s("div",{staticStyle:{"margin-bottom":"8vh"}})],2)],1)],1)])},U=[],S={name:"playlists",data:function(){return{activeIndex:"1",total:0,page:1,tracks:[],playlist:[],musiclist:[],hotComment:[],hotCount:0,comments:[],avatarUrl:[]}},created:function(){var t=this;h()({url:"https://autumnfish.cn/playlist/detail",method:"get",params:{id:this.$route.query.q}}).then((function(a){console.log(a.data.playlist.tracks),t.playlist=a.data.playlist,t.tracks=a.data.playlist.tracks;for(var s=0;s<t.tracks.length;s++){var n=parseInt(t.tracks[s].dt/1e3/60),i=parseInt(t.tracks[s].dt/1e3%60);n<10&&(n="0"+n),i<10&&(i="0"+i),t.tracks[s].dt=n+":"+i}})),h()({url:"https://autumnfish.cn/comment/playlist",method:"get",params:{id:this.$route.query.q,limit:8,offset:0}}).then((function(a){t.total=a.data.total,t.comments=a.data.comments}))},methods:{playMusic:function(t){var a=this;h()({url:"https://autumnfish.cn/song/url",method:"get",params:{id:t}}).then((function(t){var s=t.data.data[0].url;a.$parent.musicUrl=s}))},handleCurrentChange:function(t){var a=this;this.page=t,h()({url:"https://autumnfish.cn/comment/playlist",method:"get",params:{id:this.$route.query.q,limit:8,offset:8*(this.page-1)}}).then((function(t){a.total=t.data.total,a.comments=t.data.comments}))}}},Y=S,K=(s("39ee"),Object(r["a"])(Y,G,U,!1,null,null,null)),Z=K.exports,V=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container",staticStyle:{"margin-top":"8vh"}},[s("div",{staticClass:"mv_left"},[s("h3",{staticClass:"title"},[t._v("MV详情")]),s("div",[s("video",{staticStyle:{width:"90%",height:"600px"},attrs:{controls:"",src:t.url,autoplay:""}})])])])},j=[],q={name:"mv",data:function(){return{total:20,page:1,limit:10,url:"",simiMvs:[],mvInfo:{},icon:""}},created:function(){var t=this;h()({url:"https://autumnfish.cn/mv/url",method:"get",params:{id:this.$route.query.q}}).then((function(a){t.url=a.data.data.url})),h()({url:"https://autumnfish.cn/mv/detail",method:"get",params:{mvid:this.$route.query.q}}).then((function(a){t.mvInfo=a.data.data,h()({url:"https://autumnfish.cn/artists",method:"get",params:{id:t.mvInfo.artists[0].id}}).then((function(a){t.icon=a.data.artist.picUrl}))})),h()({url:"https://autumnfish.cn/comment/mv",method:"get",params:{id:this.$route.query.q,limit:10,offset:0}}).then((function(t){console.log(t)}))},methods:{handleCurrentChange:function(t){console.log("当前页: ".concat(t))}}},F=q,O=(s("88ac"),Object(r["a"])(F,V,j,!1,null,null,null)),D=O.exports,R=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container",staticStyle:{"margin-top":"8vh"}},[s("div",{staticClass:"img"},[s("p",{staticStyle:{opacity:"0"}},[t._v("1")]),s("el-carousel",{attrs:{interval:4e3,type:"card",height:"200px"}},t._l(t.banners,(function(t,a){return s("el-carousel-item",{key:a},[s("img",{attrs:{src:t.imageUrl,alt:""}})])})),1)],1),s("div",{staticClass:"main_song"},[s("p",{staticStyle:{"margin-left":"10px","font-weight":"bold","font-size":"25px",color:"black"}},[t._v(" 推荐歌单 ")]),t._l(t.list,(function(a,n){return s("div",{key:n,staticClass:"song"},[s("img",{attrs:{src:a.picUrl,alt:""},on:{click:function(s){return t.toPlaylist(a.id)}}}),s("span",{staticStyle:{color:"black"}},[t._v(t._s(a.name))])])}))],2),s("div",{staticClass:"news_tit"},[t._v("最新音乐")]),s("div",{staticClass:"news"},t._l(t.songs,(function(a,n){return s("div",{key:n,staticClass:"news_pic",on:{click:function(s){return t.playmusic(a.id)}}},[s("img",{attrs:{src:a.picUrl,alt:""}}),s("div",{staticClass:"news_right"},[s("span",{staticStyle:{"margin-top":"30px","font-weight":"bold"}},[t._v(t._s(a.name))]),s("br"),s("span",{},[t._v(t._s(a.song.artists[0].name))])])])})),0),s("div",{staticClass:"mv_content"},[s("p",{staticStyle:{margin:"20px 55px","font-weight":"bold","font-size":"25px",color:"black"}},[t._v(" 推荐MV ")]),t._l(t.mvs,(function(a,n){return s("div",{key:n,staticClass:"mv",on:{click:function(s){return t.toMV(a.id)}}},[s("img",{attrs:{src:a.picUrl,alt:""}}),s("span",{staticStyle:{"font-weight":"bold",color:"black"}},[t._v(t._s(a.name))]),s("span",{staticStyle:{color:"black"}},[t._v(t._s(a.artistName))])])}))],2),s("div",{staticStyle:{height:"15vh"}})])},T=[],L={name:"container",data:function(){return{banners:[],list:[],songs:[],mvs:[]}},created:function(){var t=this;h()({method:"get",url:"https://autumnfish.cn/banner"}).then((function(a){t.banners=a.data.banners})),h()({method:"get",url:"https://autumnfish.cn/personalized",params:{limit:12}}).then((function(a){t.list=a.data.result})),h()({method:"get",url:"https://autumnfish.cn/personalized/newsong",params:{limit:4}}).then((function(a){t.songs=a.data.result})),h()({method:"get",url:"https://autumnfish.cn/personalized/mv"}).then((function(a){t.mvs=a.data.result}))},methods:{toMV:function(t){this.$router.push("/mv?q=".concat(t))},toPlaylist:function(t){this.$router.push("/playlists?q=".concat(t))},playmusic:function(t){var a=this;console.log(t),h()({methods:"get",url:"https://autumnfish.cn/song/url",params:{id:t}}).then((function(t){var s=t.data.data[0].url;a.$parent.musicUrl=s}))}}},P=L,W=(s("1908"),Object(r["a"])(P,R,T,!1,null,null,null)),H=W.exports;n["default"].use(d["a"]);var z=[{path:"/",component:H},{path:"/result",component:M},{path:"/playlists",component:Z},{path:"/allSong",component:A},{path:"/find",component:y},{path:"/mv",component:D}],$=new d["a"]({routes:z}),N=$,X=s("5c96"),tt=s.n(X);s("0fae"),s("a342");n["default"].config.productionTip=!1,n["default"].use(tt.a),new n["default"]({router:N,axios:h.a,render:function(t){return t(u)}}).$mount("#app")},"58e8":function(t,a,s){t.exports=s.p+"img/音乐.bb5671ee.png"},6077:function(t,a,s){},"69bb":function(t,a,s){"use strict";s("c71b")},"7a2b":function(t,a,s){"use strict";s("e556")},"85ec":function(t,a,s){},"88ac":function(t,a,s){"use strict";s("3e4e")},a342:function(t,a,s){},c71b:function(t,a,s){},c9fb:function(t,a,s){},e556:function(t,a,s){},ec10:function(t,a,s){"use strict";s("6077")},f00e:function(t,a,s){},f019:function(t,a,s){t.exports=s.p+"img/首页.a728712f.png"},fe03:function(t,a,s){t.exports=s.p+"img/搜索.24720fe1.png"}});
//# sourceMappingURL=app.74217773.js.map