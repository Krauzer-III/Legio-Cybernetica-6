(function(e){function t(t){for(var a,i,s=t[0],l=t[1],o=t[2],b=0,u=[];b<s.length;b++)i=s[b],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&u.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(u.length)u.shift()();return r.push.apply(r,o||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],a=!0,s=1;s<c.length;s++){var l=c[s];0!==n[l]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=c[0]))}return e}var a={},n={app:0},r=[];function i(t){if(a[t])return a[t].exports;var c=a[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.m=e,i.c=a,i.d=function(e,t,c){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(c,a,function(t){return e[t]}.bind(null,a));return c},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var o=0;o<s.length;o++)t(s[o]);var d=l;r.push([1,"chunk-vendors"]),c()})({0:function(e,t){},"0723":function(e,t,c){},1:function(e,t,c){e.exports=c("56d7")},"16c3":function(e,t,c){"use strict";c("38df")},2:function(e,t){},2830:function(e,t,c){"use strict";c("3594")},3:function(e,t){},3594:function(e,t,c){},"38df":function(e,t,c){},"4c61":function(e,t,c){"use strict";c("8f54")},"500f":function(e,t,c){e.exports=c.p+"img/long.e13401e0.svg"},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var a=c("7a23");function n(e,t){var c=Object(a["B"])("router-view");return Object(a["v"])(),Object(a["e"])(c)}c("4c61");var r=c("6b0d"),i=c.n(r);const s={},l=i()(s,[["render",n]]);var o=l,d=c("6c02"),b={class:"home"};function u(e,t,c,n,r,i){var s=Object(a["B"])("SideBar"),l=Object(a["B"])("Map");return Object(a["v"])(),Object(a["g"])("div",b,[Object(a["j"])(s),Object(a["j"])(l)])}function f(e,t,c,n,r,i){var s=Object(a["B"])("ymap-marker"),l=Object(a["B"])("yandex-map"),o=Object(a["B"])("MapMenu");return Object(a["v"])(),Object(a["g"])(a["a"],null,[Object(a["j"])(l,{ref:"map",coords:[55.72,37.65],zoom:"8",style:{width:"100%",height:"100vh"},controls:[]},{default:Object(a["K"])((function(){return[(Object(a["v"])(!0),Object(a["g"])(a["a"],null,Object(a["z"])(r.markers2,(function(e){return Object(a["v"])(),Object(a["e"])(s,{key:e.id,"marker-id":e.id,"marker-type":"Rectangle","marker-stroke":{opacity:.5},"marker-fill":{color:e.colorRec()},coords:e.coord,balloon:{body:r.selectFunc?"":e.text},onClick:function(t){return r.selectFunc?i.selectMarker(e):""}},null,8,["marker-id","marker-stroke","marker-fill","coords","balloon","onClick"])})),128))]})),_:1},8,["coords"]),Object(a["j"])(o,{selecton:i.selectOn,selectFunc:r.selectFunc,selectMarkers:r.selectMarkers},null,8,["selecton","selectFunc","selectMarkers"])],64)}var h=c("1da1"),j=(c("96cf"),c("3ca3"),c("ddb0"),c("d81d"),c("ac1f"),c("1276"),c("99af"),c("f5ce")),O=c("bc3a"),v=c.n(O),p=(c("b680"),{class:"menu"}),k=Object(a["h"])("i",{class:"fas fa-bullseye"},null,-1),m=Object(a["h"])("span",{class:"tooltiptext"},"Тепловая карта",-1),M=[k,m],_=Object(a["h"])("i",{class:"fas fa-info-circle"},null,-1),g=Object(a["h"])("span",{class:"tooltiptext"},"Информация",-1),y=[_,g],x={href:"https://github.com/Amirovvv/LegioCMaps-hack",target:"_blank"},w=Object(a["h"])("i",{class:"fab fa-github"},null,-1),B=Object(a["h"])("span",{class:"tooltiptext"},"GitHub",-1),E=[w,B],F=Object(a["h"])("i",{class:"fas fa-ellipsis-v"},null,-1),C=Object(a["h"])("span",{class:"tooltiptext"},"Доп.Настройки",-1),S=[F,C],P=Object(a["h"])("i",{class:"fas fa-question"},null,-1),R=Object(a["h"])("span",{class:"tooltiptext"},"Помощь",-1),q=[P,R],D={key:0,class:"modal",ref:"content"},z={class:"modal-info"},I={class:"info-block"},T=Object(a["h"])("div",{class:"title"},"Количество выбранных квадратов",-1),H={class:"body"},J={class:"info-block"},A=Object(a["h"])("div",{class:"title"},"Территория выделена из района",-1),G={class:"info-block"},K=Object(a["h"])("div",{class:"title"},"Площадь района",-1),L={class:"body"},Y={class:"info-block"},$=Object(a["h"])("div",{class:"title"},"Проживает на территории",-1),N={class:"body"},Q={class:"info-block"},U=Object(a["h"])("div",{class:"title"},"Работает на территории",-1),V={class:"body"},W={class:"info-block"},X=Object(a["h"])("div",{class:"title"}," Количество человек, которые находились на территории сектора по будням в дневное время чаще, чем в любых других секторах, в рассматриваемый месяц ",-1),Z={class:"body"},ee={class:"info-block"},te=Object(a["h"])("div",{class:"title"}," Проживает на территории и имеют разъездную работу ",-1),ce={class:"body"},ae={border:"1",ref:"exportable_table"},ne=Object(a["h"])("td",null,"Территория выделена из района",-1),re=Object(a["h"])("td",null,"Площадь района",-1),ie=Object(a["h"])("td",null,"Проживает на территории",-1),se=Object(a["h"])("td",null,"Работает на территории",-1),le=Object(a["h"])("td",null," Количество человек, которые находились на территории сектора по будням в дневное время чаще, чем в любых других секторах, в рассматриваемый месяц ",-1),oe=Object(a["h"])("td",null,"Проживает на территории и имеют разъездную работу",-1),de=Object(a["h"])("div",{class:"color-info"},[Object(a["h"])("div",{class:"color-select"},[Object(a["h"])("div",{class:"color-title"},[Object(a["h"])("div",null,"Нужно строить"),Object(a["h"])("div",null,"Все в порядке")]),Object(a["h"])("div",{class:"color"})])],-1);function be(e,t,c,n,r,i){return Object(a["v"])(),Object(a["g"])(a["a"],null,[Object(a["h"])("div",p,[Object(a["h"])("button",{class:Object(a["q"])(["menu__btn tooltip","one"===r.active?"activebtn":""]),onClick:t[0]||(t[0]=function(e){c.selecton(),i.activeBtn("one")})},M,2),Object(a["h"])("button",{class:Object(a["q"])(["menu__btn tooltip","two"===r.active?"activebtn":""]),onClick:t[1]||(t[1]=function(e){return i.activeBtn("two")})},y,2),Object(a["h"])("a",x,[Object(a["h"])("button",{class:Object(a["q"])(["menu__btn tooltip","three"===r.active?"activebtn":""]),onClick:t[2]||(t[2]=function(e){return i.activeBtn("three")})},E,2)]),Object(a["h"])("button",{class:Object(a["q"])(["menu__btn tooltip","four"===r.active?"activebtn":""]),onClick:t[3]||(t[3]=function(e){return i.activeBtn("four")})},S,2),Object(a["h"])("button",{class:Object(a["q"])(["menu__btn tooltip info","five"===r.active?"activebtn":""]),onClick:t[4]||(t[4]=function(e){return i.activeBtn("five")})},q,2),!0===c.selectFunc?(Object(a["v"])(),Object(a["g"])("div",D,[Object(a["h"])("div",z,[Object(a["h"])("div",I,[T,Object(a["h"])("div",H,Object(a["E"])(c.selectMarkers.volumeMarkers),1)]),Object(a["h"])("div",J,[A,(Object(a["v"])(!0),Object(a["g"])(a["a"],null,Object(a["z"])(c.selectMarkers.adm_name,(function(e,t){return Object(a["v"])(),Object(a["g"])("div",{class:"body",key:t},Object(a["E"])(e),1)})),128))]),Object(a["h"])("div",G,[K,Object(a["h"])("div",L,Object(a["E"])(c.selectMarkers.area.toFixed(1))+" кв.м",1)]),Object(a["h"])("div",Y,[$,Object(a["h"])("div",N,Object(a["E"])(c.selectMarkers.cnt_home)+" чел.",1)]),Object(a["h"])("div",Q,[U,Object(a["h"])("div",V,Object(a["E"])(c.selectMarkers.cnt_job)+" чел.",1)]),Object(a["h"])("div",W,[X,Object(a["h"])("div",Z,Object(a["E"])(c.selectMarkers.cnt_day)+" чел.",1)]),Object(a["h"])("div",ee,[te,Object(a["h"])("div",ce,Object(a["E"])(c.selectMarkers.cnt_move)+" чел.",1)])]),Object(a["h"])("button",{class:"modal-btn",onClick:t[5]||(t[5]=function(e){return i.ExportExcel("xls")})}," Выгрузить данные ")],512)):Object(a["f"])("",!0),Object(a["L"])(Object(a["h"])("div",null,[Object(a["h"])("table",ae,[Object(a["h"])("tbody",null,[Object(a["h"])("tr",null,[ne,(Object(a["v"])(!0),Object(a["g"])(a["a"],null,Object(a["z"])(c.selectMarkers.adm_name,(function(e,t){return Object(a["v"])(),Object(a["g"])("td",{key:t},Object(a["E"])(e),1)})),128))]),Object(a["h"])("tr",null,[re,Object(a["h"])("td",null,Object(a["E"])(c.selectMarkers.area.toFixed(1))+" кв.м",1)]),Object(a["h"])("tr",null,[ie,Object(a["h"])("td",null,Object(a["E"])(c.selectMarkers.cnt_home)+" чел.",1)]),Object(a["h"])("tr",null,[se,Object(a["h"])("td",null,Object(a["E"])(c.selectMarkers.cnt_job)+" чел.",1)]),Object(a["h"])("tr",null,[le,Object(a["h"])("td",null,Object(a["E"])(c.selectMarkers.cnt_day)+" чел.",1)]),Object(a["h"])("tr",null,[oe,Object(a["h"])("td",null,Object(a["E"])(c.selectMarkers.cnt_move)+" чел.",1)])])],512)],512),[[a["I"],r.table]])]),de],64)}var ue=c("1146"),fe=c.n(ue),he={props:{selecton:Function,selectMarkers:Object,selectFunc:Boolean},data:function(){return{active:null,table:!1}},methods:{ExportExcel:function(e,t,c){var a=this.$refs.exportable_table,n=fe.a.utils.table_to_book(a,{sheet:"Sheet JS"});return c?fe.a.write(n,{bookType:e,bookSST:!0,type:"base64"}):fe.a.writeFile(n,t||"data."+(e||"xlsx"))},activeBtn:function(e){this.active===e?this.active=null:this.active=e}}};c("99df");const je=i()(he,[["render",be]]);var Oe=je,ve={name:"App",components:{yandexMap:j["a"],ymapMarker:j["b"],MapMenu:Oe},data:function(){return{url:"http://78.47.77.103:8081/MoscowData/GetByID/",selectMarkers:{volumeMarkers:0,adm_name:[],cnt_home:0,cnt_job:0,cnt_day:0,cnt_move:0,served:0,area:0},selectFunc:!1,markers2:[]}},methods:{selectMarker:function(e){!1===e.active?(e.clickMin="#00beff",e.clickMin02="#00beff",e.clickMin03="#00beff",e.clickMin04="#00beff",e.clickMiddle="#00beff",e.clickMiddle01="#00beff",e.clickMiddle02="#00beff",e.clickMiddle03="#00beff",e.clickMiddle04="#00beff",e.clickMiddle05="#00beff",e.active=!0,this.selectMarkers.volumeMarkers+=1,-1===this.selectMarkers.adm_name.indexOf(e.res.data.adm_name)&&this.selectMarkers.adm_name.push(e.res.data.adm_name),this.selectMarkers.cnt_home+=+e.res.data.customers_cnt_home,this.selectMarkers.cnt_job+=+e.res.data.customers_cnt_job,this.selectMarkers.cnt_day+=+e.res.data.customers_cnt_day,this.selectMarkers.cnt_move+=+e.res.data.customers_cnt_move,this.selectMarkers.served+=+e.served,this.selectMarkers.area+=+e.res.data.area):(e.active=!1,e.clickMin="rgba(196, 32, 0, 0.5)",e.clickMin02="rgba(205, 56, 0, 0.5)",e.clickMin03="rgba(222, 128, 1, 0.5)",e.clickMin04="rgba(255, 198, 38, 0.5)",e.clickMiddle="rgba(255, 228, 4, 0.5)",e.clickMiddle01="rgba(192, 225, 9, 0.5)",e.clickMiddle02="rgba(84, 191, 48, 0.5)",e.clickMiddle03="rgba(26, 177, 15, 0.5)",e.clickMiddle04="rgba(18, 112, 11, 0.5)",e.clickMiddle05="rgba(11, 69, 7, 0.5)",this.selectMarkers.volumeMarkers-=1,this.selectMarkers.cnt_home-=+e.res.data.customers_cnt_home,this.selectMarkers.cnt_job-=+e.res.data.customers_cnt_job,this.selectMarkers.cnt_day-=+e.res.data.customers_cnt_day,this.selectMarkers.cnt_move-=+e.res.data.customers_cnt_move,this.selectMarkers.served-=+e.served,this.selectMarkers.area-=+e.res.data.area)},selectOn:function(){this.selectFunc=!this.selectFunc},fetchData:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:c=0;case 1:if(!(c<=550)){t.next=12;break}return t.prev=2,t.delegateYield(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v.a.get(e.url+c);case 2:a=t.sent,e.markers2.push({coord:[a.data.geometry_1.split(",").map((function(e){return+e})),a.data.geometry_2.split(",").map((function(e){return+e}))],id:c,res:a,colorRec:function(){return a.data.predictions<=.1?this.clickMin:a.data.predictions<=.2?this.clickMin02:a.data.predictions<=.3?this.clickMin03:a.data.predictions<=.4?this.clickMin04:a.data.predictions<=.5?this.clickMiddle:a.data.predictions<=.6?this.clickMiddle01:a.data.predictions<=.7?this.clickMiddle02:a.data.predictions<=.8?this.clickMiddle03:a.data.predictions<=.9?this.clickMiddle04:a.data.predictions<=1?this.clickMiddle05:0==a.data.served?this.servedColor:void 0},clickMin:"rgba(196, 32, 0, 0.5)",clickMin02:"rgba(205, 56, 0, 0.5)",clickMin03:"rgba(222, 128, 1, 0.5)",clickMin04:"rgba(255, 198, 38, 0.5)",clickMiddle:"rgba(255, 228, 4, 0.5)",clickMiddle01:"rgba(192, 225, 9, 0.5)",clickMiddle02:"rgba(84, 191, 48, 0.5)",clickMiddle03:"rgba(26, 177, 15, 0.5)",clickMiddle04:"rgba(18, 112, 11, 0.5)",clickMiddle05:"rgba(11, 69, 7, 0.5)",servedColor:"#1999ff",active:!1,text:'\n                  <h2 class="red">Район '.concat(a.data.adm_name,"</h2>\n                  <h4>Округ ").concat(a.data.okrug_name,"</h4>\n                  <p>ID административного деления  : ").concat(a.data.adm_zid,"</p>\n                  <p>ID округа : ").concat(a.data.okrug_id,"</p>\n                  <p>Количество человек, проживающих на территории сектора: ").concat(a.data.customers_cnt_home,"</p>\n                  <p>Количество человек, работающих на территории сектора: ").concat(a.data.customers_cnt_job,"</p>\n                  <p>Количество человек, которые находились на территории сектора по будням в дневное время чаще, чем в любых других секторах, в рассматриваемый месяц: ").concat(a.data.customers_cnt_day,"</p>\n                  <p>Количество человек, проживающих на территории сектора и имеющих разъездную работу: ").concat(a.data.customers_cnt_move,"</p>\n                  <p>обслуживается ли поликлинникой(искомый признак): ").concat(0===a.data.served?"Квадрат не обслуживается":"Квадрат обслуживается","</p>\n\n              ")});case 4:case"end":return t.stop()}}),t)}))(),"t0",4);case 4:t.next=9;break;case 6:return t.prev=6,t.t1=t["catch"](2),t.abrupt("return",t.t1);case 9:c++,t.next=1;break;case 12:case"end":return t.stop()}}),t,null,[[2,6]])})))()}},mounted:function(){this.fetchData()}};c("2830");const pe=i()(ve,[["render",f],["__scopeId","data-v-282ddeaa"]]);var ke=pe,me=c("500f"),Me=c.n(me),_e=Me.a+"#logo",ge=Object(a["h"])("svg",{height:"110",style:{"padding-left":"10px"}},[Object(a["h"])("use",{width:"220",height:"120","xlink:href":_e})],-1);function ye(e,t,c,n,r,i){var s=Object(a["B"])("sidebar-menu");return Object(a["v"])(),Object(a["e"])(s,{menu:r.menu},{header:Object(a["K"])((function(){return[ge]})),_:1},8,["menu"])}var xe={data:function(){return{menu:[{href:"",title:"Все объекты",icon:"fas fa-chart-pie"},{href:"/",title:"Поликлиники",icon:"fas fa-stethoscope"},{href:"",title:"Стационары",icon:"fas fa-user-md",disabled:!0},{href:"",title:"Профильные центры",icon:"far fa-hospital",disabled:!0},{href:"",title:"Санатории",icon:"fas fa-wheelchair",disabled:!0},{href:"",title:"Больницы",icon:"fas fa-briefcase-medical",disabled:!0},{href:"",title:"Детские сады",icon:"fas fa-child",disabled:!0},{href:"",title:"Школы",icon:"fas fa-school",disabled:!0},{href:"",title:"МФЦ",icon:"fas fa-align-center",disabled:!0},{href:"",title:"Почтовые отделения",icon:"fas fa-envelope",disabled:!0},{href:"",title:"Спортивные объекты",icon:"fas fa-volleyball-ball",disabled:!0},{href:"",title:"Учреждения культуры",icon:"fas fa-university",disabled:!0},{href:"",title:"Туристические объекты",icon:"fas fa-suitcase-rolling",disabled:!0}]}}};c("16c3");const we=i()(xe,[["render",ye]]);var Be=we,Ee={name:"Home",components:{Map:ke,SideBar:Be}};const Fe=i()(Ee,[["render",u]]);var Ce=Fe,Se=Object(d["a"])({history:Object(d["b"])(),mode:"history",routes:[{path:"/",name:"Home",component:Ce}]}),Pe=Se,Re=c("5502"),qe=Object(Re["a"])({state:{},mutations:{},actions:{},modules:{}}),De=c("2ab6");c("b15b");Object(a["d"])(o).use(qe).use(Pe).use(De["a"]).mount("#app")},"8f54":function(e,t,c){},"99df":function(e,t,c){"use strict";c("0723")}});
//# sourceMappingURL=app.5b43ae97.js.map