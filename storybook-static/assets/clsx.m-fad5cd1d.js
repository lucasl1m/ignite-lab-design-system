var $=Object.defineProperty;var o=(e,r)=>$(e,"name",{value:r,configurable:!0});import{r as l}from"./index-39d17dc8.js";function a(){return a=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}o(a,"_extends");function h(e,r){typeof e=="function"?e(r):e!=null&&(e.current=r)}o(h,"$6ed0406888f73fc4$var$setRef");function p(...e){return r=>e.forEach(t=>h(t,r))}o(p,"$6ed0406888f73fc4$export$43e446d32b3d21af");function x(...e){return l.useCallback(p(...e),e)}o(x,"$6ed0406888f73fc4$export$c7b2cbe3552a0d05");const y=l.forwardRef((e,r)=>{const{children:t,...n}=e,c=l.Children.toArray(t),i=c.find(E);if(i){const s=i.props.children,f=c.map(d=>d===i?l.Children.count(s)>1?l.Children.only(null):l.isValidElement(s)?s.props.children:null:d);return l.createElement(u,a({},n,{ref:r}),l.isValidElement(s)?l.cloneElement(s,void 0,f):null)}return l.createElement(u,a({},n,{ref:r}),t)});y.displayName="Slot";const u=l.forwardRef((e,r)=>{const{children:t,...n}=e;return l.isValidElement(t)?l.cloneElement(t,{...g(n,t.props),ref:p(r,t.ref)}):l.Children.count(t)>1?l.Children.only(null):null});u.displayName="SlotClone";const b=o(({children:e})=>l.createElement(l.Fragment,null,e),"$5e63c961fc1ce211$export$d9f1ccf0bdb05d45");function E(e){return l.isValidElement(e)&&e.type===b}o(E,"$5e63c961fc1ce211$var$isSlottable");function g(e,r){const t={...r};for(const n in r){const c=e[n],i=r[n];/^on[A-Z]/.test(n)?c&&i?t[n]=(...f)=>{i(...f),c(...f)}:c&&(t[n]=c):n==="style"?t[n]={...c,...i}:n==="className"&&(t[n]=[c,i].filter(Boolean).join(" "))}return{...e,...t}}o(g,"$5e63c961fc1ce211$var$mergeProps");function m(e){var r,t,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=m(e[r]))&&(n&&(n+=" "),n+=t);else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}o(m,"r");function V(){for(var e,r,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(r=m(e))&&(n&&(n+=" "),n+=r);return n}o(V,"clsx");export{y as $,x as a,V as c};
//# sourceMappingURL=clsx.m-fad5cd1d.js.map