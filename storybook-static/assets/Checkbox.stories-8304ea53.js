var D=Object.defineProperty;var i=(e,t)=>D(e,"name",{value:t,configurable:!0});import{r as o}from"./index-39d17dc8.js";import{a as _,$ as U}from"./clsx.m-fad5cd1d.js";import{r as z}from"./index-f97499ea.js";import{j as p,F as g,a as B}from"./jsx-runtime-310bfdac.js";import{I as W,r as F}from"./IconBase.esm-146a4d00.js";import{T as q}from"./Text-8255de0f.js";import"./es.object.get-own-property-descriptor-037fa860.js";function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(this,arguments)}i(N,"_extends$1");function K(e,t=[]){let n=[];function r(s,f){const u=o.createContext(f),d=n.length;n=[...n,f];function a(l){const{scope:h,children:b,...$}=l,y=(h==null?void 0:h[e][d])||u,v=o.useMemo(()=>$,Object.values($));return o.createElement(y.Provider,{value:v},b)}i(a,"Provider");function m(l,h){const b=(h==null?void 0:h[e][d])||u,$=o.useContext(b);if($)return $;if(f!==void 0)return f;throw new Error(`\`${l}\` must be used within \`${s}\``)}return i(m,"useContext"),a.displayName=s+"Provider",[a,m]}i(r,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const c=i(()=>{const s=n.map(f=>o.createContext(f));return i(function(u){const d=(u==null?void 0:u[e])||s;return o.useMemo(()=>({[`__scope${e}`]:{...u,[e]:d}}),[u,d])},"useScope")},"createScope");return c.scopeName=e,[r,X(c,...t)]}i(K,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function X(...e){const t=e[0];if(e.length===1)return t;const n=i(()=>{const r=e.map(c=>({useScope:c(),scopeName:c.scopeName}));return i(function(s){const f=r.reduce((u,{useScope:d,scopeName:a})=>{const l=d(s)[`__scope${a}`];return{...u,...l}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:f}),[f])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}i(X,"$c512c27ab02ef895$var$composeContextScopes");function A(e,t,{checkForDefaultPrevented:n=!0}={}){return i(function(c){if(e==null||e(c),n===!1||!c.defaultPrevented)return t==null?void 0:t(c)},"handleEvent")}i(A,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function w(e){const t=o.useRef(e);return o.useEffect(()=>{t.current=e}),o.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}i(w,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function H({prop:e,defaultProp:t,onChange:n=i(()=>{},"onChange")}){const[r,c]=Z({defaultProp:t,onChange:n}),s=e!==void 0,f=s?e:r,u=w(n),d=o.useCallback(a=>{if(s){const l=typeof a=="function"?a(e):a;l!==e&&u(l)}else c(a)},[s,e,c,u]);return[f,d]}i(H,"$71cd76cc60e0454e$export$6f32135080cb4c3");function Z({defaultProp:e,onChange:t}){const n=o.useState(e),[r]=n,c=o.useRef(r),s=w(t);return o.useEffect(()=>{c.current!==r&&(s(r),c.current=r)},[r,c,s]),n}i(Z,"$71cd76cc60e0454e$var$useUncontrolledState");function G(e){const t=o.useRef({value:e,previous:e});return o.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}i(G,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");const E=Boolean(globalThis==null?void 0:globalThis.document)?o.useLayoutEffect:()=>{};function J(e){const[t,n]=o.useState(void 0);return E(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const s=c[0];let f,u;if("borderBoxSize"in s){const d=s.borderBoxSize,a=Array.isArray(d)?d[0]:d;f=a.inlineSize,u=a.blockSize}else f=e.offsetWidth,u=e.offsetHeight;n({width:f,height:u})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}i(J,"$db6c3485150b8e66$export$1ab7ae714698c4b8");function Q(e,t){return o.useReducer((n,r)=>{const c=t[n][r];return c??n},e)}i(Q,"$fe963b355347cc68$export$3e6543de14f8614f");const M=i(e=>{const{present:t,children:n}=e,r=Y(t),c=typeof n=="function"?n({present:r.isPresent}):o.Children.only(n),s=_(r.ref,c.ref);return typeof n=="function"||r.isPresent?o.cloneElement(c,{ref:s}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");M.displayName="Presence";function Y(e){const[t,n]=o.useState(),r=o.useRef({}),c=o.useRef(e),s=o.useRef("none"),f=e?"mounted":"unmounted",[u,d]=Q(f,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.useEffect(()=>{const a=P(r.current);s.current=u==="mounted"?a:"none"},[u]),E(()=>{const a=r.current,m=c.current;if(m!==e){const h=s.current,b=P(a);e?d("MOUNT"):b==="none"||(a==null?void 0:a.display)==="none"?d("UNMOUNT"):d(m&&h!==b?"ANIMATION_OUT":"UNMOUNT"),c.current=e}},[e,d]),E(()=>{if(t){const a=i(l=>{const b=P(r.current).includes(l.animationName);l.target===t&&b&&z.flushSync(()=>d("ANIMATION_END"))},"handleAnimationEnd"),m=i(l=>{l.target===t&&(s.current=P(r.current))},"handleAnimationStart");return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",a),t.addEventListener("animationend",a),()=>{t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",a),t.removeEventListener("animationend",a)}}else d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:o.useCallback(a=>{a&&(r.current=getComputedStyle(a)),n(a)},[])}}i(Y,"$921a889cee6df7e8$var$usePresence");function P(e){return(e==null?void 0:e.animationName)||"none"}i(P,"$921a889cee6df7e8$var$getAnimationName");function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(this,arguments)}i(S,"_extends");const V=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"],R=V.reduce((e,t)=>{const n=o.forwardRef((r,c)=>{const{asChild:s,...f}=r,u=s?U:t;return o.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.createElement(u,S({},f,{ref:c}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),T="Checkbox",[ee,ke]=K(T),[te,ne]=ee(T),re=o.forwardRef((e,t)=>{const{__scopeCheckbox:n,name:r,checked:c,defaultChecked:s,required:f,disabled:u,value:d="on",onCheckedChange:a,...m}=e,[l,h]=o.useState(null),b=_(t,x=>h(x)),$=o.useRef(!1),y=l?Boolean(l.closest("form")):!0,[v=!1,j]=H({prop:c,defaultProp:s,onChange:a});return o.createElement(te,{scope:n,state:v,disabled:u},o.createElement(R.button,N({type:"button",role:"checkbox","aria-checked":k(v)?"mixed":v,"aria-required":f,"data-state":I(v),"data-disabled":u?"":void 0,disabled:u,value:d},m,{ref:b,onKeyDown:A(e.onKeyDown,x=>{x.key==="Enter"&&x.preventDefault()}),onClick:A(e.onClick,x=>{j(O=>k(O)?!0:!O),y&&($.current=x.isPropagationStopped(),$.current||x.stopPropagation())})})),y&&o.createElement(se,{control:l,bubbles:!$.current,name:r,value:d,checked:v,required:f,disabled:u,style:{transform:"translateX(-100%)"}}))}),oe="CheckboxIndicator",ce=o.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...c}=e,s=ne(oe,n);return o.createElement(M,{present:r||k(s.state)||s.state===!0},o.createElement(R.span,N({"data-state":I(s.state),"data-disabled":s.disabled?"":void 0},c,{ref:t,style:{pointerEvents:"none",...e.style}})))}),se=i(e=>{const{control:t,checked:n,bubbles:r=!0,...c}=e,s=o.useRef(null),f=G(n),u=J(t);return o.useEffect(()=>{const d=s.current,a=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(a,"checked").set;if(f!==n&&l){const h=new Event("click",{bubbles:r});d.indeterminate=k(n),l.call(d,k(n)?!1:n),d.dispatchEvent(h)}},[f,n,r]),o.createElement("input",N({type:"checkbox","aria-hidden":!0,defaultChecked:k(n)?!1:n},c,{tabIndex:-1,ref:s,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function k(e){return e==="indeterminate"}i(k,"$e698a72e93240346$var$isIndeterminate");function I(e){return k(e)?"indeterminate":e?"checked":"unchecked"}i(I,"$e698a72e93240346$var$getState");const ae=re,ie=ce;var C=new Map;C.set("bold",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});C.set("duotone",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});C.set("fill",function(){return p(g,{children:p("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});C.set("light",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});C.set("thin",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});C.set("regular",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var ue=i(function(t,n){return F(t,n,C)},"renderPath"),L=o.forwardRef(function(e,t){return p(W,{...Object.assign({ref:t},e,{renderPath:ue})})});L.displayName="Check";const de=L;function fe(){return p(ae,{className:"w-7 h-7 border-gray-200 border-2 rounded bg-gray-800 flex items-center justify-center group",children:p(ie,{asChild:!0,children:p(de,{weight:"bold",className:"w-5 h-5 text-gray-100"})})})}i(fe,"Checkbox");const Ce={title:"Components/Checkbox",component:fe,args:{},decorators:[e=>B("div",{className:"flex items-center gap-3",children:[e(),p(q,{size:"sm",children:"Mantenha-me conectado"})]})]},ge={},Ne=["Default"];export{ge as Default,Ne as __namedExportsOrder,Ce as default};
//# sourceMappingURL=Checkbox.stories-8304ea53.js.map
