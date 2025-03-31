import{n as R,B as M,v as qe,I as ve,r as d,i as Ce,a as xe,u as Pe,d as Q,j as w,R as ue,L as Ke,e as Ue,f as be,b as Be,E as _e,c as Je,w as Ve}from"./index.b13d347f.js";import{E as Ye}from"./index.1020cbf5.js";import{a as Qe,c as Xe}from"./index.7dbda1c3.js";import{T as Ze}from"./TemplatePreview.13c17158.js";import{e as Ge,u as et}from"./index.2133eac1.js";import{L as tt}from"./index.35817cc7.js";import{C as nt}from"./index.89c59b66.js";import{R as ot}from"./ResizeObserver.1403e5c6.js";import{u as st}from"./useScrollToBottomHook.6bf4d578.js";import{F as rt}from"./index.d10eff4b.js";import"./index.6be00e2e.js";import"./index.383a2cf9.js";import"./debounce.609f38a4.js";const it=R(M)`
  display: flex;
  flex-direction: row;
  height: 82px;
  flex: 1;
  width: 1110px;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 0 22px 0 24px;
`,ct=R(M)`
  display: flex;
  flex-direction: row;
`,at=R(M)`
  height: 22px;
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #222222;
  line-height: 22px;
  font-weight: 500;
`,lt=R(M)`
  height: 22px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #666666;
  line-height: 22px;
  font-weight: 400;
`,ut=R(qe)`
  width: 386px !important;
  height: 44px;
  border-radius: 8px;
  border: 1px solid rgba(34, 34, 34, 1);
`,ft=R(ve)`
  cursor: pointer;
`,dt=R(ve)``;function ht({totalCount:n,searchKey:e,setSearchKey:t}){const[o,r]=d.exports.useState(e),s=Ce.use(),{state:i}=xe(),{location:c}=i,f=Pe(),h=()=>r(""),l=p=>{if(p.key==="Enter"){if(!o)return;t(o),c.search.key=o;const a=c.search,u=new URLSearchParams(a).toString();f({to:`/waterFilterList?${u}`})}};return Q(it,{children:[Q(ct,{children:[w(at,{children:e}),w(lt,{children:s.TemplateMMarket.SearchResult({a:n})})]}),w(ut,{leftElement:w(dt,{type:"a-sousuokuangsousuo",size:24}),value:o,onChange:r,onKeyDown:p=>l(p),rightElement:o&&w(ft,{type:"a-sousuokuangqingchu",onClick:h,size:28})})]})}const E=0,v=1,pt=2,mt=0,me=1;function gt(n,e,t){let o=n.list,r;for(;o;){if(o.index===t)return!1;if(e>o.high)break;r=o,o=o.next}return r||(n.list={index:t,high:e,next:o}),r&&(r.next={index:t,high:e,next:r.next}),!0}function yt(n,e){let t=n.list;if(t.index===e)return t.next===null?mt:(n.list=t.next,me);let o=t;for(t=t.next;t!==null;){if(t.index===e)return o.next=t.next,me;o=t,t=t.next}}const g={low:0,max:0,high:0,C:pt,P:void 0,R:void 0,L:void 0,list:void 0};g.P=g;g.L=g;g.R=g;function $(n){const e=n.high;n.L===g&&n.R===g?n.max=e:n.L===g?n.max=Math.max(n.R.max,e):n.R===g?n.max=Math.max(n.L.max,e):n.max=Math.max(Math.max(n.L.max,n.R.max),e)}function ce(n){let e=n;for(;e.P!==g;)$(e.P),e=e.P}function ne(n,e){if(e.R===g)return;const t=e.R;e.R=t.L,t.L!==g&&(t.L.P=e),t.P=e.P,e.P===g?n.root=t:e===e.P.L?e.P.L=t:e.P.R=t,t.L=e,e.P=t,$(e),$(t)}function oe(n,e){if(e.L===g)return;const t=e.L;e.L=t.R,t.R!==g&&(t.R.P=e),t.P=e.P,e.P===g?n.root=t:e===e.P.R?e.P.R=t:e.P.L=t,t.R=e,e.P=t,$(e),$(t)}function ae(n,e,t){e.P===g?n.root=t:e===e.P.L?e.P.L=t:e.P.R=t,t.P=e.P}function wt(n,e){let t;for(;e!==g&&e.C===v;)e===e.P.L?(t=e.P.R,t.C===E&&(t.C=v,e.P.C=E,ne(n,e.P),t=e.P.R),t.L.C===v&&t.R.C===v?(t.C=E,e=e.P):(t.R.C===v&&(t.L.C=v,t.C=E,oe(n,t),t=e.P.R),t.C=e.P.C,e.P.C=v,t.R.C=v,ne(n,e.P),e=n.root)):(t=e.P.L,t.C===E&&(t.C=v,e.P.C=E,oe(n,e.P),t=e.P.L),t.R.C===v&&t.L.C===v?(t.C=E,e=e.P):(t.L.C===v&&(t.R.C=v,t.C=E,ne(n,t),t=e.P.L),t.C=e.P.C,e.P.C=v,t.L.C=v,oe(n,e.P),e=n.root));e.C=v}function vt(n){for(;n.L!==g;)n=n.L;return n}function Ct(n,e){let t;for(;e.P.C===E;)e.P===e.P.P.L?(t=e.P.P.R,t.C===E?(e.P.C=v,t.C=v,e.P.P.C=E,e=e.P.P):(e===e.P.R&&(e=e.P,ne(n,e)),e.P.C=v,e.P.P.C=E,oe(n,e.P.P))):(t=e.P.P.L,t.C===E?(e.P.C=v,t.C=v,e.P.P.C=E,e=e.P.P):(e===e.P.L&&(e=e.P,oe(n,e)),e.P.C=v,e.P.P.C=E,ne(n,e.P.P)));n.root.C=v}function xt(){const n={root:g,size:0},e={};return{insert(t,o,r){let s=n.root,i=g;for(;s!==g&&(i=s,t!==i.low);)t<s.low?s=s.L:s=s.R;if(t===i.low&&i!==g){if(!gt(i,o,r))return;i.high=Math.max(i.high,o),$(i),ce(i),e[r]=i,n.size++;return}const c={low:t,high:o,max:o,C:E,P:i,L:g,R:g,list:{index:r,high:o,next:null}};i===g?n.root=c:(c.low<i.low?i.L=c:i.R=c,ce(c)),Ct(n,c),e[r]=c,n.size++},remove(t){const o=e[t];if(o===void 0)return;delete e[t];const r=yt(o,t);if(r===void 0)return;if(r===me){o.high=o.list.high,$(o),ce(o),n.size--;return}let s=o,i=s.C,c;o.L===g?(c=o.R,ae(n,o,o.R)):o.R===g?(c=o.L,ae(n,o,o.L)):(s=vt(o.R),i=s.C,c=s.R,s.P===o?c.P=s:(ae(n,s,s.R),s.R=o.R,s.R.P=s),ae(n,o,s),s.L=o.L,s.L.P=s,s.C=o.C),$(c),ce(c),i===v&&wt(n,c),n.size--},search(t,o,r){const s=[n.root];for(;s.length!==0;){const i=s.pop();if(!(i===g||t>i.max)&&(i.L!==g&&s.push(i.L),i.R!==g&&s.push(i.R),i.low<=o&&i.high>=t)){let c=i.list;for(;c!==null;)c.high>=t&&r(c.index,i.low),c=c.next}}},get size(){return n.size}}}const Pt=n=>{const e=d.exports.useRef(n);return d.exports.useEffect(()=>{e.current=n}),e};var Te=Pt;function Re(n,e,t,o){const r=d.exports.useRef(t),s=d.exports.useRef(o);d.exports.useEffect(()=>{r.current=t,s.current=o}),d.exports.useEffect(()=>{const i=n&&"current"in n?n.current:n;if(!i)return;let c=0;function f(...l){c||r.current.apply(this,l)}i.addEventListener(e,f);const h=s.current;return()=>{c=1,i.removeEventListener(e,f),h&&h()}},[n,e])}const bt=(n,e)=>{const t=e||Rt;let o,r;return function(){return!!o&&t(arguments,o)?r:r=n.apply(null,o=arguments)}};var de=bt;const Rt=(n,e)=>n[0]===e[0]&&n[1]===e[1]&&n[2]===e[2]&&n[3]===e[3];class Lt{constructor(){this.set=void 0,this.get=void 0;let e,t;this.get=o=>o===e?t:void 0,this.set=(o,r)=>{e=o,t=r}}}var Le=Lt;const he=n=>{try{return new n}catch{const t={};return{set(o,r){t[o]=r},get(o){return t[o]}}}},St=n=>{const e=n.length,t=he(n[0]);let o,r,s,i;const c=e===1,f=a=>(o=t.get(a[0]))===void 0||c?o:o.get(a[1]),h=(a,u)=>(c?t.set(a[0],u):(o=t.get(a[0]))===void 0?(r=he(n[1]),r.set(a[1],u),t.set(a[0],r)):o.set(a[1],u),u),l=a=>{for(i=t,s=0;s<e;s++)if((i=i.get(a[s]))===void 0)return;return i},p=(a,u)=>{for(i=t,s=0;s<e-1;s++)(r=i.get(a[s]))===void 0&&(r=he(n[s+1]),i.set(a[s],r)),i=r;return i.set(a[e-1],u),u};return e<3?{g:f,s:h}:{g:l,s:p}},kt=(n,e)=>{let t;const{g:o,s:r}=St(n);return function(){return(t=o(arguments))===void 0?r(arguments,e.apply(null,arguments)):t}};var Oe=kt;const ge=new WeakMap;function Fe(){const n=d.exports.useState(Et)[1];return d.exports.useRef(()=>n({})).current}const Et={},le=d.exports.createElement;function Mt(n){let{positioner:e,resizeObserver:t,items:o,as:r="div",id:s,className:i,style:c,role:f="grid",tabIndex:h=0,containerRef:l,itemAs:p="div",itemStyle:a,itemHeightEstimate:u=300,itemKey:y=Ot,overscanBy:C=2,scrollTop:S,isScrolling:x,height:I,render:O,onRender:F}=n,k=0,T;const K=Fe(),N=At(e,t),z=o.length,{columnWidth:P,columnCount:b,range:H,estimateHeight:X,size:se,shortestColumn:re}=e,q=se(),Z=re(),D=[],G=f==="list"?"listitem":f==="grid"?"gridcell":void 0,U=Te(F);C=I*C;const ee=S+C,B=Z<ee&&q<z;if(H(Math.max(0,S-C/2),ee,(L,A,W)=>{const j=o[L],J=y(j,L),ie={top:W,left:A,width:P,writingMode:"horizontal-tb",position:"absolute"};D.push(le(p,{key:J,ref:N(L),role:G,style:typeof a=="object"&&a!==null?Object.assign({},ie,a):ie},ke(O,L,j,P))),T===void 0?(k=L,T=L):(k=Math.min(k,L),T=Math.max(T,L))}),B){const L=Math.min(z-q,Math.ceil((S+C-Z)/u*b));let A=q;const W=Ft(P);for(;A<q+L;A++){const j=o[A],J=y(j,A);D.push(le(p,{key:J,ref:N(A),role:G,style:typeof a=="object"?Object.assign({},W,a):W},ke(O,A,j,P)))}}d.exports.useEffect(()=>{typeof U.current=="function"&&T!==void 0&&U.current(k,T,o),Se="1"},[k,T,o,U]),d.exports.useEffect(()=>{B&&K()},[B,e]);const _=It(x,X(z,u));return le(r,{ref:l,key:Se,id:s,role:f,className:i,tabIndex:h,style:typeof c=="object"?Tt(_,c):_,children:D})}let Se="0";const ke=Oe([Le,{},WeakMap,Le],(n,e,t,o)=>le(n,{index:e,data:t,width:o})),It=de((n,e)=>({position:"relative",width:"100%",maxWidth:"100%",height:Math.ceil(e),maxHeight:Math.ceil(e),willChange:n?"contents":void 0,pointerEvents:n?"none":void 0})),Ae=(n,e)=>n[0]===e[0]&&n[1]===e[1],Tt=de((n,e)=>Object.assign({},n,e),Ae);function Ot(n,e){return e}const Ft=de(n=>({width:n,zIndex:-1e3,visibility:"hidden",position:"absolute",writingMode:"horizontal-tb"}),(n,e)=>n[0]===e[0]),At=de((n,e)=>t=>o=>{o!==null&&(e&&(e.observe(o),ge.set(o,t)),n.get(t)===void 0&&n.set(t,o.offsetHeight))},Ae);let We="undefined",Y=typeof window!==We?window:{},Wt=typeof performance!==We?performance:Date,ye=()=>Wt.now(),je="AnimationFrame",Ee="cancel"+je,Me="request"+je,fe=Y[Me]&&Y[Me].bind(Y),we=Y[Ee]&&Y[Ee].bind(Y);function jt(n){return clearTimeout(n)}if(!fe||!we){let n=0;fe=e=>{let t=ye(),o=Math.max(n+1e3/60,t);return setTimeout(()=>{e(n=o)},o-t)},we=jt}const zt=n=>{we(n.v||-1)},Dt=(n,e)=>{const t=ye(),o={},r=()=>{ye()-t>=e?n.call(null):o.v=fe(r)};return o.v=fe(r),o},$t=typeof performance!="undefined"?performance:Date,Nt=()=>$t.now();function Ht(n,e=30,t=!1){const o=Te(n),r=1e3/e,s=d.exports.useRef(0),i=d.exports.useRef(),c=()=>i.current&&clearTimeout(i.current),f=[e,t,o];function h(){s.current=0,c()}return d.exports.useEffect(()=>h,f),d.exports.useCallback(function(){const l=arguments,p=Nt(),a=()=>{s.current=p,c(),o.current.apply(null,l)},u=s.current;if(t&&u===0)return a();if(p-u>r){if(u>0)return a();s.current=p}c(),i.current=setTimeout(()=>{a(),s.current=0},r)},f)}function qt(n,e,t){const o=d.exports.useState(n);return[o[0],Ht(o[1],e,t)]}const Kt=ue[typeof document!="undefined"&&document.createElement!==void 0?"useLayoutEffect":"useEffect"];var ze=Kt;function Ut(n,e){let{width:t,columnWidth:o=200,columnGutter:r=0,rowGutter:s,columnCount:i,maxColumnCount:c}=n;e===void 0&&(e=Vt);const f=()=>{const[y,C]=Jt(t,o,r,i,c);return Bt(C,y,r,s!=null?s:r)},h=d.exports.useRef();h.current===void 0&&(h.current=f());const l=d.exports.useRef(e),p=[t,o,r,s,i,c],a=d.exports.useRef(p),u=!p.every((y,C)=>a.current[C]===y);if(u||!e.every((y,C)=>l.current[C]===y)){const y=h.current,C=f();if(l.current=e,a.current=p,u){const S=y.size();for(let x=0;x<S;x++){const I=y.get(x);C.set(x,I!==void 0?I.height:0)}}h.current=C}return h.current}const Bt=function(n,e,t,o){t===void 0&&(t=0),o===void 0&&(o=t);const r=xt(),s=new Array(n),i=[],c=new Array(n);for(let f=0;f<n;f++)s[f]=0,c[f]=[];return{columnCount:n,columnWidth:e,set:function(f,h){h===void 0&&(h=0);let l=0;for(let a=1;a<s.length;a++)s[a]<s[l]&&(l=a);const p=s[l]||0;s[l]=p+h+o,c[l].push(f),i[f]={left:l*(e+t),top:p,height:h,column:l},r.insert(p,p+h,f)},get:f=>i[f],update:f=>{const h=new Array(n);let l=0,p=0;for(;l<f.length-1;l++){const a=f[l],u=i[a];u.height=f[++l],r.remove(a),r.insert(u.top,u.top+u.height,a),h[u.column]=h[u.column]===void 0?a:Math.min(a,h[u.column])}for(l=0;l<h.length;l++){if(h[l]===void 0)continue;const a=c[l],u=_t(a,h[l]),y=c[l][u],C=i[y];for(s[l]=C.top+C.height+o,p=u+1;p<a.length;p++){const S=a[p],x=i[S];x.top=s[l],s[l]=x.top+x.height+o,r.remove(S),r.insert(x.top,x.top+x.height,S)}}},range:(f,h,l)=>r.search(f,h,(p,a)=>l(p,i[p].left,a)),estimateHeight:(f,h)=>{const l=Math.max(0,Math.max.apply(null,s));return f===r.size?l:l+Math.ceil((f-r.size)/n)*h},shortestColumn:()=>s.length>1?Math.min.apply(null,s):s[0]||0,size(){return r.size},all(){return i}}},_t=(n,e)=>{let t=0,o=n.length-1;for(;t<=o;){const r=t+o>>>1,s=n[r];if(s===e)return r;s<=e?t=r+1:o=r-1}return-1},Jt=function(n,e,t,o,r){return n===void 0&&(n=0),e===void 0&&(e=0),t===void 0&&(t=8),o=o||Math.min(Math.floor((n+t)/(e+t)),r||1/0)||1,[Math.floor((n-t*(o-1))/o),o]},Vt=[];var Yt=function(e){var t=[],o=null,r=function(){for(var i=arguments.length,c=new Array(i),f=0;f<i;f++)c[f]=arguments[f];t=c,!o&&(o=requestAnimationFrame(function(){o=null,e.apply(void 0,t)}))};return r.cancel=function(){!o||(cancelAnimationFrame(o),o=null)},r},Ie=Yt;const Qt=typeof window!="undefined"&&"ResizeObserver"in window?window.ResizeObserver:ot;function Xt(n){const e=Fe(),t=Gt(n,e);function o(){return t.disconnect()}return d.exports.useEffect(()=>o,[t]),t}function Zt(n){n.cancel()}const Gt=Oe([WeakMap],(n,e)=>{const t=[],o=Ie(()=>{t.length>0&&(n.update(t),e(t)),t.length=0}),r=h=>{const l=h.offsetHeight;if(l>0){const p=ge.get(h);if(p!==void 0){const a=n.get(p);a!==void 0&&l!==a.height&&t.push(p,l)}}o()},s=new Map,i=h=>{let l=0;for(;l<h.length;l++){const p=h[l],a=ge.get(p.target);if(a===void 0)continue;let u=s.get(a);u||(u=Ie(r),s.set(a,u)),u(p.target)}},c=new Qt(i),f=c.disconnect.bind(c);return c.disconnect=()=>{f(),s.forEach(Zt)},c});function en(n){const e=()=>{const{current:s}=n;if(s){const i=getComputedStyle(s),c=parseFloat;return{width:s.clientWidth-c(i.paddingTop)-c(i.paddingBottom),height:s.clientHeight-c(i.paddingLeft)-c(i.paddingRight)}}return{width:0,height:0}},[t,o]=d.exports.useState(e),r=()=>o(e());return Re(typeof window!="undefined"?window:null,"resize",r),Re(typeof window!="undefined"?window:null,"orientationchange",r),ze(()=>{o(e())},[]),t}function tn(n,e={}){const{offset:t=0,fps:o=12}=e,r=n&&"current"in n?n.current:n,s=()=>r?"scrollTop"in r?r.scrollTop:r.pageYOffset||r.scrollY:0,[i,c]=qt(s,o),[f,h]=d.exports.useState(!1);function l(){h(!1)}return ze(()=>{if(r){let p=!1,a;const u=()=>a&&zt(a),y=()=>{p||(c(s()),h(!0),u(),a=Dt(l,1e3/o))};return r.addEventListener("scroll",y),()=>{r.removeEventListener("scroll",y),u(),p=!0}}},[r,o]),{scrollTop:Math.max(0,i-t),isScrolling:f}}const nn=R(M)`
  ${({height:n,width:e})=>`
    min-height: 100px;
    min-width: 100px;
    position: absolute;
    display: flex;
    cursor: pointer;
    height: ${n?`${n}px`:"auto"};
    width: ${e}px;
    &:hover {
      .add {
        display: flex;
      }
      .image-mask {
        display: flex;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 8px;
      }
    }
 `}
`,on=R(Ke)`
  width: 100%;
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`,sn=R(M)`
  position: relative;
`,rn=R(M)`
  position: absolute;
  display: none;
  cursor: pointer;
`,cn=R(M)`
  display: none;
  width: 86px;
  height: 32px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 16px;
  position: absolute;
  justify-content: center;
  align-items: center;
  color: #fff;
  transform: translate(10px, 10px);
  padding: 0 12px;
  z-index: 1;
  & > svg {
    margin-right: 6px;
  }
`,an=R(M)`
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #ffffff;
`;function De({name:n,width:e,height:t,source:o,border:r,dataSource:s,setVisible:i,setPreview:c,setDetailId:f}){const h=Pe(),l=d.exports.useRef(),[p,a]=ue.useState(!1),{state:u}=xe(),{location:y}=u,{search:C,searchStr:S}=y,{source:x}=C,I=Ce.use(),O=e-r,F=t-r,k=P=>{switch(x){case"/market":c(P);break;case"/creativeCase":const{id:b}=P;i(!0),f(b),Ge({id:b,code:"SAMPLE"}).then(H=>H).catch(()=>{}),h({to:`/waterFilterList?${S}&caseId=${P.id}`});break;default:throw new Error("path error")}},T=d.exports.useCallback(P=>{Ue({code:P.code,id:P.id}).then(b=>(b&&be.show({type:"success",message:I.Toast.AddSuccess}),b)).catch(b=>console.log("err",b))},[I.Toast.AddSuccess]),K=d.exports.useCallback(P=>{Qe({id:P.id}).then(b=>(b&&be.show({type:"success",message:I.Toast.AddSuccess}),b)).catch(b=>console.log("err",b))},[I.Toast.AddSuccess]),N=d.exports.useCallback((P,b)=>{switch(P.stopPropagation(),x){case"/waterFilterList":T(b);break;case"/creativeCase":K(b);break;default:throw new Error("path error")}},[K,T,x]);d.exports.useEffect(()=>{const P=[.01];new IntersectionObserver(H=>{const{isIntersecting:X}=H[0];a(!!X)},{threshold:P}).observe(l.current)},[]);const z=d.exports.useMemo(()=>Q(M,{children:[Q(cn,{className:"add",onClick:P=>N(P,s),children:[w(ve,{type:"a-xuantingtianjia",size:24,color:"#FFF"}),w(an,{children:n})]}),w(rn,{style:{height:F,width:O},className:"image-mask"}),w(on,{style:{width:O,height:F},src:o})]}),[N,s,F,O,n,o]);return w(nn,{width:e,height:t,onClick:()=>k(s),children:w(sn,{ref:l,children:z})})}De.defaultProps={setPreview:()=>{},setVisible:()=>{},setDetailId:()=>{}};const ln=R(M)`
  background: #fff;
  position: relative;
  overflow-y: scroll;
  scroll-width: none;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`,pe=20,un=198;function fn({list:n,name:e,setPreviewTemplate:t,setDetailId:o,setVisible:r,imgWrapRef:s}){const i=ue.useRef(null),[c,f]=ue.useState([]);d.exports.useEffect(()=>{f(n)},[JSON.stringify(n)]);const h=d.exports.useCallback(({data:S})=>{const{id:x,previewUrl:I,aspectRatio:O}=S,F=un+pe,k=198/(+O||1)+pe;return w("div",{style:{width:F,height:k},children:w(De,{name:e,dataSource:S,border:pe,width:F,setPreview:t,setDetailId:o,setVisible:r,height:k,source:I},x)},x)},[]),{width:l,height:p}=en(i),a=Ut({width:l}),{scrollTop:u,isScrolling:y}=tn(i),C=Xt(a);return d.exports.useEffect(()=>{s.current=i.current},[i.current]),w(ln,{ref:i,children:Mt({positioner:a,resizeObserver:C,items:c,height:p,scrollTop:u,isScrolling:y,overscanBy:6,render:h})})}const dn=R(M)`
  flex: 1;
  width: 1110px;
  background: #fff;
  position: relative;
  padding: 20px 20px 0;
  scroll-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,hn=R(M)`
  overflow: hidden;
  margin-left: 10px;
  border-radius: 8px;
  width: 1110px;
  height: calc(100vh - 142px);
