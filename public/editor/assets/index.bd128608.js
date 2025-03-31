import{n as f,B as m,a as b,r as o,b as F,i as R,w as D,j as r,E as L,d as T}from"./index.b13d347f.js";import{u as N,D as W,B as A}from"./index.2133eac1.js";import{T as I}from"./TemplatePreview.13c17158.js";import{E as z}from"./index.1020cbf5.js";import{L as H}from"./index.35817cc7.js";import{u as $}from"./useScrollToBottomHook.6bf4d578.js";import"./index.7dbda1c3.js";import"./index.383a2cf9.js";import"./index.6be00e2e.js";import"./debounce.609f38a4.js";const G=f(m)`
  width: 100%;
  // height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,J=f(m)`
  width: 100%;
  height: calc(100vh - 254px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;function K(){const{state:B}=b(),{pathname:d}=B.location,[s,i]=o.exports.useState([]),[h,p]=o.exports.useState(!1),[a,g]=o.exports.useState(1),{onClose:k,onNext:C,onPrev:j,setPreviewTemplate:x,previewTemplate:w}=N({list:s}),{filterList:q}=F(),l=o.exports.useRef(!1),{Subject:n,Industry:u,Category:c}=q,y=R.use(),S=o.exports.useCallback(()=>{const t=n==="fomo";D({pageRequest:{pageNo:a,pageSize:100},fomo:t,industry:u,industryCategory:c,filterArray:[[t?"":n]]}).then(e=>{var E;return i(a===1?(e==null?void 0:e.list)||[]:P=>[...P,...(e==null?void 0:e.list)||[]]),((E=e==null?void 0:e.list)==null?void 0:E.length)===0?l.current=!0:l.current=!1,e}).finally(()=>p(!1))},[c,u,n,a]);o.exports.useEffect(()=>{document.documentElement.scrollTo(0,0),p(!0),i([]),g(1)},[n,u,c]);const M=o.exports.useMemo(()=>h?r(H,{visible:!0,imgStyle:{width:40,height:40},color:"#F5F6FA"}):(s==null?void 0:s.length)>0?s.map(t=>r(W,{setPreviewTemplate:x,path:d,dataSource:t,name:y.Button.Template},t.id)):r(J,{children:r(z,{})}),[y.Button.Template,s,h,d,x]);return o.exports.useEffect(()=>{S()},[a,S]),o.exports.useEffect(()=>{const t=v=>{v||p(!1)};return L.on("requestStart",t),()=>L.off("requestStart",t)},[]),$(()=>{l.current||g(t=>t+1)}),T(G,{children:[M,w&&r(I,{dataSource:w,onClose:k,onPrev:j,onNext:C})]})}const O=f(m)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-top: 10px;
  padding: 0 60px;
`;function rt(){return T(O,{children:[r(K,{}),r(A,{})]})}export{rt as default};
