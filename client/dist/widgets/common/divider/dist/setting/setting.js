System.register(["jimu-core","jimu-for-builder","jimu-ui/advanced/setting-components","jimu-ui/advanced/style-setting-components","jimu-ui/basic/color-picker","jimu-ui"],(function(t,e){var o={},i={},n={},s={},r={},l={};return{setters:[function(t){o.React=t.React,o.classNames=t.classNames,o.css=t.css,o.jsx=t.jsx,o.polished=t.polished},function(t){i.getAppConfigAction=t.getAppConfigAction},function(t){n.DirectionSelector=t.DirectionSelector,n.SettingRow=t.SettingRow,n.SettingSection=t.SettingSection},function(t){s.InputUnit=t.InputUnit},function(t){r.ThemeColorPicker=t.ThemeColorPicker},function(t){l.Option=t.Option,l.Select=t.Select,l.UnitTypes=t.UnitTypes,l.defaultMessages=t.defaultMessages}],execute:function(){t((()=>{var t={48891:t=>{"use strict";t.exports=o},23137:t=>{"use strict";t.exports=i},30726:t=>{"use strict";t.exports=l},77756:t=>{"use strict";t.exports=n},55505:t=>{"use strict";t.exports=s},41362:t=>{"use strict";t.exports=r}},e={};function a(o){var i=e[o];if(void 0!==i)return i.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,a),n.exports}a.d=(t,e)=>{for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.p="";var d={};return a.p=window.jimuConfig.baseUrl,(()=>{"use strict";a.r(d),a.d(d,{default:()=>m});var t,e,o,i,n,s=a(48891),r=a(23137),l=a(77756),p=a(55505),h=a(41362),u=a(30726);!function(t){t.Regular="REGULAR",t.Hover="HOVER"}(t||(t={})),function(t){t.Horizontal="Horizontal",t.Vertical="Vertical"}(e||(e={})),function(t){t.Style0="Style0",t.Style1="Style1",t.Style2="Style2",t.Style3="Style3",t.Style4="Style4",t.Style5="Style5",t.Style6="Style6",t.Style7="Style7",t.Style8="Style8",t.Style9="Style9",t.Style10="Style10"}(o||(o={})),function(t){t.None="None",t.Point0="Point0",t.Point1="Point1",t.Point2="Point2",t.Point3="Point3",t.Point4="Point4",t.Point5="Point5",t.Point6="Point6",t.Point7="Point7",t.Point8="Point8"}(i||(i={})),function(t){t.None="None",t.Default="Default",t.Style1="Style1",t.Style2="Style2",t.Style3="Style3",t.Style4="Style4",t.Style5="Style5",t.Style6="Style6",t.Style7="Style7",t.Style8="Style8",t.Style9="Style9",t.Style10="Style10",t.Style11="Style11",t.Style12="Style12",t.Style13="Style13",t.Style14="Style14",t.Style15="Style15",t.Style16="Style16",t.Style17="Style17",t.Style18="Style18",t.Style19="Style19"}(n||(n={}));const c={stroke:"Stroke",start:"Start",end:"End",endpoints:"End point",startpoints:"Start point",nonePoint:"None",dividerSize:"Size",strokeSolid:"Solid",strokeDashed:"Dashed",strokeDotted:"Dotted",strokeDashdotted:"Dashdotted",strokeLongDashed:"Long dashed",strokeDouble:"Double",strokeThinThick:"Thin thick",strokeThickThin:"Thick thin",strokeTriple:"Triple",pointCircle:"Circle",pointCross:"Cross",pointLine:"Line",pointSquare:"Square",pointDiamond:"Diamond",pointInverted:"Inverted arrow",pointArrow:"Arrow",pointOpenArrow:"Open arrow",pointInvertedArrow:"Inverted open arrow"};class g extends s.React.PureComponent{constructor(t){super(t),this.getStyle=()=>{var t,e,o,i,n,r,l,a,d,p,h,u,c,g,$,v,b,S,m,y,f,x,k,P,w,C,j,N,T,z,D,L,A,O,R,I,Y;const{theme:H}=this.props;return s.css`
      & {
        width: ${s.polished.rem(84)};
        margin-left: ${s.polished.rem(8)};
      }
      .point {
        position: absolute;
        border-radius: 50%;
        background: ${null===(e=null===(t=null==H?void 0:H.colors)||void 0===t?void 0:t.palette)||void 0===e?void 0:e.primary[500]};
        background: ${null===(i=null===(o=null==H?void 0:H.colors)||void 0===o?void 0:o.palette)||void 0===i?void 0:i.light[800]};
        top: 50%;
      }
      .start-point {
        left: 0;
        width: ${s.polished.rem(6)};
        height: ${s.polished.rem(6)};
        transform: translateY(-3px);
      }
      .end-point {
        right: 0;
        width: ${s.polished.rem(10)};
        height: ${s.polished.rem(10)};
        transform: translateY(-5px);
      }
      .scale-con {
        & {
          width: 100%;
          top: ${s.polished.rem(-2)};
        }
        span {
          height: ${s.polished.rem(3)};
          width: 1px;
          background: ${null===(r=null===(n=null==H?void 0:H.colors)||void 0===n?void 0:n.palette)||void 0===r?void 0:r.light[800]};
        }
      }
      input[type='range'] {
        -webkit-appearance: none;
        background: transparent;
        position: relative;
        z-index: 10;
        width: 100%;
        display: block;
      }
      input[type='range']::-webkit-slider-runnable-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        background: ${null===(a=null===(l=null==H?void 0:H.colors)||void 0===l?void 0:l.palette)||void 0===a?void 0:a.light[800]};
        border-radius: 2px;
      }
      input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: ${s.polished.rem(10)};
        width: ${s.polished.rem(10)};
        cursor: pointer;
        background: ${null===(p=null===(d=null==H?void 0:H.colors)||void 0===d?void 0:d.palette)||void 0===p?void 0:p.light[300]};
        border: 2px solid ${null===(u=null===(h=null==H?void 0:H.colors)||void 0===h?void 0:h.palette)||void 0===u?void 0:u.dark[600]};
        border-radius: 50%;
        margin-top: ${s.polished.rem(-4)};
        position: relative;
        &:hover {
          border-color: var(--black);
        }
      }
      input[type='range']::-moz-range-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        background: ${null===(g=null===(c=null==H?void 0:H.colors)||void 0===c?void 0:c.palette)||void 0===g?void 0:g.light[800]};
        border-radius: 2px;
      }
      input[type='range']::-moz-range-thumb {
        height: 10px;
        width: 10px;
        border-radius: 50%;
        cursor: pointer;
        background: ${null===(v=null===($=null==H?void 0:H.colors)||void 0===$?void 0:$.palette)||void 0===v?void 0:v.light[300]};
        border: 2px solid ${null===(S=null===(b=null==H?void 0:H.colors)||void 0===b?void 0:b.palette)||void 0===S?void 0:S.dark[600]};
        margin-top: ${s.polished.rem(-4)};
        position: relative;
        &:hover {
          border-color: var(--black);
        }
      }
      input[type='range']::-ms-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        background: ${null===(y=null===(m=null==H?void 0:H.colors)||void 0===m?void 0:m.palette)||void 0===y?void 0:y.light[800]};
        border-radius: 2px;
      }
      input[type='range']::-ms-thumb {
        height: 10px;
        width: 10px;
        border-radius: 50%;
        cursor: pointer;
        background: ${null===(x=null===(f=null==H?void 0:H.colors)||void 0===f?void 0:f.palette)||void 0===x?void 0:x.light[300]};
        border: 2px solid ${null===(P=null===(k=null==H?void 0:H.colors)||void 0===k?void 0:k.palette)||void 0===P?void 0:P.dark[600]};
        margin-top: 0px;
        &:hover {
          border-color: ${null===(w=null==H?void 0:H.colors)||void 0===w?void 0:w.black};
        }
      }
      input:disabled::-webkit-slider-thumb {
        border-color: ${null===(j=null===(C=null==H?void 0:H.colors)||void 0===C?void 0:C.palette)||void 0===j?void 0:j.light[800]};
        &:hover {
          border-color: ${null===(T=null===(N=null==H?void 0:H.colors)||void 0===N?void 0:N.palette)||void 0===T?void 0:T.light[800]};
        }
      }
      input:disabled::-ms-thumb {
        border-color: ${null===(D=null===(z=null==H?void 0:H.colors)||void 0===z?void 0:z.palette)||void 0===D?void 0:D.light[800]};
        &:hover {
          border-color: ${null===(A=null===(L=null==H?void 0:H.colors)||void 0===L?void 0:L.palette)||void 0===A?void 0:A.light[800]};
        }
      }
      input:disabled::-moz-range-thumb {
        border-color: ${null===(R=null===(O=null==H?void 0:H.colors)||void 0===O?void 0:O.palette)||void 0===R?void 0:R.light[800]};
        &:hover {
          border-color: ${null===(Y=null===(I=null==H?void 0:H.colors)||void 0===I?void 0:I.palette)||void 0===Y?void 0:Y.light[800]};
        }
      }
    `},this.getScale=()=>{const t=[];for(let e=0;e<99;e++)t.push((0,s.jsx)("span",{className:"position-absolute",key:e,style:{left:1*(e+1)+"%"}}));return(0,s.jsx)("div",{className:"scale-con position-absolute left-0 right-0"},t)},this.onChange=t=>{const e=t.target.value/100*2+3;this.setState({value:e}),clearTimeout(this.updateConfigTimeout),this.updateConfigTimeout=setTimeout((()=>{var t;null===(t=null==this?void 0:this.props)||void 0===t||t.onChange(e)}),100)},this.getRangeValue=()=>{const{value:t}=this.state;return 100*(t-3)/2},this.state={value:(null==t?void 0:t.value)||0}}componentWillUnmount(){clearTimeout(this.updateConfigTimeout)}render(){const{pointStyle:t,intl:e}=this.props,o=this.getRangeValue();return(0,s.jsx)("div",{className:"range-input position-relative",css:this.getStyle()},(0,s.jsx)("div",{className:"start-point point"}),(0,s.jsx)("input",{type:"range",title:e("dividerSize"),disabled:t===i.None,value:o,step:1,min:0,max:100,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":o,role:"slider",onChange:t=>{this.onChange(t)}}),(0,s.jsx)("div",{className:"end-point point"}))}}function $(t,e=1.5,o=null){if(!t)return"0px";const i=o?Number(o.split("px")[0]):0;let n=Number(t.split("px")[0]);return n=i>n?i:n,n*e<1?"1px":`${Math.round(n*e)}px`}class v extends s.React.PureComponent{constructor(t){super(t),this.nls=t=>this.props.intl?this.props.intl.formatMessage({id:t,defaultMessage:c[t]}):t,this.getLineStyles=()=>{const{isPointStart:t}=this.props,o=[],n=function(t,o,i=e.Horizontal,n=!0){const r=$(t,1),l=$(t,.5),a=$(t,.1),d=$(t,.3);o=o||"transparent";const p=i===e.Horizontal;let h={None:"None"},u={None:"None"};h.Point0=s.css`
    & {
      width: ${r};
      height: ${r};
      border-radius: 50%;
      background-color: ${o};
      left: ${n?0:"unset"};
      right: ${n?"unset":0};
      top: 50%;
      transform: translateY(-50%);
    }
  `,h.Point1=s.css`
    & {
      width: ${d};
      height: ${r};
      background-color: ${o};
      left: ${n?"4%":"unset"};
      right: ${n?"unset":"4%"};
      top: 50%;
      transform: translateY(-50%);
    }
  `,h.Point2=s.css`
    & {
      width: ${d};
      height: ${r};
      background-color: ${o};
      left: ${n?0:"unset"};
      right: ${n?"unset":0};
      top: 50%;
      transform: translateY(-50%);
    }
  `,h.Point3=s.css`
    & {
      width: ${r};
      height: ${r};
      background-color: ${o};
      left: ${n?0:"unset"};
      right: ${n?"unset":0};
      top: 50%;
      transform: translateY(-50%);
    }
  `,h.Point4=s.css`
    & {
      width: ${$(t,.71)};
      height: ${$(t,.71)};
      background-color: ${o};
      left: ${n?$(t,.2):"unset"};
      right: ${n?"unset":$(t,.2)};
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    }
  `;const c=s.css`
    .jimu-rtl & {
      border-color: transparent ${o} transparent transparent;
    }
    & {
      width: 0;
      height: 0;
      border-width: ${l};
      border-style: solid;
      border-color: transparent transparent transparent ${o};
      left: ${n?0:"unset"};
      right: ${n?"unset":`-${$(t,.5)}`};
      top: 50%;
      transform: translateY(-50%);
    }
  `,g=s.css`
    .jimu-rtl & {
      border-color: transparent transparent transparent ${o};
    }
    & {
      width: 0;
      height: 0;
      border-width: ${l};
      border-style: solid;
      border-color: transparent ${o} transparent transparent;
      left: ${n?`-${$(t,.5)}`:"unset"};
      right: ${n?"unset":0};
      top: 50%;
      transform: translateY(-50%);
    }
  `,v=s.css`
    .jimu-rtl & {
      border-top: ${d} solid ${o};
      border-left: ${d} solid ${o};
    }
    .jimu-ltr & {
      border-bottom: ${d} solid ${o};
      border-left: ${d} solid ${o};
    }
    & {
      width: ${$(t,.8)};
      height: ${$(t,.8)};
      left: ${n?`${$(t,.2)}`:"unset"};
      right: ${n?"unset":`-${$(t,.2)}`};
      top: 50%;
      border-radius: ${a};
      transform: translateY(-50%) rotate(45deg);
    }
  `,b=s.css`
    .jimu-rtl & {
      border-right: ${d} solid ${o};
      border-bottom: ${d} solid ${o};
    }
    .jimu-ltr & {
      border-top: ${d} solid ${o};
      border-right: ${d} solid ${o};
    }
    & {
      width: ${$(t,.8)};
      height: ${$(t,.8)};
      left: ${n?`-${$(t,.2)}`:"unset"};
      right: ${n?"unset":`${$(t,.2)}`};
      top: 50%;
      border-radius: ${a};
      transform: translateY(-50%) rotate(45deg);
    }
  `;u.Point0=s.css`
    & {
      width: ${r};
      height: ${r};
      border-radius: 50%;
      background-color: ${o};
      top: ${n?0:"unset"};
      bottom: ${n?"unset":0};
      left: 50%;
      transform: translateX(-50%);
    }
  `,u.Point1=s.css`
    & {
      width: ${r};
      height: ${d};
      background-color: ${o};
      top: ${n?"4%":"unset"};
      bottom: ${n?"unset":"4%"};
      left: 50%;
      transform: translateX(-50%);
    }
  `,u.Point2=s.css`
    & {
      width: ${r};
      height: ${d};
      background-color: ${o};
      top: ${n?0:"unset"};
      bottom: ${n?"unset":0};
      left: 50%;
      transform: translateX(-50%);
    }
  `,u.Point3=s.css`
    & {
      width: ${r};
      height: ${r};
      background-color: ${o};
      top: ${n?0:"unset"};
      bottom: ${n?"unset":0};
      left: 50%;
      transform: translateX(-50%);
    }
  `,u.Point4=s.css`
    & {
      width: ${$(t,.71)};
      height: ${$(t,.71)};
      background-color: ${o};
      top: ${n?$(t,.2):"unset"};
      bottom: ${n?"unset":$(t,.2)};
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
    }
  `;const S=s.css`
    & {
      width: 0;
      height: 0;
      border-width: ${l};
      border-style: solid;
      border-color: transparent transparent ${o} transparent;
      top: ${n?`-${$(t,.5)}`:"unset"};
      bottom: ${n?"unset":0};
      left: 50%;
      transform: translateX(-50%);
    }
  `,m=s.css`
    & {
      width: 0;
      height: 0;
      border-width: ${l};
      border-style: solid;
      border-color: ${o} transparent transparent transparent;
      top: ${n?0:"unset"};
      bottom: ${n?"unset":`-${$(t,.5)}`};
      left: 50%;
      transform: translateX(-50%);
    }
  `,y=s.css`
    .jimu-rtl & {
      border-bottom: ${d} solid ${o};
      border-left: ${d} solid ${o};
    }
    .jimu-ltr & {
      border-bottom: ${d} solid ${o};
      border-right: ${d} solid ${o};
    }
    & {
      width: ${$(t,.8)};
      height: ${$(t,.8)};
      top: ${n?`-${$(t,.2)}`:"unset"};
      bottom: ${n?"unset":`${$(t,.2)}`};
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      border-radius: ${a};
    }
  `,f=s.css`
    .jimu-rtl & {
      border-top: ${d} solid ${o};
      border-right: ${d} solid ${o};
    }
    .jimu-ltr & {
      border-top: ${d} solid ${o};
      border-left: ${d} solid ${o};
    }
    & {
      width: ${$(t,.8)};
      height: ${$(t,.8)};
      top: ${n?`${$(t,.2)}`:"unset"};
      bottom: ${n?"unset":`-${$(t,.2)}`};
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      border-radius: ${a};
    }
  `;let x,k;return n?(x={Point5:c,Point6:g,Point7:v,Point8:b},k={Point5:m,Point6:S,Point7:f,Point8:y}):(x={Point5:g,Point6:c,Point7:b,Point8:v},k={Point5:S,Point6:m,Point7:y,Point8:f}),h=Object.assign(Object.assign({},h),x),u=Object.assign(Object.assign({},u),k),p?h:u}("11px","#fff",e.Horizontal,t);for(const t in n){const e=n[t],s=t===i.None?{value:t}:{style:e,value:t};o.push(s)}return o},this.getStyle=()=>s.css`
      & {
        width: ${s.polished.rem(68)};
      }
      & > div {
        width: 100%;
      }
    `,this.getOptionStyle=()=>s.css`
      & {
        display: block;
        width: 100%;
      }
      &.divider-line-con {
        margin: ${s.polished.rem(8)} 0 ${s.polished.rem(8)} ${s.polished.rem(2)};
        height: ${s.polished.rem(2)};
      }
      .points {
        /* left: 0;
        top: 50%;
        transform: translateY(-50%); */
      }
    `,this.getSelectStyle=()=>s.css`
      .dropdown-menu--inner {
        width: ${s.polished.rem(94)};
      }
      & {
        width: ${s.polished.rem(94)};
      }
    `,this.getDividerLineStyle=()=>{const{isPointStart:t}=this.props;return function(t,e,o,i,n){const r=e?"5.5px":0,l=e?"4.4px":0,a=o?"5.5px":0,d=o?"4.4px":0,p=s.css`
    left: ${r};
    right: ${a};
    top: 50%;
    transform: translateY(-50%);
    &.point-start-Point1,
    &.point-start-Point2,
    &.point-start-Point5 {
      left: 0;
    }
    &.point-end-Point1,
    &.point-end-Point2,
    &.point-end-Point5 {
      right: 0;
    }
    &.point-start-Point7 {
      left: ${l};
    }
    &.point-end-Point7 {
      right: ${d};
    }
  `;s.css`
    top: ${r};
    bottom: ${a};
    left: 50%;
    transform: translateX(-50%);
    &.point-start-Point1,
    &.point-start-Point2,
    &.point-start-Point5 {
      top: 0;
    }
    &.point-end-Point1,
    &.point-end-Point2,
    &.point-end-Point5 {
      bottom: 0;
    }
  `;return p}(0,t,!t)},this.pointTitle={None:this.nls("nonePoint"),Point0:this.nls("pointCircle"),Point1:this.nls("pointCross"),Point2:this.nls("pointLine"),Point3:this.nls("pointSquare"),Point4:this.nls("pointDiamond"),Point5:this.nls("pointInverted"),Point6:this.nls("pointArrow"),Point7:this.nls("pointOpenArrow"),Point8:this.nls("pointInvertedArrow")}}_onLineStyleChange(t){const e=t.target.value;this.props.onChange(e)}render(){const{value:t,className:e,style:o,isPointStart:n}=this.props,r=n?"point-start-":"point-end-";return(0,s.jsx)("div",{className:(0,s.classNames)(e,"style-setting--line-style-selector"),style:o,css:this.getStyle()},(0,s.jsx)(u.Select,{size:"sm",name:"lineType",value:t,title:this.pointTitle[t],onChange:this._onLineStyleChange.bind(this),css:this.getSelectStyle(),"aria-label":this.pointTitle[t]},this.getLineStyles().map(((t,e)=>(0,s.jsx)(u.Option,{"aria-label":t.value,role:"option",tabIndex:e,key:e,value:t.value,title:this.pointTitle[t.value],description:this.pointTitle[t.value]},(0,s.jsx)("div",{className:"w-100 pl-1 pr-1"},t.value===i.None&&(0,s.jsx)("div",{className:"position-relative",css:this.getOptionStyle()},(0,s.jsx)("span",null,this.nls("nonePoint"))),t.value!==i.None&&(0,s.jsx)("div",{className:"position-relative divider-line-con",css:this.getOptionStyle()},(0,s.jsx)("div",{className:(0,s.classNames)("position-absolute divider-line",`${r}${t.value}`),css:this.getDividerLineStyle(),style:{border:"1px solid #fff"}}),(0,s.jsx)("span",{className:"position-absolute points",css:t.style}))))))))}}v.defaultProps={value:i.None,onChange:()=>{}};class b extends s.React.PureComponent{constructor(t){super(t),this.nls=t=>this.props.intl?this.props.intl.formatMessage({id:t,defaultMessage:c[t]}):t,this.getLineStyles=()=>{const t=[],o=function(t,o,i=e.Horizontal,n=!1){const r=i===e.Horizontal,l={},a={};return o=o||"transparent",l.Style0=s.css`
    & {
      border-bottom: ${t} solid ${o};
    }
  `,l.Style1=s.css`
    & {
      border-bottom: ${t} dashed ${o};
    }
  `,l.Style2=s.css`
    & {
      border-bottom: ${t} dotted ${o};
    }
  `,l.Style3=s.css`
    & {
      height: ${t};
      position: relative;
    }
    &:before {
      position: absolute;
      content: '';
      height: ${t};
      left: ${$(t,4)};
      right: 0;
      background-image: repeating-linear-gradient(
        to right,
        ${o} 0,
        ${o} ${$(t,1)},
        transparent 0,
        transparent ${$(t,6)}
      );
    }
    &:after {
      position: absolute;
      content: '';
      height: ${t};
      left: 0;
      right: 0;
      background-image: repeating-linear-gradient(
        to right,
        ${o} 0,
        ${o} ${$(t,3)},
        transparent 0,
        transparent ${$(t,6)}
      );
    }
  `,l.Style6=s.css`
    & {
      height: ${t};
      background-image: repeating-linear-gradient(
        to right,
        ${o} 0,
        ${o} ${$(t,4)},
        transparent 0,
        transparent ${$(t,6)}
      );
    }
  `,l.Style7=s.css`
    & {
      border-color: ${o};
      border-bottom-style: double;
      border-bottom-width: ${n?"4px":t};
    }
  `,l.Style8=s.css`
    & {
      height: ${t};
      min-height: ${n?"6px":"unset"};
      position: relative;
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: ${$(t,.2,"4px")};
      background: ${o};
    }
    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: ${$(t,.4,"4px")};
      background: ${o};
    }
  `,l.Style9=s.css`
    & {
      height: ${t};
      min-height: ${n?"6px":"unset"};
      position: relative;
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: ${$(t,.4,"4px")};
      background: ${o};
    }
    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: ${$(t,.2,"4px")};
      background: ${o};
    }
  `,l.Style10=s.css`
    & {
      height: ${t};
      min-height: ${n?"8px":"unset"};
      position: relative;
      background-clip: content-box;
      border-top: ${$(t,.167)} solid ${o};
      border-bottom: ${$(t,.167)} solid ${o};
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      height: ${n?"2px":$(t,.3)};
      background: ${o};
      transform: translateY(-50%);
    }
  `,a.Style0=s.css`
    & {
      border-left: ${t} solid ${o};
    }
  `,a.Style1=s.css`
    & {
      border-left: ${t} dashed ${o};
    }
  `,a.Style2=s.css`
    & {
      border-left: ${t} dotted ${o};
    }
  `,a.Style3=s.css`
    & {
      width: ${t};
      position: relative;
    }
    &:before {
      position: absolute;
      content: '';
      width: ${t};
      top: ${$(t,3.8)};
      bottom: 0;
      background-image: repeating-linear-gradient(
        to bottom,
        ${o} 0,
        ${o} ${$(t,1)},
        transparent 0,
        transparent ${$(t,6)}
      );
    }
    &:after {
      position: absolute;
      content: '';
      width: ${t};
      top: 0;
      bottom: 0;
      background-image: repeating-linear-gradient(
        to bottom,
        ${o} 0,
        ${o} ${$(t,2.5)},
        transparent 0,
        transparent ${$(t,6)}
      );
    }
  `,a.Style6=s.css`
    & {
      width: ${t};
      background-image: repeating-linear-gradient(
        to bottom,
        ${o} 0,
        ${o} ${$(t,4)},
        transparent 0,
        transparent ${$(t,6)}
      );
    }
  `,a.Style7=s.css`
    & {
      border-left: ${t} double ${o};
    }
  `,a.Style8=s.css`
    & {
      width: ${t};
      position: relative;
    }
    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: ${$(t,.2,"4px")};
      background: ${o};
    }
    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: ${$(t,.4,"4px")};
      background: ${o};
    }
  `,a.Style9=s.css`
    & {
      width: ${t};
      position: relative;
    }
    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: ${$(t,.4,"4px")};
      background: ${o};
    }
    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: ${$(t,.2,"4px")};
      background: ${o};
    }
  `,a.Style10=s.css`
    & {
      width: ${t};
      position: relative;
      background-clip: content-box;
      border-left: ${$(t,.167)} solid ${o};
      border-right: ${$(t,.167)} solid ${o};
    }
    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      width: ${n?"2px":$(t,.3)};
      background: ${o};
      transform: translateX(-50%);
    }
  `,r?l:a}("2px","#fff",e.Horizontal,!0);for(const e in o)t.push({style:o[e],value:e});return t},this.getStyle=()=>s.css`
      & {
        width: ${s.polished.rem(92)};
      }
    `,this.lineTitle={Style0:this.nls("strokeSolid"),Style1:this.nls("strokeDashed"),Style2:this.nls("strokeDotted"),Style3:this.nls("strokeDashdotted"),Style6:this.nls("strokeLongDashed"),Style7:this.nls("strokeDouble"),Style8:this.nls("strokeThinThick"),Style9:this.nls("strokeThickThin"),Style10:this.nls("strokeTriple")}}_onLineStyleChange(t){const e=t.target.value;this.props.onChange(e)}render(){const{value:t,className:e,style:o}=this.props,i=s.css`
      width: 100%;
      margin: 6px 0;
    `;return(0,s.jsx)("div",{className:(0,s.classNames)(e,"style-setting--line-style-selector"),style:o,css:this.getStyle()},(0,s.jsx)(u.Select,{size:"sm",name:"lineType",value:t,title:this.lineTitle[t],onChange:this._onLineStyleChange.bind(this),"aria-label":this.lineTitle[t]},this.getLineStyles().map(((t,e)=>(0,s.jsx)(u.Option,{"aria-label":t.value,tabIndex:e,role:"option",key:e,value:t.value,title:this.lineTitle[t.value]},(0,s.jsx)("div",{css:[t.style,i]}))))))}}b.defaultProps={value:o.Style0,onChange:()=>{}};const S="jimu-widget-";class m extends s.React.PureComponent{constructor(t){super(t),this.units=[u.UnitTypes.PIXEL],this.getStyle=t=>{var e,o;return s.css`
      .padding-top-0 {
        padding-top: 0;
      }
      .unit-width {
        width: ${s.polished.rem(60)};
        min-width: ${s.polished.rem(60)};
      }
      .start-end-point .jimu-widget-setting--section-header h6 {
        font-size: ${s.polished.rem(13)};
        color: ${null===(o=null===(e=null==t?void 0:t.colors)||void 0===e?void 0:e.palette)||void 0===o?void 0:o.dark[400]};
      }
    `},this.onSettingChange=(t,e)=>{let o=this.props.config;o=Array.isArray(t)?o.setIn(t,e):o.set(t,e),o.themeStyle.quickStyleType!==n.None&&(o=o.setIn(["themeStyle","quickStyleType"],n.None)),this.props.onSettingChange({id:this.props.id,config:o})},this.onRadioChange=(t,e,o)=>{t.currentTarget.checked&&(this.onSettingChange(e,o),(0,r.getAppConfigAction)().exchangeWidthAndHeight().exec())},this.onDirectionChange=t=>{const o=t?e.Vertical:e.Horizontal,{direction:i}=this.props.config;if(o===i)return!1;this.onSettingChange("direction",o),(0,r.getAppConfigAction)().exchangeWidthAndHeight().exec()},this.translate=(t,e,o)=>{const i=e?u.defaultMessages:c;return this.props.intl.formatMessage({id:t,defaultMessage:i[t]},o)},this.onDividerLineStyleChange=(t,e)=>{this.onSettingChange(["dividerStyle",t],e)},this.onLineStyleChange=t=>{var e,o,i;if(t===(null===(i=null===(o=null===(e=null==this?void 0:this.props)||void 0===e?void 0:e.config)||void 0===o?void 0:o.strokeStyle)||void 0===i?void 0:i.type))return!1;this.onSettingChange(["strokeStyle","type"],t)},this.onStrokeSizeChange=t=>{var e,o,i;const n=`${t.distance}${t.unit}`;if(n===(null===(i=null===(o=null===(e=null==this?void 0:this.props)||void 0===e?void 0:e.config)||void 0===o?void 0:o.strokeStyle)||void 0===i?void 0:i.size))return!1;this.onSettingChange(["strokeStyle","size"],n)},this.onColorChange=t=>{var e,o,i;if(t===(null===(i=null===(o=null===(e=null==this?void 0:this.props)||void 0===e?void 0:e.config)||void 0===o?void 0:o.strokeStyle)||void 0===i?void 0:i.color))return!1;this.onSettingChange(["strokeStyle","color"],t)},this.onPointStyleChange=(t,e)=>{var o,i;if(e===(null===(i=null===(o=null==this?void 0:this.props)||void 0===o?void 0:o.config[t])||void 0===i?void 0:i.pointStyle))return!1;this.onSettingChange([t,"pointStyle"],e)},this.onPointSizeChange=(t,e)=>{var o,i;if(e===(null===(i=null===(o=null==this?void 0:this.props)||void 0===o?void 0:o.config[t])||void 0===i?void 0:i.pointSize))return!1;this.onSettingChange([t,"pointSize"],e)},this.state={isLinkSettingShown:!1,isAdvance:!1}}render(){const{config:t,theme:o,theme2:n,intl:r}=this.props,{direction:a,strokeStyle:d,pointEnd:u,pointStart:c}=t;return(0,s.jsx)("div",{className:(0,s.classNames)(`${S}card-setting`,`${S}setting`),css:this.getStyle(this.props.theme)},(0,s.jsx)(l.SettingSection,null,(0,s.jsx)(l.SettingRow,{role:"group",label:this.translate("direction",!0),"aria-label":this.translate("direction",!0)},(0,s.jsx)(l.DirectionSelector,{vertical:a===e.Vertical,onChange:this.onDirectionChange,"aria-pressed":!0}))),(0,s.jsx)(l.SettingSection,{title:this.translate("style",!0),className:"border-bottom-0"},(0,s.jsx)(l.SettingRow,{role:"group",label:this.translate("color"),"aria-label":this.translate("color")},(0,s.jsx)(h.ThemeColorPicker,{value:null==d?void 0:d.color,specificTheme:n,onChange:this.onColorChange})),(0,s.jsx)(l.SettingRow,{role:"group",label:this.translate("stroke"),"aria-label":this.translate("stroke")},(0,s.jsx)(b,{intl:r,value:(null==d?void 0:d.type)||null,onChange:this.onLineStyleChange,className:"mr-2 f-grow-1"}),(0,s.jsx)("div",{className:"unit-width"},(0,s.jsx)(p.InputUnit,{units:this.units,value:null==d?void 0:d.size,onChange:this.onStrokeSizeChange,className:"item"})))),(0,s.jsx)(l.SettingSection,{className:"pt-0 start-end-point"},(0,s.jsx)(l.SettingRow,{role:"group",label:this.translate("startpoints"),"aria-label":this.translate("startpoints")},(0,s.jsx)("div",{className:"d-flex align-items-center"},(0,s.jsx)(v,{intl:r,value:null==c?void 0:c.pointStyle,isPointStart:!0,onChange:t=>{this.onPointStyleChange("pointStart",t)}}),(null==c?void 0:c.pointStyle)!==i.None&&(0,s.jsx)(g,{theme:o,pointStyle:null==c?void 0:c.pointStyle,value:null==c?void 0:c.pointSize,intl:this.translate,onChange:t=>{this.onPointSizeChange("pointStart",t)}}))),(0,s.jsx)(l.SettingRow,{role:"group",label:this.translate("endpoints"),"aria-label":this.translate("endpoints")},(0,s.jsx)("div",{className:"d-flex align-items-center"},(0,s.jsx)(v,{intl:r,value:null==u?void 0:u.pointStyle,isPointStart:!1,onChange:t=>{this.onPointStyleChange("pointEnd",t)}}),(null==u?void 0:u.pointStyle)!==i.None&&(0,s.jsx)(g,{theme:o,pointStyle:null==u?void 0:u.pointStyle,value:null==u?void 0:u.pointSize,intl:this.translate,onChange:t=>{this.onPointSizeChange("pointEnd",t)}})))))}}})(),d})())}}}));