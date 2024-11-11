"use strict";(self.webpackChunkskye=self.webpackChunkskye||[]).push([[102],{1298:(e,t,p)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Textfield=void 0;const n=p(7294),o=p(6905),r=p(632),x=p(7625);class i extends n.PureComponent{constructor(){super(...arguments),this.inputRef=n.createRef(),this.state={activated:!1,focused:!1,error:!1,value:void 0},this.onClick=()=>{this.inputRef.current.focus()},this.onFocus=()=>{this.setState({activated:!0,focused:!0})},this.onBlur=()=>{this.setState({activated:0!==this.value.length,focused:!1})},this.onIconClick=e=>{e.stopPropagation(),e.preventDefault();const{onIconClick:t}=this.props;"function"==typeof t&&t(this)},this.onInput=()=>{clearTimeout(this.timer);const{onChange:e}=this.props;this.setState({error:!1,value:this.inputRef.current.value}),e&&e(this.inputRef.current.value)}}get value(){return this.inputRef.current.value}set value(e){this.inputRef.current.value=e,this.setState({activated:!!e.length,value:e})}test(e){const{test:t}=this.props;if(null==e&&null==t)return!0;const p=null!=e?e(this.value):t(this.value);return this.setState({error:!p,focused:!p,activated:0!==this.value.length||!p}),p}clear(){this.value="",this.setState({activated:!1,error:!1,focused:!1})}render(){const{color:e,label:t,placeholder:p,icon:a,inputType:s,style:l,width:c,dark:u}=this.props,{activated:d,focused:f,error:h,value:g}=this.state,b=null!=t&&""!==t,v=null!=a&&""!==a,m=h?o.ERROR_COLOR:e;return n.createElement(r.StyledTextfield,{className:"textfield",onClick:this.onClick,style:l,dark:u,width:c||i.defaultProps.width},n.createElement(r.Input,{dark:u,ref:this.inputRef,type:s||i.defaultProps.inputType,color:m,onFocus:this.onFocus,onBlur:this.onBlur,hasLabel:b,hasIcon:v,placeholder:null==t||f?p:null,onInput:this.onInput,spellCheck:!1,value:g}),b&&n.createElement(r.Label,{dark:u,activated:d,focused:f,color:m},t),v&&n.createElement(r.Icon,{dark:u,src:"string"==typeof a?a:"",onClick:this.onIconClick},"string"!=typeof a&&n.createElement(x.FontAwesomeIcon,{icon:a})),n.createElement(r.Indicator,{focused:f,color:m}))}}t.Textfield=i,i.defaultProps={color:o.BLUE_500,inputType:"text",width:280,delay:200}},632:(e,t,p)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Icon=t.Indicator=t.Label=t.Input=t.StyledTextfield=void 0;const n=p(9163),o=p(6308),r=p(6905);t.StyledTextfield=n.default.div.withConfig({componentId:"-2eedug"})`${({width:e,dark:t})=>n.css`
    width: ${void 0===e?280:e}px;
    background-color: ${t?"rgba(255, 255, 255, 0.06)":"#f5f5f5"};
  `} position:relative;border-top-right-radius:4px;border-top-left-radius:4px;overflow:hidden;cursor:text;user-select:none;`,t.Input=n.default.input.withConfig({componentId:"-c1jbyj"})`width:100%;height:55px;font-size:16px;padding-left:12px;border:none;outline:none;background-color:transparent;user-select:auto;${(0,o.interRegular)()};${({color:e,hasLabel:t,hasIcon:p,dark:x})=>n.css`
    padding-top: ${t?12:0}px;
    padding-right: ${p?48:12}px;
    ${(0,o.coloredCursor)(e,x?255:0)};
    border-bottom: 1px solid
      ${x?"rgba(255, 255, 255, 0.12)":"rgba(0, 0, 0, 0.42)"};

    &::placeholder {
      text-shadow: 0 0 0
        ${x?`rgba(255, 255, 255, ${r.transparency.text.medium})`:`rgba(0, 0, 0, ${r.transparency.text.medium})`};
    }
  `} &[type='number']::-webkit-inner-spin-button,&[type='number']::-webkit-outer-spin-button{-webkit-appearance:none;}`,t.Label=n.default.div.withConfig({componentId:"-6grdo2"})`left:12px;position:absolute;transition:0.2s font-size,0.2s color,0.2s margin-top;transition-timing-function:${r.EASING_FUNCTION};-webkit-font-smoothing:antialiased;${(0,o.centerVertical)()};${({activated:e,focused:t,color:p,dark:x})=>n.css`
    font-size: ${e?12:16}px;
    margin-top: ${e?-12:0}px;
    color: ${t?p:x?`rgba(255, 255, 255, ${r.transparency.text.medium})`:`rgba(0, 0, 0, ${r.transparency.text.medium})`};
    ${e?(0,o.interMedium)():(0,o.interRegular)()};
  `}`,t.Indicator=n.default.div.withConfig({componentId:"-un9qbx"})`height:2px;margin-left:auto;margin-right:auto;left:0;right:0;bottom:0;position:absolute;transition:0.2s width ${r.EASING_FUNCTION};${({focused:e,color:t})=>n.css`
    width: ${e?100:0}%;
    background-color: ${t};
  `}`,t.Icon=n.default.div.withConfig({componentId:"-7mjeth"})`width:36px;height:36px;position:absolute;right:8px;opacity:${r.transparency.icons.inactive};border-radius:100%;overflow:hidden;cursor:pointer;transition:0.2s background-image;${(0,o.centerVertical)()};${(0,o.centerIcon)(24)};${({src:e,dark:t})=>n.css`
    background-image: url(${e});
    filter: ${t?"invert(100%)":"none"};
  `} &:hover{background-color:rgba(0, 0, 0, 0.12);}`},6807:(e,t,p)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.coloredCursor=t.defaultCursor=t.pointer=void 0;const n=p(6905);t.pointer=()=>"\n    user-select: none;\n    cursor: pointer;\n  ";t.defaultCursor=()=>"\n    user-select: none;\n    cursor: default;\n  ";t.coloredCursor=(e,t=0)=>`\n  -webkit-text-fill-color: transparent;\n  text-shadow: 0px 0px 0px rgba(${t}, ${t}, ${t}, ${n.transparency.text.high});\n  color: ${e};\n`},9038:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.coverImage=t.customImage=t.centerIcon=void 0;t.centerIcon=(e="contain")=>{let t=e.toString();return"number"==typeof e&&(t+="px"),`\n    background-size: ${t};\n    background-position: center;\n    background-repeat: no-repeat;\n`};t.customImage=(e,t,p,n)=>`\n    background-size: ${e} ${t};\n    background-position: ${p} ${n};\n    background-repeat: no-repeat;\n  `;t.coverImage=()=>"\n    background-size: cover;\n    background-repeat: no-repeat;\n  "},6308:function(e,t,p){var n=this&&this.__createBinding||(Object.create?function(e,t,p,n){void 0===n&&(n=p),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[p]}})}:function(e,t,p,n){void 0===n&&(n=p),e[n]=t[p]}),o=this&&this.__exportStar||function(e,t){for(var p in e)"default"===p||Object.prototype.hasOwnProperty.call(t,p)||n(t,e,p)};Object.defineProperty(t,"__esModule",{value:!0}),o(p(6807),t),o(p(9038),t),o(p(158),t),o(p(771),t),o(p(9753),t),o(p(7202),t),o(p(7684),t)},158:(e,t,p)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.centerVertical=t.centerBoth=t.centerHorizontal=void 0;const n=p(9163);t.centerHorizontal=()=>n.css`left:50%;transform:translateX(-50%);`;t.centerBoth=()=>n.css`left:50%;top:50%;transform:translate(-50%, -50%);`;t.centerVertical=()=>n.css`top:50%;transform:translateY(-50%);`},771:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.noButtons=void 0;t.noButtons=(e="6px",t="rgba(0, 0, 0, 0.38)",p="rgba(0, 0, 0, 0.54)")=>`\n    &::-webkit-scrollbar {\n      width: ${e};\n    }\n\n    &::-webkit-scrollbar-button {\n      width: 0px;\n      height: 0px;\n    }\n\n    &::-webkit-scrollbar-thumb {\n      background: ${t};\n      border: 0px none #ffffff;\n      border-radius: 0px;\n    }\n\n    &::-webkit-scrollbar-thumb:hover {\n      background: ${p};\n    }\n\n    &::-webkit-scrollbar-corner {\n      background: transparent;\n    }\n  `},9753:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.shadows=void 0;const p=["0px 0px 0px 0px","0px 2px 1px -1px","0px 3px 1px -2px","0px 3px 3px -2px","0px 2px 4px -1px","0px 3px 5px -1px","0px 3px 5px -1px","0px 4px 5px -2px","0px 5px 5px -3px","0px 5px 6px -3px","0px 6px 6px -3px","0px 6px 7px -4px","0px 7px 8px -4px","0px 7px 8px -4px","0px 7px 9px -4px","0px 8px 9px -5px","0px 8px 10px -5px","0px 8px 11px -5px","0px 9px 11px -5px","0px 9px 12px -6px","0px 10px 13px -6px","0px 10px 13px -6px","0px 10px 14px -6px","0px 11px 14px -7px","0px 11px 15px -7px"],n=["0px 0px 0px 0px","0px 1px 1px 0px","0px 2px 2px 0px","0px 3px 4px 0px","0px 4px 5px 0px","0px 5px 8px 0px","0px 6px 10px 0px","0px 7px 10px 1px","0px 8px 10px 1px","0px 9px 12px 1px","0px 10px 14px 1px","0px 11px 15px 1px","0px 12px 17px 2px","0px 13px 19px 2px","0px 14px 21px 2px","0px 15px 22px 2px","0px 16px 24px 2px","0px 17px 26px 2px","0px 18px 28px 2px","0px 19px 29px 2px","0px 20px 31px 3px","0px 21px 33px 3px","0px 22px 35px 3px","0px 23px 36px 3px","0px 24px 38px 3px"],o=["0px 0px 0px 0px","0px 1px 3px 0px","0px 1px 5px 0px","0px 1px 8px 0px","0px 1px 10px 0px","0px 1px 14px 0px","0px 1px 18px 0px","0px 2px 16px 1px","0px 3px 14px 2px","0px 3px 16px 2px","0px 4px 18px 3px","0px 4px 20px 3px","0px 5px 22px 4px","0px 5px 24px 4px","0px 5px 26px 4px","0px 6px 28px 5px","0px 6px 30px 5px","0px 6px 32px 5px","0px 7px 34px 6px","0px 7px 36px 6px","0px 8px 38px 7px","0px 8px 40px 7px","0px 8px 42px 7px","0px 9px 44px 8px","0px 9px 46px 8px"];t.shadows=(e,t="0, 0, 0",r=1)=>`\n    ${p[e]} ${`rgba(${t}, ${.2*r})`},\n    ${n[e]} ${`rgba(${t}, ${.14*r})`},\n    ${o[e]} ${`rgba(${t}, ${.12*r})`}\n  `},7684:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.noTapHighlight=t.noUserSelect=void 0;t.noUserSelect=()=>"\n  user-select: none;\n";t.noTapHighlight=()=>"\n  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0) !important;\n"},7663:(e,t,p)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const n=p(7294),o=p(2766),r=p(9163),x=p(5515),i=p(7728),a=p(1298),s=p(8827),l=p(6905),c=p(585),u=e=>{s.ipcRenderer.send(`edit-tabgroup-${i.default.windowId}`,{name:i.default.inputRef.current.value,id:i.default.tabGroupId})},d=e=>()=>{s.ipcRenderer.send(`edit-tabgroup-${i.default.windowId}`,{color:e,id:i.default.tabGroupId})};t.App=(0,o.observer)((()=>n.createElement(r.ThemeProvider,{theme:Object.assign({},i.default.theme)},n.createElement(x.StyledApp,null,n.createElement(c.UIStyle,null),n.createElement(a.Textfield,{dark:i.default.theme["dialog.lightForeground"],placeholder:"Name",style:{width:"100%"},onChange:u,ref:i.default.inputRef}),n.createElement(x.Colors,null,[l.BLUE_500,l.RED_500,l.PINK_500,l.PURPLE_500,l.DEEP_PURPLE_500,l.INDIGO_500,l.CYAN_500,l.LIGHT_BLUE_500,l.TEAL_500,l.GREEN_500,l.LIGHT_GREEN_500,l.LIME_500,l.YELLOW_500,l.AMBER_500,l.ORANGE_500,l.DEEP_ORANGE_500].map(((e,t)=>n.createElement(x.Color,{color:e,onClick:d(e),key:t}))))))))},5515:(e,t,p)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Color=t.Colors=t.Buttons=t.Subtitle=t.Title=t.StyledApp=void 0;const n=p(9163),o=p(2556);t.StyledApp=(0,n.default)(o.DialogStyle).withConfig({componentId:"-1xrb9lh"})`margin-top:10px;padding:16px;`,t.Title=n.default.div.withConfig({componentId:"-ug6lqy"})`font-size:16px;`,t.Subtitle=n.default.div.withConfig({componentId:"-14wyvuh"})`font-size:13px;opacity:0.54;margin-top:8px;`,t.Buttons=n.default.div.withConfig({componentId:"-gk7q62"})`display:flex;margin-top:16px;float:right;`,t.Colors=n.default.div.withConfig({componentId:"-qsad9t"})`display:flex;margin-top:8px;flex-wrap:wrap;justify-content:center;`,t.Color=n.default.div.withConfig({componentId:"-4y895y"})`min-width:16px;height:16px;cursor:pointer;border-radius:16px;margin-right:4px;margin-left:4px;margin-top:8px;position:relative;overflow:hidden;${({color:e})=>n.css`
    background-color: ${e};
  `} &:after{content:'';position:absolute;left:0;top:0;right:0;bottom:0;opacity:0;background-color:white;}&:hover{&:after{opacity:0.3;}}`},6917:(e,t,p)=>{const n=p(7663);(0,p(2341).renderUI)(n.App)},7728:(e,t,p)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Store=void 0;const n=p(7294),o=p(63);class r extends o.DialogStore{constructor(){super(),this.inputRef=n.createRef(),this.init()}async init(){const e=await this.invoke("tabgroup");this.tabGroupId=e.id,this.inputRef.current.inputRef.current.focus(),this.inputRef.current.inputRef.current.value=e.name,this.inputRef.current.inputRef.current.select()}}t.Store=r,t.default=new r},8827:e=>{e.exports=require("electron")}},e=>{var t=t=>e(e.s=t);e.O(0,[539,657,625,884,69],(()=>(t(1710),t(6917))));e.O()}]);