`,pn=R(M)`
  height: 100%;
  width: 1110px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;function mn(){const{state:n}=xe(),{key:e,source:t,subject:o,category:r,industry:s}=n.location.search,i=d.exports.useMemo(()=>Object.keys(n.location.search).includes("key"),[]),c=Ce.use(),{filterList:f,clearFilter:h,setFilterList:l}=Be(),[p,a]=d.exports.useState(e),[u,y]=d.exports.useState([]),[C,S]=d.exports.useState(0),x=d.exports.useMemo(()=>i?"calc(100vh - 224px)":"calc(100vh - 142px)",[i]),[I,O]=d.exports.useState(!1),[F,k]=d.exports.useState(!0),[T,K]=d.exports.useState(""),[N,z]=d.exports.useState(""),{onClose:P,onNext:b,onPrev:H,setPreviewTemplate:X,previewTemplate:se}=et({list:u}),re=Pe();d.exports.useEffect(()=>{l("Subject",o),l("Category",r),l("Industry",s)},[o,r,s]);const{Color:q=[],Style:Z=[],Platform:D=[],ItemType:G=[],Size:U=[],Industry:ee="",Category:B="",Subject:_=""}=f;d.exports.useEffect(()=>()=>{h()},[]);const[L,A]=d.exports.useState(1),W=d.exports.useRef(!1),j=d.exports.useRef(),J=d.exports.useMemo(()=>{const m=_==="fomo";return{platformJson:D[0],width:D[1],height:D[2],keywords:`${p||""}`,industry:ee,industryCategory:B,filterArray:[Z,q,U,G,[m?"":_]],fomo:m,pageRequest:{pageNo:L,pageSize:200}}},[JSON.stringify(f),p,L]),ie=()=>{Xe(J).then(m=>{y(L===1?(m==null?void 0:m.list)||[]:te=>[...te,...(m==null?void 0:m.list)||[]]);const V=m.totalCount===-1?(u==null?void 0:u.length)||0:m.totalCount;return m.list.length===0?(k(!1),W.current=!0):W.current=!1,S(V),m}).catch(()=>{})},$e=()=>{Ve(J).then(m=>{y(L===1?(m==null?void 0:m.list)||[]:te=>[...te,...(m==null?void 0:m.list)||[]]);const V=m.totalCount===-1?(u==null?void 0:u.length)||0:m.totalCount;return S(V),m.list.length===0?(k(!1),W.current=!0):W.current=!1,m}).catch(m=>console.error(m))};d.exports.useEffect(()=>{_e.on("requestStart",m=>{k(!!m)})},[]),Je(()=>{switch(k(!0),t){case"/market":z(c.Button.Template),$e();break;case"/creativeCase":z(c.Button.Case),ie();break;default:re({to:"/creativeCase"});break}},[q,Z,D,p,U,G,ee,B,_,L]);const Ne=d.exports.useMemo(()=>F&&L===1?w(tt,{visible:!0,imgStyle:{width:40,height:40}}):Array.isArray(u)&&u.length>0?w(fn,{list:u,name:N,imgWrapRef:j,setPreviewTemplate:X,setDetailId:K,setVisible:O}):u.length===0?w(pn,{children:w(Ye,{})}):null,[u,F,L,j]),He=()=>{O(!1);const{location:m}=n,{search:V}=m;delete V.caseId;const te=new URLSearchParams(V).toString();re({to:`/waterFilterList?${te}`})};return st(()=>{W.current||A(m=>m+1)},1e3,j),Q(hn,{children:[i&&w(ht,{totalCount:C,searchKey:p,setSearchKey:a}),w(dn,{height:x,children:Ne}),se&&w(Ze,{dataSource:se,onClose:P,onPrev:H,onNext:b}),w(nt,{visible:I,onClose:He,caseID:T})]})}const gn=R(M)`
  display: flex;
  flex-direction: column;
  height: 100%;
`,yn=R(M)`
  display: flex;
  flex-direction: row;
  height: 100%;
`;function Tn(){return w(gn,{children:Q(yn,{children:[w(rt,{}),w(mn,{})]})})}export{Tn as default};
