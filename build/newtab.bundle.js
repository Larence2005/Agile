"use strict";(self.webpackChunkskye=self.webpackChunkskye||[]).push([[532],{6807:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.coloredCursor=t.defaultCursor=t.pointer=void 0;const o=n(6905);t.pointer=()=>"\n    user-select: none;\n    cursor: pointer;\n  ";t.defaultCursor=()=>"\n    user-select: none;\n    cursor: default;\n  ";t.coloredCursor=(e,t=0)=>`\n  -webkit-text-fill-color: transparent;\n  text-shadow: 0px 0px 0px rgba(${t}, ${t}, ${t}, ${o.transparency.text.high});\n  color: ${e};\n`},9038:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.coverImage=t.customImage=t.centerIcon=void 0;t.centerIcon=(e="contain")=>{let t=e.toString();return"number"==typeof e&&(t+="px"),`\n    background-size: ${t};\n    background-position: center;\n    background-repeat: no-repeat;\n`};t.customImage=(e,t,n,o)=>`\n    background-size: ${e} ${t};\n    background-position: ${n} ${o};\n    background-repeat: no-repeat;\n  `;t.coverImage=()=>"\n    background-size: cover;\n    background-repeat: no-repeat;\n  "},6308:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),p=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),p(n(6807),t),p(n(9038),t),p(n(158),t),p(n(771),t),p(n(9753),t),p(n(7202),t),p(n(7684),t)},158:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.centerVertical=t.centerBoth=t.centerHorizontal=void 0;const o=n(9163);t.centerHorizontal=()=>o.css`left:50%;transform:translateX(-50%);`;t.centerBoth=()=>o.css`left:50%;top:50%;transform:translate(-50%, -50%);`;t.centerVertical=()=>o.css`top:50%;transform:translateY(-50%);`},771:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.noButtons=void 0;t.noButtons=(e="6px",t="rgba(0, 0, 0, 0.38)",n="rgba(0, 0, 0, 0.54)")=>`\n    &::-webkit-scrollbar {\n      width: ${e};\n    }\n\n    &::-webkit-scrollbar-button {\n      width: 0px;\n      height: 0px;\n    }\n\n    &::-webkit-scrollbar-thumb {\n      background: ${t};\n      border: 0px none #ffffff;\n      border-radius: 0px;\n    }\n\n    &::-webkit-scrollbar-thumb:hover {\n      background: ${n};\n    }\n\n    &::-webkit-scrollbar-corner {\n      background: transparent;\n    }\n  `},9753:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.shadows=void 0;const n=["0px 0px 0px 0px","0px 2px 1px -1px","0px 3px 1px -2px","0px 3px 3px -2px","0px 2px 4px -1px","0px 3px 5px -1px","0px 3px 5px -1px","0px 4px 5px -2px","0px 5px 5px -3px","0px 5px 6px -3px","0px 6px 6px -3px","0px 6px 7px -4px","0px 7px 8px -4px","0px 7px 8px -4px","0px 7px 9px -4px","0px 8px 9px -5px","0px 8px 10px -5px","0px 8px 11px -5px","0px 9px 11px -5px","0px 9px 12px -6px","0px 10px 13px -6px","0px 10px 13px -6px","0px 10px 14px -6px","0px 11px 14px -7px","0px 11px 15px -7px"],o=["0px 0px 0px 0px","0px 1px 1px 0px","0px 2px 2px 0px","0px 3px 4px 0px","0px 4px 5px 0px","0px 5px 8px 0px","0px 6px 10px 0px","0px 7px 10px 1px","0px 8px 10px 1px","0px 9px 12px 1px","0px 10px 14px 1px","0px 11px 15px 1px","0px 12px 17px 2px","0px 13px 19px 2px","0px 14px 21px 2px","0px 15px 22px 2px","0px 16px 24px 2px","0px 17px 26px 2px","0px 18px 28px 2px","0px 19px 29px 2px","0px 20px 31px 3px","0px 21px 33px 3px","0px 22px 35px 3px","0px 23px 36px 3px","0px 24px 38px 3px"],p=["0px 0px 0px 0px","0px 1px 3px 0px","0px 1px 5px 0px","0px 1px 8px 0px","0px 1px 10px 0px","0px 1px 14px 0px","0px 1px 18px 0px","0px 2px 16px 1px","0px 3px 14px 2px","0px 3px 16px 2px","0px 4px 18px 3px","0px 4px 20px 3px","0px 5px 22px 4px","0px 5px 24px 4px","0px 5px 26px 4px","0px 6px 28px 5px","0px 6px 30px 5px","0px 6px 32px 5px","0px 7px 34px 6px","0px 7px 36px 6px","0px 8px 38px 7px","0px 8px 40px 7px","0px 8px 42px 7px","0px 9px 44px 8px","0px 9px 46px 8px"];t.shadows=(e,t="0, 0, 0",r=1)=>`\n    ${n[e]} ${`rgba(${t}, ${.2*r})`},\n    ${o[e]} ${`rgba(${t}, ${.14*r})`},\n    ${p[e]} ${`rgba(${t}, ${.12*r})`}\n  `},7684:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.noTapHighlight=t.noUserSelect=void 0;t.noUserSelect=()=>"\n  user-select: none;\n";t.noTapHighlight=()=>"\n  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0) !important;\n"},6954:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=n(7294),p=n(2766),r=n(3952),i=n(9163),a=n(6618),x=n(1236),l=n(585),s=n(8767),c=n(8767),d=n(8664),u=n(9107),g=n(4593),f=new c.QueryClient,h=()=>o.createElement(a.StyledTime,null,o.createElement("h1",null,(new Date).toLocaleTimeString([],{timeStyle:"short"}))),m=()=>{const{data:e}=(0,s.useQuery)(["weather"],(async()=>{try{return await(await fetch("https://wttr.in/?format=%c%20%C")).text()}catch(e){return"Failed to load weather"}}));return o.createElement(a.StyledForecast,null,(new Date).toLocaleDateString([],{month:"long",day:"2-digit"})," - ",e)};t.default=(0,p.observer)((()=>{const e=(0,u.useAsync)((async()=>{if(""==r.default.settings.tab.image)return"#070b10";const e=new d.default;return(await e.getColorAsync(r.default.settings.tab.image)).hex}),[r.default.settings.tab.image]);return o.createElement(c.QueryClientProvider,{client:f},o.createElement(i.ThemeProvider,{theme:Object.assign({},r.default.theme)},o.createElement("div",null,o.createElement(g.Helmet,null,o.createElement("meta",{name:"theme-color",content:e.value})),o.createElement(l.WebUIStyle,null),o.createElement(a.Wrapper,{color:e.value,theme:r.default.theme},o.createElement(a.Image,{src:r.default.settings.tab.image}),o.createElement(a.Content,null,o.createElement(h,null),o.createElement(m,null),r.default.settings.tab.topSites&&o.createElement(o.Fragment,null,o.createElement(x.TopSites,{backgroundColor:e.value})))))))}))},6618:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Refresh=t.IconItem=t.StyledSearchBar=t.StyledTime=t.Menu=t.RightBar=t.StyledForecast=t.StyledH2=t.Content=t.Wrapper=t.Image=void 0;const o=n(9163),p=n(6308),r=n(9681);t.Image=o.default.div.withConfig({componentId:"-1jpvhjc"})`position:absolute;z-index:1;background-size:cover;background-position:center;background-repeat:no-repeat;left:0;top:0;right:0;bottom:0;transition:0.3s opacity,1s transform;${({src:e})=>o.css`
    opacity: ${""===e?0:1};
    transform: ${""===e?"scale(1.05)":"scale(1)"};
    background-image: url(${e});
    background-attachment: fixed;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      z-index: 2;
      background-image: radial-gradient(
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.5) 100%
        ),
        radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.3) 166%);
    }
  `};`,t.Wrapper=o.default.div.withConfig({componentId:"-g5xm45"})`display:flex;align-items:center;position:relative;overflow:hidden;height:100vh;${({color:e,theme:t})=>{if(e&&""!==e){const n=(0,r.contrast)(e);t["toolbar.lightForeground"];switch(n){case"dark":return o.css`
              color: #fff;
            `;case"light":return o.css``}}return o.css`
      color: ${t["addressbar.textColor"]};
    `}}`,t.Content=o.default.div.withConfig({componentId:"-100d399"})`display:flex;flex-flow:column;width:calc(100% - 64px);align-items:center;justify-content:center;margin:0 auto;max-width:1366px;position:relative;min-height:97px;z-index:3;`,t.StyledH2=o.default.h2.withConfig({componentId:"-8iduhd"})`font-weight:400;font-size:1rem;margin-top:30px;`,t.StyledForecast=o.default.h2.withConfig({componentId:"-1nl7768"})`font-weight:500;font-size:1rem;margin:0;`,t.RightBar=o.default.div.withConfig({componentId:"-1stc7g6"})`position:absolute;display:flex;right:32px;flex-flow:column;height:100%;padding-top:32px;`,t.Menu=o.default.div.withConfig({componentId:"-1g99ppx"})`display:flex;position:absolute;flex-flow:row;justify-content:center;width:100%;bottom:32px;`,t.StyledTime=o.default.div.withConfig({componentId:"-10qv51l"})`h1{font-size:2.5rem;margin:0;font-weight:900;}`,t.StyledSearchBar=o.default.input.withConfig({componentId:"-15t1p3h"})`border-radius:10px;margin-top:30px;width:450px;padding:18px;border:0;color:#fff;&::placeholder{color:#aaa;}${({backgroundColor:e})=>o.css`
    background-color: ${e};
  `}`,t.IconItem=o.default.div.withConfig({componentId:"-1jsi5e0"})`width:34px;height:34px;margin-left:16px;opacity:0.8;z-index:3;cursor:pointer;border-radius:4px;position:relative;display:flex;justify-content:center;align-items:center;&:first-child{margin-top:0;}${({theme:e})=>o.css`
    &:hover {
      opacity: 1;
      background-color: rgba(255, 255, 255, 0.1);
    }

    &:after {
      position: absolute;
      content: '';
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      ${(0,p.centerIcon)(20)};
      filter: invert(100%);
    }
  `};`,t.Refresh=(0,o.default)(t.IconItem).withConfig({componentId:"-16fbt84"})`position:absolute;top:32px;right:32px;margin-top:0;`},3563:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TopSite=void 0;const o=n(7294),p=n(2766),r=n(2691),i=n(6905),a=n(7625),x=e=>()=>{""!==e&&null!=e&&(window.location.href=e)};t.TopSite=(0,p.observer)((({item:e,backgroundColor:t})=>{const{title:n,favicon:p,url:l}=e||{},s=""===p||null==p;let c=i.ICON_PAGE;return s||(c=p),o.createElement(r.Item,{onClick:x(l),backgroundColor:t},o.createElement(r.Icon,{icon:"string"==typeof c?c:""},"string"!=typeof c&&o.createElement(a.FontAwesomeIcon,{icon:c})),n&&o.createElement(r.Title,null,n))}))},2691:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Title=t.Icon=t.AddItem=t.Item=void 0;const o=n(9163),p=n(6308),r=n(7972);t.Item=(0,o.default)(r.ItemBase).withConfig({componentId:"-jyv11k"})`transition:0.2s box-shadow,0.2s background-color;cursor:pointer;display:flex;flex-flow:column;align-items:center;justify-content:center;overflow:hidden;backdrop-filter:blur(8px);position:relative;z-index:1;${({backgroundColor:e})=>o.css`
    background-color: ${e};
    animation: all 5s infinite;
    &:hover {
      top: -2.5px;
      box-shadow: ${(0,p.shadows)(8)};
      background-color: ${e};
    }
  `};`,t.AddItem=(0,o.default)(t.Item).withConfig({componentId:"-cyl30x"})`${(0,p.centerIcon)(36)};`,t.Icon=o.default.div.withConfig({componentId:"-twg82w"})`${(0,p.centerIcon)()};position:relative;${({add:e,icon:t,custom:n})=>o.css`
    height: ${e?32:24}px;
    width: ${e?32:24}px;
    background-image: url(${t});
    opacity: ${e||n?.54:1};
    display: flex;
    justify-content: center;
    align-items: center;

    &:before {
      content: '';
      position: absolute;
      left: -6px;
      top: -6px;
      right: -6px;
      bottom: -6px;
      opacity: 0.3;
      background-color: ${e?"transparent":"white"};
      z-index: -1;
      border-radius: 50%;
    }

    &:before {
      left: ${e?-4:-6}px;
      top: ${e?-4:-6}px;
      right: ${e?-4:-6}px;
      bottom: ${e?-4:-6}px;
    }
  `}`,t.Title=o.default.div.withConfig({componentId:"-1ieqxsq"})`font-size:12px;overflow:hidden;text-overflow:ellipsis;text-align:center;white-space:nowrap;max-width:calc(100% - 16px);margin-top:20px;margin-bottom:-8px;opacity:0.87;`},1236:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TopSites=void 0;const o=n(7294),p=n(2766),r=n(7972),i=n(3952),a=n(3563);t.TopSites=(0,p.observer)((({backgroundColor:e})=>o.createElement(r.StyledTopSites,null,i.default.topSites.map((t=>o.createElement(a.TopSite,{key:t._id,item:t,backgroundColor:e}))),i.default.topSites.length<8&&o.createElement(a.TopSite,{backgroundColor:e}),Array(8-Math.min(8,i.default.topSites.length+1)).fill(1).map(((e,t)=>o.createElement(r.Placeholder,{key:t}))))))},7972:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Placeholder=t.ItemBase=t.StyledTopSites=void 0;const o=n(9163);t.StyledTopSites=o.default.div.withConfig({componentId:"-1volhq0"})`display:grid;grid-auto-flow:row;justify-content:center;grid-template-columns:repeat(4, auto);grid-gap:6px;margin-top:20px;@media only screen and (max-width: 1200px){grid-template-columns:repeat(4, auto);}`,t.ItemBase=o.default.div.withConfig({componentId:"-e7d7i9"})`border-radius:10px;width:120px;height:90px;`,t.Placeholder=(0,o.default)(t.ItemBase).withConfig({componentId:"-14pczxn"})`box-sizing:border-box;${({theme:e})=>o.css`
    border: 2px dashed
      ${e["pages.lightForeground"]?"rgba(255, 255, 255, 0.3)":"rgba(0, 0, 0, 0.2)"};
  `}`},6519:(e,t,n)=>{const o=n(6954);(0,n(3109).renderWebUI)(o.default)},3952:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Store=void 0;const o=n(8949),p=n(1857);class r{constructor(){this.settings=Object.assign({},window.settings),this.topSites=[],(0,o.makeObservable)(this,{settings:o.observable,theme:o.computed,topSites:o.observable}),window.updateSettings=e=>{this.settings=Object.assign(Object.assign({},this.settings),e)},this.loadImage(),this.loadTopSites()}get theme(){return(0,p.getTheme)(this.settings.theme)}updateSettings(e){this.settings=Object.assign(Object.assign({},this.settings),e)}async loadImage(){let e=this.settings.tab.image,t=!1;e&&""!=e||(e="https://file.coffee/u/y970mT9Cg5NkPg.png",t=!0)}async loadTopSites(){this.topSites=await window.getTopSites(8)}}t.Store=r,t.default=new r},9681:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.hexToRgb=t.rgbToHex=t.getColorBrightness=t.contrast=void 0;const o=n(6189);t.contrast=e=>{const t=o(e);return Math.round((299*parseInt(t[0])+587*parseInt(t[1])+114*parseInt(t[2]))/1e3)<=180?"dark":"light"};t.getColorBrightness=e=>{let t,n,o;if(e.match(/^rgb/)){const p=e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);t=parseInt(p[1]),n=parseInt(p[2]),o=parseInt(p[3])}else{const p=+`0x${e.slice(1).replace(e.length<5&&/./g,"$&$&")}`;t=p>>16,n=p>>8&255,o=255&p}return Math.sqrt(t*t*.299+n*n*.587+o*o*.114)};const p=e=>{const t=e.toString(16);return 1==t.length?"0"+t:t};t.rgbToHex=e=>"#"+p(Math.round(e[0]))+p(Math.round(e[1]))+p(Math.round(e[2]));t.hexToRgb=e=>{const t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,n,o){return t+t+n+n+o+o})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null}},3109:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.renderWebUI=void 0;const o=n(3935),p=n(7294),r=n(6308),i=n(2209);t.renderWebUI=e=>{(0,r.injectFonts)(),(0,i.configureUI)(),o.render(p.createElement(e),document.getElementById("app"))}},8827:e=>{e.exports=require("electron")}},e=>{var t=t=>e(e.s=t);e.O(0,[539,625,694,884],(()=>(t(1710),t(6519))));e.O()}]);