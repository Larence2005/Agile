"use strict";(self.webpackChunkskye=self.webpackChunkskye||[]).push([[908],{4364:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ListItem=void 0;const i=a(9163);t.ListItem=i.default.div.withConfig({componentId:"-p2bwow"})`display:flex;align-items:center;padding:0 24px;height:48px;overflow:hidden;${({selected:e,theme:t})=>i.css`
    background-color: ${e?t["pages.lightForeground"]?"rgba(255, 255, 255, 0.12)":"rgba(0, 0, 0, 0.08)":"transparent"};
      color: ${t["pages.lightForeground"]?"#fff":"#000"};
    &:hover {
      background-color: ${t["pages.lightForeground"]?`rgba(255, 255, 255, ${e?.12:.08})`:`rgba(0, 0, 0, ${e?.08:.04})`};
    }
  `};`},6785:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SelectionDialog=void 0;const i=a(7294),n=a(2766),o=a(2609),l=a(1108);t.SelectionDialog=(0,n.observer)((({amount:e,visible:t,onDeleteClick:a,onCancelClick:n,theme:r})=>i.createElement(o.StyledSmallDialog,{visible:t},i.createElement(o.Title,null,e," selected"),i.createElement(l.Button,{style:{marginLeft:16},onClick:a},"Delete"),i.createElement(l.Button,{background:r["dialog.lightForeground"]?"rgba(255, 255, 255, 0.08)":"rgba(0, 0, 0, 0.08)",foreground:r["dialog.lightForeground"]?"white":"black",style:{marginLeft:8},onClick:n},"Cancel"))))},2609:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Title=t.StyledSmallDialog=void 0;const i=a(9163),n=a(6308);t.StyledSmallDialog=i.default.div.withConfig({componentId:"-c7jgl3"})`width:fit-content;position:fixed;top:16px;left:${1392}px;border-radius:8px;overflow:hidden;display:flex;align-items:center;padding:12px 12px 12px 16px;box-shadow:${(0,n.shadows)(8)};will-change:opacity;transform:translateX(-100%);transition:0.15s opacity;z-index:999;@media all and (max-width: ${1488}px){left:auto;transform:translateX(0);right:${96}px;}${({visible:e,theme:t})=>i.css`
    opacity: ${e?1:0};
    pointer-events: ${e?"inherit":"none"};
    background-color: ${t["dialog.backgroundColor"]};
  `};`,t.Title=i.default.div.withConfig({componentId:"-7lvk4w"})`font-size:12px;margin-right:4px;`},2469:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=a(7294),n=a(2766),o=a(7352),l=a(1348),r=a(9163),s=a(6785),d=a(9169),c=a(6366),g=a(1842),m=a(6905),h=a(585),u=e=>{e.target.scrollTop>=e.target.scrollHeight-e.target.clientHeight-256&&(o.default.itemsLoaded+=o.default.getDefaultLoaded())},f=(0,n.observer)((({range:e,children:t,icon:a})=>i.createElement(l.NavigationDrawer.Item,{onClick:()=>o.default.selectedRange=e,selected:o.default.selectedRange===e,icon:a},t))),p=e=>{e.stopPropagation(),o.default.selectedItems=[]},v=e=>{e.stopPropagation(),o.default.deleteSelected()},w=(0,n.observer)((()=>i.createElement(c.LeftContent,{style:{margin:"32px 64px"}},i.createElement(s.SelectionDialog,{theme:o.default.theme,visible:o.default.selectedItems.length>0,amount:o.default.selectedItems.length,onDeleteClick:v,onCancelClick:p}),o.default.sections.map((e=>i.createElement(d.HistorySection,{data:e,key:e.date.getTime()})))))),b=e=>{o.default.search(e.currentTarget.value)},y=()=>{o.default.clear()};t.default=(0,n.observer)((()=>i.createElement(r.ThemeProvider,{theme:Object.assign({},o.default.theme)},i.createElement(c.Container,null,i.createElement(h.WebUIStyle,null),i.createElement(g.GlobalNavigationDrawer,null),i.createElement(l.NavigationDrawer,{title:"History",search:!0,onSearchInput:b},i.createElement(f,{icon:m.ICON_ALL,range:"all"},"All"),i.createElement(f,{icon:m.ICON_TODAY,range:"today"},"Today"),i.createElement(f,{icon:m.ICON_HISTORY,range:"yesterday"},"Yesterday"),i.createElement(f,{icon:m.ICON_WEEK,range:"last-week"},"Last week"),i.createElement(f,{icon:m.ICON_CALENDAR,range:"older"},"Older"),i.createElement("div",{style:{flex:1}}),i.createElement(l.NavigationDrawer.Item,{icon:m.ICON_TRASH,onClick:y},"Clear Browsing Data")),i.createElement(c.Content,{onScroll:u},i.createElement(w,null))))))},2806:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=a(7294),n=a(2766),o=a(9768),l=a(4364),r=a(1047),s=a(7352),d=a(6537),c=a(7625),g=e=>t=>{t.stopPropagation(),s.default.removeItems([e._id])},m=e=>{e.stopPropagation()};t.default=(0,n.observer)((({data:e})=>{const t=s.default.selectedItems.includes(e._id);let{favicon:a}=e,n=!1;return null==a||"string"==typeof a&&""===a.trim()?a=d.ICON_PAGE:"string"==typeof e.favicon&&(a=s.default.favicons.get(e.favicon),n=!0),i.createElement(l.ListItem,{key:e._id,onClick:(h=e,()=>{const e=s.default.selectedItems.indexOf(h._id);-1===e?s.default.selectedItems.push(h._id):s.default.selectedItems.splice(e,1)}),selected:t},i.createElement(o.Favicon,{style:{backgroundImage:"string"==typeof a?`url(${a})`:"",opacity:n?1:.54,filter:!n&&s.default.theme["pages.lightForeground"]?"invert(100%)":"none"}},"string"!=typeof a&&i.createElement(c.FontAwesomeIcon,{icon:a})),i.createElement(o.TitleContainer,null,i.createElement(o.Title,{onClick:m,href:e.url,target:"_blank"},e.title)),i.createElement(o.Site,null,e.url.split("/")[2]),i.createElement(o.Time,null,(0,r.formatTime)(new Date(e.date))),i.createElement(o.Remove,{onClick:g(e)},i.createElement(c.FontAwesomeIcon,{icon:d.ICON_TRASH})));var h}))},9768:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Time=t.Site=t.TitleContainer=t.Title=t.Favicon=t.Remove=void 0;const i=a(9163),n=a(6308),o=a(6905);t.Remove=i.default.div.withConfig({componentId:"-6nowp8"})`height:16px;width:16px;cursor:pointer;color:${o.RED_500};display:flex;justify-content:center;align-items:center;opacity:0.54;${(0,n.centerIcon)()};&:hover{opacity:1;}`,t.Favicon=i.default.div.withConfig({componentId:"-crm2yu"})`${(0,n.centerIcon)()};height:16px;width:16px;margin-right:24px;display:flex;justify-content:center;align-items:center;`,t.Title=i.default.a.withConfig({componentId:"-n6hu5c"})`white-space:nowrap;width:fit-content;text-decoration:none;color:inherit;&:hover{cursor:pointer;text-decoration:underline;}`,t.TitleContainer=i.default.div.withConfig({componentId:"-1srofie"})`flex:2;margin-right:16px;overflow:hidden;text-overflow:ellipsis;`,t.Site=i.default.div.withConfig({componentId:"-3bu1we"})`flex:1;opacity:0.54;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;`,t.Time=i.default.div.withConfig({componentId:"-1ctpf9j"})`opacity:0.54;margin-left:16px;margin-right:32px;`},9169:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HistorySection=void 0;const i=a(7294),n=a(2806),o=a(7451),l=a(2766);t.HistorySection=(0,l.observer)((({data:e})=>i.createElement(o.EmptySection,null,i.createElement(o.SectionTitle,null,e.label),e.items.map((e=>i.createElement(n.default,{key:e._id,data:e}))))))},7451:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SectionTitle=t.EmptySection=void 0;const i=a(9163);t.EmptySection=i.default.div.withConfig({componentId:"-1h41nuk"})`margin-top:16px;padding:0 0 8px 0;overflow:hidden;border-radius:8px;&:first-child{margin-top:0;}${({theme:e})=>i.css`
    background-color: ${e["pages.lightForeground"]?"rgba(255, 255, 255, 0.05)":"#fafafa"};
  `};`,t.SectionTitle=i.default.div.withConfig({componentId:"-d5ykoq"})`font-size:16px;padding:16px 24px;font-weight:500;`},9555:(e,t,a)=>{const i=a(2469);(0,a(3109).renderWebUI)(i.default)},7352:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Store=void 0;const i=a(8949),n=a(1857),o=a(9254),l=a(1047);class r{constructor(){this.faviconsDb=new o.PreloadDatabase("favicons"),this.settings=Object.assign({},window.settings),this.items=[],this.itemsLoaded=this.getDefaultLoaded(),this.selectedRange="all",this.searched="",this.selectedItems=[],this.favicons=new Map,(0,i.makeObservable)(this,{settings:i.observable,items:i.observable,itemsLoaded:i.observable,selectedRange:i.observable,searched:i.observable,selectedItems:i.observable,favicons:i.observable,theme:i.computed,sections:i.computed,range:i.computed,search:i.action,deleteSelected:i.action}),window.updateSettings=e=>{this.settings=Object.assign(Object.assign({},this.settings),e)},this.load(),this.loadFavicons(),window.addEventListener("resize",(()=>{const e=this.getDefaultLoaded();e>this.itemsLoaded&&(this.itemsLoaded=e)}))}get theme(){return(0,n.getTheme)(this.settings.theme)}get sections(){const e=[];let t,a=0;for(let i=this.items.length-1;i>=0&&!(a>this.itemsLoaded);i--){const n=this.items[i],o=new Date(n.date);if(""===this.searched||n.title.toLowerCase().includes(this.searched)||n.url.includes(this.searched)){if(this.range){if(o.getTime()>=this.range.max)continue;if(o.getTime()<=this.range.min)break}(0,l.compareDates)(t&&t.date,o)?t.items.push(n):(t={label:(0,l.getSectionLabel)(o),items:[n],date:o},e.push(t)),a++}}return e}get range(){const e=new Date,t=e.getDate(),a=e.getMonth(),i=e.getFullYear();let n,o;switch(this.selectedRange){case"today":n=new Date(i,a,t,0,0,0,0),o=new Date(i,a,t,23,59,59,999);break;case"yesterday":n=new Date(i,a,t-1,0,0,0,0),o=new Date(i,a,t-1,23,59,59,999);break;case"last-week":{let l=e.getDay()-1;-1===l&&(l=6),n=new Date(i,a,t-l-7,0,0,0,0),o=new Date(i,a,t-l-1,0,0,0,0);break}case"last-month":n=new Date(i,a-1,1,0,0,0,0),o=new Date(i,a,0,0,0,0,0);break;case"older":{let l=e.getDay()-1;-1===l&&(l=6),n=new Date(0),o=new Date(i,a,t-l-7,0,0,0,0);break}}return"all"!==this.selectedRange&&{min:n.getTime(),max:o.getTime()}}resetLoadedItems(){this.itemsLoaded=this.getDefaultLoaded()}getById(e){return this.items.find((t=>t._id===e))}async load(){this.items=await window.getHistory()}async loadFavicons(){(await this.faviconsDb.get({})).forEach((e=>{const{data:t}=e;null==this.favicons.get(e.url)&&this.favicons.set(e.url,t)}))}clear(){window.removeHistory(this.items.map((e=>e._id))),this.items=[]}removeItems(e){this.items=this.items.filter((t=>-1===e.indexOf(t._id))),window.removeHistory(e)}search(e){this.searched=e.toLowerCase().toLowerCase(),this.itemsLoaded=this.getDefaultLoaded()}getDefaultLoaded(){return Math.floor(window.innerHeight/48)}deleteSelected(){this.removeItems(this.selectedItems),this.selectedItems=[]}}t.Store=r,t.default=new r},1047:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.formatTime=t.getSectionLabel=t.compareDates=void 0;const i=a(778);t.compareDates=(e,t)=>null!=e&&null!=t&&e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate();t.getSectionLabel=e=>{let t="";const a=new Date;return e.getFullYear()===a.getFullYear()&&e.getMonth()===a.getMonth()&&(a.getDate()===e.getDate()?t="Today - ":a.getDate()-1===e.getDate()&&(t="Yesterday - ")),`${t}${i.daysList[e.getDay()]}, ${i.monthsList[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`};t.formatTime=e=>`${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}`},8827:e=>{e.exports=require("electron")}},e=>{var t=t=>e(e.s=t);e.O(0,[539,657,625,884,540],(()=>(t(1710),t(9555))));e.O()}]);