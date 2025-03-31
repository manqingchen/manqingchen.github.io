import{n as h,B as g,u as W,a as $,r as t,b as A,i as P,c as z,E as k,j as n,d as I}from"./index.b13d347f.js";import{e as F,D as H,B as V}from"./index.2133eac1.js";import{C as G}from"./index.89c59b66.js";import{E as J}from"./index.1020cbf5.js";import{c as K}from"./index.7dbda1c3.js";import{u as O}from"./useScrollToBottomHook.6bf4d578.js";import{L as Q}from"./index.35817cc7.js";import"./index.383a2cf9.js";import"./TemplatePreview.13c17158.js";import"./index.6be00e2e.js";import"./debounce.609f38a4.js";const U=h(g)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,X=h(g)`
  width: 100%;
  height: calc(100vh - 254px);
  background: ${({theme:o})=>o.colors.ipaintter[0]};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;function Y(){const o=W(),{state:B}=$(),{pathname:x,search:D}=B.location,{caseId:i}=D,[C,y]=t.exports.useState(!1),[j,c]=t.exports.useState(!1),[l,S]=t.exports.useState(1),[a,p]=t.exports.useState([]),[q,v]=t.exports.useState(i||""),{filterList:R}=A(),f=t.exports.useRef(!1),{Subject:u,Industry:d,Category:m}=R,w=P.use();z(()=>{i&&a.length>0&&(a.some(r=>+r.id==+i)?c(!0):(c(!1),v(""),o({to:"/creativeCase"})))},[i,o,a]);const E=t.exports.useCallback(()=>{const e=u==="fomo";K({pageRequest:{pageNo:l,pageSize:100},fomo:e,industry:d,industryCategory:m,filterArray:[[e?"":u]]}).then(s=>{var L;return p(l===1?(s==null?void 0:s.list)||[]:T=>[...T,...(s==null?void 0:s.list)||[]]),((L=s==null?void 0:s.list)==null?void 0:L.length)===0?f.current=!0:f.current=!1,s}).catch(()=>{})},[m,d,u,l]);t.exports.useEffect(()=>{document.documentElement.scrollTo(0,0),y(!0),p([]),S(1)},[u,d,m]),t.exports.useEffect(()=>{E()},[l,E]);const b=t.exports.useCallback(e=>{const{id:r}=e;c(!0),v(r),F({id:r,code:"SAMPLE"}).then(s=>s).catch(()=>{}),o({to:`/creativeCase?caseId=${r}`})},[o]),M=t.exports.useCallback(()=>{c(!1),o({to:"/creativeCase"})},[o]);t.exports.useEffect(()=>{const e=r=>{r||y(!1)};return k.on("requestStart",e),()=>k.off("requestStart",e)},[]);const N=t.exports.useCallback(()=>C?n(Q,{visible:!0,imgStyle:{width:40,height:40}}):(a==null?void 0:a.length)>0?a.map(e=>n(H,{showDrawer:b,path:x,dataSource:e,name:w.Button.Case},e.id)):n(X,{children:n(J,{})}),[w.Button.Case,a,x,b,C]);return O(()=>{f.current||S(e=>e+1)}),I(U,{children:[N(),n(G,{visible:j,onClose:M,caseID:q})]})}const Z=h(g)`
  width: 100%;
  // height: calc(100vh - 254px);
  overflow: hidden;
  margin-top: 10px;
  padding: 0 60px;
  // background-color: #e6e6e6;
`;function ue(){return I(Z,{children:[n(Y,{}),n(V,{})]})}export{ue as default};
