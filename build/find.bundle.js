"use strict";(self.webpackChunkskye=self.webpackChunkskye||[]).push([[990],{6807:(e,p,t)=>{Object.defineProperty(p,"__esModule",{value:!0}),p.coloredCursor=p.defaultCursor=p.pointer=void 0;const n=t(6905);p.pointer=()=>"\n    user-select: none;\n    cursor: pointer;\n  ";p.defaultCursor=()=>"\n    user-select: none;\n    cursor: default;\n  ";p.coloredCursor=(e,p=0)=>`\n  -webkit-text-fill-color: transparent;\n  text-shadow: 0px 0px 0px rgba(${p}, ${p}, ${p}, ${n.transparency.text.high});\n  color: ${e};\n`},9038:(e,p)=>{Object.defineProperty(p,"__esModule",{value:!0}),p.coverImage=p.customImage=p.centerIcon=void 0;p.centerIcon=(e="contain")=>{let p=e.toString();return"number"==typeof e&&(p+="px"),`\n    background-size: ${p};\n    background-position: center;\n    background-repeat: no-repeat;\n`};p.customImage=(e,p,t,n)=>`\n    background-size: ${e} ${p};\n    background-position: ${t} ${n};\n    background-repeat: no-repeat;\n  `;p.coverImage=()=>"\n    background-size: cover;\n    background-repeat: no-repeat;\n  "},6308:function(e,p,t){var n=this&&this.__createBinding||(Object.create?function(e,p,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return p[t]}})}:function(e,p,t,n){void 0===n&&(n=t),e[n]=p[t]}),x=this&&this.__exportStar||function(e,p){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(p,t)||n(p,e,t)};Object.defineProperty(p,"__esModule",{value:!0}),x(t(6807),p),x(t(9038),p),x(t(158),p),x(t(771),p),x(t(9753),p),x(t(7202),p),x(t(7684),p)},158:(e,p,t)=>{Object.defineProperty(p,"__esModule",{value:!0}),p.centerVertical=p.centerBoth=p.centerHorizontal=void 0;const n=t(9163);p.centerHorizontal=()=>n.css`left:50%;transform:translateX(-50%);`;p.centerBoth=()=>n.css`left:50%;top:50%;transform:translate(-50%, -50%);`;p.centerVertical=()=>n.css`top:50%;transform:translateY(-50%);`},771:(e,p)=>{Object.defineProperty(p,"__esModule",{value:!0}),p.noButtons=void 0;p.noButtons=(e="6px",p="rgba(0, 0, 0, 0.38)",t="rgba(0, 0, 0, 0.54)")=>`\n    &::-webkit-scrollbar {\n      width: ${e};\n    }\n\n    &::-webkit-scrollbar-button {\n      width: 0px;\n      height: 0px;\n    }\n\n    &::-webkit-scrollbar-thumb {\n      background: ${p};\n      border: 0px none #ffffff;\n      border-radius: 0px;\n    }\n\n    &::-webkit-scrollbar-thumb:hover {\n      background: ${t};\n    }\n\n    &::-webkit-scrollbar-corner {\n      background: transparent;\n    }\n  `},9753:(e,p)=>{Object.defineProperty(p,"__esModule",{value:!0}),p.shadows=void 0;const t=["0px 0px 0px 0px","0px 2px 1px -1px","0px 3px 1px -2px","0px 3px 3px -2px","0px 2px 4px -1px","0px 3px 5px -1px","0px 3px 5px -1px","0px 4px 5px -2px","0px 5px 5px -3px","0px 5px 6px -3px","0px 6px 6px -3px","0px 6px 7px -4px","0px 7px 8px -4px","0px 7px 8px -4px","0px 7px 9px -4px","0px 8px 9px -5px","0px 8px 10px -5px","0px 8px 11px -5px","0px 9px 11px -5px","0px 9px 12px -6px","0px 10px 13px -6px","0px 10px 13px -6px","0px 10px 14px -6px","0px 11px 14px -7px","0px 11px 15px -7px"],n=["0px 0px 0px 0px","0px 1px 1px 0px","0px 2px 2px 0px","0px 3px 4px 0px","0px 4px 5px 0px","0px 5px 8px 0px","0px 6px 10px 0px","0px 7px 10px 1px","0px 8px 10px 1px","0px 9px 12px 1px","0px 10px 14px 1px","0px 11px 15px 1px","0px 12px 17px 2px","0px 13px 19px 2px","0px 14px 21px 2px","0px 15px 22px 2px","0px 16px 24px 2px","0px 17px 26px 2px","0px 18px 28px 2px","0px 19px 29px 2px","0px 20px 31px 3px","0px 21px 33px 3px","0px 22px 35px 3px","0px 23px 36px 3px","0px 24px 38px 3px"],x=["0px 0px 0px 0px","0px 1px 3px 0px","0px 1px 5px 0px","0px 1px 8px 0px","0px 1px 10px 0px","0px 1px 14px 0px","0px 1px 18px 0px","0px 2px 16px 1px","0px 3px 14px 2px","0px 3px 16px 2px","0px 4px 18px 3px","0px 4px 20px 3px","0px 5px 22px 4px","0px 5px 24px 4px","0px 5px 26px 4px","0px 6px 28px 5px","0px 6px 30px 5px","0px 6px 32px 5px","0px 7px 34px 6px","0px 7px 36px 6px","0px 8px 38px 7px","0px 8px 40px 7px","0px 8px 42px 7px","0px 9px 44px 8px","0px 9px 46px 8px"];p.shadows=(e,p="0, 0, 0",o=1)=>`\n    ${t[e]} ${`rgba(${p}, ${.2*o})`},\n    ${n[e]} ${`rgba(${p}, ${.14*o})`},\n    ${x[e]} ${`rgba(${p}, ${.12*o})`}\n  `},7684:(e,p)=>{Object.defineProperty(p,"__esModule",{value:!0}),p.noTapHighlight=p.noUserSelect=void 0;p.noUserSelect=()=>"\n  user-select: none;\n";p.noTapHighlight=()=>"\n  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0) !important;\n"},2971:(e,p,t)=>{Object.defineProperty(p,"__esModule",{value:!0}),p.App=void 0;const n=t(7294),x=t(2766),o=t(9163),r=t(6816),i=t(4258),a=t(889),c=t(6537),d=t(585),l=t(7625),s=async()=>{const{value:e}=i.default.findInputRef.current;i.default.findInfo.text=e,""===e?((0,a.callViewMethod)(i.default.tabId,"stopFindInPage","clearSelection"),i.default.findInfo.occurrences="0/0"):await(0,a.callViewMethod)(i.default.tabId,"findInPage",e)},u=e=>async()=>{const{value:p}=i.default.findInputRef.current;""!==p&&await(0,a.callViewMethod)(i.default.tabId,"findInPage",p,{forward:e,findNext:!0})},f=e=>{"Enter"===e.key&&u(!0)()},h=e=>{"Escape"===e.key&&i.default.hide()};p.App=(0,x.observer)((()=>n.createElement(o.ThemeProvider,{theme:Object.assign(Object.assign({},i.default.theme),{dark:i.default.theme["dialog.lightForeground"]})},n.createElement(r.StyledApp,null,n.createElement(d.UIStyle,null),n.createElement(r.StyledFind,{onKeyUp:h},n.createElement(r.SearchIcon,null,n.createElement(l.FontAwesomeIcon,{icon:c.ICON_SEARCH})),n.createElement(r.Input,{autoFocus:!0,value:i.default.findInfo.text,onKeyPress:f,onChange:s,ref:i.default.findInputRef,placeholder:"Find in page"}),n.createElement(r.Occurrences,null,i.default.findInfo.occurrences),n.createElement(r.Buttons,null,n.createElement(r.Button,{onClick:u(!1),size:20},n.createElement(l.FontAwesomeIcon,{icon:c.ICON_UP})),n.createElement(r.Button,{onClick:u(!0),size:20},n.createElement(l.FontAwesomeIcon,{icon:c.ICON_DOWN})),n.createElement(r.Button,{onClick:()=>i.default.hide(),size:16},n.createElement(l.FontAwesomeIcon,{icon:c.ICON_CLOSE}))))))))},6816:(e,p,t)=>{Object.defineProperty(p,"__esModule",{value:!0}),p.Occurrences=p.Buttons=p.Button=p.Input=p.SearchIcon=p.StyledFind=p.StyledApp=void 0;const n=t(9163),x=t(6308),o=t(2556);p.StyledApp=n.default.div.withConfig({componentId:"-zf53it"})`margin:16px;margin-top:3px;box-shadow:${o.DIALOG_BOX_SHADOW};border-radius:${o.DIALOG_BORDER_RADIUS}px;background:white;${({theme:e})=>n.css`
    background-color: ${e["dialog.backgroundColor"]};
    color: ${e["dialog.lightForeground"]?"white":"black"};
  `}`,p.StyledFind=n.default.div.withConfig({componentId:"-1tpfwpt"})`border-radius:30px;height:40px;-webkit-app-region:no-drag;align-items:center;overflow:hidden;display:flex;`,p.SearchIcon=n.default.div.withConfig({componentId:"-jmlws8"})`min-width:16px;height:16px;${(0,x.centerIcon)()};margin-left:12px;opacity:0.54;display:flex;align-items:center;justify-content:center;${({theme:e})=>n.css`
    color: ${e["dialog.lightForeground"]?"white":"black"};
  `}`,p.Input=n.default.input.withConfig({componentId:"-kbjabt"})`width:100%;height:100%;font-size:13px;margin-right:8px;border:none;outline:none;background:transparent;margin-left:8px;color:inherit;`,p.Button=n.default.div.withConfig({componentId:"-1oferv5"})`${({size:e,theme:p})=>n.css`
    ${(0,x.centerIcon)(e)};
    color: ${p["dialog.lightForeground"]?"white":"black"};
  `} width:24px;height:24px;opacity:0.54;position:relative;display:flex;align-items:center;justify-content:center;&:after{background-color:rgba(0, 0, 0, 0.08);content:'';position:absolute;border-radius:50%;left:0;right:0;top:0;bottom:0;opacity:0;transition:0.2s opacity;}&:hover{opacity:1;&:after{opacity:1;}}`,p.Buttons=n.default.div.withConfig({componentId:"-4gzq8p"})`display:flex;margin-right:8px;`,p.Occurrences=n.default.div.withConfig({componentId:"-1yxia2h"})`opacity:0.54;margin-right:4px;`},5861:(e,p,t)=>{const n=t(2971);(0,t(2341).renderUI)(n.App)},4258:(e,p,t)=>{Object.defineProperty(p,"__esModule",{value:!0}),p.Store=void 0;const n=t(7294),x=t(8949),o=t(8827),r=t(63),i=t(889),a={occurrences:"0/0",text:""};class c extends r.DialogStore{constructor(){super({hideOnBlur:!1}),this.findInputRef=n.createRef(),this.tabId=-1,this.tabsFindInfo=new Map,this.findInfo=a,(0,x.makeObservable)(this,{tabId:x.observable,tabsFindInfo:x.observable,findInfo:x.observable}),this.init(),this.onUpdateTabInfo=(e,p)=>{this.tabId=e,this.findInfo=p},this.onHide=()=>{(0,i.callViewMethod)(this.tabId,"stopFindInPage","clearSelection"),this.findInfo=a,this.sendInfo(),o.ipcRenderer.send(`window-focus-${this.windowId}`)}}async init(){this.findInputRef&&this.findInputRef.current&&this.findInputRef.current.focus(),o.ipcRenderer.on("found-in-page",((e,{activeMatchOrdinal:p,matches:t})=>{this.findInfo.occurrences=`${p}/${t}`,this.sendInfo()}))}sendInfo(){this.send("update-tab-info",this.tabId,Object.assign({},this.findInfo))}}p.Store=c,p.default=new c},889:(e,p,t)=>{Object.defineProperty(p,"__esModule",{value:!0}),p.callViewMethod=void 0;const n=t(8827);p.callViewMethod=async(e,p,...t)=>{try{return await n.ipcRenderer.invoke("web-contents-call",{args:t,method:p,webContentsId:e})}catch(e){}}},8827:e=>{e.exports=require("electron")}},e=>{var p=p=>e(e.s=p);e.O(0,[539,657,625,884,69],(()=>(p(1710),p(5861))));e.O()}]);